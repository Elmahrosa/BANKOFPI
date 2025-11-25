"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { initPiSDK, authenticatePiUser, createPayment, isPiSDKAvailable, type PiUser } from "@/lib/pi-network"

export default function PayPage() {
  const [user, setUser] = useState<PiUser | null>(null)
  const [amount, setAmount] = useState("")
  const [memo, setMemo] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    const initializeSDK = async () => {
      if (!isPiSDKAvailable()) {
        setStatus("error")
        setMessage("Please open this app in Pi Browser to process payments")
        return
      }

      try {
        await initPiSDK()
        setSdkReady(true)
        // Auto-authenticate user
        const authenticatedUser = await authenticatePiUser()
        setUser(authenticatedUser)
      } catch (error) {
        console.error("[v0] SDK initialization failed:", error)
        setStatus("error")
        setMessage("Failed to initialize Pi SDK")
      }
    }

    initializeSDK()
  }, [])

  const handlePayment = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setStatus("error")
      setMessage("Please enter a valid amount")
      return
    }

    setLoading(true)
    setStatus("processing")
    setMessage("Processing payment...")

    try {
      await createPayment(
        {
          amount: Number.parseFloat(amount),
          memo: memo || "Payment via BANKOFPI",
          metadata: {
            type: "user-to-app",
            timestamp: new Date().toISOString(),
          },
        },
        {
          onReadyForServerApproval: async (paymentId) => {
            console.log("[v0] Approving payment:", paymentId)
            // Call your backend to approve
            const response = await fetch("/api/payments/approve", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId }),
            })

            if (!response.ok) {
              throw new Error("Payment approval failed")
            }
          },
          onReadyForServerCompletion: async (paymentId, txid) => {
            console.log("[v0] Completing payment:", paymentId, txid)
            // Call your backend to complete
            const response = await fetch("/api/payments/complete", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid }),
            })

            if (!response.ok) {
              throw new Error("Payment completion failed")
            }

            setStatus("success")
            setMessage(`Payment of ${amount} π completed successfully!`)
            setLoading(false)
            setAmount("")
            setMemo("")
          },
          onCancel: (paymentId) => {
            console.log("[v0] Payment cancelled:", paymentId)
            setStatus("error")
            setMessage("Payment was cancelled")
            setLoading(false)
          },
          onError: (error) => {
            console.error("[v0] Payment error:", error)
            setStatus("error")
            setMessage(`Payment failed: ${error.message}`)
            setLoading(false)
          },
        },
      )
    } catch (error: any) {
      setStatus("error")
      setMessage(`Error: ${error.message}`)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4 max-w-md">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-foreground">Pay with Pi</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md">
        {user && (
          <Card className="mb-6 bg-primary/10 border-primary/20">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Logged in as</p>
              <p className="font-bold text-foreground">@{user.username}</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Process Payment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Amount (π)</label>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={loading || !sdkReady}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Memo (Optional)</label>
              <Input
                type="text"
                placeholder="What's this payment for?"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                disabled={loading || !sdkReady}
              />
            </div>

            {status !== "idle" && (
              <div
                className={`flex items-start gap-2 p-3 rounded-lg ${
                  status === "success"
                    ? "bg-chart-2/20 text-chart-2"
                    : status === "error"
                      ? "bg-chart-5/20 text-chart-5"
                      : "bg-chart-1/20 text-chart-1"
                }`}
              >
                {status === "success" && <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                {status === "error" && <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                {status === "processing" && <Loader2 className="h-5 w-5 mt-0.5 flex-shrink-0 animate-spin" />}
                <p className="text-sm">{message}</p>
              </div>
            )}

            <Button className="w-full" size="lg" onClick={handlePayment} disabled={loading || !sdkReady || !amount}>
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Pay {amount || "0"} π
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-card/50">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Setup Instructions:</h3>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>Add PI_API_KEY to your environment variables</li>
              <li>Open this app in Pi Browser on mainnet</li>
              <li>Authenticate when prompted</li>
              <li>Enter payment amount and confirm</li>
              <li>Approve the transaction in Pi wallet</li>
            </ol>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
