import { type NextRequest, NextResponse } from "next/server"

// Use the same in-memory store (in production, use database)
const swaps = new Map()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { swapId, secret } = body

    if (!swapId || !secret) {
      return NextResponse.json({ error: "Missing required fields: swapId, secret" }, { status: 400 })
    }

    // Get swap details
    const swap = swaps.get(swapId)

    if (!swap) {
      return NextResponse.json({ error: "Swap not found" }, { status: 404 })
    }

    // Check if swap is expired
    if (new Date() > new Date(swap.expiresAt)) {
      return NextResponse.json({ error: "Swap has expired" }, { status: 400 })
    }

    // Verify secret
    const hashedSecret = Buffer.from(secret).toString("base64")
    if (hashedSecret !== swap.hashedSecret) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 403 })
    }

    // Update swap status
    swap.status = "completed"
    swap.completedAt = new Date().toISOString()
    swaps.set(swapId, swap)

    return NextResponse.json({
      success: true,
      message: "Swap completed successfully",
      swap: {
        id: swap.id,
        receiver: swap.receiver,
        amount: swap.amount,
        status: swap.status,
        completedAt: swap.completedAt,
      },
    })
  } catch (error) {
    console.error("[v0] Swap completion error:", error)
    return NextResponse.json({ error: "Failed to complete swap" }, { status: 500 })
  }
}
