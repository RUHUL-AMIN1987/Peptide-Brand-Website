import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Third-Party Lab Tested
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              Science-Backed
              <br />
              <span className="text-gradient">Peptides</span> for
              <br />
              Peak Performance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pharmaceutical-grade purity. Rigorous third-party testing.
              Trusted by researchers and biohackers worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Shop Now
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                View All Products
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                99%+ Purity
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                Free Shipping $100+
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                Same-Day Dispatch
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-product">
              <img
                src={heroImage}
                alt="Premium peptide supplements lineup featuring pharmaceutical-grade formulations"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-teal-light opacity-60 blur-2xl" />
            <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-teal-light opacity-40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
