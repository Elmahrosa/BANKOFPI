import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { poolId, amount } = body

    if (!poolId || !amount) {
      return NextResponse.json({ error: "Missing required fields: poolId, amount" }, { status: 400 })
    }

    // Mock staking transaction
    const txHash = `0x${Math.random().toString(16).substr(2, 64)}`

    return NextResponse.json({
      success: true,
      message: "Staking successful",
      transaction: {
        hash: txHash,
        poolId,
        amount: Number.parseFloat(amount),
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("[v0] Staking error:", error)
    return NextResponse.json({ error: "Failed to stake tokens" }, { status: 500 })
  }
}
