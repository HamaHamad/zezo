'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { getAvailableTimeSlots } from '@/data/config';
import type { TimeSlot } from '@/types';

interface DeliveryTimeStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function DeliveryTimeStep({ onComplete, onBack }: DeliveryTimeStepProps) {
  const { t } = useLanguage();
  const { setDeliveryTime, deliveryTime } = useCart();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(deliveryTime);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    setAvailableSlots(getAvailableTimeSlots());
  }, []);

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setDeliveryTime(slot);
  };

  const canProceed = selectedSlot !== null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('deliveryTime.title')}</h2>

      {availableSlots.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {t('deliveryTime.noSlots')}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 mb-6 max-h-96 overflow-y-auto">
          {availableSlots.map((slot) => {
            const isSelected = selectedSlot?.id === slot.id;

            return (
              <button
                key={slot.id}
                onClick={() => handleSlotSelect(slot)}
                className={`p-4 border-2 rounded-lg font-semibold transition-colors ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 hover:border-black hover:bg-gray-50'
                }`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4">
        <button onClick={onBack} className="btn-secondary flex-1">
          {t('location.back')}
        </button>
        <button
          onClick={onComplete}
          disabled={!canProceed}
          className="btn-primary flex-1"
        >
          {t('location.continue')}
        </button>
      </div>
    </div>
  );
}
