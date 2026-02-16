# Testing the Certificate Generation System

This guide will help you test the certificate generation and verification endpoints.

## Prerequisites

1. **Database Setup**: Ensure you have the `certificates` table in your MySQL database:

```sql
CREATE TABLE IF NOT EXISTS certificates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    certificate_code VARCHAR(50) UNIQUE NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    course VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    INDEX idx_certificate_code (certificate_code),
    INDEX idx_course_created (course, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

2. **Update Database Credentials**: Edit `/api/config/config.php` with your actual GoDaddy MySQL credentials.

## Test 1: Health Check

First, verify your backend is working:

```bash
curl https://ai-skill-lab.com/api/endpoints/health.php
```

Expected response:
```json
{
  "status": "ok",
  "message": "Database connection successful",
  "timestamp": "2026-02-16T10:30:00Z"
}
```

## Test 2: Generate Certificate (Using cURL)

Generate a test certificate:

```bash
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Abhishek",
    "course": "automation"
  }'
```

Expected response:
```json
{
  "success": true,
  "certificate_code": "ASL-AUTO-2026-00001",
  "user_name": "Abhishek",
  "course": "automation",
  "course_name": "AI-Powered Automation",
  "created_at": "2026-02-16 10:30:00",
  "verification_url": "https://ai-skill-lab.com/verify.php?code=ASL-AUTO-2026-00001"
}
```

## Test 3: Generate Certificate (Using JavaScript Fetch)

Test from browser console or frontend:

```javascript
fetch('https://ai-skill-lab.com/api/endpoints/generate_certificate.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_name: 'Abhishek',
    course: 'automation'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Test 4: Verify Valid Certificate

Visit the verification URL in your browser:

```
https://ai-skill-lab.com/verify.php?code=ASL-AUTO-2026-00001
```

You should see:
- ✓ Valid Certificate
- Green status card
- Certificate details (code, recipient, course, date)

## Test 5: Verify Invalid Certificate

Visit with a non-existent code:

```
https://ai-skill-lab.com/verify.php?code=INVALID-CODE-12345
```

You should see:
- ✕ Invalid Certificate
- Red status card
- "Not Found" status

## Test 6: Test All Three Courses

Generate certificates for all courses:

**AI Basics:**
```bash
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "Test User", "course": "ai-basics"}'
```

**Prompt Engineering:**
```bash
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "Test User", "course": "prompts"}'
```

**AI Automation:**
```bash
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "Test User", "course": "automation"}'
```

Expected certificate codes:
- `ASL-BASICS-2026-00001`
- `ASL-PROMPT-2026-00001`
- `ASL-AUTO-2026-00002` (if you already generated one automation cert)

## Test 7: Error Handling

**Missing fields:**
```bash
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "Test"}'
```

Expected:
```json
{
  "success": false,
  "error": "Missing required fields",
  "missing_fields": ["course"]
}
```

**Invalid course:**
```bash
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "Test", "course": "invalid-course"}'
```

Expected:
```json
{
  "success": false,
  "error": "Invalid course. Must be one of: ai-basics, prompts, automation"
}
```

**Wrong HTTP method:**
```bash
curl -X GET https://ai-skill-lab.com/api/endpoints/generate_certificate.php
```

Expected:
```json
{
  "success": false,
  "error": "Method not allowed. Use POST."
}
```

## Test 8: Duplicate Prevention

Try generating the same certificate twice within 24 hours:

```bash
# First request
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "John Doe", "course": "automation"}'

# Second request (within 24 hours)
curl -X POST https://ai-skill-lab.com/api/endpoints/generate_certificate.php \
  -H "Content-Type: application/json" \
  -d '{"user_name": "John Doe", "course": "automation"}'
```

Both should return the same certificate code (duplicate prevention working).

## Verification Checklist

- [ ] Health endpoint returns "ok" status
- [ ] Certificate generation creates unique codes
- [ ] Verification page shows valid certificates
- [ ] Verification page shows invalid for non-existent codes
- [ ] All three courses generate correct certificate codes
- [ ] Error handling works for missing/invalid input
- [ ] Duplicate prevention works (same user + course within 24h)
- [ ] Database records are created correctly

## Troubleshooting

**Database connection fails:**
- Check `/api/config/config.php` credentials
- Verify MySQL user has proper permissions
- Ensure database exists

**CORS errors in browser:**
- Check that BasePresenter sets CORS headers correctly
- Verify your domain matches the request origin

**404 errors:**
- Ensure files are uploaded to correct paths on GoDaddy
- Check that `/api` and `/public_html` folders exist
- Verify file permissions (644 for PHP files)

**Certificate codes not unique:**
- Check database table creation
- Ensure UNIQUE constraint on certificate_code column
- Verify AUTO_INCREMENT is working on id column
