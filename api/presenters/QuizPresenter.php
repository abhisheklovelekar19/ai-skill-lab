<?php
/**
 * QuizPresenter
 * 
 * Handles quiz submission business logic and API responses
 * Extends BasePresenter for common functionality
 * 
 * Responsibilities:
 * - Validate quiz submission requests
 * - Save quiz results using QuizModel
 * - Generate certificates for passing scores (6+)
 * - Return formatted JSON responses
 */

require_once __DIR__ . '/BasePresenter.php';
require_once __DIR__ . '/../models/QuizModel.php';
require_once __DIR__ . '/../models/CertificateModel.php';

class QuizPresenter extends BasePresenter {
    
    private $quizModel;
    private $certificateModel;
    private $passingScore = 6; // Minimum score to pass (6 out of 10)
    
    public function __construct() {
        parent::__construct();
        $this->quizModel = new QuizModel();
        $this->certificateModel = new CertificateModel();
    }
    
    /**
     * Submit quiz results and generate certificate if passed
     * 
     * Expected POST data:
     * {
     *   "user_name": "Abhishek",
     *   "course": "automation",
     *   "score": 8
     * }
     * 
     * Success Response (passed):
     * {
     *   "success": true,
     *   "passed": true,
     *   "certificate_code": "ASL-AUTO-2026-00001"
     * }
     * 
     * Success Response (failed):
     * {
     *   "success": true,
     *   "passed": false
     * }
     */
    public function submit() {
        // Verify POST request
        if ($this->getRequestMethod() !== 'POST') {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Method not allowed'
            ], 405);
        }
        
        // Get and validate JSON body
        $data = $this->getJsonBody();
        
        if (!$data) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Invalid request body'
            ], 400);
        }
        
        // Validate required fields
        $requiredFields = ['user_name', 'course', 'score'];
        $missingFields = $this->validateRequiredFields($data, $requiredFields);
        
        if ($missingFields) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Missing required fields: ' . implode(', ', $missingFields)
            ], 400);
        }
        
        // Sanitize inputs
        $userName = $this->sanitizeInput($data['user_name']);
        $course = $this->sanitizeInput($data['course']);
        $score = intval($data['score']);
        
        // Validate course
        $validCourses = ['ai-basics', 'prompts', 'automation'];
        if (!in_array($course, $validCourses)) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Invalid course'
            ], 400);
        }
        
        // Validate score (0-10)
        if ($score < 0 || $score > 10) {
            $this->jsonResponse([
                'success' => false,
                'error' => 'Score must be between 0 and 10'
            ], 400);
        }
        
        // Determine if user passed
        $passed = $score >= $this->passingScore;
        
        try {
            // Step 1: Save quiz result WITHOUT certificate_code
            $quizId = $this->quizModel->saveQuizResult($userName, $course, $score, $passed, null);
            
            if (!$quizId) {
                $this->jsonResponse([
                    'success' => false,
                    'error' => 'Failed to save quiz result'
                ], 500);
            }
            
            // Step 2: If passed, generate certificate
            $certificateCode = null;
            if ($passed) {
                try {
                    $certificateData = [
                        'user_name' => $userName,
                        'course' => $course
                    ];
                    
                    $certificate = $this->certificateModel->createCertificate($certificateData);
                    $certificateCode = $certificate['certificate_code'];
                    
                    // Step 3: Update quiz result with certificate code
                    $this->quizModel->updateCertificateCode($quizId, $certificateCode);
                    
                } catch (Exception $e) {
                    error_log("Certificate generation failed: " . $e->getMessage());
                    // Continue without certificate code
                }
            }
            
            // Build response
            $response = [
                'success' => true,
                'passed' => $passed
            ];
            
            if ($passed && $certificateCode) {
                $response['certificate_code'] = $certificateCode;
            }
            
            // Return success response
            $this->jsonResponse($response, 200);
            
        } catch (Exception $e) {
            error_log("Quiz submission error: " . $e->getMessage());
            
            $this->jsonResponse([
                'success' => false,
                'error' => 'Submission failed'
            ], 500);
        }
    }
}
