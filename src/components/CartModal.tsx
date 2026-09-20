'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function CartModal() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQty,
    clearCart,
    totalPrice,
  } = useCart();

  if (!isCartOpen) return null;

  // Build WhatsApp Message Format
  let orderSummary = 'Halo DIMZY, saya ingin memesan:\n';
  cart.forEach((item) => {
    orderSummary += `- ${item.name} (${item.qty}x) : Rp ${(
      item.price * item.qty
    ).toLocaleString('id-ID')}\n`;
  });
  orderSummary += `Total: Rp ${totalPrice.toLocaleString('id-ID')}`;

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(orderSummary)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface w-full max-w-lg rounded-3xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-outline-variant/30 transform scale-100 transition-all duration-300">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-tertiary">
              shopping_bag
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Ringkasan Pesanan
            </h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
            onClick={closeCart}
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex flex-col gap-space-xs max-h-64 overflow-y-auto pr-space-xs divide-y divide-outline-variant/10">
          {cart.length === 0 ? (
            <div className="text-center py-space-lg text-on-surface-variant font-body-md text-body-md">
              Keranjang belanja Anda masih kosong. Pilih menu lezat di atas!
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-space-xs"
              >
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    {item.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Rp {item.price.toLocaleString('id-ID')} / porsi
                  </span>
                </div>

                <div className="flex items-center gap-space-sm">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-lg">
                    <button
                      onClick={() => updateQty(index, -1)}
                      className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-on-surface font-bold"
                    >
                      -
                    </button>
                    <span className="font-title-md text-title-md font-bold px-1 min-w-[20px] text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(index, 1)}
                      className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-on-surface font-bold"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-title-md text-title-md font-bold text-on-surface min-w-[80px] text-right">
                    Rp {(item.price * item.qty).toLocaleString('id-ID')}
                  </span>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-error hover:opacity-75 p-1"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pricing Summary */}
        <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-outline-variant/20">
          <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
            <span>Subtotal Menu</span>
            <span className="font-semibold text-on-surface">
              Rp {totalPrice.toLocaleString('id-ID')}
            </span>
          </div>
          <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
            <span>Packaging Box Thermal Segel Panas</span>
            <span className="font-semibold text-tertiary">GRATIS</span>
          </div>
          <div className="flex justify-between font-title-md text-title-md text-on-surface font-bold pt-space-xs border-t border-outline-variant/20">
            <span>Total Tagihan</span>
            <span className="text-tertiary-container">
              Rp {totalPrice.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-space-xs">
          <a
            className={`w-full py-space-sm bg-primary-container text-on-primary rounded-xl font-title-md text-title-md flex items-center justify-center gap-space-xs hover:bg-primary transition-colors shadow-md ${
              cart.length === 0 ? 'pointer-events-none opacity-50' : ''
            }`}
            href={cart.length > 0 ? waUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Kirim Pesanan ke WhatsApp DIMZY</span>
          </a>

          {cart.length > 0 && (
            <button
              className="w-full py-space-xs text-outline font-label-md text-label-md hover:text-on-surface transition-colors"
              onClick={clearCart}
            >
              Kosongkan Keranjang
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
