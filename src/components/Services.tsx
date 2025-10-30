import { UtensilsCrossed, ShoppingBag, GlassWater } from "lucide-react";

interface ServicesProps {
  mode: "cafe" | "restaurant";
}

export default function Services({ mode }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-20 text-center relative z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/10758468.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for readability */}

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Our {mode === "cafe" ? "Cafe" : "Restaurant"} Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* 🩷 Dine In */}
          <div className="bg-pink-500 bg-opacity-80 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-12 h-12 mx-auto text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Dine In</h3>
            <p className="text-white">
              Enjoy our cozy ambiance and freshly prepared dishes served to your
              table.
            </p>
          </div>

          {/* 💛 Takeaway */}
          <div className="bg-yellow-400 bg-opacity-80 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform">
            <ShoppingBag className="w-12 h-12 mx-auto text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Takeaway</h3>
            <p className="text-white">
              Grab your favorite meals on the go — hot, fast, and perfectly packed
              for you.
            </p>
          </div>

          {/* 🩷 Catering */}
          <div className="bg-pink-500 bg-opacity-80 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform">
            <GlassWater className="w-12 h-12 mx-auto text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Catering</h3>
            <p className="text-white">
              Celebrate with our professional catering services for parties,
              events, and gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
