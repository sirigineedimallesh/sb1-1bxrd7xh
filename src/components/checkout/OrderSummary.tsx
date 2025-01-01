import React from 'react';

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Items (3)</span>
          <span className="font-medium">₹109,989</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Discount</span>
          <span className="text-green-600">-₹15,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center font-bold">
            <span>Total</span>
            <span>₹94,989</span>
          </div>
        </div>
      </div>
    </div>
  );
}