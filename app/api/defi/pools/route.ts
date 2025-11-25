import { type NextRequest, NextResponse } from "next/server"

// Mock DeFi liquidity pools
const pools = [
  {
    id: "pi-usdc",
    name: "π/USDC",
    tvl: 5420000,
    apy: 12.5,
    myStake: 1250.75,
    earned: 156.25,
  },
  {
    id: "pi-eth",
    name: "π/ETH",
    tvl: 3280000,
    apy: 18.3,
    myStake: 0,
    earned: 0,
  },
  {
    id: "pi-btc",
    name: "π/BTC",
    tvl: 2150000,
    apy: 15.7,
    myStake: 500.0,
    earned: 78.5,
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      pools,
      totalTvl: pools.reduce((sum, pool) => sum + pool.tvl, 0),
      myTotalStaked: pools.reduce((sum, pool) => sum + pool.myStake, 0),
      myTotalEarned: pools.reduce((sum, pool) => sum + pool.earned, 0),
    })
  } catch (error) {
    console.error("[v0] Pools fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch pools" }, { status: 500 })
  }
}
