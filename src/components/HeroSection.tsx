import { MapPin, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import type { Page } from "@/pages/Index";

const WHATSAPP_URL =
  "https://wa.me/919007062180?text=Hello%20King%20Sukh%20Guest%20House%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room.%20Please%20share%20availability%20and%20pricing.%20Thank%20you!";

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="King Sukh Guest House exterior at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 mb-8 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-xs font-medium text-primary-foreground/80 tracking-wide">
              Trusted by 500+ Happy Guests
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Your Home Away
            <br />
            <span className="italic font-medium">From Home</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto mb-4 animate-fade-in-up [animation-delay:200ms]">
            Experience the warmth of authentic Indian hospitality amidst the serene beauty of Baranti, Purulia.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 mb-10 animate-fade-in-up [animation-delay:300ms]">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm">Baranti, Purulia, West Bengal</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer'); }}
              className="px-8 py-4 rounded-full bg-gold text-gold-foreground font-body font-semibold text-base tracking-wide hover:brightness-110 transition-all duration-300 shadow-elevated w-full sm:w-auto"
            >
              Book Now on WhatsApp
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-base tracking-wide hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
