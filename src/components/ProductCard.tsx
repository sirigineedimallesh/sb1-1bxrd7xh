import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  brand: string;
  discount?: number;
  rating?: number;
}

export default function ProductCard({ id, title, price, image, brand, discount, rating = 4.5 }: ProductProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {discount}% OFF
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm">{brand}</p>
          <h3 className="text-gray-800 font-medium truncate">{title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center bg-green-500 text-white px-2 py-0.5 rounded text-sm">
              <span>{rating}</span>
              <Star className="h-3 w-3 ml-1 fill-current" />
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="font-bold">₹{discountedPrice.toLocaleString()}</span>
            {discount && (
              <span className="text-sm text-gray-400 line-through">
                ₹{price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}