const Footer = () => {
  return (
    <footer className="bg-navy text-teal-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-primary-foreground">
              PEPTIDE<span className="text-teal">LAB</span>
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              Premium, research-grade peptides. Science-backed. Third-party tested. Trusted worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">
              Shop
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["All Products", "Best Sellers", "New Arrivals", "Bundles & Stacks"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:opacity-100 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["About Us", "Lab Testing", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:opacity-100 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">
              Policies
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Privacy Policy", "Terms of Service", "Refund Policy", "Shipping Info"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:opacity-100 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-teal-light/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© 2026 PeptideLab. All rights reserved.</p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
