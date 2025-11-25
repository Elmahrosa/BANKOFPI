import { type NextRequest, NextResponse } from "next/server"

const PI_API_KEY = process.env.PI_API_KEY || ""

export async function POST(request: NextRequest) {
  console.log("[v0] Payment approval request received")
  const startTime = Date.now()

  try {
    if (!PI_API_KEY) {
      console.error("[v0] ERROR: PI_API_KEY not set in environment variables")
      return NextResponse.json(
        {
          error: "Server configuration error - PI_API_KEY missing",
          approved: false,
        },
        { status: 500 },
      )
    }

    const { paymentId } = await request.json()
    console.log("[v0] Processing payment ID:", paymentId)

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID required" }, { status: 400 })
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 25000) // 25 second timeout

    try {
      // Verify and approve in one step to be faster
      console.log("[v0] Approving payment with Pi API...")
      const approveResponse = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
        method: "POST",
        headers: {
          Authorization: `Key ${PI_API_KEY}`,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      })

      clearTimeout(timeout)

      const responseTime = Date.now() - startTime
      console.log(`[v0] Pi API responded in ${responseTime}ms`)

      if (!approveResponse.ok) {
        const errorText = await approveResponse.text()
        console.error("[v0] Pi API error:", approveResponse.status, errorText)
        throw new Error(`Pi API returned ${approveResponse.status}: ${errorText}`)
      }

      const result = await approveResponse.json()
      console.log("[v0] Payment approved successfully:", result)

      return NextResponse.json({ success: true, approved: true, payment: result })
    } catch (fetchError: any) {
      clearTimeout(timeout)
      if (fetchError.name === "AbortError") {
        console.error("[v0] Request to Pi API timed out after 25 seconds")
        return NextResponse.json(
          {
            error: "Request to Pi API timed out",
            approved: false,
          },
          { status: 504 },
        )
      }
      throw fetchError
    }
  } catch (error: any) {
    const responseTime = Date.now() - startTime
    console.error(`[v0] Payment approval error after ${responseTime}ms:`, error)
    return NextResponse.json(
      {
        error: error.message || "Payment approval failed",
        approved: false,
        details: error.toString(),
      },
      { status: 500 },
    )
  }
}
