import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+919414117231"
      className="w-14 h-14 rounded-full gradient-dark flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 text-secondary-foreground" />
    </a>
    <a
      href="https://wa.me/919414117231"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-xl glow-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </a>
  </div>
);

export default FloatingButtons;
