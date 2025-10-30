import { Mode } from '../types';

interface FooterProps {
  mode: Mode;
}

export default function Footer({ mode }: FooterProps) {
  return (
    <footer
      className="py-8 px-4 text-center transition-colors duration-700"
      style={{
        backgroundColor: mode === 'cafe' ? '#D84797' : '#FFB20F',
        color: mode === 'cafe' ? '#ffffff' : '#1a1a1a'
      }}
    >
      <p className="font-medium">
        © 2025 Calcutta-D-Rasoi. All Rights Reserved.
      </p>
    </footer>
  );
}
