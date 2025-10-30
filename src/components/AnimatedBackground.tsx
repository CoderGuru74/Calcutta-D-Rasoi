import React from "react";
import { Mode } from "../types";

interface AnimatedBackgroundProps {
  mode: Mode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mode }) => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      src="/coffee.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default AnimatedBackground;
