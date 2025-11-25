# BANKOFPI - Pi Payment Troubleshooting Guide

## Quick Fix Checklist

### 1. Environment Setup
\`\`\`bash
# Add this to your .env file or Vercel environment variables:
PI_API_KEY=your_api_key_from_pi_developer_portal
\`\`\`

### 2. Get Your API Key
1. Go to https://develop.pi
2. Login with your Pi account
3. Create a new app or select existing app
4. Copy your API Key
5. Add it to your environment variables

### 3. Test the Integration
- Open https://bankofpiefbfbdad3490.pinet.com/test-payment in Pi Browser
- Click "Test 0.01 π Payment"
- Watch the logs to see what happens

## Common Issues

### Issue: "Pi SDK not found"
**Solution:** You must open the app in Pi Browser, not Chrome/Safari
- Download Pi Browser from the Pi Network app
- Open your app URL in Pi Browser

### Issue: "Payment dialog doesn't appear"
**Possible causes:**
1. PI_API_KEY not set correctly
2. Not using HTTPS
3. Domain not registered in Pi Developer Portal
4. Not opened in Pi Browser

**Solution:**
1. Check environment variables are deployed
2. Verify your domain is added to your Pi app in developer portal
3. Make sure App Type is set to "Web App"
4. URL in developer portal matches your deployment URL exactly

### Issue: "Server approval failed"
**Possible causes:**
1. Backend API not deployed
2. PI_API_KEY missing in production
3. CORS issues

**Solution:**
\`\`\`bash
# Make sure these files are deployed:
- app/api/payments/approve/route.ts
- app/api/payments/complete/route.ts
- lib/pi-network.ts
\`\`\`

### Issue: "Cannot read property 'Pi' of undefined"
**Solution:** The Pi SDK script must be in layout.tsx:
\`\`\`tsx
<Script src="https://sdk.minepi.com/pi-sdk.js" strategy="beforeInteractive" />
\`\`\`

## Testing Flow

### Step 1: Check SDK Available
Open browser console and type:
\`\`\`javascript
window.Pi
\`\`\`
Should return an object, not undefined.

### Step 2: Test Authentication
\`\`\`javascript
window.Pi.init({ version: "2.0" })
window.Pi.authenticate(["username", "payments"], () => {})
\`\`\`
Should show Pi authentication dialog.

### Step 3: Test Payment
Use the test page at `/test-payment` to see detailed logs.

## Deployment Checklist

- [ ] Downloaded code from v0
- [ ] Added PI_API_KEY to .env
- [ ] Deployed to hosting (Vercel/Netlify/etc)
- [ ] Registered domain in Pi Developer Portal
- [ ] Set App Type to "Web App"
- [ ] Added production URL to Pi app settings
- [ ] Enabled mainnet mode in Pi Developer Portal
- [ ] Tested in Pi Browser on mobile device

## Support

If payments still don't work after checking everything:
1. Check the logs in `/test-payment` page
2. Verify environment variables are in production (not just .env locally)
3. Make sure your Pi app is approved for mainnet
4. Ensure your domain exactly matches what's in Pi Developer Portal

## API Endpoints

Your app needs these endpoints working:
- POST /api/payments/approve - Approves payment on your backend
- POST /api/payments/complete - Completes payment after user approval

Test them directly:
\`\`\`bash
curl -X POST https://bankofpiefbfbdad3490.pinet.com/api/payments/approve \
  -H "Content-Type: application/json" \
  -d '{"paymentId":"test123"}'
\`\`\`

## Next Steps

1. Go to https://bankofpiefbfbdad3490.pinet.com/test-payment
2. Open in Pi Browser
3. Click the test button
4. Read the logs to see where it fails
5. Come back with the specific error message for more help
