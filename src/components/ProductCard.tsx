'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const { addItem } = useCart();

  const name = language === 'ar' ? product.name : product.nameEn;
  const description = language === 'ar' ? product.description : product.descriptionEn;

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative aspect-[4/3] mb-3 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg line-clamp-2">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold">
            {product.price.toFixed(3)} {t('product.kwd')}
          </span>

          <button
            onClick={() => addItem(product.id)}
            disabled={!product.available}
            className="btn-primary text-sm disabled:opacity-50"
            aria-label={`${t('product.addToCart')} ${name}`}
          >
            {product.available ? t('product.addToCart') : t('product.outOfStock')}
          </button>
        </div>
      </div>
    </div>
  );
}
