-- Create quiz_results table
-- This table stores quiz submission results and links to certificates

CREATE TABLE IF NOT EXISTS quiz_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  course VARCHAR(100) NOT NULL,
  score INT NOT NULL,
  passed BOOLEAN NOT NULL,
  certificate_code VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_course (user_name, course),
  INDEX idx_certificate_code (certificate_code)
);

-- Verify table structure
DESCRIBE quiz_results;

-- Optional: Show sample data structure
-- SELECT * FROM quiz_results LIMIT 5;
