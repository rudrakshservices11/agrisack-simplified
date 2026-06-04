import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MessageCircle, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const ContactSection = () => {
  const ref = useReveal();

  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Reach Out</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="reveal grid sm:grid-cols-2 gap-4 mb-10">
            <a href="tel:+919414117231" className="group flex items-center gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Call Us</div>
                <div className="font-semibold text-foreground">+91 9414117231</div>
              </div>
            </a>

            <a href="tel:+919636570398" className="group flex items-center gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Alternate</div>
                <div className="font-semibold text-foreground">+91 9636570398</div>
              </div>
            </a>

            <a href="mailto:sales@agrisack.com" className="group flex items-center gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold text-foreground">sales@agrisack.com</div>
              </div>
            </a>

            <a href="https://wa.me/919664192592" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Support</div>
                <div className="font-semibold text-foreground">+91 9664192592</div>
              </div>
            </a>
          </div>

          <div className="reveal text-center">
            <a
              href="https://wa.me/919414117231?text=Hi%20Agrisack%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="rounded-full px-10 gap-3 text-lg glow-primary">
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
