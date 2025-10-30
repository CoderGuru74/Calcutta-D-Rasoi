import { Mode } from "../types";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  mode: Mode;
  onExploreMenu: () => void;
}

export default function Hero({ mode, onExploreMenu }: HeroProps) {
  // ✅ Updated background image
  const cafeImage = "/back.jpg";

  const restaurantImage =
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Café background image */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: mode === "cafe" ? 1 : 0,
          backgroundImage: `url(${cafeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Restaurant background image */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: mode === "restaurant" ? 1 : 0,
          backgroundImage: `url(${restaurantImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero text content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="font-serif text-6xl md:text-8xl font-bold mb-6 transition-all duration-700"
          style={{
            color: mode === "cafe" ? "#DD9AC2" : "#FFB20F",
            textShadow:
              mode === "cafe"
                ? "0 0 40px rgba(221, 154, 194, 0.5)"
                : "0 0 40px rgba(255, 178, 15, 0.5)",
          }}
        >
          Welcome to
          <br />
          Calcutta-D-Rasoi {mode === "cafe" ? "Café" : "Restaurant"}
        </h1>

        <p className="text-white/90 text-xl md:text-2xl mb-10 font-light">
          A Taste of Kolkata's Heart — Brewed & Served with Love
        </p>

        <button
          onClick={onExploreMenu}
          className="px-10 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundColor: mode === "cafe" ? "#DD9AC2" : "#FFB20F",
            color: mode === "cafe" ? "#ffffff" : "#1a1a1a",
            boxShadow:
              mode === "cafe"
                ? "0 0 30px rgba(221, 154, 194, 0.4)"
                : "0 0 30px rgba(255, 178, 15, 0.4)",
          }}
        >
          Explore Menu
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
