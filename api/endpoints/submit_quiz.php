<?php
/**
 * Submit Quiz Endpoint
 * 
 * Accepts quiz submissions and generates certificates for passing scores
 * 
 * URL: /api/endpoints/submit_quiz.php
 * Method: POST
 * Content-Type: application/json
 * 
 * Request Body:
 * {
 *   "user_name": "Abhishek",
 *   "course": "automation",
 *   "score": 8
 * }
 * 
 * Valid courses: ai-basics, prompts, automation
 * Score range: 0-10 (passing score: 6+)
 * 
 * Success Response - Passed:
 * {
 *   "success": true,
 *   "passed": true,
 *   "certificate_code": "ASL-AUTO-2026-00001"
 * }
 * 
 * Success Response - Failed:
 * {
 *   "success": true,
 *   "passed": false
 * }
 * 
 * Error Response:
 * {
 *   "success": false,
 *   "error": "error message"
 * }
 */

// Set error reporting for production
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Load presenter
require_once __DIR__ . '/../presenters/QuizPresenter.php';

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(204);
    exit;
}

// Initialize presenter and handle request
try {
    $presenter = new QuizPresenter();
    $presenter->submit();
} catch (Exception $e) {
    error_log("Submit Quiz Endpoint Error: " . $e->getMessage());
    
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(500);
    
    echo json_encode([
        'success' => false,
        'error' => 'Server error'
    ]);
}
