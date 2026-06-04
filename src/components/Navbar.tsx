import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/agrisack-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Video", href: "#video" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background shadow-md py-2 border-b border-border"
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="relative group">
          <img src={logo} alt="AgriSack" className="h-10 transition-transform duration-300 group-hover:scale-105" />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-foreground hover:text-primary hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-lg transition-colors text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mx-4 mt-2 rounded-2xl p-4 shadow-xl animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
