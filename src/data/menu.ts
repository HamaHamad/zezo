import type { Product } from '@/types';

/**
 * Static Menu Data
 * In production, this would come from a CMS or API
 */

export const MENU_DATA: Product[] = [
  // Burgers
  {
    id: 'burger-001',
    name: 'برجر كلاسيك',
    nameEn: 'Classic Burger',
    description: 'برجر لحم بقري مع الجبن والخس والطماطم',
    descriptionEn: 'Beef burger with cheese, lettuce, and tomato',
    price: 2.500,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    category: 'burgers',
    available: true,
  },
  {
    id: 'burger-002',
    name: 'برجر حار',
    nameEn: 'Spicy Burger',
    description: 'برجر لحم بقري حار مع صلصة الهالبينو',
    descriptionEn: 'Spicy beef burger with jalapeño sauce',
    price: 3.000,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
    category: 'burgers',
    available: true,
  },
  {
    id: 'burger-003',
    name: 'برجر دجاج مقرمش',
    nameEn: 'Crispy Chicken Burger',
    description: 'دجاج مقرمش مع المايونيز والخس',
    descriptionEn: 'Crispy chicken with mayo and lettuce',
    price: 2.750,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500',
    category: 'burgers',
    available: true,
  },

  // Pizza
  {
    id: 'pizza-001',
    name: 'بيتزا مارغريتا',
    nameEn: 'Margherita Pizza',
    description: 'صلصة الطماطم مع الجبن والريحان',
    descriptionEn: 'Tomato sauce with cheese and basil',
    price: 4.500,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
    category: 'pizza',
    available: true,
  },
  {
    id: 'pizza-002',
    name: 'بيتزا بيبروني',
    nameEn: 'Pepperoni Pizza',
    description: 'بيبروني مع الجبن وصلصة الطماطم',
    descriptionEn: 'Pepperoni with cheese and tomato sauce',
    price: 5.000,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
    category: 'pizza',
    available: true,
  },

  // Pasta
  {
    id: 'pasta-001',
    name: 'باستا ألفريدو',
    nameEn: 'Alfredo Pasta',
    description: 'فيتوتشيني مع صلصة الكريمة والجبن',
    descriptionEn: 'Fettuccine with cream sauce and cheese',
    price: 3.500,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
    category: 'pasta',
    available: true,
  },
  {
    id: 'pasta-002',
    name: 'باستا بولونيز',
    nameEn: 'Bolognese Pasta',
    description: 'سباغيتي مع صلصة اللحم الإيطالية',
    descriptionEn: 'Spaghetti with Italian meat sauce',
    price: 3.750,
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=500',
    category: 'pasta',
    available: true,
  },

  // Salads
  {
    id: 'salad-001',
    name: 'سلطة سيزر',
    nameEn: 'Caesar Salad',
    description: 'خس روماني مع صلصة السيزر وخبز محمص',
    descriptionEn: 'Romaine lettuce with Caesar dressing and croutons',
    price: 2.500,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500',
    category: 'salads',
    available: true,
  },
  {
    id: 'salad-002',
    name: 'سلطة يونانية',
    nameEn: 'Greek Salad',
    description: 'طماطم وخيار وجبن فيتا وزيتون',
    descriptionEn: 'Tomato, cucumber, feta cheese, and olives',
    price: 2.250,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
    category: 'salads',
    available: true,
  },

  // Drinks
  {
    id: 'drink-001',
    name: 'عصير برتقال طازج',
    nameEn: 'Fresh Orange Juice',
    description: 'عصير برتقال طبيعي 100%',
    descriptionEn: '100% natural orange juice',
    price: 1.000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500',
    category: 'drinks',
    available: true,
  },
  {
    id: 'drink-002',
    name: 'ليموناضة',
    nameEn: 'Lemonade',
    description: 'ليمون طازج مع النعناع',
    descriptionEn: 'Fresh lemon with mint',
    price: 0.750,
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe1cab?w=500',
    category: 'drinks',
    available: true,
  },
  {
    id: 'drink-003',
    name: 'مشروب غازي',
    nameEn: 'Soft Drink',
    description: 'كوكاكولا، سبرايت، أو فانتا',
    descriptionEn: 'Coca-Cola, Sprite, or Fanta',
    price: 0.500,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500',
    category: 'drinks',
    available: true,
  },

  // Desserts
  {
    id: 'dessert-001',
    name: 'كيك الشوكولاتة',
    nameEn: 'Chocolate Cake',
    description: 'كيك شوكولاتة غني مع الكريمة',
    descriptionEn: 'Rich chocolate cake with cream',
    price: 2.000,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
    category: 'desserts',
    available: true,
  },
  {
    id: 'dessert-002',
    name: 'آيس كريم',
    nameEn: 'Ice Cream',
    description: 'آيس كريم الفانيليا أو الشوكولاتة',
    descriptionEn: 'Vanilla or chocolate ice cream',
    price: 1.500,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500',
    category: 'desserts',
    available: true,
  },
];

// Category definitions
export const CATEGORIES = [
  { id: 'all', name: 'الكل', nameEn: 'All' },
  { id: 'burgers', name: 'برجر', nameEn: 'Burgers' },
  { id: 'pizza', name: 'بيتزا', nameEn: 'Pizza' },
  { id: 'pasta', name: 'باستا', nameEn: 'Pasta' },
  { id: 'salads', name: 'سلطات', nameEn: 'Salads' },
  { id: 'drinks', name: 'مشروبات', nameEn: 'Drinks' },
  { id: 'desserts', name: 'حلويات', nameEn: 'Desserts' },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return MENU_DATA.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return MENU_DATA;
  return MENU_DATA.filter((product) => product.category === category);
};
