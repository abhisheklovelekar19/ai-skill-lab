<?php
/**
 * Generate Certificate Endpoint
 * 
 * Creates a new certificate record in the database and returns the certificate code
 * 
 * URL: /api/endpoints/generate_certificate.php
 * Method: POST
 * Content-Type: application/json
 * 
 * Request Body:
 * {
 *   "user_name": "Abhishek",
 *   "course": "automation"
 * }
 * 
 * Valid courses: ai-basics, prompts, automation
 * 
 * Success Response (201):
 * {
 *   "success": true,
 *   "certificate_code": "ASL-AUTO-2026-00001",
 *   "user_name": "Abhishek",
 *   "course": "automation",
 *   "course_name": "AI-Powered Automation",
 *   "created_at": "2026-02-16 10:30:00",
 *   "verification_url": "https://ai-skill-lab.com/verify.php?code=ASL-AUTO-2026-00001"
 * }
 * 
 * Error Response (400):
 * {
 *   "success": false,
 *   "error": "Missing required fields",
 *   "missing_fields": ["user_name"]
 * }
 * 
 * Error Response (500):
 * {
 *   "success": false,
 *   "error": "Failed to generate certificate: Database error occurred"
 * }
 */

require_once __DIR__ . '/../presenters/CertificatePresenter.php';

// Create presenter instance and handle the request
$certificatePresenter = new CertificatePresenter();
$certificatePresenter->generateCertificate();
