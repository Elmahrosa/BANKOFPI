"use client"

import { useState, useEffect } from "react"
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
  Zap,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [showBalance, setShowBalance] = useState(true)
  const [paymentStatus, setPaymentStatus] = useState("")
  const [isPiBrowser, setIsPiBrowser] = useState(false)
  const [isCheckingSdk, setIsCheckingSdk] = useState(true)

  useEffect(() => {
    const checkPiSdk = () => {
      if (typeof window !== "undefined") {
        const hasPi = !!(window as any).Pi
        setIsPiBrowser(hasPi)
        setIsCheckingSdk(false)
        console.log("[v0] Pi SDK available:", hasPi)
      }
    }

    checkPiSdk()

    const timer = setTimeout(checkPiSdk, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleTestPayment = async () => {
    try {
      setPaymentStatus("Checking Pi SDK...")

      if (typeof window === "undefined" || !(window as any).Pi) {
        setPaymentStatus("ERROR: Pi SDK not loaded. Please open in Pi Browser")
        return
      }

      setPaymentStatus("Initializing payment...")
      const Pi = (window as any).Pi

      await Pi.init({ version: "2.0", sandbox: true })
      const scopes = ["payments"]
      const authResult = await Pi.authenticate(scopes, onIncompletePaymentFound)
      console.log("[v0] Auth result:", authResult)

      setPaymentStatus("Creating payment...")

      const payment = await Pi.createPayment(
        {
          amount: 1,
          memo: "Test payment from BANKOFPI",
          metadata: { productId: "test_payment_001" },
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            console.log("[v0] Payment ready:", paymentId)
            setPaymentStatus(`Approving payment ${paymentId}...`)

            const response = await fetch("/api/payments/approve", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId }),
            })

            const data = await response.json()
            console.log("[v0] Approval response:", data)

            if (!response.ok) {
              throw new Error(data.error || "Failed to approve payment")
            }
          },
          onReadyForServerCompletion: async (paymentId: string, txid: string) => {
            console.log("[v0] Payment completed:", paymentId, txid)
            setPaymentStatus(`Completing payment ${paymentId}...`)

            const response = await fetch("/api/payments/complete", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid }),
            })

            const data = await response.json()
            console.log("[v0] Completion response:", data)

            if (!response.ok) {
              throw new Error(data.error || "Failed to complete payment")
            }

            setPaymentStatus("SUCCESS! Payment completed: " + txid)
          },
          onCancel: (paymentId: string) => {
            console.log("[v0] Payment cancelled:", paymentId)
            setPaymentStatus("Payment cancelled by user")
          },
          onError: (error: Error, payment?: any) => {
            console.error("[v0] Payment error:", error, payment)
            setPaymentStatus("ERROR: " + error.message)
          },
        },
      )

      console.log("[v0] Payment created:", payment)
    } catch (error: any) {
      console.error("[v0] Test payment error:", error)
      setPaymentStatus("ERROR: " + error.message)
    }
  }

  function onIncompletePaymentFound(payment: any) {
    console.log("[v0] Incomplete payment found:", payment)
    return payment.paymentId
  }

  const quickActions = [
    { icon: Send, label: "Send", href: "#send" },
    { icon: ArrowDownLeft, label: "Receive", href: "#receive" },
    { icon: CreditCard, label: "Pay", href: "/pay" },
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
        {!isCheckingSdk && (
          <Card className={`mb-4 ${isPiBrowser ? "bg-chart-2/10 border-chart-2" : "bg-chart-5/10 border-chart-5"}`}>
            <CardContent className="p-4 flex items-start gap-3">
              {isPiBrowser ? (
                <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-chart-5 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className={`font-semibold text-sm ${isPiBrowser ? "text-chart-2" : "text-chart-5"}`}>
                  {isPiBrowser ? "Pi Browser Detected!" : "Not in Pi Browser"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {isPiBrowser
                    ? "You can now test Pi payments. Make sure your API key is configured."
                    : "To test Pi payments, please open this app in Pi Browser. Go to Pi app > Mine > Browser and enter: teosegypt.com"}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card
          className={`mb-6 ${
            isPiBrowser
              ? "bg-gradient-to-r from-chart-1 to-chart-2"
              : "bg-gradient-to-r from-muted-foreground/50 to-muted-foreground/70"
          } text-white`}
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Test Pi Payment</p>
                <p className="text-xs opacity-90">
                  {isPiBrowser ? "Click to test 1π transaction" : "Only works in Pi Browser"}
                </p>
              </div>
            </div>
            <Button
              onClick={handleTestPayment}
              disabled={!isPiBrowser}
              className="w-full bg-white text-chart-1 hover:bg-white/90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              size="sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              Test Payment (1π)
            </Button>
            {paymentStatus && <div className="mt-3 p-2 bg-white/20 rounded text-xs break-words">{paymentStatus}</div>}
          </CardContent>
        </Card>

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
