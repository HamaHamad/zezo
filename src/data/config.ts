import type { RestaurantConfig, TimeSlot } from '@/types';

/**
 * Restaurant Configuration
 */

export const RESTAURANT_CONFIG: RestaurantConfig = {
  workingHours: {
    open: '10:00',
    close: '23:00',
  },
  deliveryHours: {
    open: '11:00',
    close: '22:30',
  },
  timeSlotInterval: 30, // 30 minutes
  defaultDeliveryFee: 1.000,
};

/**
 * Generate time slots based on restaurant configuration
 */
export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const { open, close } = RESTAURANT_CONFIG.deliveryHours;
  const interval = RESTAURANT_CONFIG.timeSlotInterval;

  // Parse open and close times
  const [openHour, openMin] = open.split(':').map(Number);
  const [closeHour, closeMin] = close.split(':').map(Number);

  let currentHour = openHour;
  let currentMin = openMin;
  let slotId = 1;

  while (currentHour < closeHour || (currentHour === closeHour && currentMin < closeMin)) {
    const startTime = `${String(currentHour).padStart(2, '0')}:${String(currentMin).padStart(2, '0')}`;
    
    // Calculate end time
    let endHour = currentHour;
    let endMin = currentMin + interval;
    
    if (endMin >= 60) {
      endHour += Math.floor(endMin / 60);
      endMin = endMin % 60;
    }

    const endTime = `${String(endHour).padStart(2, '0')}:${String(endMin).padStart(2, '0')}`;

    // Create slot
    slots.push({
      id: `slot-${slotId}`,
      start: startTime,
      end: endTime,
      label: `${startTime} – ${endTime}`,
    });

    // Move to next slot
    currentMin += interval;
    if (currentMin >= 60) {
      currentHour += Math.floor(currentMin / 60);
      currentMin = currentMin % 60;
    }

    slotId++;
  }

  return slots;
};

// Pre-generate time slots
export const TIME_SLOTS = generateTimeSlots();

// Helper to get current available slots (exclude past times)
export const getAvailableTimeSlots = (): TimeSlot[] => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const currentTime = currentHour * 60 + currentMin;

  return TIME_SLOTS.filter((slot) => {
    const [slotHour, slotMin] = slot.start.split(':').map(Number);
    const slotTime = slotHour * 60 + slotMin;
    
    // Add 30 minutes buffer (minimum preparation time)
    return slotTime >= currentTime + 30;
  });
};
