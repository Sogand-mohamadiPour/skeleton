'use client';

import { useEffect, useState } from 'react';

import ProductSkeleton from './components/ProductSkeleton';
import ProductCard from './components/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        'https://fakestoreapi.com/products'
      );

      const data = await response.json();

      // Artificial delay: 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setProducts(data);
      setLoading(false);
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <main className="p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}