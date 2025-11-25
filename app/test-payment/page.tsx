"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, AlertCircle } from "lucide-react"
import Link from "next/link"

declare global {
  interface Window {
    Pi?: {
      init: (config: { version: string; sandbox?: boolean }) => void
      authenticate: (scopes: string[], onIncompletePaymentFound: (payment: any) => void) => Promise<any>
      createPayment: (paymentData: any, callbacks: any) => void
    }
  }
}

export default function TestPaymentPage() {
  const [status, setStatus] = useState<string>("Ready to test")
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    console.log("[v0]", message)
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const testPiSDK = async () => {
    setStatus("Testing...")
    addLog("Starting Pi SDK test...")

    // Check if Pi SDK is available
    if (typeof window === "undefined") {
      setStatus("Error: Not in browser")
      addLog("ERROR: Not running in browser")
      return
    }

    if (!window.Pi) {
      setStatus("Error: Pi SDK not found")
      addLog("ERROR: window.Pi is not available. Are you in Pi Browser?")
      return
    }

    addLog("✓ Pi SDK detected!")

    try {
      // Initialize Pi SDK
      addLog("Initializing Pi SDK...")
      window.Pi.init({ version: "2.0" })
      addLog("✓ Pi SDK initialized")

      // Authenticate user
      addLog("Authenticating user...")
      const scopes = ["username", "payments"]
      const auth = await window.Pi.authenticate(scopes, (payment: any) => {
        addLog(`Incomplete payment found: ${payment.identifier}`)
      })

      addLog(`✓ Authenticated as: ${auth.user.username}`)
      setStatus(`Authenticated as @${auth.user.username}`)

      // Create test payment
      addLog("Creating test payment for 0.01 π...")

      const paymentData = {
        amount: 0.01,
        memo: "Test payment from BANKOFPI",
        metadata: { test: true },
      }

      const paymentCallbacks = {
        onReadyForServerApproval: (paymentId: string) => {
          addLog(`✓ Payment created: ${paymentId}`)
          addLog("Calling /api/payments/approve...")

          fetch("/api/payments/approve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId }),
          })
            .then((res) => res.json())
            .then((data) => {
              addLog(`✓ Server approved payment`)
            })
            .catch((err) => {
              addLog(`ERROR approving: ${err.message}`)
            })
        },
        onReadyForServerCompletion: (paymentId: string, txid: string) => {
          addLog(`✓ Payment approved by user. TxID: ${txid}`)
          addLog("Calling /api/payments/complete...")

          fetch("/api/payments/complete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId, txid }),
          })
            .then((res) => res.json())
            .then((data) => {
              addLog(`✓✓✓ PAYMENT COMPLETED SUCCESSFULLY!`)
              setStatus("✓ Payment completed!")
            })
            .catch((err) => {
              addLog(`ERROR completing: ${err.message}`)
            })
        },
        onCancel: (paymentId: string) => {
          addLog(`Payment cancelled: ${paymentId}`)
          setStatus("Payment cancelled")
        },
        onError: (error: Error, payment?: any) => {
          addLog(`ERROR: ${error.message}`)
          setStatus(`Error: ${error.message}`)
        },
      }

      window.Pi.createPayment(paymentData, paymentCallbacks)
      addLog("Payment dialog should appear...")
    } catch (error: any) {
      addLog(`ERROR: ${error.message}`)
      setStatus(`Error: ${error.message}`)
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
          <h1 className="text-xl font-bold text-foreground">Test Pi Payment</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md space-y-4">
        <Card className="bg-chart-1/10 border-chart-1/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-chart-1" />
              <p className="font-semibold text-sm">Quick Test</p>
            </div>
            <p className="text-sm text-muted-foreground">
              This page will test a 0.01 π payment and show detailed logs. Make sure you're in Pi Browser on mainnet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <p className="font-mono text-sm">{status}</p>
            </div>
            <Button onClick={testPiSDK} className="w-full" size="lg">
              <Zap className="h-5 w-5 mr-2" />
              Test 0.01 π Payment
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Debug Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary p-4 rounded-lg max-h-96 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-sm text-muted-foreground">No logs yet. Click the button to start test.</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, i) => (
                    <p key={i} className="font-mono text-xs text-foreground">
                      {log}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-sm">Checklist:</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Pi Browser SDK script in layout.tsx</li>
              <li>✓ Open app in Pi Browser</li>
              <li>✓ PI_API_KEY in environment variables</li>
              <li>✓ Backend API routes deployed</li>
              <li>? Click "Test 0.01 π Payment" button</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
