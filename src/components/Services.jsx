import { Wrench, Link as LinkIcon, Search, Rocket, BarChart3, Shield } from 'lucide-react'

const brandBlue = '#2861B4'
const brandGreen = '#10984A'

const services = [
  {
    icon: Search,
    title: 'Technical SEO Audits',
    desc: 'Crawlability, indexation, site speed, structured data, and scalable fixes that unlock organic growth.',
  },
  {
    icon: LinkIcon,
    title: 'Authority Link Building',
    desc: 'White-hat, relevance-first link acquisition from real publications that move rankings.',
  },
  {
    icon: Wrench,
    title: 'On-site SEO Implementation',
    desc: 'From schema and internal linking to content templates and IA — implemented with precision.',
  },
  {
    icon: Rocket,
    title: 'Website Design & CRO',
    desc: 'Clean, corporate, conversion-focused websites and landing pages that turn traffic into leads.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Clear KPIs, dashboards, and monthly reporting matched to business outcomes.',
  },
  {
    icon: Shield,
    title: 'Penalty & Recovery',
    desc: 'Manual actions, traffic drops, and migrations — diagnose and recover safely.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Strategic, technical, and measurable — designed to grow authority and revenue.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: brandBlue }}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
