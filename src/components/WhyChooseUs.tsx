import { FlaskConical, Shield, Truck, Lock } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Lab Tested",
    description: "Every batch is third-party tested with full COA transparency.",
  },
  {
    icon: Shield,
    title: "99%+ Purity",
    description: "Pharmaceutical-grade manufacturing with strict quality control.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Same-day dispatch on orders before 2 PM. Free shipping over $100.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    description: "256-bit SSL encryption. Your data is always protected.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose PeptideLab
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built on science. Backed by transparency. Trusted by thousands.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 text-center border border-border shadow-product hover:shadow-product-hover transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-teal-light text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
