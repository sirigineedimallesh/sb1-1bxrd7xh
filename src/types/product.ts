export interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  image: string;
  discount?: number;
  description?: string;
  specifications?: Record<string, string>;
}