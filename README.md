# BANKOFPI - Pi Network Banking Application

A comprehensive mobile-first banking application built on the Pi Network blockchain.

## Features

- **Dashboard** - View USD and Pi balances
- **Send/Receive** - Transfer Pi cryptocurrency
- **DeFi Lending** - Earn interest on Pi deposits
- **Atomic Swap** - Exchange Pi for USD seamlessly
- **Credit Score** - On-chain credit tracking
- **Voice Banking** - Voice-controlled transactions
- **Offline Mode** - Queue transactions offline

## Quick Start

### 1. Download Code
Download the ZIP from v0 or clone this repository

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Add Environment Variables
Create `.env.local`:
\`\`\`env
PI_API_KEY=your_api_key_from_pi_developer_portal
NEXT_PUBLIC_APP_URL=https://your-domain.pinet.com
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### 5. Test in Pi Browser
Open `http://localhost:3000/pay` in Pi Browser

### 6. Deploy
\`\`\`bash
npm run build
vercel --prod
\`\`\`

## Environment Setup

Get your Pi API Key:
1. Visit https://develop.pi
2. Login and create/select your app
3. Copy API Key from dashboard
4. Add to environment variables

## Testing Payments

1. Open app in Pi Browser
2. Navigate to `/pay` page
3. Authenticate with Pi
4. Enter amount (try 0.01 π)
5. Approve transaction
6. Verify success message

## Deployment

### Vercel (Recommended)
\`\`\`bash
vercel
vercel env add PI_API_KEY
vercel --prod
\`\`\`

### Manual Deployment
1. Build: `npm run build`
2. Upload `.next` folder to server
3. Set environment variables
4. Start: `npm start`

## Multiple dApps

To deploy to multiple domains:
1. Download code once
2. Deploy to each domain separately
3. Add PI_API_KEY to each deployment
4. Test each independently

## Documentation

- `QUICK_START.md` - Fast deployment guide
- `DEPLOYMENT_GUIDE.md` - Comprehensive setup
- `MAINNET_SETUP.md` - Mainnet configuration

## Support

- Pi Developer Portal: https://develop.pi
- Pi SDK Docs: https://github.com/pi-apps/pi-platform-docs

## License

Built with v0 by Vercel
