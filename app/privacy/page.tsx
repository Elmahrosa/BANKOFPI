"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Eye, Database, Globe, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="font-bold text-xl text-foreground">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-8">
        <Card className="mb-4 bg-primary/5 border-primary/20">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Your Privacy Matters</p>
              <p className="text-xs text-muted-foreground">Last Updated: November 25, 2024</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-chart-1/20 flex items-center justify-center">
                  <Database className="h-4 w-4 text-chart-1" />
                </div>
                <CardTitle>1. Information We Collect</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3 font-semibold text-foreground">Personal Information:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Name, email address, phone number</li>
                <li>Government-issued ID for verification</li>
                <li>Address and date of birth</li>
              </ul>
              <p className="mb-3 font-semibold text-foreground">Financial Information:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Bank account details</li>
                <li>Transaction history</li>
                <li>Pi Network wallet address</li>
              </ul>
              <p className="mb-3 font-semibold text-foreground">Device Information:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>IP address and device type</li>
                <li>Operating system and browser</li>
                <li>Location data (with permission)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Eye className="h-4 w-4 text-chart-2" />
                </div>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Process transactions and provide banking services</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Improve our app and develop new features</li>
                <li>Send important notifications about your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-chart-3/20 flex items-center justify-center">
                  <Lock className="h-4 w-4 text-chart-3" />
                </div>
                <CardTitle>3. Data Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Two-factor authentication (2FA) for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Secure backup systems with redundancy</li>
                <li>Restricted employee access to personal data</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-chart-4/20 flex items-center justify-center">
                  <Globe className="h-4 w-4 text-chart-4" />
                </div>
                <CardTitle>4. Information Sharing</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">We only share your information in limited circumstances:</p>
              <p className="mb-3 font-semibold text-foreground">With Your Consent:</p>
              <p className="mb-3">We may share data when you explicitly authorize us to do so.</p>
              <p className="mb-3 font-semibold text-foreground">Service Providers:</p>
              <p className="mb-3">
                Trusted partners who help us operate our services (payment processors, cloud hosting).
              </p>
              <p className="mb-3 font-semibold text-foreground">Legal Requirements:</p>
              <p className="mb-3">When required by law, regulation, or legal process.</p>
              <p className="mb-3 font-semibold text-foreground">Business Transfers:</p>
              <p>In the event of a merger, acquisition, or sale of assets.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Pi Network Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                Our integration with Pi Network involves sharing necessary data for transaction processing and mining
                activities.
              </p>
              <p className="mb-3">Pi Network has its own privacy policy that governs their data handling.</p>
              <p>We recommend reviewing Pi Network's privacy policy separately.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">We retain your information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="mt-3">
                After account closure, we may retain certain data for regulatory compliance purposes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze app performance and usage</li>
                <li>Prevent fraud and enhance security</li>
                <li>Provide personalized experience</li>
              </ul>
              <p className="mt-3">You can control cookies through your browser settings.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">Your data may be transferred to and processed in countries other than your own.</p>
              <p className="mb-3">We ensure appropriate safeguards are in place for international transfers.</p>
              <p>All transfers comply with applicable data protection laws.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">BANKOFPI is not intended for users under 18 years of age.</p>
              <p className="mb-3">We do not knowingly collect information from children.</p>
              <p>If we discover we have collected data from a child, we will delete it immediately.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                We may update this Privacy Policy periodically to reflect changes in our practices.
              </p>
              <p className="mb-3">We will notify you of significant changes via email or in-app notification.</p>
              <p>Your continued use after changes indicates acceptance of the updated policy.</p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>12. Contact Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">For privacy-related questions or concerns:</p>
              <p className="mb-2 text-foreground font-semibold">Email: privacy@bankofpi.com</p>
              <p className="mb-2 text-foreground font-semibold">Data Protection Officer: dpo@bankofpi.com</p>
              <p className="mb-2 text-foreground font-semibold">Support: support@bankofpi.com</p>
              <p className="text-foreground font-semibold">Address: First Pimisr Bank Elmahrosa, Egypt</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
