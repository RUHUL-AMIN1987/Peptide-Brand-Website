import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    image: product1,
    name: "BPC-157 Capsules",
    benefit: "Supports gut health & tissue recovery",
    price: "$49.99",
    badge: "Best Seller",
  },
  {
    image: product2,
    name: "TB-500 Capsules",
    benefit: "Promotes muscle repair & flexibility",
    price: "$54.99",
  },
  {
    image: product3,
    name: "BPC-157 Sublingual",
    benefit: "Fast-absorbing liquid for rapid recovery",
    price: "$64.99",
    badge: "New",
  },
  {
    image: product4,
    name: "Peptide Recovery Stack",
    benefit: "Complete recovery & performance blend",
    price: "$89.99",
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
