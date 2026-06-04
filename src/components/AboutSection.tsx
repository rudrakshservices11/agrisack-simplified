import { Factory, Cog, Package, Paintbrush } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import aboutImg from "@/assets/about-factory.jpg";

const highlights = [
  { icon: Factory, label: "Established April 2018", desc: "8+ years of industry experience" },
  { icon: Cog, label: "Advanced Machinery", desc: "State-of-the-art equipment" },
  { icon: Package, label: "Bulk Manufacturing", desc: "High volume production capacity" },
  { icon: Paintbrush, label: "Customized Solutions", desc: "Tailored to your needs" },
];

const AboutSection = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={aboutImg} alt="AgriSack Factory" loading="lazy" width={800} height={600} className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl glow-sm animate-float">
              <div className="text-3xl font-black text-primary">8+</div>
              <div className="text-sm font-medium text-foreground">Years of Excellence</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="reveal">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                About <span className="text-gradient">AgriSack</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                AgriSack is the flagship packaging brand of Gopal Polytech, dedicated to manufacturing high-quality industrial sacks with precision, durability, and innovation. We serve diverse industries with packaging solutions that meet the highest standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
              {highlights.map((h) => (
                <div key={h.label} className="reveal group flex items-start gap-4 p-4 rounded-2xl bg-muted hover:bg-accent transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                    <h.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-foreground">{h.label}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
