import { Wifi, Wind, Car, Tv, Bath, Users } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomFamily from "@/assets/room-family.jpg";

const WHATSAPP_BASE =
  "https://wa.me/919007062180?text=Hello%20King%20Sukh%20Guest%20House%2C%20I%20am%20interested%20in%20booking%20the%20";

const rooms = [
  {
    name: "Standard Room",
    price: "₹800",
    period: "/night",
    image: roomStandard,
    description: "Comfortable room with essential amenities, perfect for solo travellers or couples.",
    amenities: [Wifi, Wind, Tv],
    amenityLabels: ["WiFi", "AC", "TV"],
  },
  {
    name: "Deluxe Room",
    price: "₹1,500",
    period: "/night",
    image: roomDeluxe,
    description: "Spacious room with premium furnishings, balcony, and scenic views of the hills.",
    amenities: [Wifi, Wind, Tv, Bath],
    amenityLabels: ["WiFi", "AC", "TV", "Attached Bath"],
    featured: true,
  },
  {
    name: "Family Suite",
    price: "₹2,500",
    period: "/night",
    image: roomFamily,
    description: "Large suite with multiple beds and a sitting area, ideal for families and groups.",
    amenities: [Wifi, Wind, Tv, Car, Users],
    amenityLabels: ["WiFi", "AC", "TV", "Parking", "4 Guests"],
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 lg:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Our Rooms
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comfort Meets Affordability
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            Choose from our carefully designed rooms, each offering a unique blend of comfort and value.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.name}
              className={`group relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500 ${
                room.featured ? "ring-2 ring-gold md:-translate-y-2" : ""
              }`}
            >
              {room.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gold text-gold-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-1">
                  {room.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-heading text-2xl font-bold text-gold">{room.price}</span>
                  <span className="font-body text-sm text-muted-foreground">{room.period}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {room.amenities.map((Icon, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-muted-foreground"
                      title={room.amenityLabels[i]}
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="font-body text-xs">{room.amenityLabels[i]}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(room.name)}.%20Please%20confirm%20availability%20and%20pricing.%20Thank%20you!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { e.preventDefault(); window.open(`${WHATSAPP_BASE}${encodeURIComponent(room.name)}.%20Please%20confirm%20availability%20and%20pricing.%20Thank%20you!`, '_blank', 'noopener,noreferrer'); }}
                  className="block text-center py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
