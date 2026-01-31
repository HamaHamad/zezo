'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { items, itemCount, subtotal, removeItem, updateQuantity, canProceedToCheckout } = useCart();

  if (itemCount === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-4">{t('cart.empty')}</h2>
            <button
              onClick={() => router.push('/')}
              className="btn-primary"
            >
              {t('header.menu')}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-32">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">{t('cart.title')}</h1>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {items.map((item) => {
              const name = language === 'ar' ? item.name : item.nameEn;
              
              return (
                <div key={item.id} className="card flex gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">{name}</h3>
                    <p className="text-lg font-semibold mb-2">
                      {item.price.toFixed(3)} {t('product.kwd')}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border-2 border-black rounded-lg font-bold hover:bg-gray-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="font-semibold min-w-[2ch] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border-2 border-black rounded-lg font-bold hover:bg-gray-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="mr-auto text-sm text-red-600 hover:text-red-700 font-semibold"
                      >
                        {t('cart.remove')}
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-right font-bold">
                    {(item.price * item.quantity).toFixed(3)} {t('product.kwd')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="card max-w-md mr-auto">
            <div className="space-y-3">
              <div className="flex justify-between text-lg">
                <span>{t('cart.subtotal')}</span>
                <span className="font-semibold">{subtotal.toFixed(3)} {t('product.kwd')}</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>{t('cart.total')}</span>
                  <span>{subtotal.toFixed(3)} {t('product.kwd')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-black safe-area-bottom">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/checkout')}
            disabled={!canProceedToCheckout}
            className="btn-primary w-full text-lg"
          >
            {t('cart.reviewOrder')}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
