'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalPcs, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin lg:px-margin-desktop flex items-center justify-between gap-gutter">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-md">
          <a id="brand-logo-link" className="flex items-center gap-space-sm" href="#">
            <span className="font-headline-md text-headline-md tracking-tight font-bold text-on-surface uppercase">
              DIMZY
            </span>
            <span className="font-label-caps text-label-caps uppercase text-tertiary-container tracking-widest pl-space-xs border-l border-outline-variant">
              Dimsum Goreng
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-space-lg" aria-label="Main Navigation">
          <a
            id="nav-menu-pilihan"
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#katalog-menu"
          >
            Menu Pilihan
          </a>
          <a
            id="nav-rahasia-gurih"
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#rahasia-gurih"
          >
            Rahasia Gurih
          </a>
          <a
            id="nav-lokasi-outlet"
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#lokasi-outlet"
          >
            Lokasi & Jam Buka
          </a>
          <a
            id="nav-kalkulator-paket"
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#kalkulator-paket"
          >
            Simulasi Porsi
          </a>
          <a
            id="nav-promo-voucher"
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#promo-voucher"
          >
            Promo & Paket
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* Quick Cart Trigger */}
          <button
            id="btn-header-cart-trigger"
            onClick={openCart}
            className="relative inline-flex items-center justify-center p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-all"
            aria-label={`Buka Keranjang Belanja, total ${totalPcs} item`}
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {totalPcs > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary font-label-caps text-[11px] flex items-center justify-center font-bold">
                {totalPcs}
              </span>
            )}
          </button>

          {/* CTA Button */}
          <a
            id="btn-header-order-now"
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-[0_4px_20px_-2px_rgba(58,37,27,0.15)] font-semibold"
            href="#katalog-menu"
          >
            Pesan Sekarang
          </a>

          {/* Avatar */}
          <img
            alt="Profil Pelanggan DIMZY"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Uk7HttydZKdOkaFEJWqGnUNhfDMyc0tQrhbm8NA9DuDzy54mJzKM4jtqqMMIZBSoVIIZEO8btwhlaLLolHV-2FcFHaLh9NyTThZYNqhq_c2NpejwMR9NZCWgMOuRsnZcvJCWVuxker_zT6GQxC4iz_bp5ZvvHoSNxbOU5qrA66AcBHnHVXUhf4KCBQt_HV3GlD9P0Rg-e5Bw1B0Z2AdKInV3AzOUznWu-9brQRICNKq7agXUAlWoTUejF0fsowoR2ZU3llQoECUu4"
          />

          {/* Mobile Hamburger Toggle */}
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-overlay" className="lg:hidden bg-surface-container-low border-b border-outline-variant/30 px-margin py-space-md flex flex-col gap-space-md animate-fadeIn">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface py-1"
            href="#katalog-menu"
          >
            Menu Pilihan
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface py-1"
            href="#rahasia-gurih"
          >
            Rahasia Gurih
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface py-1"
            href="#lokasi-outlet"
          >
            Lokasi & Jam Buka
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface py-1"
            href="#kalkulator-paket"
          >
            Simulasi Porsi
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface py-1"
            href="#promo-voucher"
          >
            Promo & Paket
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center w-full py-space-sm rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold"
            href="#katalog-menu"
          >
            Pesan Sekarang (Gratis Ongkir)
          </a>
        </div>
      )}
    </header>
  );
}
