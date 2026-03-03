import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          PEPTIDE<span className="text-primary">LAB</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Products", "Science", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </Button>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {["Products", "Science", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border last:border-0">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
