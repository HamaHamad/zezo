'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { KUWAIT_LOCATIONS, searchLocations, getAreaByIds } from '@/data/locations';

interface DeliveryLocationStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function DeliveryLocationStep({ onComplete, onBack }: DeliveryLocationStepProps) {
  const { t, language } = useLanguage();
  const { setDeliveryLocation, deliveryLocation } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGov, setSelectedGov] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(
    deliveryLocation ? deliveryLocation.area : null
  );

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchLocations(searchQuery).slice(0, 10);
  }, [searchQuery]);

  const handleAreaSelect = (govId: string, areaId: string) => {
    const governorate = KUWAIT_LOCATIONS.find((g) => g.id === govId);
    const area = governorate?.areas.find((a) => a.id === areaId);
    
    if (governorate && area) {
      setDeliveryLocation({
        governorate: language === 'ar' ? governorate.name : governorate.nameEn,
        area: language === 'ar' ? area.name : area.nameEn,
        ...area,
      } as any);
      setSelectedArea(areaId);
    }
  };

  const canProceed = selectedArea !== null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('location.title')}</h2>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('location.search')}
          className="input-field"
        />

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-2 border-2 border-gray-200 rounded-lg max-h-60 overflow-y-auto">
            {searchResults.map((result, index) => {
              const govName = language === 'ar' ? result.governorate.name : result.governorate.nameEn;
              const areaName = language === 'ar' ? result.area.name : result.area.nameEn;
              
              return (
                <button
                  key={`${result.governorate.id}-${result.area.id}-${index}`}
                  onClick={() => {
                    handleAreaSelect(result.governorate.id, result.area.id);
                    setSearchQuery('');
                  }}
                  className="w-full p-3 text-right hover:bg-gray-50 border-b border-gray-200 last:border-0"
                >
                  <div className="font-semibold">{areaName}</div>
                  <div className="text-sm text-gray-600">
                    {govName} • {result.area.deliveryFee.toFixed(3)} {t('product.kwd')}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Governorates List */}
      <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
        {KUWAIT_LOCATIONS.map((governorate) => {
          const isOpen = selectedGov === governorate.id;
          const govName = language === 'ar' ? governorate.name : governorate.nameEn;

          return (
            <div key={governorate.id} className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedGov(isOpen ? null : governorate.id)}
                className="w-full p-4 text-right font-bold hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span>{isOpen ? '▼' : '◀'}</span>
                <span>{govName}</span>
              </button>

              {isOpen && (
                <div className="border-t-2 border-gray-200">
                  {governorate.areas.map((area) => {
                    const areaName = language === 'ar' ? area.name : area.nameEn;
                    const isSelected = selectedArea === area.id;

                    return (
                      <button
                        key={area.id}
                        onClick={() => handleAreaSelect(governorate.id, area.id)}
                        className={`w-full p-3 text-right hover:bg-gray-50 border-b border-gray-200 last:border-0 flex items-center justify-between ${
                          isSelected ? 'bg-black text-white hover:bg-gray-800' : ''
                        }`}
                      >
                        <span className="text-sm">
                          {area.deliveryFee.toFixed(3)} {t('product.kwd')}
                        </span>
                        <span>{areaName}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

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
