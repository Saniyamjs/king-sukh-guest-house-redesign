import { Shield, MapPin, Utensils, Clock, Leaf, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Located near Baranti Dam with stunning views of hills and nature trails.",
  },
  {
    icon: Utensils,
    title: "Home-cooked Meals",
    desc: "Enjoy delicious, authentic Bengali cuisine freshly prepared with local ingredients.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "24/7 security and CCTV surveillance for a worry-free stay.",
  },
  {
    icon: Clock,
    title: "24/7 Assistance",
    desc: "Our friendly staff is available round the clock to assist you.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Surrounded by lush greenery, we promote sustainable tourism practices.",
  },
  {
    icon: HeartHandshake,
    title: "Affordable Pricing",
    desc: "Premium comfort at budget-friendly rates — value for every rupee.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Makes Us Special
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            We go above and beyond to make your stay memorable and comfortable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <f.icon className="h-6 w-6 text-accent group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
