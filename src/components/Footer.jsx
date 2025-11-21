export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} TUNA AI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#pricing" className="text-white/70 hover:text-white">Pricing</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
            <a href="/test" className="text-white/70 hover:text-white">Backend Test</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
