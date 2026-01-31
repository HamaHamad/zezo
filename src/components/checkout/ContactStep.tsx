'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { sanitizePhoneNumber, isValidKuwaitPhone } from '@/utils/security';

interface ContactStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function ContactStep({ onComplete, onBack }: ContactStepProps) {
  const { t } = useLanguage();
  const { whatsappNumber, setWhatsappNumber } = useCart();
  const [localNumber, setLocalNumber] = useState(whatsappNumber);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!localNumber.trim()) {
      setError(t('contact.required'));
      return;
    }

    const sanitized = sanitizePhoneNumber(localNumber);
    
    if (!isValidKuwaitPhone(sanitized)) {
      setError(t('contact.invalid'));
      return;
    }

    setWhatsappNumber(sanitized);
    onComplete();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('contact.title')}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="whatsapp" className="block font-semibold mb-2">
            {t('contact.whatsapp')}
          </label>
          <input
            id="whatsapp"
            type="tel"
            value={localNumber}
            onChange={(e) => {
              setLocalNumber(e.target.value);
              setError('');
            }}
            placeholder={t('contact.placeholder')}
            className="input-field"
            dir="ltr"
          />
          <p className="text-sm text-gray-600 mt-2">{t('contact.format')}</p>
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
