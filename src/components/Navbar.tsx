import { useState, useEffect } from 'react'
import { Diamond } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
const links = [
  { label: 'Why Lab', href: '#why' },
  { label: 'Collection', href: '#collection' },
  { label: 'Compare', href: '#compare' },
  { label: 'Shapes', href: '#shapes' },
  { label: 'Guide', href: '#guide' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Diamond className="size-5 text-primary transition-transform group-hover:scale-110" />
          <span className="font-sans text-base sm:text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors" style={{ WebkitFontSmoothing: 'antialiased' }}>
            Diamonds<span className="text-primary">.now</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#collection"
            className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm"
          >
            Shop Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground p-1"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-accent/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#collection"
                onClick={() => setMobileOpen(false)}
                className="text-center mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
