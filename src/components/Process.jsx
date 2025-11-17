import { Compass, ListChecks, Wrench, BarChart3 } from 'lucide-react'

const steps = [
  { icon: Compass, title: 'Discovery', desc: 'Goals, market, and baseline audit to align on impact.' },
  { icon: ListChecks, title: 'Roadmap', desc: 'Prioritized quarterly sprints with clear deliverables.' },
  { icon: Wrench, title: 'Execution', desc: 'Technical fixes, content systems, and link acquisition.' },
  { icon: BarChart3, title: 'Scale', desc: 'Measurement, iteration, and compounding growth.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Work</h2>
          <p className="mt-3 text-slate-600">Simple, transparent, and focused on outcomes.</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white">
              <div className="h-11 w-11 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
