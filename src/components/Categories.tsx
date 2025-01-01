import React from 'react';
import { Smartphone, Laptop, Gift, Home, ShoppingBag, Shirt, Watch } from 'lucide-react';

const categories = [
  { name: 'Mobiles', icon: Smartphone },
  { name: 'Electronics', icon: Laptop },
  { name: 'Fashion', icon: Shirt },
  { name: 'Home', icon: Home },
  { name: 'Appliances', icon: Gift },
  { name: 'Beauty', icon: ShoppingBag },
  { name: 'Accessories', icon: Watch },
];

export default function Categories() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center space-y-1 min-w-[100px] cursor-pointer hover:text-[#2874f0]"
            >
              <category.icon className="h-6 w-6" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}