'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalPcs, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/30">
      <div className="h-20 max-w-[1280px] mx-auto px-margin lg:px-margin-desktop flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-md">
          <a
            id="brand-logo-link"
            className="flex items-center gap-space-xs rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            href="/"
          >
            <span className="font-headline-md text-headline-md tracking-tight font-bold text-on-surface uppercase">
              DIMZY
            </span>
            <span className="font-label-caps text-label-caps uppercase text-tertiary-container tracking-widest pl-space-xs border-l border-outline-variant">
              Double Kulit Krispi
            </span>
          </a>
        </div>

        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-space-lg" aria-label="Navigasi Utama">
          <a
            id="nav-menu-pilihan"
            className="font-title-sm text-title-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#katalog-menu"
          >
            Menu Pilihan
          </a>
          <a
            id="nav-rahasia-gurih"
            className="font-title-sm text-title-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#rahasia-gurih"
          >
            Rahasia Gurih
          </a>
          <a
            id="nav-panduan-tasting"
            className="font-title-sm text-title-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#panduan-cocol"
          >
            Panduan Rasa
          </a>
          <a
            id="nav-kalkulator-paket"
            className="font-title-sm text-title-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#kalkulator-paket"
          >
            Simulasi Porsi
          </a>
          <a
            id="nav-lokasi-outlet"
            className="font-title-sm text-title-md text-on-surface-variant hover:text-on-surface transition-colors py-2 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#lokasi-outlet"
          >
            Lokasi Dapur
          </a>
        </nav>

        <div className="flex items-center gap-space-sm">
          <button
            id="btn-header-cart-trigger"
            onClick={openCart}
            className="relative min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            aria-label={`Buka Keranjang Belanja, total ${totalPcs} item`}
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {totalPcs > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary font-label-caps text-[11px] flex items-center justify-center font-bold">
                {totalPcs}
              </span>
            )}
          </button>

          <a
            id="btn-header-order-now"
            className="hidden sm:inline-flex min-h-[44px] items-center justify-center px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2"
            href="#katalog-menu"
          >
            Pesan Sekarang
          </a>

          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-on-surface-variant hover:text-on-surface rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            aria-label={mobileMenuOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="lg:hidden bg-surface-container-low border-b border-outline-variant/30 px-margin py-space-md flex flex-col gap-space-xs"
        >
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface min-h-[44px] flex items-center px-space-xs rounded-lg focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#katalog-menu"
          >
            Menu Pilihan
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface min-h-[44px] flex items-center px-space-xs rounded-lg focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#rahasia-gurih"
          >
            Rahasia Gurih
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface min-h-[44px] flex items-center px-space-xs rounded-lg focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#panduan-cocol"
          >
            Panduan Rasa
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface min-h-[44px] flex items-center px-space-xs rounded-lg focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#kalkulator-paket"
          >
            Simulasi Porsi
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-title-md text-title-md text-on-surface min-h-[44px] flex items-center px-space-xs rounded-lg focus-visible:ring-2 focus-visible:ring-primary-container"
            href="#lokasi-outlet"
          >
            Lokasi Dapur
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center w-full min-h-[44px] py-space-sm rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold mt-space-xs"
            href="#katalog-menu"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
