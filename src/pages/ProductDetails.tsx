import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { useCart } from '../store/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading } = useProduct(Number(id));
  const { dispatch } = useCart();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div>Product not found</div>
      </div>
    );
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1 }
    });
    navigate('/cart');
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.brand}</p>
          
          <div className="mt-4">
            <span className="text-3xl font-bold">₹{discountedPrice.toLocaleString()}</span>
            {product.discount && (
              <>
                <span className="ml-2 text-gray-500 line-through">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="ml-2 text-green-600">{product.discount}% off</span>
              </>
            )}
          </div>

          <button
            onClick={addToCart}
            className="mt-6 w-full bg-[#2874f0] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1c54b2] flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>

          {product.description && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          )}

          {product.specifications && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <div className="mt-4 space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="w-1/3 text-gray-600">{key}</span>
                    <span className="w-2/3">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}