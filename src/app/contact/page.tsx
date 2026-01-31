'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="card">
            {language === 'ar' ? (
              <>
                <h1 className="text-3xl font-bold mb-6">اتصل بنا</h1>
                
                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl font-bold mb-3">معلومات الاتصال</h2>
                    <div className="space-y-3 text-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        <div>
                          <p className="font-semibold">الهاتف</p>
                          <p className="text-gray-600" dir="ltr">+965 1234 5678</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📱</span>
                        <div>
                          <p className="font-semibold">واتساب</p>
                          <p className="text-gray-600" dir="ltr">+965 9876 5432</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✉️</span>
                        <div>
                          <p className="font-semibold">البريد الإلكتروني</p>
                          <p className="text-gray-600">info@restaurant.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📍</span>
                        <div>
                          <p className="font-semibold">العنوان</p>
                          <p className="text-gray-600">السالمية، حولي، الكويت</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-3">ساعات العمل</h2>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600">السبت - الخميس</span>
                        <span className="font-semibold">10:00 ص - 11:00 م</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">الجمعة</span>
                        <span className="font-semibold">2:00 م - 11:00 م</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-3">ساعات التوصيل</h2>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600">يومياً</span>
                        <span className="font-semibold">11:00 ص - 10:30 م</span>
                      </div>
                    </div>
                  </section>

                  <section className="bg-gray-50 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-3">ملاحظة هامة</h2>
                    <p className="text-gray-700">
                      هذا الموقع لا يقوم بتخزين أي بيانات شخصية. جميع المعلومات المدخلة مؤقتة
                      وتُستخدم فقط لتجهيز طلبك عبر واتساب.
                    </p>
                  </section>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                
                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl font-bold mb-3">Contact Information</h2>
                    <div className="space-y-3 text-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-600" dir="ltr">+965 1234 5678</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📱</span>
                        <div>
                          <p className="font-semibold">WhatsApp</p>
                          <p className="text-gray-600" dir="ltr">+965 9876 5432</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✉️</span>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-600">info@restaurant.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📍</span>
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-gray-600">Salmiya, Hawalli, Kuwait</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-3">Working Hours</h2>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday - Thursday</span>
                        <span className="font-semibold">10:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Friday</span>
                        <span className="font-semibold">2:00 PM - 11:00 PM</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-3">Delivery Hours</h2>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daily</span>
                        <span className="font-semibold">11:00 AM - 10:30 PM</span>
                      </div>
                    </div>
                  </section>

                  <section className="bg-gray-50 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-3">Important Note</h2>
                    <p className="text-gray-700">
                      This website does not store any personal data. All entered information is temporary
                      and used only to prepare your order via WhatsApp.
                    </p>
                  </section>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
