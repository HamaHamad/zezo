'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black safe-area-top">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            {t('header.title')}
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              aria-label={t('common.language')}
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              aria-label={t('header.cart')}
            >
              {t('header.cart')}
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black border-2 border-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
