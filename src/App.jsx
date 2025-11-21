import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Soft ambient gradient aura */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />

        {/* Pricing (placeholder) */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
                <p className="mt-3 text-white/70">Start free. Upgrade when you ship.</p>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {[
                  { name: 'Starter', price: '$0', desc: 'Build and preview', cta: 'Get started' },
                  { name: 'Pro', price: '$29', desc: 'Ship production apps', cta: 'Upgrade' },
                  { name: 'Team', price: '$99', desc: 'Collaborate at scale', cta: 'Contact sales' },
                ].map((p) => (
                  <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-3xl font-bold">{p.price}<span className="text-base font-normal text-white/60">/mo</span></p>
                    <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                    <button className="mt-6 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors">{p.cta}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact (placeholder) */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Talk to us</h2>
                <p className="mt-3 text-white/70">Tell us what you want to build and we’ll help you ship it.</p>
                <ul className="mt-6 space-y-2 text-white/70 text-sm">
                  <li>• Full‑stack scaffolding</li>
                  <li>• Database integrations</li>
                  <li>• Custom UI & animations</li>
                </ul>
              </div>
              <form className="grid gap-4">
                <input className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                <input className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
                <textarea rows="4" className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are you building?" />
                <button type="button" className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
