"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wifi, WifiOff, Check, Clock } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  const [isOffline, setIsOffline] = useState(false)

  const pendingTransactions = [
    { id: 1, type: "Send", recipient: "John Doe", amount: "25 π", status: "pending" },
    { id: 2, type: "Payment", recipient: "Coffee Shop", amount: "$5.50", status: "pending" },
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
            <h1 className="text-xl font-bold text-foreground">Offline Banking</h1>
            <div className="ml-auto">
              {isOffline ? <WifiOff className="h-5 w-5 text-chart-5" /> : <Wifi className="h-5 w-5 text-chart-2" />}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md">
        <Card className={`mb-6 ${isOffline ? "bg-chart-5/10 border-chart-5/20" : "bg-chart-2/10 border-chart-2/20"}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {isOffline ? <WifiOff className="h-6 w-6 text-chart-5" /> : <Wifi className="h-6 w-6 text-chart-2" />}
              <div className="flex-1">
                <p className="font-semibold text-foreground">{isOffline ? "Offline Mode Active" : "Connected"}</p>
                <p className="text-xs text-muted-foreground">
                  {isOffline ? "Transactions will sync when online" : "All features available"}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsOffline(!isOffline)}>
                {isOffline ? "Go Online" : "Go Offline"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card mb-6">
          <CardHeader>
            <CardTitle className="text-base">Offline Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Queue Transactions</p>
                  <p className="text-xs text-muted-foreground">Create transactions offline and sync when connected</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">View Balance</p>
                  <p className="text-xs text-muted-foreground">Access your last synced balance information</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Transaction History</p>
                  <p className="text-xs text-muted-foreground">Browse your cached transaction history</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {pendingTransactions.length > 0 && isOffline && (
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base">Pending Sync</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-chart-3" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{tx.type}</p>
                      <p className="text-xs text-muted-foreground">{tx.recipient}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-foreground">{tx.amount}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
