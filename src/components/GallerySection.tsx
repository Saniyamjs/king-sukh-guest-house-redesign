import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import serviceImg from "@/assets/service.jpg";

const images = [
  { src: heroBg, alt: "King Sukh Guest House Exterior" },
  { src: gallery1, alt: "Palash Flowers in Baranti" },
  { src: gallery2, alt: "Mithon Dam" },
  { src: gallery3, alt: "Scenic Balcony View" },
  { src: gallery4, alt: "Reception & Lobby" },
  { src: serviceImg, alt: "Guest Services" },
  { src: gallery5, alt: "Hill Trails of Purulia" },
  { src: gallery6, alt: "Ayodhya Hills" },
  { src: gallery7, alt: "Baranti Lake Sunset" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Glimpse of Our Hospitality
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            Explore the beauty of Baranti and our warm guest house through our gallery.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-xl w-full break-inside-avoid block mb-4"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 rounded-xl flex items-end p-4">
                <span className="font-body text-sm text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium drop-shadow">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox with prev/next */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-primary-foreground/70 hover:text-primary-foreground z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-primary-foreground/70 hover:text-primary-foreground z-10 bg-foreground/30 hover:bg-foreground/50 rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[82vh] rounded-lg object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-primary-foreground/70 hover:text-primary-foreground z-10 bg-foreground/30 hover:bg-foreground/50 rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-body text-sm text-primary-foreground/80 font-medium">
              {images[lightbox].alt}
            </p>
            <p className="font-body text-xs text-primary-foreground/50 mt-1">
              {lightbox + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
