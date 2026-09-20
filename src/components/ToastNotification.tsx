'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function ToastNotification() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-space-sm bg-primary-container text-on-primary px-space-lg py-space-sm rounded-full shadow-2xl animate-bounce border border-tertiary-fixed/30">
      <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
        check_circle
      </span>
      <span className="font-title-md text-title-md">{toastMessage}</span>
    </div>
  );
}
