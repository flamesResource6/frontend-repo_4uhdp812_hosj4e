import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-10 bg-slate-50 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Abdul Basit — Technical SEO Expert
      </footer>
    </div>
  )
}

export default App
