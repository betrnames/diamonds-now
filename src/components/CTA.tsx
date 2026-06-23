import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-subtle" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, oklch(0.7313 0.0733 235.1459 / 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="rounded-2xl sm:rounded-3xl glass-strong p-8 sm:p-12 md:p-16 shadow-xl">
          <div className="accent-border rounded-2xl sm:rounded-3xl" />
          <div className="relative">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6">
              Ready to Find
              <br />
              <span className="shimmer-text">Your Diamond?</span>
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Browse thousands of certified lab-grown diamonds from trusted retailers.
              Same brilliance, better value, zero guilt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.brilliantearth.com/lab-diamonds-search/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all duration-300 shadow-md"
              >
                Browse Brilliant Earth
              </a>
              <a
                href="https://www.jamesallen.com/loose-diamonds/all-diamonds/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all duration-300"
              >
                Browse James Allen
              </a>
            </div>

            <p className="text-muted-foreground/50 text-xs mt-8">
              We may earn a commission from purchases made through our links.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
