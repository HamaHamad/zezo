'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { formatKuwaitPhone, escapeWhatsAppMessage } from '@/utils/security';
import type { Order } from '@/types';

export default function ConfirmationPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const {
    items,
    total,
    orderType,
    deliveryLocation,
    deliveryTime,
    tableNumber,
    whatsappNumber,
    clearCart,
  } = useCart();
  const [orderRef, setOrderRef] = useState('');

  useEffect(() => {
    const ref = sessionStorage.getItem('lastOrderRef');
    if (!ref) {
      router.push('/');
      return;
    }
    setOrderRef(ref);
  }, [router]);

  const generateWhatsAppMessage = (): string => {
    const orderTypeText = orderType === 'delivery' ? t('orderType.delivery') : t('orderType.dineIn');
    
    let message = `*${t('confirmation.title')}*\n\n`;
    message += `${t('confirmation.reference')}: ${orderRef}\n`;
    message += `${t('review.orderType')}: ${orderTypeText}\n`;
    
    if (orderType === 'delivery' && deliveryLocation) {
      message += `${t('review.deliveryLocation')}: ${deliveryLocation.area}, ${deliveryLocation.governorate}\n`;
      message += `${t('review.deliveryTime')}: ${deliveryTime?.label}\n`;
    }
    
    if (orderType === 'dineIn') {
      message += `${t('review.tableNumber')}: ${tableNumber}\n`;
    }
    
    message += `\n*${t('review.items')}:*\n`;
    
    items.forEach((item, index) => {
      const name = language === 'ar' ? item.name : item.nameEn;
      message += `${index + 1}. ${name} × ${item.quantity} - ${(item.price * item.quantity).toFixed(3)} ${t('product.kwd')}\n`;
    });
    
    message += `\n*${t('cart.total')}: ${total.toFixed(3)} ${t('product.kwd')}*`;
    
    return escapeWhatsAppMessage(message);
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = whatsappNumber.startsWith('965') ? whatsappNumber : `965${whatsappNumber}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleNewOrder = () => {
    clearCart();
    sessionStorage.removeItem('lastOrderRef');
    router.push('/');
  };

  if (!orderRef) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="card text-center">
            {/* Success Icon */}
            <div className="text-6xl mb-6">✅</div>
            
            <h1 className="text-3xl font-bold mb-4">{t('confirmation.title')}</h1>
            <p className="text-lg text-gray-600 mb-6">{t('confirmation.success')}</p>

            {/* Order Reference */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">{t('confirmation.reference')}</p>
              <p className="text-2xl font-bold font-mono">{orderRef}</p>
            </div>

            {/* Order Summary */}
            <div className="text-right bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
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
              
              <div className="flex justify-between pt-2 border-t-2">
                <span className="text-gray-600">{t('cart.total')}</span>
                <span className="font-bold text-xl">{total.toFixed(3)} {t('product.kwd')}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">{t('confirmation.whatsappMessage')}</p>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleSendWhatsApp}
                className="btn-primary w-full text-lg"
              >
                📱 {t('confirmation.sendWhatsApp')}
              </button>

              <button
                onClick={handleNewOrder}
                className="btn-secondary w-full"
              >
                {t('confirmation.newOrder')}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
