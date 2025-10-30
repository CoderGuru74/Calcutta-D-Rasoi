import React from "react";

const CafeDelight: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/PAS.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🖤 Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* ☕ Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
          Café Delight
        </h1>
        <p className="text-xl max-w-lg mx-auto drop-shadow-md">
          Experience the aroma, taste, and warmth of freshly brewed perfection.
        </p>
      </div>
    </section>
  );
};

export default CafeDelight;
