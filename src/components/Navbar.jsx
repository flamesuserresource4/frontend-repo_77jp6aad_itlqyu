import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
    { href: '/test', label: 'Backend Test' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Flames" className="h-8 w-8" />
            <span className="text-white font-semibold tracking-tight">TUNA AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link key={item.label} to={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 space-y-2">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link key={item.label} to={item.href} className="block text-sm text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="block text-sm text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#get-started"
              className="block text-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
