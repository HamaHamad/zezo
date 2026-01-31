/**
 * Input Sanitization Utility
 * Prevents XSS and injection attacks
 */

// Sanitize text input
export const sanitizeText = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 500); // Limit length
};

// Sanitize phone number (Kuwait format)
export const sanitizePhoneNumber = (input: string): string => {
  // Remove all non-digit characters
  const digitsOnly = input.replace(/\D/g, '');
  
  // Kuwait numbers: 965XXXXXXXX or XXXXXXXX
  if (digitsOnly.startsWith('965')) {
    return digitsOnly.slice(0, 11); // 965 + 8 digits
  }
  return digitsOnly.slice(0, 8); // 8 digits
};

// Validate Kuwait phone number
export const isValidKuwaitPhone = (phone: string): boolean => {
  const sanitized = sanitizePhoneNumber(phone);
  
  // Check if it's 8 digits or 11 digits with 965 prefix
  if (sanitized.length === 8) {
    return /^[456]\d{7}$/.test(sanitized);
  } else if (sanitized.length === 11) {
    return /^965[456]\d{7}$/.test(sanitized);
  }
  
  return false;
};

// Format phone number for display
export const formatKuwaitPhone = (phone: string): string => {
  const sanitized = sanitizePhoneNumber(phone);
  
  if (sanitized.length === 8) {
    return `+965 ${sanitized.slice(0, 4)} ${sanitized.slice(4)}`;
  } else if (sanitized.length === 11) {
    const number = sanitized.slice(3);
    return `+965 ${number.slice(0, 4)} ${number.slice(4)}`;
  }
  
  return phone;
};

// Sanitize promo code
export const sanitizePromoCode = (input: string): string => {
  return input
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 20);
};

// Sanitize table number
export const sanitizeTableNumber = (input: string): string => {
  return input
    .trim()
    .replace(/[^0-9A-Za-z]/g, '')
    .slice(0, 10);
};

// Generate secure order reference (client-side)
export const generateOrderReference = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

// Validate email format (for future use)
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Safe JSON parse
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
};

// Escape special characters for WhatsApp message
export const escapeWhatsAppMessage = (text: string): string => {
  return text
    .replace(/[*_~`]/g, '') // Remove WhatsApp formatting characters
    .replace(/\n{3,}/g, '\n\n'); // Limit consecutive newlines
};
