# Payment Timeout Fix - Action Required

## Why Payments Are Timing Out

The "Payment Expired" error happens because Pi Network expects your backend to approve payments within **30 seconds**. Here's what's likely wrong:

### Check These Issues (In Order):

#### 1. Missing API Key (Most Common)
\`\`\`bash
# Your PI_API_KEY is missing or incorrect
# Go to: https://develop.pi/apps
# Copy your API Key
# Add it to your hosting environment variables
\`\`\`

#### 2. Wrong API Endpoint
Check your Pi Developer Portal:
- Go to https://develop.pi/apps
- Select your app
- Make sure the **App Domain** matches your deployed URL exactly
- Example: `https://teosegypt.com` or `https://bankofpiefbfbdad3490.pinet.com`

#### 3. Payment Flow Callback URL
Pi Network calls this URL when payment is initiated:
\`\`\`
https://YOUR-DOMAIN.com/api/payments/approve
\`\`\`

Make sure:
- This URL is publicly accessible
- Your hosting platform allows API routes
- CORS is not blocking Pi Network's requests

#### 4. Check Deployment Logs

After deploying, test a payment and immediately check your logs:

**Vercel:**
\`\`\`
Go to Dashboard → Your Project → Logs
Look for "[v0]" messages
\`\`\`

**Netlify:**
\`\`\`
Functions → Your function logs
\`\`\`

**Other platforms:**
Check your hosting platform's logs for the API routes

## Quick Test Checklist

1. Deploy this updated code
2. Add PI_API_KEY environment variable
3. Open your app in Pi Browser (not regular Chrome/Safari)
4. Click "Test Payment" button
5. Check deployment logs immediately
6. Look for these log messages:
   - `[v0] Payment approval request received`
   - `[v0] Processing payment ID: xxx`
   - `[v0] Approving payment with Pi API...`
   - `[v0] Payment approved successfully`

## If Still Failing

The logs will now show exactly where it's failing:
- "PI_API_KEY not set" → Add environment variable
- "Request to Pi API timed out" → Check your internet connection or Pi API status
- "Pi API returned 401" → Wrong API key
- "Pi API returned 404" → Wrong app configuration

## Need More Help?

1. Check logs and note the exact error
2. Verify API key is correct
3. Make sure app domain in Pi Portal matches deployment URL exactly
4. Test in Pi Browser only
\`\`\`

```tsx file="" isHidden
