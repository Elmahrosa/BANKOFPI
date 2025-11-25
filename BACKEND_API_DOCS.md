# BANKOFPI Backend API Documentation

## Overview
Complete backend API routes integrated from the GitHub repository with Pi Network, DeFi, and credit scoring capabilities.

## API Endpoints

### 1. Atomic Swap APIs

#### Initiate Swap
**POST** `/api/swap/initiate`

Request:
\`\`\`json
{
  "receiver": "wallet_address",
  "amount": "100.50",
  "secret": "my_secret_phrase"
}
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Swap initiated successfully",
  "swapId": "swap_1234567890_abc123",
  "expiresAt": "2025-01-26T12:00:00Z"
}
\`\`\`

#### Complete Swap
**POST** `/api/swap/complete`

Request:
\`\`\`json
{
  "swapId": "swap_1234567890_abc123",
  "secret": "my_secret_phrase"
}
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Swap completed successfully",
  "swap": {
    "id": "swap_1234567890_abc123",
    "receiver": "wallet_address",
    "amount": 100.50,
    "status": "completed",
    "completedAt": "2025-01-25T12:30:00Z"
  }
}
\`\`\`

### 2. Credit Score API

#### Get Credit Score
**GET** `/api/credit-score/[user]`

Example: `/api/credit-score/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`

Response:
\`\`\`json
{
  "user": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "score": 742,
  "maxScore": 850,
  "rating": "Good",
  "factors": {
    "paymentHistory": "Excellent",
    "creditUtilization": "Good",
    "creditAge": "Fair",
    "recentInquiries": "Excellent"
  },
  "lastUpdated": "2025-01-25T12:00:00Z",
  "nextUpdate": "2025-02-25T12:00:00Z"
}
\`\`\`

### 3. DeFi APIs

#### Get Liquidity Pools
**GET** `/api/defi/pools`

Response:
\`\`\`json
{
  "success": true,
  "pools": [
    {
      "id": "pi-usdc",
      "name": "π/USDC",
      "tvl": 5420000,
      "apy": 12.5,
      "myStake": 1250.75,
      "earned": 156.25
    }
  ],
  "totalTvl": 10850000,
  "myTotalStaked": 1750.75,
  "myTotalEarned": 234.75
}
\`\`\`

#### Stake Tokens
**POST** `/api/defi/stake`

Request:
\`\`\`json
{
  "poolId": "pi-usdc",
  "amount": "100.00"
}
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Staking successful",
  "transaction": {
    "hash": "0xabc123...",
    "poolId": "pi-usdc",
    "amount": 100.00,
    "timestamp": "2025-01-25T12:00:00Z"
  }
}
\`\`\`

### 4. Pi Network Payment APIs

#### Approve Payment
**POST** `/api/payments/approve`

Request:
\`\`\`json
{
  "paymentId": "payment_abc123"
}
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Payment approved",
  "paymentId": "payment_abc123"
}
\`\`\`

#### Complete Payment
**POST** `/api/payments/complete`

Request:
\`\`\`json
{
  "paymentId": "payment_abc123",
  "txid": "0x123abc..."
}
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "message": "Payment completed",
  "transaction": {
    "id": "payment_abc123",
    "txid": "0x123abc...",
    "status": "completed"
  }
}
\`\`\`

## Error Handling

All API endpoints return errors in this format:

\`\`\`json
{
  "error": "Error message description"
}
\`\`\`

Common HTTP status codes:
- 200: Success
- 400: Bad Request (missing parameters)
- 403: Forbidden (invalid credentials)
- 404: Not Found
- 500: Internal Server Error

## Testing

Test the APIs using:
1. Pi Browser for payment APIs
2. Postman/curl for other endpoints
3. Browser DevTools Network tab

## Production Notes

For production deployment:
1. Replace in-memory storage with a database (PostgreSQL, MongoDB)
2. Add proper authentication and authorization
3. Implement rate limiting
4. Use environment variables for sensitive data
5. Add comprehensive logging and monitoring
6. Implement proper secret hashing (bcrypt, argon2)
7. Connect to real blockchain networks
8. Add input validation and sanitization
