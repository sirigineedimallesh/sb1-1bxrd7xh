import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import PriceDetails from '../components/cart/PriceDetails';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Shopping Cart (3 items)</h2>
            </div>
            <div className="divide-y">
              <CartItem
                title="OnePlus Nord CE 3 Lite 5G"
                price={19999}
                image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=500"
                quantity={1}
              />
              <CartItem
                title="Apple MacBook Air M1"
                price={89990}
                image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500"
                quantity={1}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <PriceDetails
            subtotal={109989}
            discount={15000}
            delivery={0}
            onCheckout={() => navigate('/address')}
          />
        </div>
      </div>
    </div>
  );
}