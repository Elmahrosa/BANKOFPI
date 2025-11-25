# URGENT: Fix Payment Timeout - Step by Step

## The Problem
"Payment Expired" means Pi Network didn't get approval from your backend within 30 seconds.

## Fix It Now (5 Minutes)

### Step 1: Get Your API Key
1. Go to https://develop.pi/apps
2. Login with your Pi account
3. Find your app "BANKOFPI" (or create it if missing)
4. Copy your **API Key** (looks like: `xxxxxxxxxxxxxxxxxxxx`)

### Step 2: Add API Key to Your Hosting

**If using Vercel:**
\`\`\`bash
1. Go to vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add new variable:
   Name: PI_API_KEY
   Value: [paste your API key]
5. Click Save
6. Go to Deployments → Redeploy (click ... → Redeploy)
\`\`\`

**If using Netlify:**
\`\`\`bash
1. Go to app.netlify.com
2. Select your site
3. Site settings → Environment variables
4. Add variable:
   Key: PI_API_KEY
   Value: [paste your API key]
5. Save
6. Deploys → Trigger deploy
\`\`\`

**If using other hosting:**
- Add environment variable `PI_API_KEY` with your API key
- Restart/redeploy your application

### Step 3: Configure Pi Developer Portal

1. Go to https://develop.pi/apps
2. Select your app
3. Check these settings:

**App Domain:**
\`\`\`
https://teosegypt.com
\`\`\`
OR
\`\`\`
https://bankofpiefbfbdad3490.pinet.com
\`\`\`
(Must match EXACTLY where your app is deployed)

**Payment Callback URL:**
\`\`\`
https://teosegypt.com/api/payments/approve
\`\`\`
(Replace teosegypt.com with your actual domain)

### Step 4: Enable Sandbox Mode (For Testing)

In Pi Developer Portal:
1. App Settings → Development
2. Enable "Sandbox Mode"
3. Save changes

This lets you test with fake Pi without real money.

### Step 5: Test Again

1. Open Pi app on your phone
2. Go to Mine → Browser
3. Enter: `teosegypt.com`
4. Click "Test Payment (1π)" button
5. Watch the status messages

**If it works:** You'll see "SUCCESS! Payment completed"
**If it fails:** Check the error message and see troubleshooting below

## Troubleshooting

### Error: "PI_API_KEY not set"
- You didn't add the environment variable
- Go back to Step 2

### Error: "Pi API returned 401"
- Your API key is wrong
- Copy it again from Pi Developer Portal (Step 1)
- Make sure no extra spaces

### Error: "Request to Pi API timed out"
- Your server is slow or Pi API is down
- Try again in a few minutes
- Check Pi Network status

### Error: "Not in Pi Browser"
- You're using Chrome/Safari/Firefox
- MUST use Pi Browser app on your phone
- Download Pi app from app store

### Still Getting "Payment Expired"?

Check deployment logs:

**Vercel:**
1. Dashboard → Your Project → Logs
2. Look for messages starting with `[v0]`
3. Find the error message

**Netlify:**
1. Functions → Recent executions
2. Look for your approve function
3. Check the logs

**What to look for:**
- `[v0] Payment approval request received` - Backend got the request
- `[v0] Processing payment ID: xxx` - Processing started
- `[v0] Pi API responded in XXXms` - How long Pi took to respond
- `[v0] Payment approved successfully` - It worked!

## Quick Checklist

- [ ] API Key added to environment variables
- [ ] App domain in Pi Portal matches deployment URL exactly
- [ ] Payment callback URL configured in Pi Portal
- [ ] Sandbox mode enabled for testing
- [ ] Testing in Pi Browser (not regular browser)
- [ ] Redeployed after adding environment variables

## Need Mainnet (Real Payments)?

After testing works in sandbox:

1. Pi Developer Portal → Your App
2. Submit for review
3. Wait for approval (can take days)
4. Once approved, disable sandbox mode
5. Real Pi payments will work

## Contact Support

If still not working after all steps:

1. Check logs for exact error message
2. Take screenshot of error
3. Go to https://develop.pi/apps → Support
4. Submit ticket with:
   - App name: BANKOFPI
   - Domain: teosegypt.com
   - Error message
   - Screenshots
