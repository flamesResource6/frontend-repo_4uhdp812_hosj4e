import { Menu, Phone, Mail } from 'lucide-react'

const brandBlue = '#2861B4'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-xl shadow-sm ring-1 ring-black/5">
          <a href="#home" className="pl-5 py-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full" style={{ backgroundColor: brandBlue }} />
            <span className="font-semibold text-slate-800">Abdul Basit</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2 pr-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-white text-sm font-semibold shadow-sm" style={{ backgroundColor: brandBlue }}>
              <Phone className="h-4 w-4" /> Book a Call
            </a>
            <button className="md:hidden p-2 rounded-xl hover:bg-slate-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
