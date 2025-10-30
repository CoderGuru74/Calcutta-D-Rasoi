import { Mode } from '../types';

interface AboutProps {
  mode: Mode;
}

export default function About({ mode }: AboutProps) {
  return (
    <section
      className="py-24 px-4 transition-colors duration-700"
      style={{
        background: mode === 'cafe'
          ? 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)'
          : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-5xl md:text-6xl font-bold mb-8 transition-colors duration-700"
          style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
        >
          Our Story
        </h2>

        <p
          className="text-lg md:text-xl leading-relaxed transition-colors duration-700"
          style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
        >
          Calcutta-D-Rasoi blends the charm of a cozy café with the sophistication of fine dining.
          Whether you crave a creamy cappuccino or a royal feast, switch modes and explore both
          worlds in one place. Experience the heart of Kolkata through every sip and every bite.
        </p>
      </div>
    </section>
  );
}
