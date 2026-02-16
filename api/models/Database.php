<?php
/**
 * Database Model (Singleton Pattern)
 * 
 * Provides a single PDO connection instance for the application
 * Uses PDO for secure database operations with prepared statements
 */

class Database {
    private static $instance = null;
    private $connection;
    
    /**
     * Private constructor to prevent direct instantiation
     */
    private function __construct() {
        $config = require __DIR__ . '/../config/config.php';
        
        try {
            $dsn = "mysql:host={$config['host']};dbname={$config['database']};charset={$config['charset']}";
            
            $this->connection = new PDO(
                $dsn,
                $config['username'],
                $config['password'],
                $config['options']
            );
            
        } catch (PDOException $e) {
            // Log error in production, throw exception for now
            error_log("Database Connection Error: " . $e->getMessage());
            throw new Exception("Database connection failed. Please try again later.");
        }
    }
    
    /**
     * Prevent cloning of the instance
     */
    private function __clone() {}
    
    /**
     * Prevent unserializing of the instance
     */
    public function __wakeup() {
        throw new Exception("Cannot unserialize singleton");
    }
    
    /**
     * Get the singleton instance
     * 
     * @return Database
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Get the PDO connection
     * 
     * @return PDO
     */
    public function getConnection() {
        return $this->connection;
    }
    
    /**
     * Test database connectivity
     * 
     * @return bool
     */
    public function testConnection() {
        try {
            $this->connection->query("SELECT 1");
            return true;
        } catch (PDOException $e) {
            error_log("Database Connection Test Failed: " . $e->getMessage());
            return false;
        }
    }
}
