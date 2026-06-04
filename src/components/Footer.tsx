import logo from "@/assets/agrisack-logo.png";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

const socialIcons = [
  { icon: Facebook, href: "https://www.facebook.com/agrisackglobal/" },
  { icon: Instagram, href: "https://www.instagram.com/agrisackglobal/" },
  { icon: PinterestIcon, href: "https://in.pinterest.com/agrisackglobal/" },
  { icon: Youtube, href: "https://www.youtube.com/@agrisackglobal" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/agrisack-by-gopal-polytech/" },
];

const Footer = () => (
  <footer className="gradient-dark text-secondary-foreground relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Brand */}
        <div>
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg p-4">
            <img src={logo} alt="AgriSack" className="max-h-full max-w-full object-contain" />
          </div>
          <p className="text-secondary-foreground/50 text-sm leading-relaxed">
            Your Trusted Packaging Partner — delivering quality industrial sacks since 2018.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-primary mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-primary mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1"
              >
                <s.icon className="w-5 h-5 text-secondary-foreground/70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-secondary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-secondary-foreground/40">
          AgriSack by Gopal Polytech © 2018–2026. All Rights Reserved.
        </p>
        <p className="text-xs text-secondary-foreground/30">
          Developed by <a href="https://rudrakshservices.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline-offset-2 hover:underline">Rudraksh Services</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
