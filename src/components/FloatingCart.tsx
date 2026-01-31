'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function FloatingCart() {
  const router = useRouter();
  const { t } = useLanguage();
  const { itemCount, total } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="container mx-auto px-4 pb-4">
        <button
          onClick={() => router.push('/cart')}
          className="w-full bg-black text-white py-4 rounded-xl shadow-2xl hover:bg-gray-800 transition-colors flex items-center justify-between px-6 font-semibold"
          aria-label={t('cart.reviewOrder')}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              {itemCount}
            </div>
            <span>{t('cart.reviewOrder')}</span>
          </div>

          <span className="text-lg">
            {total.toFixed(3)} {t('product.kwd')}
          </span>
        </button>
      </div>
    </div>
  );
}
