# Static Export Notes

## Current Configuration

This project is configured for **static export** to deploy on GoDaddy shared hosting.

### Configuration
- `output: "export"` in next.config.ts
- Image optimization disabled
- No API routes (not supported on static hosting)
- Client-side routing only

### Mock Payment Flow
The pricing page uses a client-side redirect for mock checkout:
- User clicks "Get Started" → 1 second delay → Redirects to `/success`
- No real payment processing
- Data passed via URL parameters

### To Upgrade (When moving to VPS):
1. Remove `output: "export"` from next.config.ts
2. Re-enable image optimization
3. Add real payment gateway (Stripe/Razorpay)
4. Create API routes for checkout
5. Deploy to Node.js-enabled hosting

See DEPLOYMENT.md for full details.
