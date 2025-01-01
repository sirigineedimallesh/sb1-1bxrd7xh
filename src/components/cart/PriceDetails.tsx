import React from 'react';

interface PriceDetailsProps {
  subtotal: number;
  discount: number;
  delivery: number;
  onCheckout: () => void;
}

export default function PriceDetails({ subtotal, discount, delivery, onCheckout }: PriceDetailsProps) {
  const total = subtotal - discount + delivery;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Price Details</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Price ({3} items)</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ₹{discount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-bold text-lg">
          <span>Total Amount</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full mt-6 bg-[#2874f0] text-white py-3 rounded-lg font-medium hover:bg-[#1c54b2]"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}