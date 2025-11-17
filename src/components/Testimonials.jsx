import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Abdul helped us fix critical technical debt and build authority. We saw consistent month-over-month growth.',
    author: 'Head of Growth, B2B SaaS',
  },
  {
    quote: 'The link building program focused on relevance and quality. Rankings and demo requests both surged.',
    author: 'Marketing Lead, Fintech',
  },
  {
    quote: 'Clean implementation, clear reporting, and measurable outcomes. Highly recommended.',
    author: 'Ecommerce Director',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Clients Say</h2>
          <p className="mt-3 text-slate-600">Trusted by teams that care about sustainable growth.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white">
              <Quote className="h-6 w-6 text-slate-400" />
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <cite className="mt-3 block text-sm font-semibold text-slate-900">{t.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
