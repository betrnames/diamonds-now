import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Are lab-grown diamonds real diamonds?',
    a: 'Yes. Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They have the same crystal structure (cubic carbon), hardness (10 on the Mohs scale), refractive index (2.42), and brilliance. The FTC officially recognizes them as real diamonds.',
  },
  {
    q: 'How are lab-grown diamonds made?',
    a: 'Two primary methods: HPHT (High Pressure High Temperature) replicates the extreme conditions deep within the Earth, while CVD (Chemical Vapor Deposition) grows diamonds atom by atom from a carbon-rich gas. Both produce gem-quality stones in weeks rather than millions of years.',
  },
  {
    q: 'Can a jeweler tell the difference?',
    a: 'Not with the naked eye or standard tools. Lab-grown and mined diamonds look identical. Only specialized laboratory equipment can detect subtle differences in trace elements and growth patterns. Every major gemological lab (GIA, IGI) now certifies lab-grown diamonds.',
  },
  {
    q: 'Why are lab-grown diamonds cheaper?',
    a: 'The supply chain is shorter and more efficient. No mining operations, no land disruption, no complex logistics. The savings come from the manufacturing process, not from lower quality. You\'re getting the same stone without the legacy markup.',
  },
  {
    q: 'Do lab-grown diamonds hold their value?',
    a: 'Like any retail purchase, diamonds (both lab and mined) are worth less at resale than retail. However, the resale market for lab-grown diamonds is developing rapidly. The key advantage: you pay significantly less upfront, so your total cost exposure is lower.',
  },
  {
    q: 'Are lab-grown diamonds eco-friendly?',
    a: 'Significantly more so than mining. Lab-grown diamonds require no land excavation, produce far less carbon emissions, and don\'t impact local ecosystems. Many labs are transitioning to renewable energy, making the process even cleaner.',
  },
  {
    q: 'What certifications should I look for?',
    a: 'Look for diamonds certified by IGI (International Gemological Institute) or GIA (Gemological Institute of America). Both grade lab-grown diamonds using the same rigorous 4Cs standards applied to mined diamonds.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 bg-radial-subtle opacity-30" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-chart-5 text-sm tracking-[0.3em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl glass overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 group"
              >
                <span className="text-foreground/80 group-hover:text-foreground transition-colors font-medium text-sm sm:text-base">
                  {faq.q}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-muted-foreground shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border pt-3 sm:pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
