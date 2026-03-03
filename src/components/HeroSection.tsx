import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg"; // Your local image (lineup of peptide vials/bottles)

const HeroSection = () => {
  return (
    <section 
      className="relative overflow-hidden min-h-[80vh] lg:min-h-screen flex items-center bg-hero-gradient"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark/gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-light/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase border border-primary/30">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Third-Party Lab Tested
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white drop-shadow-lg">
              Science-Backed
              <br />
              <span className="text-gradient bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Peptides
              </span> for
              <br />
              Peak Performance
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
              Pharmaceutical-grade purity. Rigorous third-party testing.
              Trusted by researchers and biohackers worldwide.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:scale-105"
              >
                Shop Now
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="text-base px-8 py-6 border-white/60 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
              >
                View All Products
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                99%+ Purity
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Free Shipping $100+
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Same-Day Dispatch
              </span>
            </div>
          </div>

          {/* Right side: Empty or optional subtle element (image is now bg) */}
          <div className="hidden lg:block" /> {/* Keeps grid balance; add content if needed */}
        </div>
      </div>

      {/* Optional decorative blurs (kept but toned down) */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
};

export default HeroSection;