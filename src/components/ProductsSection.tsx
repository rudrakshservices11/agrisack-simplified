import { Package, ArrowRight, BookOpen } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const products = [
  { name: "Woven PP Sacks", desc: "Durable polypropylene woven bags for bulk packaging" },
  { name: "FIBC Jumbo Bags", desc: "Heavy-duty flexible containers for large-scale transport" },
  { name: "Paper Sacks", desc: "Eco-friendly paper bags for food and chemicals" },
  { name: "HDPE Sacks", desc: "High-density polyethylene bags for strength" },
  { name: "Printed BOPP Bags", desc: "Premium printed bags for branded packaging" },
  { name: "Printed Pinch Bottom Bags", desc: "Sealed pinch-bottom bags ideal for cement and chemicals" },
  { name: "Printed Block Bottom Bags", desc: "Self-standing block bottom bags for premium retail packaging" },
];

const ProductsSection = () => {
  const ref = useReveal();

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Make</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fully customizable — size, design, weight, and printing tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="reveal group relative rounded-2xl p-8 bg-muted border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Number accent */}
              <span className="absolute top-4 right-4 text-7xl font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Package className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}

          {/* Catalog CTA card — fills the 8th slot */}
          <a
            href="https://wa.me/c/919664192592"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group relative rounded-2xl p-8 gradient-primary text-primary-foreground border border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden flex flex-col justify-between"
          >
            {/* Decorative ring */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary-foreground/20 rounded-full" />
            <div className="absolute -bottom-16 -left-10 w-40 h-40 border-2 border-primary-foreground/10 rounded-full" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">View Full Catalog</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Browse our complete WhatsApp catalog with all products and pricing.
              </p>
            </div>

            <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Open Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
