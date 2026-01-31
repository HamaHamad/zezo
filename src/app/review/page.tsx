'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { sanitizePromoCode, generateOrderReference } from '@/utils/security';

export default function ReviewPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const {
    items,
    subtotal,
    deliveryFee,
    total,
    orderType,
    deliveryLocation,
    deliveryTime,
    tableNumber,
    whatsappNumber,
    promoCode,
    setPromoCode,
    updateQuantity,
    removeItem,
  } = useCart();
  const [localPromoCode, setLocalPromoCode] = useState(promoCode);

  if (items.length === 0) {
    router.push('/');
    return null;
  }

  const handleApplyPromo = () => {
    const sanitized = sanitizePromoCode(localPromoCode);
    setPromoCode(sanitized);
    // In MVP, promo codes are UI-only
    alert(t('review.promoCode') + ': ' + (sanitized || 'N/A'));
  };

  const handleConfirmOrder = () => {
    const orderRef = generateOrderReference();
    sessionStorage.setItem('lastOrderRef', orderRef);
    router.push('/confirmation');
  };

  const orderDate = new Date().toLocaleString(language === 'ar' ? 'ar-KW' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">{t('review.title')}</h1>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Info */}
              <div className="card">
                <h2 className="font-bold text-xl mb-4">{t('review.orderDetails')}</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('review.orderType')}</span>
                    <span className="font-semibold">
                      {orderType === 'delivery' ? t('orderType.delivery') : t('orderType.dineIn')}
                    </span>
                  </div>

                  {orderType === 'delivery' && deliveryLocation && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('review.deliveryLocation')}</span>
                        <span className="font-semibold">
                          {deliveryLocation.area}, {deliveryLocation.governorate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('review.deliveryTime')}</span>
                        <span className="font-semibold">{deliveryTime?.label}</span>
                      </div>
                    </>
                  )}

                  {orderType === 'dineIn' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('review.tableNumber')}</span>
                      <span className="font-semibold">{tableNumber}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('review.orderDate')}</span>
                    <span className="font-semibold">{orderDate}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('contact.whatsapp')}</span>
                    <span className="font-semibold" dir="ltr">+965 {whatsappNumber}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="card">
                <h2 className="font-bold text-xl mb-4">{t('review.items')}</h2>
                <div className="space-y-4">
                  {items.map((item) => {
                    const name = language === 'ar' ? item.name : item.nameEn;
                    
                    return (
                      <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.price.toFixed(3)} {t('product.kwd')} × {item.quantity}
                          </p>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 border border-black rounded font-bold text-sm hover:bg-gray-50"
                            >
                              -
                            </button>
                            <span className="font-semibold min-w-[2ch] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 border border-black rounded font-bold text-sm hover:bg-gray-50"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-600 hover:text-red-700 mr-2"
                            >
                              {t('cart.remove')}
                            </button>
                          </div>
                        </div>

                        <div className="text-right font-semibold">
                          {(item.price * item.quantity).toFixed(3)} {t('product.kwd')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Summary & Promo */}
            <div className="lg:col-span-1 space-y-6">
              {/* Promo Code */}
              <div className="card">
                <h3 className="font-bold mb-3">{t('review.promoCode')}</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={localPromoCode}
                    onChange={(e) => setLocalPromoCode(e.target.value.toUpperCase())}
                    placeholder={t('review.promoPlaceholder')}
                    className="input-field flex-1 text-sm"
                    maxLength={20}
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="btn-secondary text-sm px-4"
                  >
                    {t('review.apply')}
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="card sticky top-24">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>{t('cart.subtotal')}</span>
                    <span className="font-semibold">{subtotal.toFixed(3)} {t('product.kwd')}</span>
                  </div>

                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>{t('cart.deliveryFee')}</span>
                      <span className="font-semibold">{deliveryFee.toFixed(3)} {t('product.kwd')}</span>
                    </div>
                  )}

                  <div className="border-t-2 pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>{t('cart.total')}</span>
                      <span>{total.toFixed(3)} {t('product.kwd')}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmOrder}
                    className="btn-primary w-full"
                  >
                    {t('review.completeOrder')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
