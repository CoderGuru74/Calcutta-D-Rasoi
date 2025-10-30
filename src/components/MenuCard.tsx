import { Mode, MenuItem } from '../types';
import { ShoppingBag } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  mode: Mode;
  onOrderClick: (itemName: string) => void;
}

export default function MenuCard({ item, mode, onOrderClick }: MenuCardProps) {
  return (
    <div
      className="group rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:scale-105 cursor-pointer"
      style={{
        backgroundColor: mode === 'cafe'
          ? 'rgba(255, 255, 255, 0.9)'
          : 'rgba(255, 255, 255, 0.05)',
        border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}20`,
        boxShadow: mode === 'cafe'
          ? '0 10px 30px rgba(221, 154, 194, 0.2)'
          : '0 10px 30px rgba(255, 178, 15, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = mode === 'cafe'
          ? '0 20px 60px rgba(221, 154, 194, 0.4)'
          : '0 20px 60px rgba(255, 178, 15, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = mode === 'cafe'
          ? '0 10px 30px rgba(221, 154, 194, 0.2)'
          : '0 10px 30px rgba(255, 178, 15, 0.2)';
      }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: mode === 'cafe'
              ? 'linear-gradient(180deg, transparent 0%, rgba(221, 154, 194, 0.3) 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(255, 178, 15, 0.3) 100%)'
          }}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3
            className="font-serif text-2xl font-bold transition-colors duration-300"
            style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
          >
            {item.name}
          </h3>
          <span
            className="text-xl font-bold"
            style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
          >
            ₹{item.price}
          </span>
        </div>

        <p
          className="text-sm mb-5 leading-relaxed"
          style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}
        >
          {item.description}
        </p>

        <button
          onClick={() => onOrderClick(item.name)}
          className="w-full py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
          style={{
            backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
            color: mode === 'cafe' ? '#ffffff' : '#1a1a1a'
          }}
        >
          <ShoppingBag className="w-4 h-4" />
          Order Now
        </button>
      </div>
    </div>
  );
}
