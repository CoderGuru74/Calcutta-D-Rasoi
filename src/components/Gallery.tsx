import React from "react";

interface GalleryProps {
  mode: "cafe" | "restaurant";
}

const Gallery: React.FC<GalleryProps> = ({ mode }) => {
  return (
    <section
      id="gallery"
      className="py-20 text-center relative z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/4477349.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-white">
          {mode === "cafe" ? "Cafe" : "Restaurant"} Gallery
        </h2>

        {/* Gallery Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/WhatsApp Image 2025-10-30 at 6.34.28 PM.jpeg"
            alt="Gallery 1"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.34.29 PM.jpeg"
            alt="Gallery 2"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.34.35 PM.jpeg"
            alt="Gallery 3"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.34.38 PM.jpeg"
            alt="Gallery 4"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.34.51 PM.jpeg"
            alt="Gallery 5"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.35.08 PM.jpeg"
            alt="Gallery 6"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.35.09 PM.jpeg"
            alt="Gallery 7"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.35.10 PM.jpeg"
            alt="Gallery 8"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/WhatsApp Image 2025-10-30 at 6.35.11 PM.jpeg"
            alt="Gallery 9"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
