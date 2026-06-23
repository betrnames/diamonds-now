import { motion } from 'framer-motion'

const products = [
  {
    name: '1.5ct Round Brilliant',
    cut: 'Ideal Cut',
    color: 'D-F',
    clarity: 'VVS1',
    price: '$2,400',
    comparePrice: '$4,200',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80',
    retailer: 'Brilliant Earth',
    link: 'https://www.brilliantearth.com/lab-diamonds-search/',
    badge: 'Best Seller',
  },
  {
    name: '2.0ct Oval Cut',
    cut: 'Excellent',
    color: 'E-G',
    clarity: 'VS1',
    price: '$3,800',
    comparePrice: '$6,500',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&q=80',
    retailer: 'James Allen',
    link: 'https://www.jamesallen.com/loose-diamonds/all-diamonds/',
    badge: 'Premium',
  },
  {
    name: '1.0ct Princess Cut',
    cut: 'Ideal Cut',
    color: 'D-E',
    clarity: 'VVS2',
    price: '$1,600',
    comparePrice: '$2,900',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop&q=80',
    retailer: 'Clean Origin',
    link: 'https://www.cleanorigin.com/diamonds/',
    badge: 'Value Pick',
  },
  {
    name: '1.75ct Emerald Cut',
    cut: 'Excellent',
    color: 'D-F',
    clarity: 'VS1',
    price: '$2,900',
    comparePrice: '$5,100',
    image: 'https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=400&h=400&fit=crop&q=80',
    retailer: 'Ritani',
    link: 'https://www.ritani.com/collections/lab-grown-diamonds',
    badge: 'Editor\'s Choice',
  },
  {
    name: '2.5ct Cushion Cut',
    cut: 'Ideal Cut',
    color: 'E-G',
    clarity: 'VVS1',
    price: '$4,200',
    comparePrice: '$7,800',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&q=80',
    retailer: 'Brilliant Earth',
    link: 'https://www.brilliantearth.com/lab-diamonds-search/',
    badge: 'Luxury',
  },
  {
    name: '1.25ct Pear Shape',
    cut: 'Excellent',
    color: 'D-E',
    clarity: 'VS2',
    price: '$2,100',
    comparePrice: '$3,600',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop&q=80',
    retailer: 'James Allen',
    link: 'https://www.jamesallen.com/loose-diamonds/all-diamonds/',
    badge: 'Trending',
  },
]

const badgeStyles: Record<string, string> = {
  'Best Seller': 'bg-primary/15 text-primary',
  'Premium': 'bg-chart-2/15 text-chart-2',
  'Value Pick': 'bg-chart-4/15 text-chart-4',
  "Editor's Choice": 'bg-chart-3/15 text-chart-3',
  'Luxury': 'bg-chart-5/15 text-chart-5',
  'Trending': 'bg-primary/15 text-primary',
}

export default function Products() {
  return (
    <section id="collection" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 bg-radial-subtle opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-chart-2 text-sm tracking-[0.3em] uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6">
            Featured Diamonds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Hand-selected lab-grown diamonds from the world's most trusted retailers.
            Every stone is certified and conflict-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden glass hover:glass-strong hover:shadow-lg transition-all duration-500 block"
            >
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeStyles[product.badge]}`}>
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="relative p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div>
                    <h3 className="font-serif text-base sm:text-xl text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{product.retailer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground font-medium">{product.price}</p>
                    <p className="text-muted-foreground/60 text-sm line-through">{product.comparePrice}</p>
                  </div>
                </div>

                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{product.cut}</span>
                  <span className="text-border">|</span>
                  <span>Color {product.color}</span>
                  <span className="text-border">|</span>
                  <span>{product.clarity}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">View at {product.retailer}</span>
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground/60 text-xs">
            Affiliate disclosure: We may earn a commission when you purchase through our links, at no extra cost to you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
