import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/agrisackglobal/", color: "hover:bg-[hsl(221,44%,41%)]" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/agrisackglobal/", color: "hover:bg-[hsl(326,78%,48%)]" },
  { icon: PinterestIcon, label: "Pinterest", href: "https://in.pinterest.com/agrisackglobal/", color: "hover:bg-[hsl(351,86%,45%)]" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@agrisackglobal", color: "hover:bg-[hsl(0,100%,50%)]" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/agrisack-by-gopal-polytech/", color: "hover:bg-[hsl(201,100%,35%)]" },
];

const SocialSection = () => {
  const ref = useReveal();

  return (
    <section className="py-20 gradient-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />

      <div className="container relative text-center">
        <div className="reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Stay Connected</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-foreground mb-4">
            Connect With <span className="text-primary">Us</span>
          </h2>
          <p className="text-secondary-foreground/50 mb-10 max-w-md mx-auto">Follow us on social media for updates, behind-the-scenes, and more.</p>
        </div>

        <div className="flex justify-center gap-5 stagger-children">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-scale group w-16 h-16 rounded-2xl bg-secondary-foreground/10 border border-secondary-foreground/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent ${s.color}`}
              aria-label={s.label}
            >
              <s.icon className="w-7 h-7 text-secondary-foreground/70 group-hover:text-secondary-foreground transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
