'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-8 mt-auto safe-area-bottom">
      <div className="container mx-auto px-4">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/privacy" className="hover:underline">
            {t('footer.privacy')}
          </Link>
          <Link href="/terms" className="hover:underline">
            {t('footer.terms')}
          </Link>
          <Link href="/contact" className="hover:underline">
            {t('footer.contact')}
          </Link>
        </div>

        {/* Privacy Disclaimer */}
        <div className="text-center text-sm text-gray-400 max-w-2xl mx-auto">
          {t('footer.disclaimer')}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} {t('header.title')}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
