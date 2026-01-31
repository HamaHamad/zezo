'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card prose prose-lg max-w-none">
            {language === 'ar' ? (
              <>
                <h1 className="text-3xl font-bold mb-6">سياسة الخصوصية</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. جمع البيانات</h2>
                  <p className="mb-4">
                    هذا الموقع لا يقوم بتخزين أي بيانات شخصية بشكل دائم. جميع المعلومات المدخلة تُستخدم فقط
                    خلال الجلسة الحالية وتُحذف تلقائياً عند إغلاق المتصفح أو انتهاء الجلسة.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. البيانات المؤقتة</h2>
                  <p className="mb-4">
                    عند استخدام الموقع، قد نحتفظ مؤقتاً بالبيانات التالية في ذاكرة المتصفح:
                  </p>
                  <ul className="list-disc pr-6 mb-4">
                    <li>عناصر السلة</li>
                    <li>تفضيلات الطلب (نوع الطلب، الموقع، الوقت)</li>
                    <li>رقم واتساب للتواصل</li>
                    <li>تفضيلات الإشعارات</li>
                  </ul>
                  <p className="mb-4">
                    هذه البيانات لا يتم إرسالها إلى أي خادم ولا يتم مشاركتها مع أطراف ثالثة.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. ملفات تعريف الارتباط (Cookies)</h2>
                  <p className="mb-4">
                    نستخدم فقط ملفات تعريف الارتباط الضرورية لتشغيل الموقع (مثل تفضيلات اللغة).
                    لا نستخدم ملفات تعريف الارتباط للتتبع أو التحليلات.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. مشاركة البيانات</h2>
                  <p className="mb-4">
                    عند إرسال الطلب عبر واتساب، يتم مشاركة تفاصيل طلبك مع رقم المطعم فقط.
                    نحن لا نقوم بتخزين أو الوصول إلى هذه المعلومات.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. حقوقك</h2>
                  <p className="mb-4">
                    نظراً لأننا لا نقوم بتخزين أي بيانات، فإن جميع معلوماتك تبقى تحت سيطرتك الكاملة.
                    يمكنك حذف البيانات في أي وقت عن طريق:
                  </p>
                  <ul className="list-disc pr-6 mb-4">
                    <li>مسح بيانات المتصفح</li>
                    <li>إغلاق نافذة المتصفح</li>
                    <li>استخدام وضع التصفح الخاص</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. الأمان</h2>
                  <p className="mb-4">
                    نستخدم بروتوكول HTTPS لتشفير جميع الاتصالات بين متصفحك والموقع.
                    جميع البيانات تتم معالجتها محلياً في متصفحك ولا تُرسل إلى خوادمنا.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. التحديثات</h2>
                  <p className="mb-4">
                    قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. تواصل معنا</h2>
                  <p className="mb-4">
                    إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى الاتصال بنا عبر صفحة{' '}
                    <a href="/contact" className="text-blue-600 hover:underline">اتصل بنا</a>.
                  </p>
                </section>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
                  <p className="mb-4">
                    This website does not store any personal data permanently. All entered information is used
                    only during the current session and is automatically deleted when the browser is closed or
                    the session ends.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. Temporary Data</h2>
                  <p className="mb-4">
                    When using the website, we may temporarily store the following data in browser memory:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Cart items</li>
                    <li>Order preferences (order type, location, time)</li>
                    <li>WhatsApp number for communication</li>
                    <li>Notification preferences</li>
                  </ul>
                  <p className="mb-4">
                    This data is not sent to any server and is not shared with third parties.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
                  <p className="mb-4">
                    We only use cookies necessary for website operation (such as language preferences).
                    We do not use cookies for tracking or analytics.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
                  <p className="mb-4">
                    When sending an order via WhatsApp, your order details are shared with the restaurant's
                    number only. We do not store or access this information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                  <p className="mb-4">
                    Since we don't store any data, all your information remains under your complete control.
                    You can delete data at any time by:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Clearing browser data</li>
                    <li>Closing the browser window</li>
                    <li>Using private browsing mode</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Security</h2>
                  <p className="mb-4">
                    We use HTTPS protocol to encrypt all communications between your browser and the website.
                    All data is processed locally in your browser and is not sent to our servers.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Updates</h2>
                  <p className="mb-4">
                    We may update this privacy policy from time to time. Any changes will be posted on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about the privacy policy, please contact us via the{' '}
                    <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a> page.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
