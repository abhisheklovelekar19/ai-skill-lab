<?php
/**
 * CertificatePresenter
 * 
 * Handles certificate-related business logic and API responses
 * Extends BasePresenter for common functionality
 * 
 * Responsibilities:
 * - Validate certificate creation requests
 * - Process certificate generation
 * - Return formatted JSON responses
 * - Handle errors gracefully
 */

require_once __DIR__ . '/BasePresenter.php';
require_once __DIR__ . '/../models/CertificateModel.php';

class CertificatePresenter extends BasePresenter {
    
    private $certificateModel;
    
    public function __construct() {
        parent::__construct();
        $this->certificateModel = new CertificateModel();
    }
    
    /**
     * Generate a new certificate
     * 
     * Expected POST data:
     * {
     *   "user_name": "Abhishek",
     *   "course": "automation"
     * }
     * 
     * Response:
     * {
     *   "success": true,
     *   "certificate_code": "ASL-AUTO-2026-00001",
     *   "user_name": "Abhishek",
     *   "course": "automation",
     *   "course_name": "AI-Powered Automation",
     *   "created_at": "2026-02-16 10:30:00"
     * }
     */
    public function generateCertificate() {
        // Verify POST request
        if ($this->getRequestMethod() !== 'POST') {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Method not allowed. Use POST.'
            ], 405);
        }
        
        // Get and parse request body
        $requestData = $this->getJsonBody();
        
        if (!$requestData) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Invalid JSON in request body'
            ], 400);
        }
        
        // Validate required fields
        $requiredFields = ['user_name', 'course'];
        $missingFields = $this->validateRequiredFields($requestData, $requiredFields);
        
        if (!empty($missingFields)) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Missing required fields',
                'missing_fields' => $missingFields
            ], 400);
        }
        
        // Sanitize inputs
        $userName = $this->sanitizeInput($requestData['user_name']);
        $course = $this->sanitizeInput($requestData['course']);
        
        // Validate user name
        if (empty($userName) || strlen($userName) < 2) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'User name must be at least 2 characters long'
            ], 400);
        }
        
        if (strlen($userName) > 100) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'User name must be less than 100 characters'
            ], 400);
        }
        
        // Validate course
        $validCourses = ['ai-basics', 'prompts', 'automation'];
        if (!in_array($course, $validCourses)) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Invalid course. Must be one of: ' . implode(', ', $validCourses)
            ], 400);
        }
        
        try {
            // Create certificate
            $certificate = $this->certificateModel->createCertificate([
                'user_name' => $userName,
                'course' => $course
            ]);
            
            // Return success response
            $this->jsonResponse([
                'success' => true,
                'certificate_code' => $certificate['certificate_code'],
                'user_name' => $certificate['user_name'],
                'course' => $certificate['course'],
                'course_name' => $this->certificateModel->getCourseName($certificate['course']),
                'created_at' => $certificate['created_at'],
                'verification_url' => $this->getVerificationUrl($certificate['certificate_code'])
            ], 201);
            
        } catch (Exception $e) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Failed to generate certificate: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Verify a certificate by code
     * 
     * Expected GET parameter: code
     * 
     * Response:
     * {
     *   "success": true,
     *   "valid": true,
     *   "certificate": {
     *     "certificate_code": "ASL-AUTO-2026-00001",
     *     "user_name": "Abhishek",
     *     "course": "automation",
     *     "course_name": "AI-Powered Automation",
     *     "created_at": "2026-02-16 10:30:00"
     *   }
     * }
     */
    public function verifyCertificate() {
        // Get certificate code from query parameter
        $code = isset($_GET['code']) ? $this->sanitizeInput($_GET['code']) : null;
        
        if (!$code) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Certificate code is required'
            ], 400);
        }
        
        try {
            // Retrieve certificate
            $certificate = $this->certificateModel->getCertificateByCode($code);
            
            if ($certificate) {
                $this->jsonResponse([
                    'success' => true,
                    'valid' => true,
                    'certificate' => [
                        'certificate_code' => $certificate['certificate_code'],
                        'user_name' => $certificate['user_name'],
                        'course' => $certificate['course'],
                        'course_name' => $this->certificateModel->getCourseName($certificate['course']),
                        'created_at' => $certificate['created_at']
                    ]
                ], 200);
            } else {
                $this->jsonResponse([
                    'success' => true,
                    'valid' => false,
                    'message' => 'Certificate not found or invalid'
                ], 404);
            }
            
        } catch (Exception $e) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Failed to verify certificate: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Get verification URL for a certificate
     * 
     * @param string $code Certificate code
     * @return string Verification URL
     */
    private function getVerificationUrl($code) {
        // Get the base URL from the request
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
        
        // Remove /api/endpoints from the path to get the base URL
        $baseUrl = $protocol . '://' . $host;
        
        return $baseUrl . '/verify.php?code=' . urlencode($code);
    }
}
