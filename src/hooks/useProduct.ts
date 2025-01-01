import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { products } from '../data/products';

export function useProduct(id: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProduct = () => {
      const found = products.find(p => p.id === id);
      setProduct(found || null);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  return { product, loading };
}