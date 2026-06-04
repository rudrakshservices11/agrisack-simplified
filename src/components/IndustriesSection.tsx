import { Wheat, Droplets, Building2, FlaskConical, Dog, UtensilsCrossed, Mountain, PackageCheck, Apple, Landmark } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const industries = [
  { icon: Wheat, label: "Agriculture & Agro Products" },
  { icon: Droplets, label: "Fertilizer & Pesticide" },
  { icon: Building2, label: "Cement & Construction" },
  { icon: FlaskConical, label: "Chemical & Industrial" },
  { icon: Dog, label: "Animal & Cattle Feed" },
  { icon: UtensilsCrossed, label: "Food Processing & FMCG" },
  { icon: Mountain, label: "Mining & Minerals" },
  { icon: PackageCheck, label: "Packaging & Export Houses" },
  { icon: Apple, label: "Fruits & Vegetable Supply" },
  { icon: Landmark, label: "Government & Institutional" },
];

const IndustriesSection = () => {
  const ref = useReveal();

  return (
    <section id="industries" className="section-padding gradient-dark relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Who We Serve</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-foreground mb-4">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto">
            From agriculture to exports, AgriSack provides reliable packaging solutions across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="reveal group relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:scale-110">
                <ind.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="text-sm font-semibold text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
