'use client';

import React, { useEffect, useRef } from 'react';
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

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  let orderSummary = 'Halo DIMZY, saya ingin memesan:\n';
  cart.forEach((item) => {
    orderSummary += `- ${item.name} (${item.qty}x) : Rp ${(
      item.price * item.qty
    ).toLocaleString('id-ID')}\n`;
  });
  orderSummary += `Total: Rp ${totalPrice.toLocaleString('id-ID')}`;

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(orderSummary)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/60 backdrop-blur-sm"
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          closeCart();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-surface w-full max-w-lg rounded-3xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-outline-variant/30"
      >
        <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-tertiary">
              shopping_bag
            </span>
            <h3 id="cart-modal-title" className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Ringkasan Pesanan
            </h3>
          </div>
          <button
            className="min-w-[44px] min-h-[44px] rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            onClick={closeCart}
            aria-label="Tutup Keranjang"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-space-xs max-h-64 overflow-y-auto pr-space-xs divide-y divide-outline-variant/10">
          {cart.length === 0 ? (
            <div className="text-center py-space-xl flex flex-col items-center gap-space-sm text-on-surface-variant font-body-md text-body-md">
              <span>Keranjang belanja Anda masih kosong.</span>
              <a
                href="#katalog-menu"
                onClick={closeCart}
                className="min-h-[44px] inline-flex items-center justify-center px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors font-semibold"
              >
                Pilih Menu Favorit
              </a>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-space-sm gap-space-sm"
              >
                <div className="flex flex-col flex-1">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    {item.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Rp {item.price.toLocaleString('id-ID')} / porsi
                  </span>
                </div>

                <div className="flex items-center gap-space-xs">
                  <div className="flex items-center bg-surface-container rounded-lg border border-outline-variant/20">
                    <button
                      onClick={() => updateQty(index, -1)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface hover:text-primary-container font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-l-lg"
                      aria-label={`Kurangi jumlah ${item.name}`}
                    >
                      -
                    </button>
                    <span className="font-title-md text-title-md font-bold px-2 min-w-[24px] text-center text-on-surface">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(index, 1)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface hover:text-primary-container font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-r-lg"
                      aria-label={`Tambah jumlah ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <span className="font-title-md text-title-md font-bold text-on-surface min-w-[85px] text-right">
                    Rp {(item.price * item.qty).toLocaleString('id-ID')}
                  </span>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-error hover:opacity-75 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error"
                    aria-label={`Hapus ${item.name} dari keranjang`}
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

        {cart.length > 0 && (
          <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-outline-variant/20">
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>Subtotal Menu</span>
              <span className="font-semibold text-on-surface">
                Rp {totalPrice.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>Packaging Thermal Segel Panas</span>
              <span className="font-semibold text-tertiary">GRATIS</span>
            </div>
            <div className="flex justify-between font-title-md text-title-md text-on-surface font-bold pt-space-xs border-t border-outline-variant/20">
              <span>Total Tagihan</span>
              <span className="text-tertiary-container">
                Rp {totalPrice.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-space-xs">
          <a
            className={`w-full min-h-[48px] py-space-sm bg-primary-container text-on-primary rounded-xl font-title-md text-title-md flex items-center justify-center gap-space-xs hover:bg-primary transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container font-semibold ${
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
              className="w-full min-h-[44px] py-space-xs text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-lg"
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
