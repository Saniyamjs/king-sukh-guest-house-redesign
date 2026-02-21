import { Heart, Mountain, Coffee } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const highlights = [
  { icon: Heart, label: "Warm Hospitality" },
  { icon: Mountain, label: "Scenic Location" },
  { icon: Coffee, label: "Home-cooked Meals" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={aboutImg}
                alt="King Sukh Guest House interior"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-gold text-gold-foreground rounded-xl px-6 py-4 shadow-elevated">
              <p className="font-heading text-3xl font-bold">10+</p>
              <p className="font-body text-xs tracking-wide">Years of Service</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Welcome to King Sukh
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Tranquil Retreat in the Heart of Nature
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Nestled among the rolling hills of Baranti, Purulia, King Sukh Guest House offers
              a perfect blend of comfort and natural beauty. Whether you're seeking a peaceful getaway 
              or an adventure in the wilderness, our guest house provides a warm, home-like experience 
              with modern amenities.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              With spacious rooms, home-cooked meals, and breathtaking views of the Baranti Dam 
              and surrounding hills, we ensure every guest feels truly special.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-full bg-secondary px-5 py-2.5"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  <span className="font-body text-sm font-medium text-secondary-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
