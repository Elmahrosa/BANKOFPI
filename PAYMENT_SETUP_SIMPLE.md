# Simple Pi Payment Setup for BANKOFPI

## The Problem You're Having

Your payments are not working because:
1. Missing PI_API_KEY environment variable
2. Need to test in Pi Browser (not regular Chrome/Safari)
3. Backend API routes might not be deployed

## Quick Fix - 3 Steps

### Step 1: Get Your PI_API_KEY

1. Go to https://developers.minepi.com
2. Login with your Pi account
3. Click on your app "BANKOFPI"
4. Copy the API Key

### Step 2: Add Environment Variable

**Option A: If using Vercel**
\`\`\`bash
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add: PI_API_KEY = your_api_key_here
5. Redeploy your app
\`\`\`

**Option B: If using other hosting**
\`\`\`bash
# Add to your .env file or hosting dashboard
PI_API_KEY=your_api_key_here
\`\`\`

### Step 3: Test Payment

1. Open your app in **Pi Browser** (not regular browser)
2. Click the yellow "Test Payment (1π)" button at the top
3. Watch the status messages
4. Complete the payment in Pi wallet

## Testing Right Now

I added a test button on your homepage. When you click it, you'll see:
- "Checking Pi SDK..." - verifying Pi Browser
- "Initializing payment..." - connecting to Pi
- "Creating payment..." - starting transaction
- "Approving payment..." - backend approval
- "Completing payment..." - finalizing
- "SUCCESS!" - done!

## Common Errors & Solutions

### "Pi SDK not loaded"
- **Solution**: You MUST use Pi Browser. Regular browsers don't have Pi SDK.

### "Failed to approve payment"
- **Solution**: Check PI_API_KEY is set correctly
- **Solution**: Make sure API routes are deployed

### "Network error"
- **Solution**: Check your internet connection
- **Solution**: Make sure your domain is registered in Pi Developer Portal

## For All Your dApps

You need to do this for each domain:
1. teosegypt.com
2. bankofpiefbfbdad3490.pinet.com
3. emapofpi6390.pinet.com
4. teoswallet6613.pinet.com
5. teospumpeabbdc3939.pinet.com
6. firstpimisrbanke1502.pinet.com
7. niledex7283.pinet.com

Each one needs:
- PI_API_KEY in environment variables
- Registered in Pi Developer Portal
- Backend API routes deployed

## Download and Deploy

1. Click Download ZIP button in v0
2. Extract the files
3. Add PI_API_KEY to .env file
4. Deploy to your hosting
5. Test in Pi Browser

## Need Help?

If still not working after these steps, check:
1. Console logs in Pi Browser (F12)
2. Network tab to see if API calls work
3. Verify your app is approved in Pi Developer Portal
