const brandBlue = '#2861B4'
const brandGreen = '#10984A'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to grow organic traffic that converts?</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Get a free, no-obligation strategy call. We’ll review your site, identify quick wins, and map a 90-day plan.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:abdul@example.com" className="rounded-xl px-5 py-3 text-white font-semibold shadow-md" style={{ backgroundColor: brandGreen }}>
            Book a Strategy Call
          </a>
          <a href="mailto:abdul@example.com" className="rounded-xl px-5 py-3 font-semibold text-white border border-white/20 hover:bg-white/10">
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}
