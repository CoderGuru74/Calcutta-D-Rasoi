import { Mode, MenuItem } from '../types';
import MenuCard from './MenuCard';

interface MenuProps {
  mode: Mode;
  items: MenuItem[];
  onOrderClick: (itemName: string) => void;
}

export default function Menu({ mode, items, onOrderClick }: MenuProps) {
  return (
    <section
      id="menu"
      className="py-24 px-4 transition-colors duration-700"
      style={{
        background: mode === 'cafe'
          ? 'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)'
          : 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-serif text-5xl md:text-6xl font-bold text-center mb-4 transition-colors duration-700"
          style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
        >
          {mode === 'cafe' ? 'Café Delights' : 'Restaurant Specialties'}
        </h2>

        <p
          className="text-center text-lg mb-16 transition-colors duration-700"
          style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}
        >
          {mode === 'cafe'
            ? 'Handcrafted beverages and artisan bites'
            : 'Authentic flavors from the streets of Kolkata'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              mode={mode}
              onOrderClick={onOrderClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
