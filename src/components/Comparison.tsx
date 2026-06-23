import { motion } from 'framer-motion'

const rows = [
  { property: 'Chemical Composition', lab: 'Pure Carbon (C)', mined: 'Pure Carbon (C)', equal: true },
  { property: 'Crystal Structure', lab: 'Cubic', mined: 'Cubic', equal: true },
  { property: 'Hardness (Mohs)', lab: '10', mined: '10', equal: true },
  { property: 'Refractive Index', lab: '2.42', mined: '2.42', equal: true },
  { property: 'Brilliance & Fire', lab: 'Identical', mined: 'Identical', equal: true },
  { property: 'Origin', lab: 'Controlled Lab', mined: 'Earth Mining', equal: false, labWins: true },
  { property: 'Environmental Impact', lab: 'Minimal', mined: 'Significant', equal: false, labWins: true },
  { property: 'Ethical Concerns', lab: 'None', mined: 'Potential', equal: false, labWins: true },
  { property: 'Average Price', lab: '40-60% Less', mined: 'Full Retail', equal: false, labWins: true },
  { property: 'Certification', lab: 'IGI / GIA', mined: 'GIA / AGS', equal: true },
  { property: 'Resale Value', lab: 'Growing', mined: 'Moderate', equal: false, labWins: false },
]

export default function Comparison() {
  return (
    <section id="compare" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 bg-radial-subtle opacity-40" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-chart-4 text-sm tracking-[0.3em] uppercase mb-4">
            Side by Side
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6">
            Lab vs. Mined
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Scientifically, they're the same stone. The difference is how they're made — and what they cost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl sm:rounded-2xl overflow-hidden glass shadow-lg"
        >
          <div className="relative overflow-x-auto">
            <div className="min-w-[480px]">
            <div className="grid grid-cols-3 gap-0 text-center border-b border-border">
              <div className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">Property</div>
              <div className="p-4 sm:p-6 border-x border-border">
                <span className="text-gradient-accent font-serif text-base sm:text-lg font-medium">Lab-Grown</span>
              </div>
              <div className="p-4 sm:p-6 text-muted-foreground font-serif text-base sm:text-lg">Mined</div>
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.property}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-3 gap-0 border-b border-border last:border-0 hover:bg-accent/50 transition-colors"
              >
                <div className="p-4 sm:p-5 text-muted-foreground text-sm flex items-center">
                  {row.property}
                </div>
                <div className="p-4 sm:p-5 border-x border-border text-center flex items-center justify-center gap-2">
                  {row.equal ? (
                    <span className="text-foreground/70 text-sm">{row.lab}</span>
                  ) : row.labWins ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-4" />
                      <span className="text-chart-4 text-sm font-medium">{row.lab}</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground text-sm">{row.lab}</span>
                  )}
                </div>
                <div className="p-4 sm:p-5 text-center flex items-center justify-center gap-2">
                  {row.equal ? (
                    <span className="text-foreground/70 text-sm">{row.mined}</span>
                  ) : !row.labWins ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-5" />
                      <span className="text-chart-5 text-sm font-medium">{row.mined}</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground/60 text-sm">{row.mined}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
