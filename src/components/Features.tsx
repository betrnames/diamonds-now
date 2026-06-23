import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4M13 13l2.8 2.8M32.2 32.2l2.8 2.8M13 35l2.8-2.8M32.2 15.8l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: '100% Ethical',
    description: 'Created in controlled labs, not extracted from the earth. Zero mining. Zero conflict. Full transparency from origin to finger.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <polygon points="24,6 42,18 42,34 24,42 6,34 6,18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <polygon points="24,14 34,20 34,30 24,36 14,30 14,20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Optically Identical',
    description: 'Same crystal structure, same brilliance, same fire. Even gemologists need specialized equipment to tell the difference.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="12" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M16 28l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="16" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Up to 40% Less',
    description: 'Identical quality at a fraction of the price. Invest in the diamond itself, not the legacy markup of traditional mining.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Features() {
  return (
    <section id="why" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 bg-radial-subtle opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            The Future of Fine Jewelry
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Why Lab Diamonds?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative rounded-xl sm:rounded-2xl p-6 sm:p-8 glass hover:glass-strong transition-all duration-500 hover:shadow-lg"
            >
              <div className="accent-border rounded-xl sm:rounded-2xl" />
              <div className="relative">
                <div className="mb-4 sm:mb-6 text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
