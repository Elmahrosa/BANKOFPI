"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4 max-w-md">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-bold text-xl text-foreground">Terms of Service</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-8">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Last Updated: November 25, 2024</CardTitle>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              By accessing and using BANKOFPI, you accept and agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our services.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Account Registration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">You must provide accurate and complete information when creating an account.</p>
              <p className="mb-3">
                You are responsible for maintaining the confidentiality of your account credentials.
              </p>
              <p>You must notify us immediately of any unauthorized access to your account.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Pi Network Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                BANKOFPI integrates with Pi Network for cryptocurrency transactions and mining activities.
              </p>
              <p className="mb-3">Pi cryptocurrency values are subject to market fluctuations.</p>
              <p>Mining rates and rewards are determined by network consensus and may change.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Financial Services</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">DeFi lending, atomic swaps, and other financial services carry inherent risks.</p>
              <p className="mb-3">We do not guarantee returns on investments or deposits.</p>
              <p>You are responsible for understanding the risks before using any financial service.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Transaction Limits</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                Daily and monthly transaction limits may apply based on your account verification level.
              </p>
              <p className="mb-3">We reserve the right to suspend or limit transactions for security purposes.</p>
              <p>All transactions are subject to fraud detection and compliance checks.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Fees and Charges</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">Transaction fees may apply for certain services including swaps and transfers.</p>
              <p className="mb-3">Fee structures are transparent and displayed before transaction confirmation.</p>
              <p>We reserve the right to modify fees with advance notice to users.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">You may not use BANKOFPI for illegal activities or money laundering.</p>
              <p className="mb-3">Automated bots or scripts to manipulate services are strictly prohibited.</p>
              <p>Sharing account access with unauthorized parties is not allowed.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Liability Limitations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">BANKOFPI is provided "as is" without warranties of any kind.</p>
              <p className="mb-3">We are not liable for losses resulting from market volatility or user error.</p>
              <p>Our maximum liability is limited to the amount of fees paid in the last 12 months.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Termination</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">We may suspend or terminate your account for violation of these terms.</p>
              <p className="mb-3">You may close your account at any time by contacting support.</p>
              <p>Upon termination, you remain liable for any outstanding obligations.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">We reserve the right to modify these terms at any time.</p>
              <p className="mb-3">Users will be notified of significant changes via email or in-app notification.</p>
              <p>Continued use after changes constitutes acceptance of new terms.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-2">For questions about these Terms of Service:</p>
              <p className="mb-2">Email: legal@bankofpi.com</p>
              <p className="mb-2">Support: support@bankofpi.com</p>
              <p>Address: First Pimisr Bank Elmahrosa, Egypt</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
