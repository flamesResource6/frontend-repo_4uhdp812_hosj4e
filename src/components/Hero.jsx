import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

const brandBlue = '#2861B4'
const brandGreen = '#10984A'

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[78vh] flex items-center justify-center overflow-hidden">
      {/* Spline Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 grid gap-8 text-center md:text-left md:grid-cols-2 items-center">
        <div className="max-w-2xl mx-auto md:mx-0">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white/10 text-white/90 ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Proven growth for B2B & SaaS
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Abdul Basit
            <span className="block text-white/90 text-2xl md:text-3xl font-medium mt-3">
              Technical SEO Expert • Link Building Specialist • Web Designer
            </span>
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            4+ years helping companies rank faster, build authority, and convert better with clean, scalable strategies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white font-semibold shadow-md transition-all"
               style={{ backgroundColor: brandGreen }}>
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
              See Results
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { kpi: '120%+', label: 'Avg. organic traffic lift' },
              { kpi: '200+ ', label: 'Authority links earned' },
              { kpi: '40%+', label: 'Lead conversion uplift' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white/10 backdrop-blur p-4 text-white/90 ring-1 ring-white/15">
                <p className="text-2xl font-bold">{item.kpi}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}
