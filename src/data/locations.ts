import type { Governorate } from '@/types';

/**
 * Kuwait Governorates and Areas Data
 * Complete list with delivery fees
 */

export const KUWAIT_LOCATIONS: Governorate[] = [
  {
    id: 'capital',
    name: 'العاصمة',
    nameEn: 'Capital',
    areas: [
      { id: 'dasman', name: 'دسمان', nameEn: 'Dasman', deliveryFee: 1.000 },
      { id: 'daiya', name: 'الدعية', nameEn: 'Daiya', deliveryFee: 1.000 },
      { id: 'sharq', name: 'شرق', nameEn: 'Sharq', deliveryFee: 1.000 },
      { id: 'mirgab', name: 'المرقاب', nameEn: 'Mirgab', deliveryFee: 1.000 },
      { id: 'qibla', name: 'القبلة', nameEn: 'Qibla', deliveryFee: 1.000 },
      { id: 'bneid-algar', name: 'بنيد القار', nameEn: 'Bneid Al-Gar', deliveryFee: 1.000 },
      { id: 'kaifan', name: 'كيفان', nameEn: 'Kaifan', deliveryFee: 1.250 },
      { id: 'mansouriya', name: 'المنصورية', nameEn: 'Mansouriya', deliveryFee: 1.250 },
      { id: 'qadsiya', name: 'القادسية', nameEn: 'Qadsiya', deliveryFee: 1.250 },
      { id: 'yarmouk', name: 'اليرموك', nameEn: 'Yarmouk', deliveryFee: 1.250 },
      { id: 'shuwaikh', name: 'الشويخ', nameEn: 'Shuwaikh', deliveryFee: 1.500 },
    ],
  },
  {
    id: 'hawalli',
    name: 'حولي',
    nameEn: 'Hawalli',
    areas: [
      { id: 'hawalli-area', name: 'حولي', nameEn: 'Hawalli', deliveryFee: 1.000 },
      { id: 'salmiya', name: 'السالمية', nameEn: 'Salmiya', deliveryFee: 1.000 },
      { id: 'salwa', name: 'سلوى', nameEn: 'Salwa', deliveryFee: 1.250 },
      { id: 'bayan', name: 'بيان', nameEn: 'Bayan', deliveryFee: 1.250 },
      { id: 'mishref', name: 'مشرف', nameEn: 'Mishref', deliveryFee: 1.250 },
      { id: 'rumaithiya', name: 'الرميثية', nameEn: 'Rumaithiya', deliveryFee: 1.000 },
      { id: 'jabriya', name: 'الجابرية', nameEn: 'Jabriya', deliveryFee: 1.000 },
      { id: 'hitteen', name: 'حطين', nameEn: 'Hitteen', deliveryFee: 1.250 },
      { id: 'shaab', name: 'الشعب', nameEn: 'Shaab', deliveryFee: 1.250 },
    ],
  },
  {
    id: 'farwaniya',
    name: 'الفروانية',
    nameEn: 'Farwaniya',
    areas: [
      { id: 'farwaniya-area', name: 'الفروانية', nameEn: 'Farwaniya', deliveryFee: 1.500 },
      { id: 'abdullah-mubarak', name: 'عبدالله المبارك', nameEn: 'Abdullah Al-Mubarak', deliveryFee: 1.500 },
      { id: 'jleeb-shuyoukh', name: 'جليب الشيوخ', nameEn: 'Jleeb Al-Shuyoukh', deliveryFee: 2.000 },
      { id: 'ardiya', name: 'العارضية', nameEn: 'Ardiya', deliveryFee: 2.000 },
      { id: 'rabiya', name: 'الرابية', nameEn: 'Rabiya', deliveryFee: 1.750 },
      { id: 'andalous', name: 'الأندلس', nameEn: 'Andalous', deliveryFee: 1.750 },
      { id: 'ferdous', name: 'الفردوس', nameEn: 'Ferdous', deliveryFee: 1.750 },
    ],
  },
  {
    id: 'ahmadi',
    name: 'الأحمدي',
    nameEn: 'Ahmadi',
    areas: [
      { id: 'ahmadi-area', name: 'الأحمدي', nameEn: 'Ahmadi', deliveryFee: 2.500 },
      { id: 'fintas', name: 'الفنطاس', nameEn: 'Fintas', deliveryFee: 2.000 },
      { id: 'mangaf', name: 'المنقف', nameEn: 'Mangaf', deliveryFee: 2.000 },
      { id: 'mahboula', name: 'المهبولة', nameEn: 'Mahboula', deliveryFee: 2.250 },
      { id: 'abu-halifa', name: 'أبو حليفة', nameEn: 'Abu Halifa', deliveryFee: 2.500 },
      { id: 'sabah-al-ahmad', name: 'صباح الأحمد', nameEn: 'Sabah Al-Ahmad', deliveryFee: 3.000 },
    ],
  },
  {
    id: 'jahra',
    name: 'الجهراء',
    nameEn: 'Jahra',
    areas: [
      { id: 'jahra-area', name: 'الجهراء', nameEn: 'Jahra', deliveryFee: 3.000 },
      { id: 'qasr', name: 'القصر', nameEn: 'Qasr', deliveryFee: 3.000 },
      { id: 'naeem', name: 'النعيم', nameEn: 'Naeem', deliveryFee: 3.000 },
      { id: 'saad-abdullah', name: 'سعد العبدالله', nameEn: 'Saad Al-Abdullah', deliveryFee: 3.500 },
    ],
  },
  {
    id: 'mubarak-kabeer',
    name: 'مبارك الكبير',
    nameEn: 'Mubarak Al-Kabeer',
    areas: [
      { id: 'qurain', name: 'القرين', nameEn: 'Qurain', deliveryFee: 1.500 },
      { id: 'qusour', name: 'القصور', nameEn: 'Qusour', deliveryFee: 1.750 },
      { id: 'sabah-salem', name: 'صباح السالم', nameEn: 'Sabah Al-Salem', deliveryFee: 1.750 },
      { id: 'fnaitees', name: 'الفنيطيس', nameEn: 'Fnaitees', deliveryFee: 2.000 },
      { id: 'abu-ftaira', name: 'أبو فطيرة', nameEn: 'Abu Ftaira', deliveryFee: 2.000 },
    ],
  },
];

// Helper functions
export const getGovernorateById = (id: string): Governorate | undefined => {
  return KUWAIT_LOCATIONS.find((gov) => gov.id === id);
};

export const getAreaByIds = (governorateId: string, areaId: string) => {
  const governorate = getGovernorateById(governorateId);
  return governorate?.areas.find((area) => area.id === areaId);
};

export const searchLocations = (query: string): Array<{
  governorate: Governorate;
  area: typeof KUWAIT_LOCATIONS[0]['areas'][0];
}> => {
  const normalizedQuery = query.toLowerCase().trim();
  const results: Array<{
    governorate: Governorate;
    area: typeof KUWAIT_LOCATIONS[0]['areas'][0];
  }> = [];

  KUWAIT_LOCATIONS.forEach((governorate) => {
    governorate.areas.forEach((area) => {
      const matchesArabic = area.name.toLowerCase().includes(normalizedQuery);
      const matchesEnglish = area.nameEn.toLowerCase().includes(normalizedQuery);
      const matchesGovArabic = governorate.name.toLowerCase().includes(normalizedQuery);
      const matchesGovEnglish = governorate.nameEn.toLowerCase().includes(normalizedQuery);

      if (matchesArabic || matchesEnglish || matchesGovArabic || matchesGovEnglish) {
        results.push({ governorate, area });
      }
    });
  });

  return results;
};
