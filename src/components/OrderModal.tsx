import { useState } from 'react';
import { Mode } from '../types';
import { X, CheckCircle } from 'lucide-react';

interface OrderModalProps {
  mode: Mode;
  selectedItem: string;
  onClose: () => void;
}

export default function OrderModal({ mode, selectedItem, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', phone: '', address: '' });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md rounded-2xl p-8 transition-all duration-300"
        style={{
          backgroundColor: mode === 'cafe' ? '#ffffff' : '#1a1a1a',
          border: `2px solid ${mode === 'cafe' ? '#DD9AC2' : '#FFB20F'}`,
          boxShadow: mode === 'cafe'
            ? '0 20px 60px rgba(221, 154, 194, 0.3)'
            : '0 20px 60px rgba(255, 178, 15, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
          style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <h3
              className="font-serif text-3xl font-bold mb-2"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Place Your Order
            </h3>
            <p
              className="mb-6"
              style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}
            >
              Ordering: <span className="font-semibold">{selectedItem}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: mode === 'cafe' ? '#5a3a4a' : '#d4d4d4' }}
                >
                  Address
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: mode === 'cafe' ? '#fce4ec' : '#2d2d2d',
                    borderColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                    color: mode === 'cafe' ? '#5a3a4a' : '#ffffff'
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: mode === 'cafe' ? '#DD9AC2' : '#FFB20F',
                  color: mode === 'cafe' ? '#ffffff' : '#1a1a1a',
                  boxShadow: mode === 'cafe'
                    ? '0 10px 30px rgba(221, 154, 194, 0.3)'
                    : '0 10px 30px rgba(255, 178, 15, 0.3)'
                }}
              >
                Confirm Order (Cash on Delivery)
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle
              className="w-20 h-20 mx-auto mb-4"
              style={{ color: mode === 'cafe' ? '#DD9AC2' : '#FFB20F' }}
            />
            <h3
              className="font-serif text-2xl font-bold mb-2"
              style={{ color: mode === 'cafe' ? '#D84797' : '#FFB20F' }}
            >
              Order Placed Successfully!
            </h3>
            <p style={{ color: mode === 'cafe' ? '#5a3a4a' : '#b0b0b0' }}>
              Please pay cash on delivery
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
