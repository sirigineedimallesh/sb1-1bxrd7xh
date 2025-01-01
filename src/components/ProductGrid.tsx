import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'OnePlus Nord CE 3 Lite 5G',
    price: 19999,
    brand: 'OnePlus',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=500',
    discount: 20,
  },
  {
    id: 2,
    title: 'Apple MacBook Air M1',
    price: 89990,
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500',
    discount: 15,
  },
  {
    id: 3,
    title: 'Sony WH-1000XM4 Headphones',
    price: 24990,
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500',
    discount: 25,
  },
  {
    id: 4,
    title: 'Samsung 4K Smart TV',
    price: 49999,
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=500',
    discount: 30,
  },
  {
    id: 5,
    title: 'Fossil Gen 6 Smartwatch',
    price: 22995,
    brand: 'Fossil',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500',
    discount: 10,
  },
  {
    id: 6,
    title: 'Nike Air Max 270',
    price: 12995,
    brand: 'Nike',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
    discount: 40,
  },
];

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Top Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}