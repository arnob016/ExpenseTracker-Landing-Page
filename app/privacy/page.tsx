import Link from "next/link"
import { ChevronLeft, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <BarChart className="h-6 w-6 text-emerald-600" />
            <span>Easy Expense Tracker</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/#features">
                <Button variant="ghost">Features</Button>
              </Link>
              <Link href="/privacy">
                <Button variant="ghost">Privacy Policy</Button>
              </Link>
              <Link href="/#download">
                <Button>Download</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="mr-1 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <div className="text-sm text-gray-500">
              <p>Effective Date: 20 April, 2025</p>
              <p>Last Updated: 20 April, 2025</p>
            </div>

            <p>
              Easy Expense Tracker is committed to protecting your privacy. This privacy policy explains how we collect,
              store, and use your data when you use our app.
            </p>

            <div className="space-y-6">
              <section className="space-y-2">
                <h2 className="text-xl font-bold">1. Data Collection & Storage</h2>
                <p>We collect and store the data you enter into the app, such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Income entries</li>
                  <li>Expense records</li>
                  <li>Account or wallet balances</li>
                </ul>
                <p>
                  All user data is securely stored in our database using industry-standard encryption to ensure your
                  privacy and security.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold">2. Data Usage</h2>
                <p>
                  We do not use, sell, or share your personal or financial data with any third parties. Your data is
                  used only to provide the core functionality of the app.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold">3. Data Deletion</h2>
                <p>
                  When you delete your data or your account within the app, that data is permanently removed from our
                  database.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold">4. Data Security</h2>
                <p>We take security seriously. All user data is:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Encrypted at rest and in transit</li>
                  <li>Access-controlled to prevent unauthorized access</li>
                  <li>Regularly monitored for vulnerabilities</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold">5. Third-Party Services</h2>
                <p>Easy Expense Tracker does not integrate with any third-party services that collect personal data.</p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold">6. Your Consent</h2>
                <p>By using Easy Expense Tracker, you agree to this privacy policy.</p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold">7. Contact Us</h2>
                <p>If you have any questions or concerns about your data, please contact us at:</p>
                <p>arnob.social@gmail.com</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-gray-50 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HoneySea. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="underline underline-offset-4 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/#download" className="underline underline-offset-4 hover:text-gray-900">
              Download
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
