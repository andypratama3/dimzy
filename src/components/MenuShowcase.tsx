'use client';

import React, { useState } from 'react';
import { MENU_ITEMS } from '@/data/dimzyData';
import { useCart } from '@/context/CartContext';

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { addToCart, totalPrice, totalPcs, openCart } = useCart();

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin lg:px-margin-desktop py-space-2xl"
      id="katalog-menu"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <span className="font-label-caps text-label-caps text-tertiary uppercase font-bold tracking-widest">
            Pilihan Menu Unggulan
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs font-bold">
            Kreasi Dimsum Goreng Krispi DIMZY
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-xs">
            Pilih varian favoritmu atau pesan kombo spesial untuk dinikmati bersama.
          </p>
        </div>

        <div className="flex items-center gap-space-md bg-surface-container-high px-space-md py-space-sm rounded-2xl shadow-sm border border-outline-variant/20">
          <div className="flex flex-col text-right">
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              Keranjang Pesanan
            </span>
            <span className="font-title-md text-title-md font-bold text-on-surface">
              Rp {totalPrice.toLocaleString('id-ID')} ({totalPcs} Porsi)
            </span>
          </div>
          <button
            className="min-w-[44px] min-h-[44px] rounded-xl bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            onClick={openCart}
            aria-label="Buka Keranjang Belanja"
          >
            <span className="material-symbols-outlined text-[24px]">
              shopping_bag
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-space-xs overflow-x-auto pb-space-sm scrollbar-none mb-space-lg">
        <button
          className={`min-h-[44px] px-space-lg py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
            activeCategory === 'all'
              ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          Semua Menu
        </button>
        <button
          className={`min-h-[44px] px-space-lg py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
            activeCategory === 'wonton'
              ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('wonton')}
        >
          Wonton & Pangsit
        </button>
        <button
          className={`min-h-[44px] px-space-lg py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
            activeCategory === 'siomay'
              ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('siomay')}
        >
          Siomay Krispi Emas
        </button>
        <button
          className={`min-h-[44px] px-space-lg py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
            activeCategory === 'spicy'
              ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('spicy')}
        >
          Seri Spicy Lava
        </button>
        <button
          className={`min-h-[44px] px-space-lg py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
            activeCategory === 'combo'
              ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('combo')}
        >
          Paket Kombo Pilihan
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20 ${
              item.isCombo ? 'sm:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div
              className={`relative ${
                item.isCombo ? 'h-64 sm:h-auto sm:min-h-[220px]' : 'h-56'
              } w-full overflow-hidden bg-surface-container`}
            >
              <img
                alt={item.name}
                className="w-full h-full object-cover"
                src={item.image}
              />
              <span
                className={`absolute top-3 left-3 ${item.tagBgClass} ${item.tagTextClass} px-space-sm py-1 rounded-full font-label-caps text-label-caps font-bold shadow-sm`}
              >
                {item.tag}
              </span>
              <span className="absolute bottom-3 right-3 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 rounded-lg font-body-sm text-body-sm flex items-center gap-1 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">
                  graphic_eq
                </span>{' '}
                Crunch {item.crunchRating}
              </span>
            </div>

            <div className="p-space-md flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-caps text-label-caps text-tertiary font-bold uppercase">
                    {item.pcsText}
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                  {item.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-space-md pt-space-sm border-t border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    {item.category === 'spicy'
                      ? 'local_fire_department'
                      : item.isCombo
                      ? 'groups'
                      : 'check'}
                  </span>
                  <span>{item.includesSauce}</span>
                </div>

                <button
                  className="min-h-[44px] inline-flex items-center gap-space-xs px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  onClick={() => addToCart(item.name, item.price)}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                  <span>Tambah</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
