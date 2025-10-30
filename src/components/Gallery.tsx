import React from "react";
import { Mode } from "../types";

interface GalleryProps {
  mode: Mode;
}

const Gallery: React.FC<GalleryProps> = ({ mode }) => {
  const images = [
    "/WhatsApp Image 2025-10-30 at 6.34.28 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.34.29 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.34.35 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.34.38 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.34.51 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.08 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.09 PM (1).jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.09 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.10 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.11 PM (1).jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.11 PM.jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.23 PM (1).jpeg",
    "/WhatsApp Image 2025-10-30 at 6.35.23 PM.jpeg",
  ];

  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* ☕ Café Mode Image Background */}
      {mode === "cafe" && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/download.jpg")',
          }}
        >
          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* 🖼️ Gallery Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-5xl font-serif font-bold mb-12"
          style={{
            color: mode === "cafe" ? "#DD9AC2" : "#FFB20F",
            textShadow:
              mode === "cafe"
                ? "0 0 30px rgba(221, 154, 194, 0.5)"
                : "0 0 30px rgba(255, 178, 15, 0.5)",
          }}
        >
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl transform hover:scale-105 transition duration-500 shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
