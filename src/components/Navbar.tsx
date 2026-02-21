import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import type { Page } from "@/pages/Index";

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Rooms", page: "rooms" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

const WHATSAPP_URL =
  "https://wa.me/919007062180?text=Hello%20King%20Sukh%20Guest%20House%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room.%20Please%20share%20availability%20and%20pricing.%20Thank%20you!";

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const isHome = activePage === "home";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHome
          ? "bg-transparent py-5"
          : "bg-background/95 backdrop-blur-md shadow-soft py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2"
        >
          <span
            className={`font-heading text-2xl font-bold tracking-wide transition-colors duration-300 ${
              isHome ? "text-primary-foreground" : "text-primary"
            }`}
          >
            King Sukh
          </span>
          <span
            className={`hidden sm:inline font-body text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
              isHome ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            Guest House
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => onNavigate(link.page)}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  activePage === link.page
                    ? "text-gold"
                    : isHome
                    ? "text-primary-foreground/90"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition-all duration-300 ${
              isHome
                ? "bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm border border-primary-foreground/30 hover:bg-primary-foreground/30"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isHome ? "text-primary-foreground" : "text-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                onNavigate(link.page);
                setIsOpen(false);
              }}
              className={`block w-full text-left py-3 px-4 rounded-md font-body text-sm font-medium transition-colors ${
                activePage === link.page
                  ? "text-gold bg-secondary"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-3 py-3 rounded-md bg-primary text-primary-foreground font-body text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
