import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  benefit: string;
  price: string;
  badge?: string;
}

const ProductCard = ({ image, name, benefit, price, badge }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border p-4 shadow-product hover:shadow-product-hover transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-4">
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground uppercase tracking-wider">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-foreground text-base mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 flex-1">{benefit}</p>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-lg text-foreground">{price}</span>
          <Button variant="addToCart" size="sm" className="gap-1.5">
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
