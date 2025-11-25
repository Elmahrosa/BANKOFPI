import { type NextRequest, NextResponse } from "next/server"

// In-memory store for demo (use database in production)
const swaps = new Map()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { receiver, amount, secret } = body

    if (!receiver || !amount || !secret) {
      return NextResponse.json({ error: "Missing required fields: receiver, amount, secret" }, { status: 400 })
    }

    // Generate swap ID
    const swapId = `swap_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Hash the secret (in production, use proper hashing)
    const hashedSecret = Buffer.from(secret).toString("base64")

    // Store swap details
    swaps.set(swapId, {
      id: swapId,
      receiver,
      amount: Number.parseFloat(amount),
      hashedSecret,
      status: "pending",
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(), // 1 hour
    })

    return NextResponse.json({
      success: true,
      message: "Swap initiated successfully",
      swapId,
      expiresAt: swaps.get(swapId).expiresAt,
    })
  } catch (error) {
    console.error("[v0] Swap initiation error:", error)
    return NextResponse.json({ error: "Failed to initiate swap" }, { status: 500 })
  }
}
