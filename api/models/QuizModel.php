<?php
/**
 * QuizModel
 * 
 * Handles all database operations for quiz results
 * Responsibilities:
 * - Insert quiz result records
 * - Update quiz results with certificate codes
 */

require_once __DIR__ . '/Database.php';

class QuizModel {
    
    private $db;
    private $table = 'quiz_results';
    
    public function __construct() {
        $database = Database::getInstance();
        $this->db = $database->getConnection();
    }
    
    /**
     * Save quiz result to database
     * 
     * @param string $user_name User's name
     * @param string $course Course identifier (ai-basics, prompts, automation)
     * @param int $score Quiz score (0-10)
     * @param bool $passed Whether user passed
     * @param string|null $certificate_code Certificate code (optional)
     * @return int|false Inserted ID or false on failure
     */
    public function saveQuizResult($user_name, $course, $score, $passed, $certificate_code = null) {
        try {
            $sql = "INSERT INTO {$this->table} 
                    (user_name, course, score, passed, certificate_code) 
                    VALUES 
                    (:user_name, :course, :score, :passed, :certificate_code)";
            
            $stmt = $this->db->prepare($sql);
            
            $result = $stmt->execute([
                ':user_name' => $user_name,
                ':course' => $course,
                ':score' => $score,
                ':passed' => $passed ? 1 : 0,
                ':certificate_code' => $certificate_code
            ]);
            
            if ($result) {
                return $this->db->lastInsertId();
            }
            
            return false;
            
        } catch (PDOException $e) {
            error_log("QuizModel saveQuizResult Error: " . $e->getMessage());
            return false;
        }
    }
    
    /**
     * Update quiz result with certificate code
     * 
     * @param int $id Quiz result ID
     * @param string $certificate_code Certificate code
     * @return bool Success status
     */
    public function updateCertificateCode($id, $certificate_code) {
        try {
            $sql = "UPDATE {$this->table} 
                    SET certificate_code = :certificate_code 
                    WHERE id = :id";
            
            $stmt = $this->db->prepare($sql);
            
            return $stmt->execute([
                ':certificate_code' => $certificate_code,
                ':id' => $id
            ]);
            
        } catch (PDOException $e) {
            error_log("QuizModel updateCertificateCode Error: " . $e->getMessage());
            return false;
        }
    }
}
