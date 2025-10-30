import { Coffee, UtensilsCrossed } from 'lucide-react';
import { Mode } from '../types';

interface ModeToggleProps {
  mode: Mode;
  onToggle: () => void;
}

export default function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border-2 transition-all duration-500 hover:scale-105 group"
      style={{
        backgroundColor: mode === 'cafe' ? 'rgba(221, 154, 194, 0.2)' : 'rgba(255, 178, 15, 0.2)',
        borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
        boxShadow: mode === 'cafe'
          ? '0 0 20px rgba(221, 154, 194, 0.3)'
          : '0 0 20px rgba(255, 178, 15, 0.3)'
      }}
    >
      <div className="flex items-center gap-2">
        {mode === 'cafe' ? (
          <Coffee className="w-5 h-5" style={{ color: '#DD9AC2' }} />
        ) : (
          <UtensilsCrossed className="w-5 h-5" style={{ color: '#FFB20F' }} />
        )}
        <span
          className="font-medium text-sm"
          style={{ color: mode === 'cafe' ? '#DD9AC2' : '#FFB20F' }}
        >
          {mode === 'cafe' ? 'Café Mode' : 'Restaurant Mode'}
        </span>
      </div>
      <div className="w-12 h-6 rounded-full relative transition-all duration-300"
        style={{ backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F' }}
      >
        <div
          className="absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300"
          style={{ left: mode === 'cafe' ? '4px' : '28px' }}
        />
      </div>
    </button>
  );
}
