# Deploy BANKOFPI with Your Pi API Key

Your API Key is ready: `watommpoqfyha991np6qhntfeawkgb2rbykqcm3grx7ivqcovlapp0qyfign0cbb`

## Quick Deploy Steps

### Step 1: Download Your Code
1. Click the **3 dots** in the top right of this v0 window
2. Click **"Download ZIP"**
3. Extract the ZIP file to your computer

### Step 2: Deploy to Your Domain

#### Option A: Deploy to Vercel (Recommended)
1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Import your code (upload folder or connect GitHub)
4. In **Environment Variables**, add:
   - **Name:** `PI_API_KEY`
   - **Value:** `watommpoqfyha991np6qhntfeawkgb2rbykqcm3grx7ivqcovlapp0qyfign0cbb`
5. Click **Deploy**
6. Once deployed, connect your custom domain:
   - Go to Project Settings → Domains
   - Add: `teosegypt.com`
   - Follow DNS instructions

#### Option B: Deploy to Netlify
1. Go to https://netlify.com
2. Drag and drop your code folder
3. Go to **Site Settings → Environment Variables**
4. Add variable:
   - **Key:** `PI_API_KEY`
   - **Value:** `watommpoqfyha991np6qhntfeawkgb2rbykqcm3grx7ivqcovlapp0qyfign0cbb`
5. Click **Deploy** to rebuild
6. Add custom domain in Domain Settings

### Step 3: Update Your Pi Developer Portal
1. Go to https://develop.pi/apps
2. Find your BANKOFPI app
3. Update **Production URL** to match your domain:
   - `https://teosegypt.com`
   - OR `https://bankofpiefbfbdad3490.pinet.com`
4. Save changes

### Step 4: Test Payment
1. Open your app in **Pi Browser** (not Chrome/Safari)
2. Click **"Test Payment"** button
3. Approve the 0.01 π payment
4. Payment should complete successfully!

## Important Notes

### Your API Key Security
- Never share your API key publicly
- The `.env.local` file is already in `.gitignore`
- Only add the API key in your hosting platform's environment variables

### All Your Domains
Add this same API key to all your dApps:
- Map of Pi → https://emapofpi6390.pinet.com
- TEOS Wallet → https://teoswallet6613.pinet.com
- TeosPump → https://teospumpeabbdc3939.pinet.com
- FPBE Bank → https://firstpimisrbanke1502.pinet.com
- NilexDEX → https://niledex7283.pinet.com
- teosegypt.com

### Troubleshooting

**Payment still times out?**
1. Check that `PI_API_KEY` is set in your hosting environment
2. Verify you're testing in Pi Browser, not regular browser
3. Check browser console (F12) for error messages
4. Make sure your production URL in Pi Developer Portal matches your domain exactly

**"Pi SDK not loaded" error?**
- You must open the app in Pi Browser
- Regular browsers (Chrome, Safari, Firefox) will not work
- Download Pi Browser from: https://pi.network

**API Key not working?**
1. Verify the key is correct (no extra spaces)
2. Check you're using the right app in Pi Developer Portal
3. Make sure the app is approved for payments

## Next Steps

Once payments work on teosegypt.com:
1. Use the same deployment process for your other domains
2. Each domain needs the same `PI_API_KEY` environment variable
3. Each domain must be registered in Pi Developer Portal

## Need Help?

Check the browser console for detailed error logs. Every payment attempt logs:
- "[v0] Payment approval request received"
- "[v0] Processing payment ID: xxx"
- "[v0] Pi API responded in Xms"
- "[v0] Payment approved successfully"

If you see errors, they will show exactly what went wrong!
