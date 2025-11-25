# PI_API_KEY Setup Checklist

## For BANKOFPI on teosegypt.com

### ✅ Checklist

- [ ] I have a Pi Developer account at https://developers.minepi.com
- [ ] I created an app called "BANKOFPI" in developer portal
- [ ] I copied my API Key from the portal
- [ ] I added PI_API_KEY to my hosting environment variables
- [ ] I redeployed my app after adding the key
- [ ] I registered teosegypt.com in the Pi Developer Portal
- [ ] I'm testing in Pi Browser (not regular browser)
- [ ] I can see the test button on my homepage
- [ ] I clicked the test button and see status messages

### Where to Add PI_API_KEY

**Vercel:**
\`\`\`
Dashboard → Your Project → Settings → Environment Variables
Name: PI_API_KEY
Value: [paste your key]
\`\`\`

**Netlify:**
\`\`\`
Site Settings → Build & Deploy → Environment → Environment Variables
Key: PI_API_KEY
Value: [paste your key]
\`\`\`

**Other:**
\`\`\`
Create .env file in root:
PI_API_KEY=your_key_here
\`\`\`

### Test Steps

1. Open Pi Browser on your phone
2. Navigate to teosegypt.com
3. You should see a yellow test payment card at top
4. Click "Test Payment (1π)" button
5. Follow the status messages
6. Complete payment in Pi wallet

### If It Works

You'll see: "SUCCESS! Payment completed: [transaction_id]"

### If It Doesn't Work

Check the error message shown. Common ones:
- "Pi SDK not loaded" → Use Pi Browser
- "Failed to approve" → Check API key
- "Network error" → Check internet/deployment

## Next: Repeat for Other Domains

Once working on teosegypt.com, repeat for:
- bankofpiefbfbdad3490.pinet.com
- emapofpi6390.pinet.com
- teoswallet6613.pinet.com
- teospumpeabbdc3939.pinet.com
- firstpimisrbanke1502.pinet.com
- niledex7283.pinet.com
