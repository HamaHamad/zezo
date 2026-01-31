'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import type { OrderType } from '@/types';

interface OrderTypeStepProps {
  onComplete: (type: OrderType) => void;
}

export default function OrderTypeStep({ onComplete }: OrderTypeStepProps) {
  const { t } = useLanguage();
  const { setOrderType } = useCart();

  const handleSelect = (type: OrderType) => {
    setOrderType(type);
    onComplete(type);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('orderType.title')}</h2>

      <div className="space-y-4">
        <button
          onClick={() => handleSelect('delivery')}
          className="w-full p-6 border-2 border-black rounded-xl hover:bg-gray-50 transition-colors text-right"
        >
          <div className="flex items-center justify-between">
            <span className="text-4xl">🚗</span>
            <span className="text-xl font-bold">{t('orderType.delivery')}</span>
          </div>
        </button>

        <button
          onClick={() => handleSelect('dineIn')}
          className="w-full p-6 border-2 border-black rounded-xl hover:bg-gray-50 transition-colors text-right"
        >
          <div className="flex items-center justify-between">
            <span className="text-4xl">🍽️</span>
            <span className="text-xl font-bold">{t('orderType.dineIn')}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
