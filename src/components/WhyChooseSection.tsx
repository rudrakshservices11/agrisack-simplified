import { Zap, Shield, Paintbrush, BarChart3, Users } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const points = [
  { icon: Zap, title: "Advanced Manufacturing", desc: "Cutting-edge technology for precision output" },
  { icon: Shield, title: "High Durability", desc: "Built to withstand the toughest conditions" },
  { icon: Paintbrush, title: "Custom Design", desc: "Printing and branding tailored to you" },
  { icon: BarChart3, title: "Bulk Capacity", desc: "Millions of sacks produced every year" },
  { icon: Users, title: "Industry Trusted", desc: "Serving 10+ major industries nationwide" },
];

const WhyChooseSection = () => {
  const ref = useReveal();

  return (
    <section className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <div className="container relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Strength</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Why Choose <span className="text-gradient">AgriSack</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger-children">
          {points.map((p, i) => (
            <div key={p.title} className="reveal group text-center">
              <div className="relative mx-auto mb-5">
                <div className="w-20 h-20 rounded-3xl gradient-primary mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3">
                  <p.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground border-2 border-background">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
