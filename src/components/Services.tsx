import React from "react";
import { Mode } from "../types";

interface ServicesProps {
  mode: Mode;
}

const Services: React.FC<ServicesProps> = ({ mode }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* 🎥 Background only for Cafe */}
      {mode === "cafe" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/CO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // 🍽 Static background for restaurant
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>
      )}

      {/* 🌑 Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* 💡 Services Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1
          className="text-6xl font-serif font-bold mb-6 drop-shadow-lg"
          style={{ color: mode === "cafe" ? "#DD9AC2" : "#FFB20F" }}
        >
          Our Services
        </h1>
        <p className="max-w-3xl text-lg text-gray-200 mb-12">
          Discover the essence of hospitality and flavor — from freshly brewed
          coffee to traditional Kolkata delicacies, we bring you an experience
          that blends culture, comfort, and taste.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Example service cards */}
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: mode === "cafe" ? "#DD9AC2" : "#FFB20F" }}
            >
              Café Specials
            </h2>
            <p className="text-gray-200">
              Enjoy handcrafted coffee, teas, and beverages made from the finest
              ingredients to kickstart your day.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: mode === "cafe" ? "#DD9AC2" : "#FFB20F" }}
            >
              Authentic Cuisine
            </h2>
            <p className="text-gray-200">
              Taste Kolkata’s charm with dishes that capture tradition, spice,
              and flavor in every bite.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: mode === "cafe" ? "#DD9AC2" : "#FFB20F" }}
            >
              Event Catering
            </h2>
            <p className="text-gray-200">
              Let us bring our culinary excellence to your celebrations with
              catering that delights every guest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
