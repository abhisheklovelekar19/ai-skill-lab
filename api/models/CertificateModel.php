<?php
/**
 * CertificateModel
 * 
 * Handles all database operations for certificates
 * Responsibilities:
 * - Generate unique certificate codes
 * - Insert certificate records
 * - Retrieve certificates by code
 * - Validate certificate existence
 */

require_once __DIR__ . '/Database.php';

class CertificateModel {
    
    private $db;
    private $table = 'certificates';
    
    public function __construct() {
        $database = Database::getInstance();
        $this->db = $database->getConnection();
    }
    
    /**
     * Generate unique certificate code
     * Format: ASL-{COURSE_CODE}-{YEAR}-{SEQUENTIAL_NUMBER}
     * Example: ASL-AUTO-2026-00001
     * 
     * @param string $course Course identifier (ai-basics, prompts, automation)
     * @return string Unique certificate code
     */
    public function generateCertificateCode($course) {
        // Map course names to codes
        $courseCodes = [
            'ai-basics' => 'BASICS',
            'prompts' => 'PROMPT',
            'automation' => 'AUTO'
        ];
        
        $courseCode = $courseCodes[$course] ?? 'COURSE';
        $year = date('Y');
        
        // Get the next sequential number for this course and year
        $sql = "SELECT COUNT(*) as count 
                FROM {$this->table} 
                WHERE course = :course 
                AND YEAR(created_at) = :year";
        
        $stmt = $this->db->prepare($sql);
        $stmt->execute([
            ':course' => $course,
            ':year' => $year
        ]);
        
        $result = $stmt->fetch();
        $nextNumber = $result['count'] + 1;
        
        // Format: ASL-AUTO-2026-00001
        $certificateCode = sprintf('ASL-%s-%s-%05d', $courseCode, $year, $nextNumber);
        
        return $certificateCode;
    }
    
    /**
     * Create a new certificate record
     * 
     * @param array $data Certificate data (user_name, course)
     * @return array Certificate record with code
     * @throws Exception If insertion fails
     */
    public function createCertificate($data) {
        try {
            // Generate unique certificate code
            $certificateCode = $this->generateCertificateCode($data['course']);
            
            // Check if certificate already exists (prevent duplicates within 24 hours)
            if (isset($data['user_name']) && isset($data['course'])) {
                $checkSql = "SELECT id FROM {$this->table} 
                            WHERE user_name = :user_name 
                            AND course = :course 
                            AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)";
                
                $checkStmt = $this->db->prepare($checkSql);
                $checkStmt->execute([
                    ':user_name' => $data['user_name'],
                    ':course' => $data['course']
                ]);
                
                $existing = $checkStmt->fetch();
                
                // If duplicate found within 24 hours, return existing code
                if ($existing) {
                    $getSql = "SELECT certificate_code, user_name, course, created_at 
                              FROM {$this->table} 
                              WHERE id = :id";
                    $getStmt = $this->db->prepare($getSql);
                    $getStmt->execute([':id' => $existing['id']]);
                    return $getStmt->fetch();
                }
            }
            
            // Insert new certificate
            $sql = "INSERT INTO {$this->table} 
                    (certificate_code, user_name, course, created_at) 
                    VALUES 
                    (:certificate_code, :user_name, :course, NOW())";
            
            $stmt = $this->db->prepare($sql);
            $result = $stmt->execute([
                ':certificate_code' => $certificateCode,
                ':user_name' => $data['user_name'],
                ':course' => $data['course']
            ]);
            
            if (!$result) {
                throw new Exception('Failed to create certificate');
            }
            
            // Return the created certificate
            return [
                'certificate_code' => $certificateCode,
                'user_name' => $data['user_name'],
                'course' => $data['course'],
                'created_at' => date('Y-m-d H:i:s')
            ];
            
        } catch (PDOException $e) {
            error_log('Database error in createCertificate: ' . $e->getMessage());
            throw new Exception('Database error occurred');
        }
    }
    
    /**
     * Retrieve certificate by code
     * 
     * @param string $code Certificate code
     * @return array|null Certificate data or null if not found
     */
    public function getCertificateByCode($code) {
        try {
            $sql = "SELECT certificate_code, user_name, course, created_at 
                    FROM {$this->table} 
                    WHERE certificate_code = :code";
            
            $stmt = $this->db->prepare($sql);
            $stmt->execute([':code' => $code]);
            
            $result = $stmt->fetch();
            return $result ?: null;
            
        } catch (PDOException $e) {
            error_log('Database error in getCertificateByCode: ' . $e->getMessage());
            throw new Exception('Database error occurred');
        }
    }
    
    /**
     * Verify if a certificate exists and is valid
     * 
     * @param string $code Certificate code
     * @return bool True if certificate exists and is valid
     */
    public function verifyCertificate($code) {
        $certificate = $this->getCertificateByCode($code);
        return $certificate !== null;
    }
    
    /**
     * Get course display name from course code
     * 
     * @param string $course Course code (ai-basics, prompts, automation)
     * @return string Course display name
     */
    public function getCourseName($course) {
        $courseNames = [
            'ai-basics' => 'AI Fundamentals',
            'prompts' => 'Prompt Engineering',
            'automation' => 'AI-Powered Automation'
        ];
        
        return $courseNames[$course] ?? 'Unknown Course';
    }
}
