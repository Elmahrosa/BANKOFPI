# BANKOFPI Mainnet Setup Guide

## Prerequisites
1. Pi Developer Account at https://develop.pi/developer
2. Approved Pi App with mainnet access
3. Pi Network API Key

## Setup Steps

### 1. Configure Environment Variables
Create a `.env.local` file in your project root:

\`\`\`bash
PI_API_KEY=your_actual_api_key_here
PI_SANDBOX=false
\`\`\`

### 2. Update Pi App Configuration
In your Pi Developer Portal (https://develop.pi/developer):
- Set app type to "Mainnet"
- Add your production domain
- Configure payment settings
- Enable "User to App" payment type

### 3. Deploy Your App
Deploy to Vercel or your hosting platform:
\`\`\`bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy
vercel deploy --prod
\`\`\`

### 4. Test Payment Flow

#### In Pi Browser:
1. Open your app URL in Pi Browser
2. Authenticate with your Pi account
3. Navigate to "Pay" section
4. Enter payment amount (start with small amount like 0.01 π)
5. Click "Pay" button
6. Approve transaction in Pi wallet
7. Wait for confirmation

### 5. Monitor Payments
Check your backend logs for payment status:
- `[v0] Payment ready for approval`
- `[v0] Payment verified`
- `[v0] Payment approved`
- `[v0] Payment ready for completion`
- `[v0] Payment completed`

## API Endpoints

### Approve Payment
`POST /api/payments/approve`
\`\`\`json
{
  "paymentId": "payment_id_from_sdk"
}
\`\`\`

### Complete Payment
`POST /api/payments/complete`
\`\`\`json
{
  "paymentId": "payment_id_from_sdk",
  "txid": "blockchain_transaction_id"
}
\`\`\`

## Troubleshooting

### "Pi SDK not available"
- Ensure you're opening the app in Pi Browser
- Check that Pi Browser is up to date

### "Payment approval failed"
- Verify PI_API_KEY is correct
- Check API key has mainnet permissions
- Ensure payment amount is valid

### "Payment completion failed"
- Check network connection
- Verify transaction ID is valid
- Review server logs for errors

## Production Checklist
- [ ] PI_API_KEY added to environment variables
- [ ] Sandbox mode disabled (PI_SANDBOX=false)
- [ ] App approved for mainnet in Pi Developer Portal
- [ ] Production domain configured
- [ ] SSL certificate active
- [ ] Payment webhooks configured (optional)
- [ ] Error monitoring enabled
- [ ] Database ready for transaction records

## Security Best Practices
1. Never expose PI_API_KEY in client-side code
2. Validate all payment amounts server-side
3. Implement rate limiting on payment endpoints
4. Store transaction records securely
5. Use HTTPS only
6. Implement proper error handling
7. Log all payment activities

## Support
- Pi Developer Docs: https://developers.minepi.com
- Pi Developer Community: https://community.pi/developer
- BANKOFPI Support: [Your support email]
