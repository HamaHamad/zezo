'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CATEGORIES } from '@/data/menu';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { language } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-[73px] z-40 bg-white transition-shadow duration-200 ${
        isSticky ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`category-chip ${selectedCategory === category.id ? 'active' : ''}`}
              aria-label={language === 'ar' ? category.name : category.nameEn}
            >
              {language === 'ar' ? category.name : category.nameEn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
