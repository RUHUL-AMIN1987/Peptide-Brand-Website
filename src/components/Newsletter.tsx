import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome! Check your inbox for your 10% discount code.");
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive deals, new product launches, and the latest peptide research.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-card"
            />
            <Button variant="hero" size="lg" type="submit" className="px-8 h-12">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
