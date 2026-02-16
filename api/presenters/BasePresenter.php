<?php
/**
 * Base Presenter (Presenter Layer)
 * 
 * Provides common functionality for all presenters
 * Handles database connection and JSON response formatting
 * Will be extended by QuizPresenter, CertificatePresenter, etc.
 */

require_once __DIR__ . '/../models/Database.php';

class BasePresenter {
    protected $db;
    
    /**
     * Constructor - initializes database connection
     */
    public function __construct() {
        try {
            $database = Database::getInstance();
            $this->db = $database->getConnection();
        } catch (Exception $e) {
            $this->jsonResponse([
                'error' => 'Database initialization failed',
                'message' => $e->getMessage()
            ], 500);
            exit;
        }
    }
    
    /**
     * Send JSON response with appropriate headers
     * 
     * @param mixed $data The data to send as JSON
     * @param int $statusCode HTTP status code (default: 200)
     */
    protected function jsonResponse($data, $statusCode = 200) {
        // Set headers for JSON response
        header('Content-Type: application/json; charset=utf-8');
        header('Access-Control-Allow-Origin: *'); // Adjust in production
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        
        // Set HTTP response code
        http_response_code($statusCode);
        
        // Output JSON
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }
    
    /**
     * Validate required fields in request data
     * 
     * @param array $data The request data
     * @param array $requiredFields Array of required field names
     * @return array|null Returns array of missing fields or null if all present
     */
    protected function validateRequiredFields($data, $requiredFields) {
        $missingFields = [];
        
        foreach ($requiredFields as $field) {
            if (!isset($data[$field]) || empty(trim($data[$field]))) {
                $missingFields[] = $field;
            }
        }
        
        return empty($missingFields) ? null : $missingFields;
    }
    
    /**
     * Sanitize input string
     * 
     * @param string $input The input to sanitize
     * @return string Sanitized input
     */
    protected function sanitizeInput($input) {
        return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
    }
    
    /**
     * Get request method
     * 
     * @return string The HTTP request method
     */
    protected function getRequestMethod() {
        return $_SERVER['REQUEST_METHOD'] ?? 'GET';
    }
    
    /**
     * Get JSON request body
     * 
     * @return array|null Parsed JSON data or null if invalid
     */
    protected function getJsonBody() {
        $body = file_get_contents('php://input');
        
        if (empty($body)) {
            return null;
        }
        
        $data = json_decode($body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            return null;
        }
        
        return $data;
    }
}
