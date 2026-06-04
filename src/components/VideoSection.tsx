import { useReveal } from "@/hooks/useReveal";

const VideoSection = () => {
  const ref = useReveal();

  return (
    <section id="video" className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />

      <div className="container">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">See Us in Action</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Discover <span className="text-gradient">AgriSack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch our manufacturing process and see the quality that sets us apart.
          </p>
        </div>

        <div className="reveal-scale max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-primary">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/xWcha86G6Yk?rel=0"
                title="AgriSack Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Watch More on YouTube CTA */}
          <div className="reveal mt-12 flex justify-center">
            <a
              href="https://www.youtube.com/channel/UCNzAZqHYWTEtxcB4z6SKwHg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 pl-3 pr-7 py-3 rounded-full bg-secondary text-primary-foreground font-bold text-base shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Animated gradient sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Play icon orb */}
              <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#FF0000] shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="absolute inset-0 rounded-full bg-[#FF0000] animate-ping opacity-40" />
                <svg className="relative w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="relative flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold">Subscribe</span>
                <span className="text-base">Watch More on YouTube</span>
              </span>

              <svg className="relative w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
