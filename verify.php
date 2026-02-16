<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Certificate - AI Skill Lab</title>
    <meta name="description" content="Verify the authenticity of AI Skill Lab certificates">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 600px;
            width: 100%;
            padding: 40px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo {
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #666;
            font-size: 16px;
        }

        .status-card {
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 20px;
            text-align: center;
        }

        .status-card.valid {
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            color: white;
        }

        .status-card.invalid {
            background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
            color: white;
        }

        .status-icon {
            font-size: 64px;
            margin-bottom: 15px;
        }

        .status-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .status-message {
            font-size: 16px;
            opacity: 0.95;
        }

        .certificate-details {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 25px;
            margin-top: 20px;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-label {
            color: #666;
            font-weight: 600;
            font-size: 14px;
        }

        .detail-value {
            color: #333;
            font-weight: 500;
            font-size: 14px;
            text-align: right;
        }

        .certificate-code {
            font-family: 'Courier New', monospace;
            background: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 13px;
        }

        .actions {
            margin-top: 30px;
            text-align: center;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 5px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
            background: #f8f9fa;
            color: #333;
            border: 2px solid #e0e0e0;
        }

        .btn-secondary:hover {
            background: #e9ecef;
        }

        .error-message {
            color: #dc3545;
            text-align: center;
            padding: 20px;
            font-size: 16px;
        }

        @media (max-width: 600px) {
            .container {
                padding: 30px 20px;
            }

            .status-title {
                font-size: 24px;
            }

            .detail-row {
                flex-direction: column;
                gap: 5px;
            }

            .detail-value {
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">AI Skill Lab</div>
            <div class="subtitle">Certificate Verification</div>
        </div>

        <?php
        // Include the CertificatePresenter
        require_once __DIR__ . '/api/presenters/CertificatePresenter.php';

        // Get certificate code from URL parameter
        $code = isset($_GET['code']) ? htmlspecialchars(trim($_GET['code'])) : null;

        if (!$code) {
            echo '<div class="error-message">
                    <p>⚠️ No certificate code provided.</p>
                    <p style="margin-top: 10px; font-size: 14px; color: #666;">
                        Please provide a certificate code in the URL (e.g., verify.php?code=ASL-AUTO-2026-00001)
                    </p>
                  </div>';
        } else {
            try {
                // Create certificate model instance
                $certificateModel = new CertificateModel();
                $certificate = $certificateModel->getCertificateByCode($code);

                if ($certificate) {
                    // Valid certificate
                    $courseName = $certificateModel->getCourseName($certificate['course']);
                    $createdDate = date('F j, Y', strtotime($certificate['created_at']));
                    
                    echo '<div class="status-card valid">
                            <div class="status-icon">✓</div>
                            <div class="status-title">Valid Certificate</div>
                            <div class="status-message">This certificate is authentic and verified</div>
                          </div>

                          <div class="certificate-details">
                            <div class="detail-row">
                                <span class="detail-label">Certificate Code</span>
                                <span class="detail-value">
                                    <span class="certificate-code">' . htmlspecialchars($certificate['certificate_code']) . '</span>
                                </span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Recipient</span>
                                <span class="detail-value">' . htmlspecialchars($certificate['user_name']) . '</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Course</span>
                                <span class="detail-value">' . htmlspecialchars($courseName) . '</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Issued On</span>
                                <span class="detail-value">' . $createdDate . '</span>
                            </div>
                          </div>

                          <div class="actions">
                            <a href="/" class="btn btn-primary">View All Courses</a>
                            <a href="/courses/' . htmlspecialchars($certificate['course']) . '" class="btn btn-secondary">View This Course</a>
                          </div>';
                } else {
                    // Invalid certificate
                    echo '<div class="status-card invalid">
                            <div class="status-icon">✕</div>
                            <div class="status-title">Invalid Certificate</div>
                            <div class="status-message">This certificate code is not valid or does not exist in our records</div>
                          </div>

                          <div class="certificate-details">
                            <div class="detail-row">
                                <span class="detail-label">Certificate Code</span>
                                <span class="detail-value">
                                    <span class="certificate-code">' . htmlspecialchars($code) . '</span>
                                </span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Status</span>
                                <span class="detail-value">Not Found</span>
                            </div>
                          </div>

                          <div class="actions">
                            <a href="/" class="btn btn-primary">Go to Homepage</a>
                            <a href="/courses" class="btn btn-secondary">Browse Courses</a>
                          </div>';
                }
            } catch (Exception $e) {
                echo '<div class="error-message">
                        <p>⚠️ An error occurred while verifying the certificate.</p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">
                            Please try again later or contact support if the problem persists.
                        </p>
                      </div>
                      <div class="actions">
                        <a href="/" class="btn btn-primary">Go to Homepage</a>
                      </div>';
                
                // Log the error for debugging
                error_log('Certificate verification error: ' . $e->getMessage());
            }
        }
        ?>
    </div>
</body>
</html>
