# Environment Variables Setup

## Required Variables

### PI_API_KEY (Required)
Your Pi Network API key from https://develop.pi/apps

\`\`\`bash
PI_API_KEY=your_actual_api_key_here
\`\`\`

**Where to get it:**
1. Login to https://develop.pi/apps
2. Select your app or create new one
3. Copy the API Key shown on app dashboard

**How to add it:**

**.env.local (for local testing):**
\`\`\`bash
# Create this file in your project root
PI_API_KEY=xxxxxxxxxxxxxxxxxxxx
\`\`\`

**Vercel (production):**
\`\`\`bash
vercel env add PI_API_KEY
# Paste your key when prompted
# Select: Production, Preview, Development (all three)
\`\`\`

**Netlify (production):**
\`\`\`bash
netlify env:set PI_API_KEY "xxxxxxxxxxxxxxxxxxxx"
\`\`\`

## Optional Variables

### NEXT_PUBLIC_APP_URL
Your app's public URL (used for redirects)

\`\`\`bash
NEXT_PUBLIC_APP_URL=https://teosegypt.com
\`\`\`

### NODE_ENV
Set automatically by hosting platforms

\`\`\`bash
NODE_ENV=production
\`\`\`

## Testing Environment Variables Locally

1. Create `.env.local` file in project root:
\`\`\`bash
PI_API_KEY=your_test_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

2. Run development server:
\`\`\`bash
npm run dev
\`\`\`

3. Test in Pi Browser sandbox mode

## Verification

After adding environment variables, verify they're loaded:

1. Deploy your app
2. Check deployment logs
3. Look for: `[v0] Payment approval request received`
4. If you see `PI_API_KEY not set` - environment variable is missing

## Security Notes

- Never commit `.env.local` to Git (already in .gitignore)
- Never share your API key publicly
- Use different API keys for development and production
- Rotate API keys if compromised

## Common Issues

**"Process.env.PI_API_KEY is undefined"**
- Variable not set on hosting platform
- Need to redeploy after adding variables
- Check variable name is exactly `PI_API_KEY`

**"401 Unauthorized from Pi API"**
- Wrong API key
- API key from wrong app
- Extra spaces in the key value
