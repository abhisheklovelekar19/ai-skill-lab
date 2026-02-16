<?php
/**
 * Database Configuration
 * 
 * IMPORTANT: Update these values with your actual GoDaddy MySQL credentials
 * You can find these in your GoDaddy hosting panel under "MySQL Databases"
 */

return [
    'host' => 'localhost',  // Usually 'localhost' for GoDaddy shared hosting
    'database' => 'aiskilllab_db',  // Replace with your actual database name
    'username' => 'aiskilllab_user',  // Replace with your actual database username
    'password' => 'your_database_password',  // Replace with your actual database password
    'charset' => 'utf8mb4',
    'options' => [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
];
