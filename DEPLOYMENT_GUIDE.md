# BANKOFPI - Complete Deployment Guide

## CRITICAL: How v0 Works with GitHub

### Workflow:
1. **Build in v0** - You design and code here
2. **Download Code** - Click "..." → "Download ZIP" or connect GitHub
3. **Updates are NOT automatic** - Each change requires re-download
4. **Deploy to your domain** - Upload to your hosting

## Quick Fix for Your Payment Issues

### Problem: Payments Not Working
Your dApps at pinet.com cannot accept payments because:
1. Missing Pi SDK script in HTML
2. API endpoints not configured properly
3. Environment variables not set

### Solution (Do This Now):

#### Step 1: Add Environment Variables
In your hosting (Vercel/Netlify/etc), add:
\`\`\`
PI_API_KEY=your_api_key_from_pi_developer_portal
NEXT_PUBLIC_APP_URL=https://firstpimisrbanke1502.pinet.com
\`\`\`

#### Step 2: Add Pi SDK Script
Your app already has this configured. Make sure it's in production.

#### Step 3: Test Payment Flow
1. Open app in Pi Browser: `https://firstpimisrbanke1502.pinet.com/pay`
2. Authenticate when prompted
3. Enter amount (try 0.01 π for test)
4. Click "Pay" button
5. Approve in Pi wallet

## For All Your dApps:

### 1. Map of Pi (emapofpi6390.pinet.com)
- Add `/pay` route
- Copy payment integration code
- Add PI_API_KEY to environment

### 2. TEOS Wallet (teoswallet6613.pinet.com)
- Same payment integration
- Add wallet-specific payment handlers

### 3. TeosPump (teospumpeabbdc3939.pinet.com)
- Integrate payment for token purchases
- Add PI_API_KEY

### 4. FPBE Bank (firstpimisrbanke1502.pinet.com)
- Already configured in this build
- Just deploy and add environment variables

### 5. NilexDEX (niledex7283.pinet.com)
- Add payment for DEX trades
- Configure API endpoints

## Deployment Steps (For Each dApp):

### Option A: Direct Upload
1. Download ZIP from v0
2. Extract files
3. Upload to your hosting
4. Add environment variables
5. Test in Pi Browser

### Option B: GitHub Integration
1. Connect v0 to GitHub (Settings → GitHub)
2. Push code to repository
3. Connect repository to Vercel/Netlify
4. Add environment variables
5. Deploy

## Common Issues & Fixes:

### Issue: "Pi SDK not available"
**Fix:** Must open in Pi Browser, not regular browser

### Issue: "Payment approval failed"
**Fix:** Check API_KEY is set correctly

### Issue: "Cannot read property 'Pi'"
**Fix:** Add Pi SDK script to layout.tsx:
\`\`\`tsx
<Script src="https://sdk.minepi.com/pi-sdk.js" strategy="beforeInteractive" />
\`\`\`

### Issue: Payment starts but doesn't complete
**Fix:** Check approve/complete API endpoints are working

## Testing Checklist:

- [ ] Environment variables set
- [ ] App opens in Pi Browser
- [ ] User can authenticate
- [ ] Payment dialog appears
- [ ] Payment can be approved
- [ ] Transaction completes
- [ ] Success message shows

## Support:
- Pi Developer Portal: https://develop.pi
- Pi SDK Docs: https://github.com/pi-apps/pi-platform-docs
\`\`\`

```tsx file="" isHidden
