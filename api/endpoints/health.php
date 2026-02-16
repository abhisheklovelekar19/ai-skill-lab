<?php
/**
 * Health Check Endpoint
 * 
 * Tests database connectivity and returns system status
 * Use this endpoint to verify the backend is working correctly
 * 
 * URL: /api/endpoints/health.php
 * Method: GET
 * 
 * Success Response:
 * {
 *   "status": "ok",
 *   "message": "Database connection successful",
 *   "timestamp": "2026-02-08T10:30:00Z"
 * }
 * 
 * Error Response:
 * {
 *   "status": "error",
 *   "message": "Database connection failed",
 *   "timestamp": "2026-02-08T10:30:00Z"
 * }
 */

require_once __DIR__ . '/../presenters/BasePresenter.php';

class HealthPresenter extends BasePresenter {
    
    /**
     * Check system health
     */
    public function check() {
        try {
            // Test database connection
            $database = Database::getInstance();
            $isConnected = $database->testConnection();
            
            if ($isConnected) {
                $this->jsonResponse([
                    'status' => 'ok',
                    'message' => 'Database connection successful',
                    'timestamp' => gmdate('Y-m-d\TH:i:s\Z'),
                    'php_version' => PHP_VERSION,
                    'server' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'
                ], 200);
            } else {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'Database connection test failed',
                    'timestamp' => gmdate('Y-m-d\TH:i:s\Z')
                ], 500);
            }
            
        } catch (Exception $e) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Health check failed: ' . $e->getMessage(),
                'timestamp' => gmdate('Y-m-d\TH:i:s\Z')
            ], 500);
        }
    }
}

// Handle the request
$healthPresenter = new HealthPresenter();
$healthPresenter->check();
