// Core Product Type
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number; // KWD
  image: string;
  category: string;
  available: boolean;
}

// Cart Item Type
export interface CartItem extends Product {
  quantity: number;
}

// Order Type Options
export type OrderType = 'delivery' | 'dineIn';

// Delivery Location
export interface DeliveryLocation {
  governorate: string;
  area: string;
}

// Delivery Time Slot
export interface TimeSlot {
  id: string;
  start: string; // HH:MM format
  end: string;   // HH:MM format
  label: string; // Display label
}

// User Preferences
export interface UserPreferences {
  receivePromotions: boolean;
  receiveOrderUpdates: boolean;
}

// Legal Consent
export interface LegalConsent {
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

// Complete Order
export interface Order {
  orderReference: string;
  orderType: OrderType;
  items: CartItem[];
  deliveryLocation?: DeliveryLocation;
  deliveryTime?: TimeSlot;
  tableNumber?: string;
  whatsappNumber: string;
  preferences: UserPreferences;
  consent: LegalConsent;
  promoCode?: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string; // ISO timestamp
}

// Kuwait Governorates and Areas
export interface Governorate {
  id: string;
  name: string;
  nameEn: string;
  areas: Area[];
}

export interface Area {
  id: string;
  name: string;
  nameEn: string;
  deliveryFee: number;
}

// Restaurant Configuration
export interface RestaurantConfig {
  workingHours: {
    open: string; // HH:MM
    close: string; // HH:MM
  };
  deliveryHours: {
    open: string; // HH:MM
    close: string; // HH:MM
  };
  timeSlotInterval: number; // minutes
  defaultDeliveryFee: number; // KWD
}

// Language Support
export type Language = 'ar' | 'en';

// Translations
export interface Translations {
  ar: Record<string, string>;
  en: Record<string, string>;
}
