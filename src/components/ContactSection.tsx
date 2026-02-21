import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkovqgay";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Baranti+Purulia+West+Bengal+India";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Book Your Stay Today
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            Have questions or want to reserve a room? Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info + map */}
          <div className="space-y-8">
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9007062180",
                  href: "tel:+919007062180",
                  external: false,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "kingsukhguesthouse@gmail.com",
                  href: "mailto:kingsukhguesthouse@gmail.com",
                  external: false,
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Baranti, Purulia, West Bengal 723152, India",
                  href: GOOGLE_MAPS_URL,
                  external: true,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={item.external ? (e) => { e.preventDefault(); window.open(item.href, '_blank', 'noopener,noreferrer'); } : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <item.icon className="h-5 w-5 text-accent group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-card-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer'); }}
              className="flex items-center justify-center gap-3 p-5 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 group"
            >
              <MapPin className="h-5 w-5 text-gold" />
              <span className="font-body text-sm font-semibold text-card-foreground group-hover:text-gold transition-colors">
                Open Location in Google Maps ↗
              </span>
            </a>
          </div>

          {/* Formspree Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                placeholder="I'd like to book a room for..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gold text-gold-foreground font-body text-sm font-semibold hover:brightness-110 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-center font-body text-sm text-accent font-medium animate-fade-in">
                ✓ Thank you! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center font-body text-sm text-destructive font-medium animate-fade-in">
                ✗ Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
