import React from "react";
import { Mode } from "../types";

interface PartyOrdersProps {
  mode: Mode;
}

const PartyOrders: React.FC<PartyOrdersProps> = ({ mode }) => {
  return (
    <section
      id="party-orders"
      className="relative py-20 text-center"
      style={{
        backgroundColor: mode === "cafe" ? "#FFF0F6" : "#FFF7E6", // light tone for each mode
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-6"
          style={{
            color: mode === "cafe" ? "#DD9AC2" : "#FFB20F",
          }}
        >
          Book a Table or Host a Party
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Whether it’s a cozy café gathering or a grand restaurant celebration,
          we’ll make it memorable for you.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white shadow focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white shadow focus:outline-none"
          />
          <input
            type="number"
            placeholder="Number of Guests"
            className="p-4 rounded-lg bg-white shadow focus:outline-none"
          />
          <input
            type="date"
            className="p-4 rounded-lg bg-white shadow focus:outline-none"
          />
          <textarea
            placeholder="Special Requests"
            rows={4}
            className="p-4 rounded-lg bg-white shadow focus:outline-none md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 py-4 px-8 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: mode === "cafe" ? "#DD9AC2" : "#FFB20F",
              color: mode === "cafe" ? "#ffffff" : "#1a1a1a",
            }}
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default PartyOrders;
