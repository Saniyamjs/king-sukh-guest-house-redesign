import { Phone, Mail, MapPin } from "lucide-react";
import type { Page } from "@/pages/Index";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Rooms", page: "rooms" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-3">King Sukh Guest House</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Your perfect retreat in the hills of Baranti, offering warm hospitality,
              comfortable stays, and unforgettable experiences amidst nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="tel:+919007062180" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +91 9007062180
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="mailto:kingsukhguesthouse@gmail.com" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-all">
                  kingsukhguesthouse@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Baranti, Purulia, West Bengal 723152
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} King Sukh Guest House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
