# BANKOFPI Pi Network Integration Guide

## IMPORTANT: Workflow Understanding

### How v0 Works:
1. **Build here in v0** - All changes happen here first
2. **Download your code** - Click "Publish" or three dots → "Download ZIP"
3. **Push to GitHub** - Upload to your repository manually or connect GitHub
4. **Deploy to domain** - Deploy to Vercel/your hosting
5. **REPEAT** - Every update must be downloaded and deployed again

**Changes in v0 DO NOT automatically go to GitHub!**

---

## Why Payments Are Not Working - Common Issues

### Issue 1: Wrong Environment
**Problem:** Using sandbox mode for mainnet or vice versa
**Solution:** Check your `.env.local` file:

\`\`\`bash
# For Testing (Sandbox)
PI_API_KEY=your_sandbox_api_key
NEXT_PUBLIC_PI_SANDBOX=true

# For Production (Mainnet)
PI_API_KEY=your_mainnet_api_key
NEXT_PUBLIC_PI_SANDBOX=false
\`\`\`

### Issue 2: API Key Issues
**Problem:** Wrong or missing API key
**Solution:**
1. Go to https://develop.pi
2. Select your app
3. Copy the CORRECT API key (sandbox vs mainnet)
4. Add to environment variables in Vercel or `.env.local`

### Issue 3: Domain Not Configured
**Problem:** Your domain is not registered in Pi Developer Portal
**Solution:**
1. Go to https://develop.pi
2. Edit your app settings
3. Add your exact domain: `https://yourdomain.com`
4. Save and wait for approval

### Issue 4: Not Testing in Pi Browser
**Problem:** Testing in Chrome/Safari instead of Pi Browser
**Solution:** MUST use Pi Browser app on mobile

---

## Step-by-Step Setup (Do This First!)

### Step 1: Get Your API Keys
1. Open https://develop.pi in browser
2. Login with your Pi account
3. Click on your app name
4. Find "API Key" section
5. Copy SANDBOX key for testing
6. Copy MAINNET key for production

### Step 2: Add Environment Variables
In your deployed app (Vercel):
1. Go to Project Settings → Environment Variables
2. Add these:
   - Name: `PI_API_KEY`
   - Value: (paste your key)
   - Environment: Production (or Preview for testing)
3. Click Save
4. Redeploy your app

### Step 3: Configure Your Domain
In Pi Developer Portal:
1. App Settings → App Platform
2. Add your deployed URL exactly as shown
3. Example: `https://bankofpi.vercel.app`
4. Click Save

### Step 4: Test in Sandbox First
1. Set `NEXT_PUBLIC_PI_SANDBOX=true`
2. Use sandbox API key
3. Open in Pi Browser
4. Try a test payment (use 0.01 Pi)
5. Check console logs for errors

### Step 5: Move to Mainnet
1. Get mainnet approval from Pi team
2. Change `NEXT_PUBLIC_PI_SANDBOX=false`
3. Use mainnet API key
4. Redeploy
5. Test with real payment

---

## Testing Checklist

Before testing, verify:
- [ ] Code downloaded from v0
- [ ] Uploaded to GitHub
- [ ] Deployed to your domain
- [ ] Environment variables added in hosting
- [ ] Domain added in Pi Developer Portal
- [ ] Using Pi Browser (not regular browser)
- [ ] API key matches environment (sandbox/mainnet)

## Quick Test Commands

### Check if Pi SDK is loaded:
Open Pi Browser console and type:
\`\`\`javascript
typeof window.Pi !== 'undefined'
\`\`\`
Should return: `true`

### Check sandbox mode:
\`\`\`javascript
console.log(process.env.NEXT_PUBLIC_PI_SANDBOX)
\`\`\`

---

## Common Error Messages

### "Pi SDK not available"
- You're not in Pi Browser
- Script didn't load (check network tab)

### "Failed to verify payment"
- Wrong API key
- API key doesn't match environment
- Domain not registered

### "Payment approval failed"
- Backend can't reach Pi API
- Network issue
- Invalid payment ID

### "Authentication failed"
- Pi Browser needs update
- App not approved in developer portal
- User canceled authentication

---

## Support Contacts

1. **Pi Developer Support:** https://community.pi/developer
2. **Documentation:** https://developers.minepi.com
3. **Your app status:** https://develop.pi/developer

---

## Next Steps After Setup

1. Test small payment (0.01 π)
2. Monitor logs in Vercel/hosting
3. Check Pi Developer Portal for payment records
4. Implement error handling
5. Add payment history database
6. Set up webhooks (optional)
7. Apply for mainnet when ready
\`\`\`
