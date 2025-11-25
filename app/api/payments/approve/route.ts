import { type NextRequest, NextResponse } from "next/server"

// Your Pi Network API Key (add to environment variables)
const PI_API_KEY = process.env.PI_API_KEY || ""

export async function POST(request: NextRequest) {
  try {
    const { paymentId } = await request.json()

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID required" }, { status: 400 })
    }

    // Verify the payment with Pi Network API
    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}`, {
      method: "GET",
      headers: {
        Authorization: `Key ${PI_API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to verify payment")
    }

    const payment = await response.json()
    console.log("[v0] Payment verified:", payment)

    // Approve the payment
    const approveResponse = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: "POST",
      headers: {
        Authorization: `Key ${PI_API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (!approveResponse.ok) {
      throw new Error("Failed to approve payment")
    }

    const result = await approveResponse.json()
    console.log("[v0] Payment approved:", result)

    return NextResponse.json({ success: true, payment: result })
  } catch (error) {
    console.error("[v0] Payment approval error:", error)
    return NextResponse.json({ error: "Payment approval failed" }, { status: 500 })
  }
}
