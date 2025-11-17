import { Star, ExternalLink } from 'lucide-react'

const caseStudies = [
  {
    title: 'B2B SaaS Platform',
    metric: '↑ 167% organic signups in 6 months',
    desc: 'Built technical foundations, topical architecture, and secured 45+ relevant links.',
  },
  {
    title: 'Enterprise Marketplace',
    metric: '↑ 120% organic revenue YoY',
    desc: 'Resolved crawl depth issues, deployed schema at scale, and executed digital PR.',
  },
  {
    title: 'Fintech Startup',
    metric: '↑ 90% keyword growth',
    desc: 'Launched content hubs, improved E-E-A-T signals, and streamlined internal linking.',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Results</h2>
          <p className="mt-3 text-slate-600">Real outcomes from technical SEO and authority building.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <article key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-sm text-emerald-600 font-medium">{c.metric}</p>
              <p className="mt-3 text-slate-600">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:underline">
                Request full case study <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
