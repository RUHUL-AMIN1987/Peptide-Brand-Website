import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  benefit: string;
  price: string | number;
  badge?: string;
  currency?: string;
}

const ProductCard = ({
  image,
  name,
  benefit,
  price,
  badge,
  currency = "USD",
}: ProductCardProps) => {
  // Format price nicely (handles both string like "$49" and number)
  const formattedPrice =
    typeof price === "number"
      ? price.toLocaleString("en-US", {
          style: "currency",
          currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
      : price;

  return (
    <div className="group bg-card rounded-xl border border-border p-4 shadow-product hover:shadow-product-hover transition-all duration-300 flex flex-col h-full">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-4">
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground uppercase tracking-wider shadow-sm">
            {badge}
          </span>
        )}

        <img
          src={image}
          alt={`${name} - ${benefit}`}
          className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
          loading="lazy"
          width={400}
          height={400}
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-1.5">
        <h3 className="font-display font-semibold text-foreground text-base leading-tight line-clamp-2">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {benefit}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-display font-bold text-lg text-foreground">
            {formattedPrice}
          </span>

          <Button
            variant="addToCart"
            size="sm"
            className="gap-1.5 transition-transform active:scale-95 hover:scale-105"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;