import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-lg font-semibold text-foreground">Diamonds<span className="text-primary">.now</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted guide to lab-grown diamonds. Ethical, beautiful, and brilliant.
            </p>
          </div>

          <div>
            <h4 className="text-muted-foreground text-xs uppercase tracking-wider mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><a href="#why" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">Why Lab Diamonds</a></li>
              <li><a href="#compare" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">Lab vs. Mined</a></li>
              <li><a href="#shapes" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">Diamond Shapes</a></li>
              <li><a href="#guide" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">The 4Cs Guide</a></li>
              <li><a href="#faq" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-muted-foreground text-xs uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="https://www.brilliantearth.com/lab-diamonds-search/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">Brilliant Earth</a></li>
              <li><a href="https://www.jamesallen.com/loose-diamonds/all-diamonds/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">James Allen</a></li>
              <li><a href="https://www.cleanorigin.com/diamonds/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">Clean Origin</a></li>
              <li><a href="https://www.ritani.com/collections/lab-grown-diamonds" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors">Ritani</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-muted-foreground text-xs uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground/70 text-sm">Privacy Policy</span></li>
              <li><span className="text-muted-foreground/70 text-sm">Terms of Service</span></li>
              <li><span className="text-muted-foreground/70 text-sm">Affiliate Disclosure</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <p className="text-muted-foreground/50 text-xs">
              &copy; {new Date().getFullYear()} Diamonds.now — A BetrNames Property
            </p>
            <a
              href="mailto:contact@diamonds.now"
              className="inline-flex items-center gap-1.5 text-muted-foreground/50 text-xs transition-colors hover:text-foreground"
            >
              <Mail className="size-3.5" />
              contact@diamonds.now
            </a>
          </div>
          <p className="text-muted-foreground/40 text-xs max-w-md text-center">
            Affiliate disclosure: We earn commissions from qualifying purchases through retailer links on this site, at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
