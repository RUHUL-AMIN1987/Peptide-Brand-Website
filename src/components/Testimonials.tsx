import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Michael R.",
    role: "Sports Medicine",
    text: "The purity levels are consistently exceptional. PeptideLab has become my go-to recommendation for research-grade peptides.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Verified Buyer",
    text: "Incredible recovery support. I noticed a difference within the first week. The quality is unmatched at this price point.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Biohacker",
    text: "Transparent lab results, fast shipping, and premium packaging. Everything a serious researcher needs. Highly recommend.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Hear from researchers, athletes, and biohackers who trust PeptideLab.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl border border-border p-6 shadow-product"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
