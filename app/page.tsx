"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Send,
  Wallet,
  CreditCard,
  ChevronRight,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Menu,
  Bell,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [showBalance, setShowBalance] = useState(true)

  const quickActions = [
    { icon: Send, label: "Send", href: "#send" },
    { icon: ArrowDownLeft, label: "Receive", href: "#receive" },
    { icon: CreditCard, label: "Pay", href: "#pay" },
    { icon: TrendingUp, label: "Invest", href: "#invest" },
  ]

  const recentTransactions = [
    { id: 1, type: "received", name: "John Doe", amount: "+$250.00", time: "2h ago", pi: "+15.5 π" },
    { id: 2, type: "sent", name: "Coffee Shop", amount: "-$5.50", time: "5h ago", pi: "-0.34 π" },
    { id: 3, type: "received", name: "Salary Deposit", amount: "+$3,200.00", time: "1d ago", pi: "+198 π" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-md">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">π</span>
            </div>
            <span className="font-bold text-xl text-foreground">BANKOFPI</span>
          </div>
          <Button variant="ghost" size="icon" className="text-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-chart-1 rounded-full"></span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-24">
        {/* Balance Card */}
        <Card className="bg-primary text-primary-foreground mb-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full -ml-12 -mb-12"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-primary-foreground/80 text-sm">Total Balance</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground h-8 w-8"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
            </div>
            <h2 className="text-4xl font-bold mb-1">{showBalance ? "$12,847.50" : "••••••"}</h2>
            <p className="text-primary-foreground/80 text-sm flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              +2.5% from last month
            </p>

            <div className="mt-6 pt-4 border-t border-primary-foreground/20 flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-xs">Pi Balance</p>
                <p className="text-xl font-bold">{showBalance ? "795.43 π" : "•••• π"}</p>
              </div>
              <div className="text-right">
                <p className="text-primary-foreground/80 text-xs">≈ USD</p>
                <p className="text-xl font-bold">{showBalance ? "$12,847.50" : "••••••"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {quickActions.map((action) => (
            <Link href={action.href} key={action.label}>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                  <action.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">{action.label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link href="/defi">
            <Card className="bg-card hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-1/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-chart-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">DeFi</p>
                  <p className="text-xs text-muted-foreground">Lending</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/swap">
            <Card className="bg-card hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Swap</p>
                  <p className="text-xs text-muted-foreground">Pi ⇄ USD</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cards">
            <Card className="bg-card hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Cards</p>
                  <p className="text-xs text-muted-foreground">Manage</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/credit-score">
            <Card className="bg-card hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-4/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-chart-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Score</p>
                  <p className="text-xs text-muted-foreground">Credit</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-foreground">Recent Activity</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              See all
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <Card key={transaction.id} className="bg-card hover:bg-accent/30 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "received" ? "bg-chart-2/20" : "bg-chart-5/20"
                      }`}
                    >
                      {transaction.type === "received" ? (
                        <ArrowDownLeft className={`h-5 w-5 text-chart-2`} />
                      ) : (
                        <ArrowUpRight className={`h-5 w-5 text-chart-5`} />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{transaction.name}</p>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-bold text-sm ${
                        transaction.type === "received" ? "text-chart-2" : "text-foreground"
                      }`}
                    >
                      {transaction.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">{transaction.pi}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mining Status */}
        <Card className="bg-gradient-to-br from-chart-1/20 via-card to-card border-chart-1/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Pi Mining</p>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-chart-1">+24.5 π</p>
                <p className="text-xs text-muted-foreground">Today</p>
              </div>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-chart-1 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Next mining session in 6h 24m</p>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">© 2025 BANKOFPI. All rights reserved.</p>
        </footer>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-md">
          <div className="flex items-center justify-around py-3">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-primary">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-muted-foreground">
              <Wallet className="h-5 w-5" />
              <span className="text-xs">Wallet</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-muted-foreground">
              <CreditCard className="h-5 w-5" />
              <span className="text-xs">Cards</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-muted-foreground">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs">Invest</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
