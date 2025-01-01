import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ 
  id, 
  title, 
  price, 
  image, 
  quantity,
  onUpdateQuantity,
  onRemove 
}: CartItemProps) {
  return (
    <div className="p-6 flex items-center">
      <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg" />
      <div className="ml-6 flex-1">
        <Link to={`/product/${id}`} className="hover:text-[#2874f0]">
          <h3 className="text-lg font-medium">{title}</h3>
        </Link>
        <p className="text-2xl font-bold mt-2">₹{price.toLocaleString()}</p>
        <div className="flex items-center mt-4">
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-5 w-5" />
          </button>
          <span className="mx-4 font-medium">{quantity}</span>
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            <Plus className="h-5 w-5" />
          </button>
          <button 
            className="ml-6 p-1 rounded-full hover:bg-gray-100 text-red-500"
            onClick={() => onRemove(id)}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}