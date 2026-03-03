import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";   // ← Add this (e.g. CJC/Ipamorelin bottle)
import product6 from "@/assets/product-6.jpg";   // ← Add this (e.g. GHK-Cu cream/serum)
import product7 from "@/assets/product-7.jpg";   // ← Add this (e.g. Semaglutide pen/vial)
import product8 from "@/assets/product-8.jpg";   // ← Add this (e.g. Tirzepatide vial)

const products = [
  {
    image: product1,
    name: "5-AMINO-1",
    benefit: "Supports gut health, tissue recovery & inflammation reduction",
    price: "$49.99",
    badge: "Best Seller",
  },
  {
    image: product2,
    name: "BCP-157",
    benefit: "Promotes muscle repair, flexibility & accelerated healing",
    price: "$54.99",
    badge: "Top Rated",
  },
  {
    image: product3,
    name: "HCG",
    benefit: "Fast-absorbing liquid form for rapid systemic recovery",
    price: "$64.99",
    badge: "New",
  },
  {
    image: product4,
    name: "MELANOTAN-2",
    benefit: "BPC-157 + TB-500 blend for complete tissue & injury support",
    price: "$89.99",
    badge: "Best Seller",
  },
  {
    image: product5,
    name: "MOTS-C",
    benefit: "Growth hormone release for muscle growth, fat loss & better sleep",
    price: "$79.99",
    badge: "Trending",
  },
  {
    image: product6,
    name: "OXYTOCIN",
    benefit: "Skin regeneration, collagen boost & anti-aging recovery",
    price: "$69.99",
    badge: "Premium",
  },
  {
    image: product7,
    name: "SEMAX",
    benefit: "Appetite control, metabolic support & significant weight management",
    price: "$249.99",
    badge: "Popular",
  },
  {
    image: product8,
    name: "SS-31",
    benefit: "Advanced GLP-1/GIP for enhanced fat loss & blood sugar balance",
    price: "$299.99",
    badge: "Advanced",
  },
];

const ProductSlider = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pharmaceutical-grade peptides, rigorously tested for purity and potency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;