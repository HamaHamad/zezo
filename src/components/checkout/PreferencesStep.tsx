'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import type { UserPreferences, LegalConsent } from '@/types';

interface PreferencesStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function PreferencesStep({ onComplete, onBack }: PreferencesStepProps) {
  const { t } = useLanguage();
  const { preferences, consent, setPreferences, setConsent } = useCart();
  
  const [localPreferences, setLocalPreferences] = useState<UserPreferences>(preferences);
  const [localConsent, setLocalConsent] = useState<LegalConsent>(consent);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!localConsent.termsAccepted || !localConsent.privacyAccepted) {
      setError(t('preferences.required'));
      return;
    }

    setPreferences(localPreferences);
    setConsent(localConsent);
    onComplete();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('preferences.title')}</h2>

      <form onSubmit={handleSubmit}>
        {/* Notifications Preferences */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3">{t('preferences.notifications')}</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={localPreferences.receivePromotions}
                onChange={(e) =>
                  setLocalPreferences((prev) => ({
                    ...prev,
                    receivePromotions: e.target.checked,
                  }))
                }
                className="w-5 h-5 border-2 border-black rounded"
              />
              <span>{t('preferences.promotions')}</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={localPreferences.receiveOrderUpdates}
                onChange={(e) =>
                  setLocalPreferences((prev) => ({
                    ...prev,
                    receiveOrderUpdates: e.target.checked,
                  }))
                }
                className="w-5 h-5 border-2 border-black rounded"
              />
              <span>{t('preferences.orderUpdates')}</span>
            </label>
          </div>
        </div>

        {/* Legal Consent */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3">{t('preferences.legal')}</h3>
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={localConsent.termsAccepted}
                onChange={(e) => {
                  setLocalConsent((prev) => ({
                    ...prev,
                    termsAccepted: e.target.checked,
                  }));
                  setError('');
                }}
                className="w-5 h-5 border-2 border-black rounded mt-0.5 flex-shrink-0"
                required
              />
              <span>
                {t('preferences.terms')}{' '}
                <Link href="/terms" target="_blank" className="text-blue-600 hover:underline">
                  ({t('preferences.viewTerms')})
                </Link>
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={localConsent.privacyAccepted}
                onChange={(e) => {
                  setLocalConsent((prev) => ({
                    ...prev,
                    privacyAccepted: e.target.checked,
                  }));
                  setError('');
                }}
                className="w-5 h-5 border-2 border-black rounded mt-0.5 flex-shrink-0"
                required
              />
              <span>
                {t('preferences.privacy')}{' '}
                <Link href="/privacy" target="_blank" className="text-blue-600 hover:underline">
                  ({t('preferences.viewPrivacy')})
                </Link>
              </span>
            </label>
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-3">{error}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button type="button" onClick={onBack} className="btn-secondary flex-1">
            {t('location.back')}
          </button>
          <button type="submit" className="btn-primary flex-1">
            {t('review.completeOrder')}
          </button>
        </div>
      </form>
    </div>
  );
}
