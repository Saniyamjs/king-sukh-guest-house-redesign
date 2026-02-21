import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export type Page = "home" | "about" | "rooms" | "gallery" | "contact";

const Index = () => {
  const [activePage, setActivePage] = useState<Page>("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HeroSection onNavigate={setActivePage} />;
      case "about":
        return <AboutSection />;
      case "rooms":
        return <RoomsSection />;
      case "gallery":
        return <GallerySection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1">
        {renderPage()}
        <Footer onNavigate={setActivePage} />
      </main>
    </div>
  );
};

export default Index;
