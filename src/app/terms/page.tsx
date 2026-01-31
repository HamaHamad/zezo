'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card prose prose-lg max-w-none">
            {language === 'ar' ? (
              <>
                <h1 className="text-3xl font-bold mb-6">الشروط والأحكام</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. قبول الشروط</h2>
                  <p className="mb-4">
                    باستخدامك لهذا الموقع وتقديم الطلبات من خلاله، فإنك توافق على هذه الشروط والأحكام.
                    إذا كنت لا توافق على هذه الشروط، يُرجى عدم استخدام الموقع.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. طبيعة الخدمة</h2>
                  <p className="mb-4">
                    هذا الموقع هو نظام طلب إلكتروني يساعدك على تجهيز طلبك وإرساله عبر واتساب.
                    الموقع لا يقوم بمعالجة الدفع أو تأكيد الطلب مباشرة - يتم ذلك من خلال التواصل مع المطعم.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. مسؤولية المستخدم</h2>
                  <p className="mb-4">أنت مسؤول عن:</p>
                  <ul className="list-disc pr-6 mb-4">
                    <li>دقة المعلومات المدخلة (العنوان، رقم الهاتف، تفاصيل الطلب)</li>
                    <li>التأكد من استلامك رسالة التأكيد عبر واتساب</li>
                    <li>المتابعة مع المطعم لتأكيد الطلب</li>
                    <li>الدفع عند الاستلام أو التوصيل حسب سياسة المطعم</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. الأسعار والتوفر</h2>
                  <p className="mb-4">
                    جميع الأسعار معروضة بالدينار الكويتي وقابلة للتغيير دون إشعار مسبق.
                    توفر المنتجات والأوقات المعروضة هي تقديرية وقد تتغير حسب توفر المطعم.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. سياسة الإلغاء والاسترجاع</h2>
                  <p className="mb-4">
                    سياسات الإلغاء والاسترجاع تخضع لقواعد المطعم. يرجى التواصل مباشرة مع المطعم
                    لأي استفسارات حول إلغاء أو تعديل الطلب.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. التوصيل</h2>
                  <p className="mb-4">
                    أوقات التوصيل المعروضة هي تقديرية. المطعم مسؤول عن التوصيل الفعلي والالتزام بالمواعيد.
                    رسوم التوصيل تختلف حسب المنطقة وهي نهائية.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. استخدام الموقع</h2>
                  <p className="mb-4">تتعهد بعدم:</p>
                  <ul className="list-disc pr-6 mb-4">
                    <li>استخدام الموقع لأي غرض غير قانوني</li>
                    <li>إدخال معلومات خاطئة أو مضللة</li>
                    <li>محاولة اختراق أو التلاعب بالنظام</li>
                    <li>إساءة استخدام خدمة واتساب أو إزعاج المطعم</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. إخلاء المسؤولية</h2>
                  <p className="mb-4">
                    الموقع يُقدم "كما هو" دون أي ضمانات. نحن غير مسؤولين عن:
                  </p>
                  <ul className="list-disc pr-6 mb-4">
                    <li>جودة الطعام أو الخدمة المقدمة من المطعم</li>
                    <li>التأخير في التوصيل</li>
                    <li>الأخطاء في الطلب بعد إرساله</li>
                    <li>أي مشاكل تتعلق بخدمة واتساب</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">9. حدود المسؤولية</h2>
                  <p className="mb-4">
                    مسؤوليتنا محدودة بقيمة الطلب فقط. نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة
                    ناتجة عن استخدام الموقع.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">10. التعديلات</h2>
                  <p className="mb-4">
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع بعد التعديلات
                    يعني موافقتك على الشروط المعدلة.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. القانون الحاكم</h2>
                  <p className="mb-4">
                    تخضع هذه الشروط لقوانين دولة الكويت. أي نزاع يُحل وفقاً للقوانين الكويتية.
                  </p>
                </section>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By using this website and placing orders through it, you agree to these terms and conditions.
                    If you do not agree to these terms, please do not use the website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. Nature of Service</h2>
                  <p className="mb-4">
                    This website is an electronic ordering system that helps you prepare your order and send it via WhatsApp.
                    The website does not process payment or confirm orders directly - this is done through communication with the restaurant.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. User Responsibility</h2>
                  <p className="mb-4">You are responsible for:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Accuracy of entered information (address, phone number, order details)</li>
                    <li>Ensuring you receive confirmation message via WhatsApp</li>
                    <li>Following up with the restaurant to confirm the order</li>
                    <li>Payment upon receipt or delivery according to restaurant policy</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Prices and Availability</h2>
                  <p className="mb-4">
                    All prices are displayed in Kuwaiti Dinar and are subject to change without prior notice.
                    Product availability and displayed times are estimates and may change based on restaurant availability.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Cancellation and Refund Policy</h2>
                  <p className="mb-4">
                    Cancellation and refund policies are subject to restaurant rules. Please contact the restaurant
                    directly for any inquiries about canceling or modifying orders.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Delivery</h2>
                  <p className="mb-4">
                    Displayed delivery times are estimates. The restaurant is responsible for actual delivery and adherence to schedules.
                    Delivery fees vary by area and are final.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Website Use</h2>
                  <p className="mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Use the website for any illegal purpose</li>
                    <li>Enter false or misleading information</li>
                    <li>Attempt to hack or tamper with the system</li>
                    <li>Misuse WhatsApp service or harass the restaurant</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Disclaimer</h2>
                  <p className="mb-4">
                    The website is provided "as is" without any warranties. We are not responsible for:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Food quality or service provided by the restaurant</li>
                    <li>Delivery delays</li>
                    <li>Order errors after submission</li>
                    <li>Any issues related to WhatsApp service</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                  <p className="mb-4">
                    Our liability is limited to the order value only. We are not responsible for any direct or indirect
                    damages resulting from use of the website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">10. Modifications</h2>
                  <p className="mb-4">
                    We reserve the right to modify these terms at any time. Your continued use of the website after modifications
                    means your acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                  <p className="mb-4">
                    These terms are governed by the laws of the State of Kuwait. Any dispute shall be resolved according to Kuwaiti laws.
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
