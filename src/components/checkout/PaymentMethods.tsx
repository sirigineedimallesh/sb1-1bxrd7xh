import React, { useState } from 'react';
import { CreditCard, Wallet, Building2 } from 'lucide-react';

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState('card');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Payment Options</h2>
      <div className="space-y-4">
        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="h-4 w-4 text-[#2874f0] focus:ring-[#2874f0]"
          />
          <CreditCard className="h-6 w-6 ml-4 text-gray-600" />
          <span className="ml-3">Credit / Debit Card</span>
        </label>

        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={selectedMethod === 'upi'}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="h-4 w-4 text-[#2874f0] focus:ring-[#2874f0]"
          />
          <Wallet className="h-6 w-6 ml-4 text-gray-600" />
          <span className="ml-3">UPI</span>
        </label>

        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="netbanking"
            checked={selectedMethod === 'netbanking'}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="h-4 w-4 text-[#2874f0] focus:ring-[#2874f0]"
          />
          <Building2 className="h-6 w-6 ml-4 text-gray-600" />
          <span className="ml-3">Net Banking</span>
        </label>

        {selectedMethod === 'card' && (
          <div className="mt-6 p-4 border rounded-lg">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
                />
              </div>
            </div>
          </div>
        )}

        <button className="w-full mt-6 bg-[#2874f0] text-white py-3 rounded-lg font-medium hover:bg-[#1c54b2]">
          Pay ₹94,989
        </button>
      </div>
    </div>
  );
}