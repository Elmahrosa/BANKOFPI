import { type NextRequest, NextResponse } from "next/server"

const PI_API_KEY = process.env.PI_API_KEY || ""

export async function POST(request: NextRequest) {
  try {
    const { paymentId, txid } = await request.json()

    if (!paymentId || !txid) {
      return NextResponse.json({ error: "Payment ID and transaction ID required" }, { status: 400 })
    }

    // Complete the payment on Pi Network
    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: "POST",
      headers: {
        Authorization: `Key ${PI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ txid }),
    })

    if (!response.ok) {
      throw new Error("Failed to complete payment")
    }

    const result = await response.json()
    console.log("[v0] Payment completed:", result)

    // Here you would update your database with the completed payment
    // Store transaction details, update user balance, etc.

    return NextResponse.json({ success: true, payment: result })
  } catch (error) {
    console.error("[v0] Payment completion error:", error)
    return NextResponse.json({ error: "Payment completion failed" }, { status: 500 })
  }
}
