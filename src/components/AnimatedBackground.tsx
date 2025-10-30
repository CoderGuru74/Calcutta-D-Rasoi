import React from "react";
import { Mode } from "../types";

interface AnimatedBackgroundProps {
  mode: Mode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mode }) => {
  return (
    <div className="absolute inset-0 -z-10">
      {mode === "cafe" ? (
        // ☕ Static background image for Café
        <img
          src="/download.jpg"
          alt="Café background"
          className="w-full h-full object-cover"
        />
      ) : (
        // 🍽️ Optional: keep restaurant background as gradient
        <div className="w-full h-full bg-gradient-to-b from-[#FFB20F] to-[#D84797]" />
      )}

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default AnimatedBackground;
