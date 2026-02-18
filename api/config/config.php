<?php
/**
 * Database Configuration
 * 
 * IMPORTANT: Update these values with your actual GoDaddy MySQL credentials
 * You can find these in your GoDaddy hosting panel under "MySQL Databases"
 */

return [
    'host' => 'localhost',
    'database' => 'aiskilllab_db',
    'username' => 'root',  // Local development uses root
    'password' => '',  // No password for local root user
    'charset' => 'utf8mb4',
    'options' => [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
];
