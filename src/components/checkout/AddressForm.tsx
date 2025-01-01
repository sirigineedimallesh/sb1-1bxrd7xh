import React, { useState } from 'react';

interface AddressFormProps {
  onSubmit: () => void;
}

export default function AddressForm({ onSubmit }: AddressFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Delivery Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Pincode"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
          required
        />
        <textarea
          placeholder="Address (Area and Street)"
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City/District/Town"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2874f0] text-white py-3 rounded-lg font-medium hover:bg-[#1c54b2]"
        >
          Deliver to this Address
        </button>
      </form>
    </div>
  );
}