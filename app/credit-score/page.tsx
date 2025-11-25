"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function CreditScorePage() {
  const score = 742
  const maxScore = 850

  const scorePercentage = (score / maxScore) * 100

  const factors = [
    { label: "Payment History", score: "Excellent", color: "text-chart-2", icon: CheckCircle2 },
    { label: "Credit Utilization", score: "Good", color: "text-chart-3", icon: TrendingUp },
    { label: "Credit Age", score: "Fair", color: "text-chart-3", icon: Clock },
    { label: "Recent Inquiries", score: "Excellent", color: "text-chart-2", icon: CheckCircle2 },
  ]

  const recommendations = [
    "Keep credit utilization below 30%",
    "Continue making on-time payments",
    "Avoid opening too many new accounts",
    "Monitor your credit report regularly",
  ]

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-md">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Credit Score</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md">
        {/* Score Display */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6">
          <CardContent className="p-8 text-center">
            <p className="text-sm opacity-90 mb-2">Your Credit Score</p>
            <div className="relative w-48 h-48 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" fill="none" stroke="currentColor" strokeWidth="12" opacity="0.2" />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray={`${(scorePercentage / 100) * 502} 502`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <p className="text-6xl font-bold">{score}</p>
                  <p className="text-sm opacity-90">out of {maxScore}</p>
                </div>
              </div>
            </div>
            <p className="text-lg font-semibold mb-1">Good Credit</p>
            <p className="text-sm opacity-90">Keep up the great work!</p>
          </CardContent>
        </Card>

        {/* Score Breakdown */}
        <Card className="bg-card mb-6">
          <CardHeader>
            <CardTitle className="text-base">Score Factors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {factors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <factor.icon className={`h-5 w-5 ${factor.color}`} />
                  <span className="text-sm text-foreground">{factor.label}</span>
                </div>
                <span className={`text-sm font-semibold ${factor.color}`}>{factor.score}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Credit Utilization */}
        <Card className="bg-card mb-6">
          <CardHeader>
            <CardTitle className="text-base">Credit Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Used Credit</span>
                <span className="font-semibold text-foreground">$3,250</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-chart-3 h-3 rounded-full" style={{ width: "32.5%" }}></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Total Credit</span>
                <span className="font-semibold text-foreground">$10,000</span>
              </div>
              <p className="text-xs text-muted-foreground">You're using 32.5% of your available credit</p>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-card mb-6">
          <CardHeader>
            <CardTitle className="text-base">Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Alert */}
        <Card className="bg-chart-3/10 border-chart-3/20">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-chart-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Score Updated Monthly</p>
                <p className="text-xs text-muted-foreground">
                  Your credit score is calculated on-chain using blockchain technology, ensuring transparency and
                  security. Next update in 12 days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
