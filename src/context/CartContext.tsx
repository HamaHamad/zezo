'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { CartItem, Product, DeliveryLocation, TimeSlot, UserPreferences, LegalConsent, OrderType } from '@/types';
import { getProductById } from '@/data/menu';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  
  // Cart operations
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Order details
  orderType: OrderType | null;
  deliveryLocation: DeliveryLocation | null;
  deliveryTime: TimeSlot | null;
  tableNumber: string;
  whatsappNumber: string;
  promoCode: string;
  preferences: UserPreferences;
  consent: LegalConsent;
  
  // Order detail setters
  setOrderType: (type: OrderType) => void;
  setDeliveryLocation: (location: DeliveryLocation | null) => void;
  setDeliveryTime: (time: TimeSlot | null) => void;
  setTableNumber: (number: string) => void;
  setWhatsappNumber: (number: string) => void;
  setPromoCode: (code: string) => void;
  setPreferences: (prefs: UserPreferences) => void;
  setConsent: (consent: LegalConsent) => void;
  
  // Validation
  canProceedToCheckout: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<OrderType | null>(null);
  const [deliveryLocation, setDeliveryLocation] = useState<DeliveryLocation | null>(null);
  const [deliveryTime, setDeliveryTime] = useState<TimeSlot | null>(null);
  const [tableNumber, setTableNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [preferences, setPreferences] = useState<UserPreferences>({
    receivePromotions: false,
    receiveOrderUpdates: false,
  });
  const [consent, setConsent] = useState<LegalConsent>({
    termsAccepted: false,
    privacyAccepted: false,
  });

  // Load cart from sessionStorage on mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setItems(parsed.items || []);
        setOrderType(parsed.orderType || null);
        setDeliveryLocation(parsed.deliveryLocation || null);
        setDeliveryTime(parsed.deliveryTime || null);
        setTableNumber(parsed.tableNumber || '');
        setWhatsappNumber(parsed.whatsappNumber || '');
        setPromoCode(parsed.promoCode || '');
        setPreferences(parsed.preferences || { receivePromotions: false, receiveOrderUpdates: false });
        setConsent(parsed.consent || { termsAccepted: false, privacyAccepted: false });
      } catch (error) {
        console.error('Failed to load cart from sessionStorage', error);
      }
    }
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify({
      items,
      orderType,
      deliveryLocation,
      deliveryTime,
      tableNumber,
      whatsappNumber,
      promoCode,
      preferences,
      consent,
    }));
  }, [items, orderType, deliveryLocation, deliveryTime, tableNumber, whatsappNumber, promoCode, preferences, consent]);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const deliveryFee = orderType === 'delivery' && deliveryLocation 
    ? (deliveryLocation as any).deliveryFee || 0
    : 0;
  
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Add item to cart
  const addItem = useCallback((productId: string) => {
    const product = getProductById(productId);
    if (!product || !product.available) return;

    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  // Remove item from cart
  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  // Clear cart
  const clearCart = useCallback(() => {
    setItems([]);
    setOrderType(null);
    setDeliveryLocation(null);
    setDeliveryTime(null);
    setTableNumber('');
    setWhatsappNumber('');
    setPromoCode('');
    setPreferences({ receivePromotions: false, receiveOrderUpdates: false });
    setConsent({ termsAccepted: false, privacyAccepted: false });
    sessionStorage.removeItem('cart');
  }, []);

  // Validation
  const canProceedToCheckout = items.length > 0;

  const value: CartContextType = {
    items,
    itemCount,
    subtotal,
    deliveryFee,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    orderType,
    deliveryLocation,
    deliveryTime,
    tableNumber,
    whatsappNumber,
    promoCode,
    preferences,
    consent,
    setOrderType,
    setDeliveryLocation,
    setDeliveryTime,
    setTableNumber,
    setWhatsappNumber,
    setPromoCode,
    setPreferences,
    setConsent,
    canProceedToCheckout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
