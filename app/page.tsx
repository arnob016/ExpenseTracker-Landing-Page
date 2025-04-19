import Link from "next/link"
import { Download, ChevronRight, Smartphone, Shield, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
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
                  <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
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
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[40px] border-8 border-gray-800 bg-gray-800 shadow-xl">
                  <div className="absolute inset-0 bg-emerald-100">
                    <div className="p-4 flex flex-col h-full">
                      <div className="bg-emerald-600 text-white p-4 rounded-lg mb-4 flex justify-between items-center">
                        <h3 className="font-bold">Easy Expense Tracker</h3>
                        <BarChart className="h-5 w-5" />
                      </div>
                      <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                        <div className="text-xs text-gray-500">Income</div>
                        <div className="text-lg font-bold text-emerald-600">$2,450.00</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                        <div className="text-xs text-gray-500">Expenses</div>
                        <div className="text-lg font-bold text-red-500">$1,280.50</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                        <div className="text-xs text-gray-500">Balance</div>
                        <div className="text-lg font-bold">$1,169.50</div>
                      </div>
                      <div className="mt-auto bg-white rounded-lg p-3 flex-1">
                        <div className="text-xs font-medium mb-2">Recent Transactions</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Groceries</span>
                            <span className="text-red-500">-$85.20</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Salary</span>
                            <span className="text-emerald-600">+$2,450.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Utilities</span>
                            <span className="text-red-500">-$120.50</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
