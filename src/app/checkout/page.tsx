'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import OrderTypeStep from '@/components/checkout/OrderTypeStep';
import DeliveryLocationStep from '@/components/checkout/DeliveryLocationStep';
import DeliveryTimeStep from '@/components/checkout/DeliveryTimeStep';
import DineInStep from '@/components/checkout/DineInStep';
import ContactStep from '@/components/checkout/ContactStep';
import PreferencesStep from '@/components/checkout/PreferencesStep';

type CheckoutStep = 'orderType' | 'location' | 'deliveryTime' | 'dineIn' | 'contact' | 'preferences';

export default function CheckoutPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { items, orderType } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('orderType');

  // Redirect if cart is empty
  if (items.length === 0) {
    router.push('/');
    return null;
  }

  const handleStepComplete = (nextStep: CheckoutStep) => {
    setCurrentStep(nextStep);
  };

  const handleBack = (prevStep: CheckoutStep) => {
    setCurrentStep(prevStep);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {['orderType', 'location', 'contact', 'preferences'].map((step, index) => (
                <React.Fragment key={step}>
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-colors ${
                      currentStep === step
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-400 border-gray-300'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className={`flex-1 h-1 ${currentStep === step ? 'bg-black' : 'bg-gray-300'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-xl border-2 border-black p-6 shadow-lg">
            {currentStep === 'orderType' && (
              <OrderTypeStep onComplete={(type) => {
                if (type === 'delivery') {
                  handleStepComplete('location');
                } else {
                  handleStepComplete('dineIn');
                }
              }} />
            )}

            {currentStep === 'location' && (
              <DeliveryLocationStep
                onComplete={() => handleStepComplete('deliveryTime')}
                onBack={() => handleBack('orderType')}
              />
            )}

            {currentStep === 'deliveryTime' && (
              <DeliveryTimeStep
                onComplete={() => handleStepComplete('contact')}
                onBack={() => handleBack('location')}
              />
            )}

            {currentStep === 'dineIn' && (
              <DineInStep
                onComplete={() => handleStepComplete('contact')}
                onBack={() => handleBack('orderType')}
              />
            )}

            {currentStep === 'contact' && (
              <ContactStep
                onComplete={() => handleStepComplete('preferences')}
                onBack={() => {
                  if (orderType === 'delivery') {
                    handleBack('deliveryTime');
                  } else {
                    handleBack('dineIn');
                  }
                }}
              />
            )}

            {currentStep === 'preferences' && (
              <PreferencesStep
                onComplete={() => router.push('/review')}
                onBack={() => handleBack('contact')}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
