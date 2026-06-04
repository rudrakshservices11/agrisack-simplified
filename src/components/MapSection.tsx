import { useReveal } from "@/hooks/useReveal";

const MAP_LINK = "https://maps.google.com/?q=Gopal+Polytech";

const MapSection = () => {
  const ref = useReveal();

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Location</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Find <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground">Tap the map to open directions in your maps app.</p>
        </div>

        <div className="reveal-scale max-w-4xl mx-auto">
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
            className="block relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group cursor-pointer"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d75.123456789!3d26.912345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gopal Polytech Location"
              className="pointer-events-none"
            />
            {/* Click overlay to ensure tap opens the link on top of the iframe */}
            <span className="absolute inset-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
