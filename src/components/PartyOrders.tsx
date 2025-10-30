import { useState } from 'react';
import { Mode } from '../types';
import { PartyPopper, Users, Calendar, CheckCircle } from 'lucide-react';

interface PartyOrdersProps {
  mode: Mode;
}

export default function PartyOrders({ mode }: PartyOrdersProps) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
    eventType: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: '', phone: '', date: '', guests: '', eventType: '', requirements: '' });
    }, 3000);
  };

  return (
    <section
      className="py-24 px-4 transition-colors duration-700"
      style={{
        background: mode === 'cafe'
          ? 'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)'
          : 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <PartyPopper
            className="w-16 h-16 mx-auto mb-6"
            style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
          />
          <h2
            className="font-serif text-5xl md:text-6xl font-bold mb-4 transition-colors duration-700"
            style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
          >
            Party Orders & Events
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto transition-colors duration-700"
            style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}
          >
            Make your celebrations unforgettable with our premium catering services.
            From intimate gatherings to grand celebrations, we cater to all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            className="p-8 rounded-2xl text-center backdrop-blur-md transition-all duration-500 hover:scale-105"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(255, 255, 255, 0.9)'
                : 'rgba(255, 255, 255, 0.05)',
              border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}40`,
              boxShadow: mode === 'cafe'
                ? '0 10px 30px rgba(221, 154, 194, 0.2)'
                : '0 10px 30px rgba(255, 178, 15, 0.2)'
            }}
          >
            <Users
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            />
            <h3
              className="font-serif text-2xl font-bold mb-3"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Birthday Parties
            </h3>
            <p style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}>
              Celebrate your special day with custom menus and decorations
            </p>
          </div>

          <div
            className="p-8 rounded-2xl text-center backdrop-blur-md transition-all duration-500 hover:scale-105"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(255, 255, 255, 0.9)'
                : 'rgba(255, 255, 255, 0.05)',
              border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}40`,
              boxShadow: mode === 'cafe'
                ? '0 10px 30px rgba(221, 154, 194, 0.2)'
                : '0 10px 30px rgba(255, 178, 15, 0.2)'
            }}
          >
            <Calendar
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            />
            <h3
              className="font-serif text-2xl font-bold mb-3"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Corporate Events
            </h3>
            <p style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}>
              Professional catering for meetings, conferences, and team events
            </p>
          </div>

          <div
            className="p-8 rounded-2xl text-center backdrop-blur-md transition-all duration-500 hover:scale-105"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(255, 255, 255, 0.9)'
                : 'rgba(255, 255, 255, 0.05)',
              border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}40`,
              boxShadow: mode === 'cafe'
                ? '0 10px 30px rgba(221, 154, 194, 0.2)'
                : '0 10px 30px rgba(255, 178, 15, 0.2)'
            }}
          >
            <PartyPopper
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            />
            <h3
              className="font-serif text-2xl font-bold mb-3"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Special Occasions
            </h3>
            <p style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}>
              Weddings, anniversaries, and all your milestone celebrations
            </p>
          </div>
        </div>

        {!showForm && !submitted && (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-12 py-5 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                color: mode === 'cafe' ? '#ffffff' : '#1a1a1a',
                boxShadow: mode === 'cafe'
                  ? '0 10px 40px rgba(221, 154, 194, 0.4)'
                  : '0 10px 40px rgba(255, 178, 15, 0.4)'
              }}
            >
              Book Party Order Now
            </button>
          </div>
        )}

        {showForm && !submitted && (
          <div
            className="max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-md"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(255, 255, 255, 0.95)'
                : 'rgba(26, 26, 26, 0.95)',
              border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}`,
              boxShadow: mode === 'cafe'
                ? '0 20px 60px rgba(221, 154, 194, 0.3)'
                : '0 20px 60px rgba(255, 178, 15, 0.3)'
            }}
          >
            <h3
              className="font-serif text-3xl font-bold mb-6 text-center"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Party Order Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block mb-2 font-medium"
                    style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                      borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                      color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 font-medium"
                    style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                      borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                      color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block mb-2 font-medium"
                    style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                      borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                      color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 font-medium"
                    style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                      borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                      color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                >
                  Event Type
                </label>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                    borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                    color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                  }}
                >
                  <option value="">Select Event Type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                >
                  Special Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Any dietary restrictions, theme preferences, or special requests..."
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                    borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                    color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                  }}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'transparent',
                    border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}`,
                    color: mode === 'cafe' ? '#D84797' : '#FFB20F'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                    color: mode === 'cafe' ? '#ffffff' : '#1a1a1a',
                    boxShadow: mode === 'cafe'
                      ? '0 10px 30px rgba(221, 154, 194, 0.3)'
                      : '0 10px 30px rgba(255, 178, 15, 0.3)'
                  }}
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        )}

        {submitted && (
          <div
            className="max-w-md mx-auto p-12 rounded-2xl text-center backdrop-blur-md"
            style={{
              backgroundColor: mode === 'cafe'
                ? 'rgba(255, 255, 255, 0.95)'
                : 'rgba(26, 26, 26, 0.95)',
              boxShadow: mode === 'cafe'
                ? '0 20px 60px rgba(221, 154, 194, 0.3)'
                : '0 20px 60px rgba(255, 178, 15, 0.3)'
            }}
          >
            <CheckCircle
              className="w-20 h-20 mx-auto mb-4"
              style={{ color: mode === 'cafe' ? '#DD9AC2' : '#FFB20F' }}
            />
            <h3
              className="font-serif text-2xl font-bold mb-2"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Request Received!
            </h3>
            <p style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}>
              We'll contact you shortly to discuss your party order details
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
