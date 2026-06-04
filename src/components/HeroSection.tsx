import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Truck, Sparkles, Factory, Award } from "lucide-react";


const stats = [
  { value: "8+", label: "Years" },
  { value: "584M", label: "Sacks" },
  { value: "10+", label: "Industries" },
  { value: "500+", label: "Clients" },
];

const features = [
  { icon: Factory, text: "In-House Manufacturing" },
  { icon: Truck, text: "Pan-India Delivery" },
  { icon: Sparkles, text: "Custom Printing" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen bg-secondary overflow-hidden">
    {/* Subtle grid background */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Ambient glows */}
    <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 container min-h-screen flex flex-col justify-center pt-28 pb-16">
      {/* Top heritage strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-primary-foreground/10 animate-fade-in-up">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            A Brand by Gopal Polytech
          </span>
        </div>
        <div className="flex items-center gap-2 text-primary-foreground/60 text-xs uppercase tracking-[0.2em]">
          <Award className="w-4 h-4 text-primary" />
          A Unit of Gopal Flexo Group · Trusted Since 1990
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Editorial text column */}
        <div className="lg:col-span-7">
          {/* Headline */}
          <h1
            className="font-black text-primary-foreground leading-[0.95] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s", fontSize: "clamp(2.75rem, 7.5vw, 6rem)" }}
          >
            Industrial Sacks
            <br />
            <span className="text-gradient">Built to Endure.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            AgriSack manufactures premium woven, FIBC, and BOPP packaging trusted by leaders across agriculture, chemicals, and construction.
          </p>

          {/* Feature pills */}
          <div
            className="flex flex-wrap gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {features.map((f) => (
              <div
                key={f.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-sm"
              >
                <f.icon className="w-4 h-4 text-primary" />
                {f.text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="text-base px-8 h-14 rounded-full glow-primary group" asChild>
              <a href="#contact">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-base px-6 h-14 rounded-full text-primary-foreground hover:bg-primary-foreground/10 gap-3 group"
              asChild
            >
              <a href="#video">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                Watch Our Story
              </a>
            </Button>
          </div>

          {/* Inline stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-gradient leading-none">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/50 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Heritage panel */}
        <div
          className="lg:col-span-5 hidden lg:block animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            {/* Decorative number */}
            <div className="absolute -top-10 -right-4 text-[12rem] font-black leading-none text-primary/10 select-none pointer-events-none">
              35+
            </div>

            <div className="relative rounded-[2rem] p-10 border border-primary-foreground/10 bg-gradient-to-br from-primary-foreground/[0.06] to-primary-foreground/[0.01] backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative">
                {/* Crest */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg glow-primary">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/60 to-transparent" />
                </div>

                {/* Eyebrow */}
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                  Our Heritage
                </div>

                {/* Headline */}
                <h2 className="font-black text-primary-foreground leading-[1.05] text-4xl xl:text-5xl mb-6">
                  A Unit of
                  <br />
                  <span className="text-gradient">Gopal Flexo Group</span>
                </h2>

                <div className="h-px w-16 bg-primary mb-6" />

                {/* Trusted since */}
                <div className="flex items-baseline gap-4 mb-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
                    Trusted Since
                  </div>
                  <div className="text-5xl font-black text-primary-foreground leading-none">
                    1990
                  </div>
                </div>

                <p className="text-sm text-primary-foreground/60 leading-relaxed mb-8">
                  Three decades of engineering excellence in flexible packaging — from family workshop to industry leader.
                </p>

                {/* Heritage stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary-foreground/10">
                  <div>
                    <div className="text-2xl font-black text-primary-foreground leading-none">35+</div>
                    <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-2">
                      Years of Legacy
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-primary-foreground leading-none">3</div>
                    <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-2">
                      Generations Strong
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
