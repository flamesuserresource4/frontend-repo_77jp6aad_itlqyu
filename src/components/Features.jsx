import { Sparkles, Rocket, Layers, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Sparkles, title: 'AI-first workflow', desc: 'Describe your idea and let the agent design, code, and deploy.' },
  { icon: Rocket, title: 'Production ready', desc: 'Clean code, modern stack, and scalable architecture by default.' },
  { icon: Layers, title: 'Full-stack builder', desc: 'Frontend, backend, and database wired together instantly.' },
  { icon: ShieldCheck, title: 'Secure by design', desc: 'Best practices for CORS, validation, and auth-ready patterns.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to launch fast</h2>
          <p className="mt-3 text-white/70">Built with React, Tailwind, FastAPI, and MongoDB</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
