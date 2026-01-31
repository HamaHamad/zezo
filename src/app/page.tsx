'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import FloatingCart from '@/components/FloatingCart';
import { getProductsByCategory } from '@/data/menu';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const products = getProductsByCategory(selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="flex-1 pb-24">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No products available in this category
            </div>
          )}
        </div>
      </main>

      <FloatingCart />
      <Footer />
    </div>
  );
}
