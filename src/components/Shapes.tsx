import { motion } from 'framer-motion'

const shapes = [
  {
    name: 'Round',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Round',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <circle cx="50" cy="50" r="44" fill="url(#roundGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 6 L72 28 L50 50 L28 28 Z" fill="white" fillOpacity="0.5" />
        <path d="M94 50 L72 28 L50 50 L72 72 Z" fill="white" fillOpacity="0.3" />
        <path d="M50 94 L72 72 L50 50 L28 72 Z" fill="white" fillOpacity="0.08" />
        <path d="M6 50 L28 28 L50 50 L28 72 Z" fill="white" fillOpacity="0.38" />
        <path d="M50 6 L72 28 M94 50 L72 28 M94 50 L72 72 M50 94 L72 72 M50 94 L28 72 M6 50 L28 72 M6 50 L28 28 M50 6 L28 28" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M50 50 L72 28 M50 50 L72 72 M50 50 L28 72 M50 50 L28 28" stroke="#90a8c0" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="16" stroke="#8aa0ba" strokeWidth="0.6" fill="white" fillOpacity="0.18" />
        <circle cx="38" cy="32" r="6" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="roundGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Oval',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Oval',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <ellipse cx="50" cy="50" rx="30" ry="44" fill="url(#ovalGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 6 L68 30 L50 50 L32 30 Z" fill="white" fillOpacity="0.5" />
        <path d="M80 50 L68 30 L50 50 L68 70 Z" fill="white" fillOpacity="0.3" />
        <path d="M50 94 L68 70 L50 50 L32 70 Z" fill="white" fillOpacity="0.08" />
        <path d="M20 50 L32 30 L50 50 L32 70 Z" fill="white" fillOpacity="0.38" />
        <path d="M50 6 L68 30 M80 50 L68 30 M80 50 L68 70 M50 94 L68 70 M50 94 L32 70 M20 50 L32 70 M20 50 L32 30" stroke="#90a8c0" strokeWidth="0.6" />
        <ellipse cx="50" cy="50" rx="12" ry="18" stroke="#8aa0ba" strokeWidth="0.6" fill="white" fillOpacity="0.18" />
        <ellipse cx="42" cy="32" rx="5" ry="4" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="ovalGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Cushion',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Cushion',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" rx="18" fill="url(#cushGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 10 L78 22 L50 50 L22 22 Z" fill="white" fillOpacity="0.5" />
        <path d="M90 50 L78 22 L50 50 L78 78 Z" fill="white" fillOpacity="0.3" />
        <path d="M50 90 L78 78 L50 50 L22 78 Z" fill="white" fillOpacity="0.08" />
        <path d="M10 50 L22 22 L50 50 L22 78 Z" fill="white" fillOpacity="0.38" />
        <path d="M50 10 L78 22 M90 50 L78 22 M90 50 L78 78 M50 90 L78 78 M50 90 L22 78 M10 50 L22 78 M10 50 L22 22" stroke="#90a8c0" strokeWidth="0.6" />
        <rect x="36" y="36" width="28" height="28" rx="6" stroke="#8aa0ba" strokeWidth="0.6" fill="white" fillOpacity="0.18" />
        <circle cx="38" cy="30" r="5" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="cushGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Emerald',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Emerald',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M22 8 L78 8 L92 22 L92 78 L78 92 L22 92 L8 78 L8 22 Z" fill="url(#emGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <rect x="22" y="22" width="56" height="56" fill="white" fillOpacity="0.12" stroke="#8aa0ba" strokeWidth="0.3" />
        <rect x="32" y="32" width="36" height="36" fill="white" fillOpacity="0.08" stroke="#8aa0ba" strokeWidth="0.3" />
        <rect x="40" y="40" width="20" height="20" fill="white" fillOpacity="0.25" stroke="#8aa0ba" strokeWidth="0.3" />
        <path d="M8 22 L22 22 M78 22 L92 22 M92 78 L78 78 M22 78 L8 78" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M22 8 L22 22 M78 8 L78 22 M78 92 L78 78 M22 92 L22 78" stroke="#90a8c0" strokeWidth="0.6" />
        <rect x="28" y="18" width="14" height="8" rx="1" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="emGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Princess',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Princess',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" rx="2" fill="url(#prinGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M10 10 L50 50 L90 10 Z" fill="white" fillOpacity="0.45" />
        <path d="M90 10 L50 50 L90 90 Z" fill="white" fillOpacity="0.25" />
        <path d="M90 90 L50 50 L10 90 Z" fill="white" fillOpacity="0.05" />
        <path d="M10 90 L50 50 L10 10 Z" fill="white" fillOpacity="0.22" />
        <path d="M10 10 L90 90 M90 10 L10 90" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="#8aa0ba" strokeWidth="0.3" />
        <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="#8aa0ba" strokeWidth="0.3" fill="white" fillOpacity="0.05" />
        <rect x="30" y="18" width="12" height="10" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="prinGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Radiant',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Radiant',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M22 8 L78 8 L92 22 L92 78 L78 92 L22 92 L8 78 L8 22 Z" fill="url(#radGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 8 L92 50 L50 92 L8 50 Z" fill="white" fillOpacity="0.08" stroke="#8aa0ba" strokeWidth="0.3" />
        <path d="M22 8 L50 50 L78 8" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M92 22 L50 50 L92 78" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M78 92 L50 50 L22 92" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M8 78 L50 50 L8 22" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M50 8 L50 50 M92 50 L50 50 M50 92 L50 50 M8 50 L50 50" stroke="#8aa0ba" strokeWidth="0.3" />
        <rect x="38" y="38" width="24" height="24" rx="2" fill="white" fillOpacity="0.18" stroke="#8aa0ba" strokeWidth="0.3" />
        <path d="M28 14 L42 14 L38 26 L24 22 Z" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="radGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Pear',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Pear',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M50 6 C50 6 18 42 18 64 C18 84 32 96 50 96 C68 96 82 84 82 64 C82 42 50 6 50 6 Z" fill="url(#pearGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 6 L66 44 L50 60 L34 44 Z" fill="white" fillOpacity="0.5" />
        <path d="M66 44 L80 66 L66 80 L50 60 Z" fill="white" fillOpacity="0.25" />
        <path d="M34 44 L50 60 L34 80 L20 66 Z" fill="white" fillOpacity="0.38" />
        <path d="M50 60 L66 80 L50 94 L34 80 Z" fill="white" fillOpacity="0.06" />
        <path d="M50 6 L66 44 M50 6 L34 44 M66 44 L80 66 M34 44 L20 66" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M50 60 L66 44 M50 60 L34 44 M50 60 L66 80 M50 60 L34 80" stroke="#8aa0ba" strokeWidth="0.3" />
        <ellipse cx="40" cy="36" rx="5" ry="6" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="pearGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Marquise',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Marquise',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M50 4 C72 26 88 44 88 50 C88 56 72 74 50 96 C28 74 12 56 12 50 C12 44 28 26 50 4 Z" fill="url(#marqGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 4 L68 36 L50 50 L32 36 Z" fill="white" fillOpacity="0.5" />
        <path d="M88 50 L68 36 L50 50 L68 64 Z" fill="white" fillOpacity="0.25" />
        <path d="M50 96 L68 64 L50 50 L32 64 Z" fill="white" fillOpacity="0.06" />
        <path d="M12 50 L32 36 L50 50 L32 64 Z" fill="white" fillOpacity="0.38" />
        <path d="M50 4 L68 36 M88 50 L68 36 M88 50 L68 64 M50 96 L68 64 M50 96 L32 64 M12 50 L32 64 M12 50 L32 36" stroke="#90a8c0" strokeWidth="0.6" />
        <ellipse cx="50" cy="50" rx="10" ry="16" stroke="#8aa0ba" strokeWidth="0.3" fill="white" fillOpacity="0.18" />
        <ellipse cx="40" cy="30" rx="5" ry="6" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="marqGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Asscher',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Asscher',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M30 8 L70 8 L92 30 L92 70 L70 92 L30 92 L8 70 L8 30 Z" fill="url(#asscGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <rect x="26" y="26" width="48" height="48" fill="white" fillOpacity="0.18" stroke="#8aa0ba" strokeWidth="0.3" />
        <rect x="36" y="36" width="28" height="28" fill="white" fillOpacity="0.08" stroke="#8aa0ba" strokeWidth="0.3" />
        <rect x="44" y="44" width="12" height="12" fill="white" fillOpacity="0.25" stroke="#8aa0ba" strokeWidth="0.3" />
        <path d="M8 30 L26 26 M70 8 L74 26 M92 70 L74 74 M30 92 L26 74" stroke="#90a8c0" strokeWidth="0.3" />
        <path d="M30 8 L26 26 M92 30 L74 26 M70 92 L74 74 M8 70 L26 74" stroke="#90a8c0" strokeWidth="0.3" />
        <rect x="30" y="14" width="14" height="10" rx="1" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="asscGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Heart',
    href: 'https://www.brilliantearth.com/lab-diamonds-search/?shapes=Heart',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M50 92 C50 92 8 58 8 36 C8 18 22 8 38 8 C46 8 52 12 50 20 C48 12 54 8 62 8 C78 8 92 18 92 36 C92 58 50 92 50 92 Z" fill="url(#heartGrad)" stroke="#8fa8c4" strokeWidth="0.5" />
        <path d="M50 20 L38 36 L50 52 L62 36 Z" fill="white" fillOpacity="0.45" />
        <path d="M38 8 L38 36 L18 36 Z" fill="white" fillOpacity="0.38" />
        <path d="M62 8 L62 36 L82 36 Z" fill="white" fillOpacity="0.18" />
        <path d="M50 52 L38 36 L18 50 L50 84 Z" fill="white" fillOpacity="0.18" />
        <path d="M50 52 L62 36 L82 50 L50 84 Z" fill="white" fillOpacity="0.05" />
        <path d="M50 20 L38 36 M50 20 L62 36 M38 36 L50 52 M62 36 L50 52 M50 52 L50 84" stroke="#90a8c0" strokeWidth="0.6" />
        <path d="M38 36 L18 36 M62 36 L82 36" stroke="#8aa0ba" strokeWidth="0.3" />
        <ellipse cx="34" cy="22" rx="6" ry="5" fill="white" fillOpacity="0.45" />
        <defs>
          <radialGradient id="heartGrad" cx="40%" cy="30%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="50%" stopColor="#a8bdd6" />
            <stop offset="100%" stopColor="#7a95b4" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
]

export default function Shapes() {
  return (
    <section id="shapes" className="relative py-16 sm:py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-foreground text-center mb-10 sm:mb-14"
        >
          Shop diamonds by shape
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-x-auto sm:overflow-visible scrollbar-hide"
        >
          <div className="flex justify-start sm:justify-center gap-6 sm:gap-4 md:gap-5 lg:gap-8 min-w-max sm:min-w-0 sm:flex-wrap md:flex-nowrap px-2 sm:px-0 mx-auto">
          {shapes.map((shape) => (
            <a
              key={shape.name}
              href={shape.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:gap-3 shrink-0 sm:shrink"
            >
              <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] group-hover:scale-110 transition-transform duration-300">
                {shape.svg}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                {shape.name}
              </span>
            </a>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
