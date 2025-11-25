"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, TrendingUp, Shield, Coins, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DeFiPage() {
  const [amount, setAmount] = useState("")
  const [selectedPool, setSelectedPool] = useState<string | null>(null)

  const pools = [
    { id: 1, name: "Pi Stable Pool", apy: "8.5%", tvl: "$2.5M", risk: "Low", icon: "💎" },
    { id: 2, name: "High Yield Pi", apy: "15.2%", tvl: "$1.2M", risk: "Medium", icon: "🚀" },
    { id: 3, name: "Pi-USD LP", apy: "12.8%", tvl: "$3.1M", risk: "Low", icon: "💰" },
  ]

  const positions = [
    { pool: "Pi Stable Pool", deposited: "250 π", earned: "12.5 π", value: "$4,035" },
    { pool: "High Yield Pi", deposited: "100 π", earned: "8.2 π", value: "$1,748" },
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
            <h1 className="text-xl font-bold text-foreground">DeFi Lending</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md">
        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="bg-card">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-5 w-5 text-chart-2 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Total Earned</p>
              <p className="text-lg font-bold text-foreground">20.7 π</p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-4 text-center">
              <Coins className="h-5 w-5 text-chart-1 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Deposited</p>
              <p className="text-lg font-bold text-foreground">350 π</p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-4 text-center">
              <Shield className="h-5 w-5 text-chart-3 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">APY Avg</p>
              <p className="text-lg font-bold text-foreground">11.9%</p>
            </CardContent>
          </Card>
        </div>

        {/* Your Positions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Your Positions</h2>
          <div className="space-y-3">
            {positions.map((position, index) => (
              <Card key={index} className="bg-card hover:bg-accent/30 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{position.pool}</h3>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Deposited</p>
                      <p className="font-semibold text-foreground">{position.deposited}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Earned</p>
                      <p className="font-semibold text-chart-2">{position.earned}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-xs">Value</p>
                      <p className="font-semibold text-foreground">{position.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Pools */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Available Pools</h2>
          <div className="space-y-3">
            {pools.map((pool) => (
              <Card
                key={pool.id}
                className={`bg-card hover:bg-accent/30 transition-colors cursor-pointer ${
                  selectedPool === pool.name ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedPool(pool.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                        {pool.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{pool.name}</h3>
                        <p className="text-xs text-muted-foreground">TVL: {pool.tvl}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-chart-2">{pool.apy}</p>
                      <p className="text-xs text-muted-foreground">APY</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        pool.risk === "Low"
                          ? "bg-chart-2/20 text-chart-2"
                          : pool.risk === "Medium"
                            ? "bg-chart-3/20 text-chart-3"
                            : "bg-chart-5/20 text-chart-5"
                      }`}
                    >
                      {pool.risk} Risk
                    </span>
                    {selectedPool === pool.name && (
                      <Button size="sm" className="h-8">
                        Deposit
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Deposit Form */}
        {selectedPool && (
          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-base">Deposit to {selectedPool}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Amount (π)</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground mt-1">Available: 795.43 π</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setAmount("100")}>
                  100 π
                </Button>
                <Button variant="outline" size="sm" onClick={() => setAmount("250")}>
                  250 π
                </Button>
                <Button variant="outline" size="sm" onClick={() => setAmount("795.43")}>
                  Max
                </Button>
              </div>
              <Button className="w-full" size="lg">
                Confirm Deposit
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
