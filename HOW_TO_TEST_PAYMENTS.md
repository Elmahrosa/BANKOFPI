# How to Test Pi Payments in BANKOFPI

## Quick Start - Testing in Pi Browser

### Step 1: Open in Pi Browser
1. Open the **Pi Network app** on your phone
2. Tap on **Mine** (lightning icon)
3. Tap on **Browser** at the bottom
4. Enter your domain: **teosegypt.com** or **bankofpiefbfbdad3490.pinet.com**
5. The app will open in Pi Browser

### Step 2: Check Pi Browser Detection
- You should see a **green banner** saying "Pi Browser Detected!"
- If you see a red banner, you're not in Pi Browser yet
- The test payment button will only work in Pi Browser

### Step 3: Configure Your API Key
Before payments work, you MUST add your Pi API key:

1. Go to **https://develop.pi/apps**
2. Log in with your Pi account
3. Find your app or create a new one
4. Copy your **API Key**
5. Add it to your hosting platform as environment variable:
   - Variable name: `PI_API_KEY`
   - Variable value: Your API key from Pi Developer Portal

### Step 4: Test Payment
1. Click the yellow **"Test Payment (1π)"** button
2. You'll see status messages showing:
   - "Checking Pi SDK..."
   - "Initializing payment..."
   - "Creating payment..."
3. Pi Browser will show a payment dialog
4. Confirm the payment
5. Wait for completion message

## Common Issues

### "ERROR: Pi SDK not loaded"
- You're not in Pi Browser
- Open the app in Pi Browser following Step 1 above

### "Failed to approve payment"
- Your `PI_API_KEY` is not set or incorrect
- Check environment variables in your hosting dashboard
- Make sure the API key matches your app in Pi Developer Portal

### Payment dialog doesn't appear
- Clear Pi Browser cache
- Make sure you're in sandbox mode (testing)
- Check browser console for errors

### "Network error" during payment
- Check your internet connection
- Make sure your backend API routes are accessible
- Verify `/api/payments/approve` and `/api/payments/complete` routes exist

## Deployment Checklist

✅ App is deployed to your domain (teosegypt.com)  
✅ Pi SDK script is loaded in layout.tsx  
✅ Environment variable `PI_API_KEY` is set  
✅ Testing in Pi Browser (not regular browser)  
✅ API routes exist: `/api/payments/approve` and `/api/payments/complete`

## All Your dApps

You mentioned these apps - the same payment integration works for all:

1. **Map of Pi** → https://emapofpi6390.pinet.com
2. **TEOS Wallet** → https://teoswallet6613.pinet.com
3. **TeosPump** → https://teospumpeabbdc3939.pinet.com
4. **FPBE Bank** → https://firstpimisrbanke1502.pinet.com
5. **NilexDEX** → https://niledex7283.pinet.com

For each app:
1. Download the code from v0
2. Add the Pi SDK script to layout.tsx (like in this BANKOFPI example)
3. Add payment functionality
4. Set `PI_API_KEY` environment variable
5. Deploy and test in Pi Browser

## Need Help?

If payments still don't work:
1. Check browser console logs for errors
2. Verify your API key is correct
3. Make sure you're testing in **sandbox mode**
4. Confirm the app URL matches what's registered in Pi Developer Portal

## Moving to Production

Once testing works:
1. In Pi Developer Portal, set app to production mode
2. Update code: Change `sandbox: true` to `sandbox: false`
3. Redeploy
4. Test with real π (start with small amounts!)
