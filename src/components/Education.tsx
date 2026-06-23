import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fourCs = [
  {
    letter: 'Cut',
    colorVar: 'var(--chart-1)',
    colorClass: 'text-chart-1',
    headline: 'The Most Important C',
    body: 'Cut determines how well a diamond interacts with light. A perfectly cut diamond will exhibit maximum brilliance, fire, and scintillation. Lab-grown diamonds can be precision-cut to ideal proportions with consistency that\'s hard to achieve in natural stones.',
    tip: 'Look for "Ideal" or "Excellent" cut grades — this has the biggest impact on sparkle.',
    scale: ['Fair', 'Good', 'Very Good', 'Excellent', 'Ideal'],
    recommended: 4,
  },
  {
    letter: 'Color',
    colorVar: 'var(--chart-2)',
    colorClass: 'text-chart-2',
    headline: 'Less is More',
    body: 'Diamond color grades measure the absence of color, from D (colorless) to Z (light yellow). Lab-grown diamonds consistently achieve near-colorless to colorless grades, giving you top-tier stones without the premium.',
    tip: 'D-F grades are colorless and most valuable. G-H appear colorless when set and offer the best value.',
    scale: ['K-Z', 'I-J', 'G-H', 'E-F', 'D'],
    recommended: 3,
  },
  {
    letter: 'Clarity',
    colorVar: 'var(--chart-3)',
    colorClass: 'text-chart-3',
    headline: 'Purity Under Magnification',
    body: 'Clarity measures internal and external imperfections. Lab-grown diamonds tend to have fewer inclusions than their mined counterparts, because the growth environment is precisely controlled.',
    tip: 'VS1-VS2 is the sweet spot — inclusions are invisible to the naked eye but cost significantly less than flawless.',
    scale: ['I1-I2', 'SI1-SI2', 'VS1-VS2', 'VVS1-VVS2', 'FL-IF'],
    recommended: 2,
  },
  {
    letter: 'Carat',
    colorVar: 'var(--chart-4)',
    colorClass: 'text-chart-4',
    headline: 'Size and Weight',
    body: 'Carat measures a diamond\'s weight, not its size. Two diamonds of the same carat can appear different sizes depending on cut. With lab-grown diamonds costing 40-60% less, you can afford a significantly larger stone.',
    tip: 'Going just under popular sizes (0.9ct vs 1.0ct, 1.9ct vs 2.0ct) can save 10-20% with negligible visual difference.',
    scale: ['0.5ct', '0.75ct', '1.0ct', '1.5ct', '2.0ct+'],
    recommended: 2,
  },
]

export default function Education() {
  const [active, setActive] = useState(0)
  const current = fourCs[active]

  return (
    <section id="guide" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 bg-radial-subtle opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Diamond Education
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6">
            The 4Cs Guide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know to find your perfect lab-grown diamond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-4 sm:gap-8">
          <div className="flex lg:flex-col gap-2 sm:gap-3">
            {fourCs.map((c, i) => (
              <button
                key={c.letter}
                onClick={() => setActive(i)}
                className={`relative flex-1 lg:flex-none text-left p-3 sm:p-5 rounded-lg sm:rounded-xl transition-all duration-300 ${
                  active === i
                    ? 'glass-strong shadow-md'
                    : 'glass hover:glass-strong'
                }`}
              >
                {active === i && <div className="accent-border rounded-lg sm:rounded-xl" />}
                <div className="relative flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
                  <span
                    className="text-xl sm:text-3xl font-serif font-light"
                    style={{ color: active === i ? c.colorVar : 'var(--muted-foreground)' }}
                  >
                    {c.letter.charAt(0)}
                  </span>
                  <div className="hidden lg:block">
                    <span className={`text-sm ${active === i ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {c.letter}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl sm:rounded-2xl glass p-5 sm:p-8 md:p-12 shadow-lg"
            >
              <div className="accent-border rounded-xl sm:rounded-2xl" />
              <div className="relative">
                <h3
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-light mb-3"
                  style={{ color: current.colorVar }}
                >
                  {current.letter}
                </h3>
                <p className="text-foreground/70 text-lg mb-6">{current.headline}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{current.body}</p>

                <div className="mb-8">
                  <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-4">Quality Scale</p>
                  <div className="flex gap-2">
                    {current.scale.map((label, i) => (
                      <div key={label} className="flex-1">
                        <div
                          className="h-2 rounded-full mb-2 transition-all duration-300"
                          style={{
                            background:
                              i <= current.recommended
                                ? `linear-gradient(90deg, color-mix(in oklch, ${current.colorVar} 40%, transparent), ${current.colorVar})`
                                : 'var(--muted)',
                            opacity: i === current.recommended ? 1 : 0.5,
                          }}
                        />
                        <span
                          className={`text-xs ${
                            i === current.recommended ? 'text-foreground/80 font-medium' : 'text-muted-foreground/50'
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-5 bg-accent border border-border">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill={current.colorVar}>
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-muted-foreground text-sm leading-relaxed">{current.tip}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
