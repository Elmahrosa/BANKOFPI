import { type NextRequest, NextResponse } from "next/server"

// Mock credit score calculation (in production, connect to blockchain)
export async function GET(request: NextRequest, { params }: { params: { user: string } }) {
  try {
    const { user } = params

    if (!user) {
      return NextResponse.json({ error: "User address is required" }, { status: 400 })
    }

    // Mock score calculation based on on-chain data
    // In production, this would call smart contract or analyze blockchain transactions
    const mockScore = Math.floor(650 + Math.random() * 200) // 650-850

    // Calculate score factors
    const factors = {
      paymentHistory: mockScore > 750 ? "Excellent" : mockScore > 700 ? "Good" : "Fair",
      creditUtilization: mockScore > 740 ? "Good" : "Fair",
      creditAge: mockScore > 720 ? "Fair" : "Poor",
      recentInquiries: mockScore > 750 ? "Excellent" : "Good",
    }

    return NextResponse.json({
      user,
      score: mockScore,
      maxScore: 850,
      rating: mockScore > 750 ? "Good" : mockScore > 700 ? "Fair" : "Poor",
      factors,
      lastUpdated: new Date().toISOString(),
      nextUpdate: new Date(Date.now() + 30 * 24 * 3600000).toISOString(), // 30 days
    })
  } catch (error) {
    console.error("[v0] Credit score fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch credit score" }, { status: 500 })
  }
}
