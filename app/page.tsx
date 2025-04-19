import Link from "next/link"
import { Download, ChevronRight, Smartphone, Shield, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-sm" />
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
              <Link href="#download">
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Easy Expense Tracker</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Track income, expenses, and balances across multiple accounts with ease. Your all-in-one personal
                    finance tracker designed to help you take control of your money.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row" id="download">
                  <Link href="https://play.google.com/storehttps://play.google.com/apps/test/com.honeysea.expense/2" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      <Download className="mr-2 h-4 w-4" /> Download on Play Store
                    </Button>
                  </Link>
                  <Link href="/privacy">
                    <Button size="lg" variant="outline">
                      Privacy Policy <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
                <div className=" lg:flex justify-center items-center">
                <img src="/abs.jpg" alt="Phone" className="w-full max-w-[400px] rounded-lg shadow-lg" />
                </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your personal finances in one place
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <BarChart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Track Everything</h3>
                <p className="text-center text-gray-500">
                  Track income, expenses, and balances across multiple accounts, wallets, and banks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Smartphone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-center text-gray-500">
                  Add transactions manually, view reports by date or category, and stay on top of your financial goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Secure & Private</h3>
                <p className="text-center text-gray-500">
                  Your data is securely stored and encrypted. We never sell or share your financial information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Easy Expense Tracker. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="underline underline-offset-4 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#download" className="underline underline-offset-4 hover:text-gray-900">
              Download
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
