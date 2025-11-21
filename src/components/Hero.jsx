import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_20%,rgba(147,51,234,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              Next‑gen AI website builder
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Build stunning apps with TUNA AI
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Design, code, and ship full‑stack apps in minutes. Chat your idea, watch it come to life, and iterate visually.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" id="get-started">
              <a href="#features" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors">
                Explore features
              </a>
              <a href="/test" className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                Check backend
              </a>
            </div>
          </div>

          <div className="h-[420px] w-full rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
