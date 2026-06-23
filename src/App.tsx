import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Comparison from './components/Comparison'
import Shapes from './components/Shapes'
import Education from './components/Education'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Shapes />
      <Features />
      <Products />
      <Comparison />
      <Education />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
