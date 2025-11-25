# BANKOFPI - Quick Start Guide for Pi Payments

## IMMEDIATE ACTION REQUIRED

### Your Payment Issues - Root Cause:
All your dApps (emapofpi6390.pinet.com, teoswallet6613.pinet.com, etc.) cannot process payments because:
1. Pi SDK script is missing
2. Environment variable PI_API_KEY is not set
3. Code from v0 is not deployed to your domains

---

## FIX IT NOW (3 Steps):

### Step 1: Download This Code
1. Click the three dots "..." in top right of this chat
2. Select "Download ZIP"
3. Extract the ZIP file to your computer

### Step 2: Get Your Pi API Key
1. Go to https://develop.pi
2. Login with your Pi account
3. Select your app (or create new app)
4. Copy your API Key from the dashboard

### Step 3: Deploy to Your Domain

#### Option A: Using Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Navigate to extracted folder
cd bankofpi

# Deploy
vercel

# Add environment variable
vercel env add PI_API_KEY
# Paste your API key when prompted

# Deploy again to use the new env var
vercel --prod
\`\`\`

#### Option B: Manual Upload
1. Upload all files to your hosting (firstpimisrbanke1502.pinet.com)
2. In hosting dashboard, add environment variable:
   - Name: `PI_API_KEY`
   - Value: Your API key from Pi Developer Portal
3. Restart your server

---

## TEST THE PAYMENT (Critical):

1. **Open in Pi Browser** (NOT regular browser)
   - URL: https://firstpimisrbanke1502.pinet.com/pay

2. **Authenticate**
   - Click "Continue with Pi"
   - Approve the authentication

3. **Make Test Payment**
   - Enter amount: 0.01
   - Memo: "Test payment"
   - Click "Pay 0.01 π"

4. **Approve in Wallet**
   - Pi wallet will open
   - Review and approve transaction

5. **Check Success**
   - You should see "Payment completed successfully"

---

## For Your Other dApps:

### Map of Pi (emapofpi6390.pinet.com)
\`\`\`bash
1. Download this code
2. Deploy to emapofpi6390.pinet.com
3. Add PI_API_KEY environment variable
4. Test at: https://emapofpi6390.pinet.com/pay
\`\`\`

### TEOS Wallet (teoswallet6613.pinet.com)
\`\`\`bash
1. Same process as above
2. Deploy to teoswallet6613.pinet.com
3. Add PI_API_KEY
4. Test payment flow
\`\`\`

### TeosPump (teospumpeabbdc3939.pinet.com)
\`\`\`bash
1. Same deployment process
2. Add PI_API_KEY
3. Test token purchase with Pi
\`\`\`

### NilexDEX (niledex7283.pinet.com)
\`\`\`bash
1. Deploy this code
2. Add PI_API_KEY
3. Test DEX trades with Pi
\`\`\`

---

## Common Errors & Solutions:

### Error: "Pi SDK not available"
**Cause:** Opened in regular browser, not Pi Browser
**Fix:** Open URL in Pi Browser app on your phone

### Error: "Failed to approve payment"
**Cause:** PI_API_KEY is missing or wrong
**Fix:** 
- Check environment variable is set
- Verify API key is correct from Pi Developer Portal
- Restart server after adding env var

### Error: "Authentication failed"
**Cause:** App not registered in Pi Developer Portal
**Fix:**
1. Go to https://develop.pi
2. Create new app or select existing
3. Add your domain to allowed URLs
4. Copy API key

### Error: Payment dialog doesn't appear
**Cause:** Pi SDK script not loaded
**Fix:** 
- Verify layout.tsx has the Pi SDK script
- Check browser console for errors
- Deploy latest code from v0

---

## How v0 Updates Work:

**IMPORTANT:** Changes in v0 do NOT automatically update your live site

**Workflow:**
1. Make changes in v0 chat
2. Download ZIP again (new code)
3. Re-deploy to your domain
4. Test changes

---

## Environment Variables You Need:

\`\`\`env
# Required for ALL your dApps
PI_API_KEY=your_api_key_here

# Optional but recommended
NEXT_PUBLIC_APP_URL=https://firstpimisrbanke1502.pinet.com
\`\`\`

---

## Verify Everything Works:

- [ ] Downloaded latest code from v0
- [ ] Got API key from Pi Developer Portal
- [ ] Deployed to firstpimisrbanke1502.pinet.com
- [ ] Added PI_API_KEY environment variable
- [ ] Opened app in Pi Browser
- [ ] Authentication works
- [ ] Payment dialog appears
- [ ] Test payment (0.01 π) completes
- [ ] Success message shows

---

## Next Steps After Payment Works:

1. **Repeat for all 5 dApps** (same code, different domains)
2. **Customize each dApp** (edit in v0, download, deploy)
3. **Add your branding** (logos, colors, content)
4. **Test on mainnet** with real small amounts
5. **Go live** with confidence

---

## Need Help?

If payments still don't work after following this guide:
1. Check browser console for errors (F12)
2. Verify Pi SDK loads (look for "Pi SDK initialized" in console)
3. Confirm environment variable is set correctly
4. Test with very small amount (0.01 π)
5. Check Pi Developer Portal for app status

---

## Pro Tips:

1. **Always test with small amounts first** (0.01-0.1 π)
2. **Keep your API key secret** (never commit to public repos)
3. **Use different apps in Pi Dev Portal for each dApp** (better tracking)
4. **Monitor transactions** in Pi Developer Portal dashboard
5. **Update all dApps** when you make changes in v0

---

You're almost there! Just download, add API key, and deploy. Your payments will work immediately.
