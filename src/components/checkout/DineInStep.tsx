'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { sanitizeTableNumber } from '@/utils/security';

interface DineInStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function DineInStep({ onComplete, onBack }: DineInStepProps) {
  const { t } = useLanguage();
  const { tableNumber, setTableNumber } = useCart();
  const [localTableNumber, setLocalTableNumber] = useState(tableNumber);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const sanitized = sanitizeTableNumber(localTableNumber);
    
    if (!sanitized) {
      setError(t('contact.required'));
      return;
    }

    setTableNumber(sanitized);
    onComplete();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('dineIn.title')}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="tableNumber" className="block font-semibold mb-2">
            {t('dineIn.tableNumber')}
          </label>
          <input
            id="tableNumber"
            type="text"
            value={localTableNumber}
            onChange={(e) => {
              setLocalTableNumber(e.target.value);
              setError('');
            }}
            placeholder={t('dineIn.placeholder')}
            className="input-field"
            maxLength={10}
          />
          {error && (
            <p className="text-red-600 text-sm mt-2">{error}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button type="button" onClick={onBack} className="btn-secondary flex-1">
            {t('location.back')}
          </button>
          <button type="submit" className="btn-primary flex-1">
            {t('location.continue')}
          </button>
        </div>
      </form>
    </div>
  );
}
