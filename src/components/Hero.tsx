import { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

const Ring3D = lazy(() => import('./Ring3D'))

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden px-6 pt-20 pb-12 md:pt-0 md:pb-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-subtle" />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.7313 0.0733 235.1459 / 0.15) 0%, transparent 70%)',
            animation: 'pulse-glow 4s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-8 items-center">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 font-medium"
          >
            Lab-Grown Brilliance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight text-foreground mb-6 md:mb-8"
          >
            Brilliance,
            <br />
            <span className="shimmer-text font-medium">Perfected</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed mb-8 md:mb-10"
          >
            Ethically created. Scientifically identical. Up to 40% less than mined.
            Discover lab-grown diamonds that redefine luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#collection"
              className="text-center px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
            >
              Explore Collection
            </a>
            <a
              href="#why"
              className="text-center px-8 py-3.5 sm:py-4 rounded-full text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="order-1 md:order-2 w-full aspect-square max-w-[320px] sm:max-w-[400px] md:max-w-[420px] mx-auto"
        >
          <Canvas
            camera={{ position: [0, 2, 3.2], fov: 40 }}
            gl={{ antialias: true, alpha: true }}
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Ring3D />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

    </section>
  )
}
