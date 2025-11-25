"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowDownUp, Info } from "lucide-react"
import Link from "next/link"

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("PI")
  const [toCurrency, setToCurrency] = useState("USD")

  const exchangeRate = 16.16

  const handleSwap = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    if (value) {
      const calculated =
        fromCurrency === "PI" ? Number.parseFloat(value) * exchangeRate : Number.parseFloat(value) / exchangeRate
      setToAmount(calculated.toFixed(2))
    } else {
      setToAmount("")
    }
  }

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
            <h1 className="text-xl font-bold text-foreground">Atomic Swap</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md">
        {/* Exchange Rate Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-card border-primary/20 mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Rate</p>
                <p className="text-2xl font-bold text-foreground">1 π = ${exchangeRate.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <ArrowDownUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Swap Interface */}
        <Card className="bg-card mb-6">
          <CardHeader>
            <CardTitle className="text-base">Exchange</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* From */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">From</label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={fromAmount}
                  onChange={(e) => handleFromAmountChange(e.target.value)}
                  className="text-lg flex-1"
                />
                <Button variant="outline" className="min-w-[80px] bg-transparent">
                  {fromCurrency}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Available: {fromCurrency === "PI" ? "795.43 π" : "$12,847.50"}
              </p>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <Button variant="ghost" size="icon" onClick={handleSwap} className="rounded-full bg-secondary">
                <ArrowDownUp className="h-5 w-5" />
              </Button>
            </div>

            {/* To */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">To</label>
              <div className="flex gap-3">
                <Input type="number" placeholder="0.00" value={toAmount} readOnly className="text-lg flex-1" />
                <Button variant="outline" className="min-w-[80px] bg-transparent">
                  {toCurrency}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">You will receive approximately</p>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Details */}
        <Card className="bg-card mb-6">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Exchange Rate</span>
              <span className="font-semibold text-foreground">1 π = ${exchangeRate.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Network Fee</span>
              <span className="font-semibold text-foreground">0.001 π</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Estimated Time</span>
              <span className="font-semibold text-foreground">~30 seconds</span>
            </div>
          </CardContent>
        </Card>

        {/* Info Banner */}
        <Card className="bg-chart-3/10 border-chart-3/20 mb-6">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-chart-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Atomic Swap Technology</p>
                <p className="text-xs text-muted-foreground">
                  Your transaction is secured through smart contracts, ensuring trustless and instant exchanges without
                  intermediaries.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Swap Button */}
        <Button className="w-full" size="lg" disabled={!fromAmount || Number.parseFloat(fromAmount) <= 0}>
          Complete Swap
        </Button>

        {/* Recent Swaps */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-foreground mb-3">Recent Swaps</h3>
          <div className="space-y-2">
            {[
              { from: "50 π", to: "$808.00", time: "2h ago" },
              { from: "$500", to: "30.95 π", time: "1d ago" },
              { from: "100 π", to: "$1,616.00", time: "3d ago" },
            ].map((swap, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {swap.from} → {swap.to}
                        </p>
                        <p className="text-xs text-muted-foreground">{swap.time}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
