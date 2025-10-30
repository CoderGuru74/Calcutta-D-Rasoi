import { Mode } from '../types';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

interface ContactProps {
  mode: Mode;
}

export default function Contact({ mode }: ContactProps) {
  return (
    <section
      className="py-24 px-4 transition-colors duration-700"
      style={{
        background: mode === 'cafe'
          ? 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)'
          : 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-5xl md:text-6xl font-bold mb-6 transition-colors duration-700"
          style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
        >
          Book a Table / Contact Us
        </h2>

        <p
          className="text-lg mb-12 transition-colors duration-700"
          style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}
        >
          We'd love to hear from you. Reach out for reservations or inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:calcutta.d.rasoicafe@gmail.com"
            className="flex items-center justify-center gap-3 py-5 px-8 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
              color: mode === 'cafe' ? '#ffffff' : '#1a1a1a',
              boxShadow: mode === 'cafe'
                ? '0 10px 30px rgba(221, 154, 194, 0.3)'
                : '0 10px 30px rgba(255, 178, 15, 0.3)'
            }}
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email Us</span>
          </a>

          <a
            href="tel:+919942498114"
            className="flex items-center justify-center gap-3 py-5 px-8 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
              color: mode === 'cafe' ? '#ffffff' : '#1a1a1a',
              boxShadow: mode === 'cafe'
                ? '0 10px 30px rgba(221, 154, 194, 0.3)'
                : '0 10px 30px rgba(255, 178, 15, 0.3)'
            }}
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="p-4 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(221, 154, 194, 0.2)'
                : 'rgba(255, 178, 15, 0.2)',
              color: mode === 'cafe' ? '#D84797' : '#FFB20F'
            }}
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-4 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(221, 154, 194, 0.2)'
                : 'rgba(255, 178, 15, 0.2)',
              color: mode === 'cafe' ? '#D84797' : '#FFB20F'
            }}
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
