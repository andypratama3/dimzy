'use client';

import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '@/data/dimzyData';
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
      {/* Header & Quick Cart Pill */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="inline-flex items-center gap-space-xs text-tertiary font-label-caps text-label-caps uppercase">
            <span className="material-symbols-outlined text-[16px]">
              menu_book
            </span>
            Pilihan Menu Terfavorit
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs font-bold">
            Kreasi Dimsum Goreng Krispi DIMZY
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-xs">
            Pilih varian favoritmu atau pesan kombo spesial untuk momen kumpul
            yang lebih renyah.
          </p>
        </div>

        {/* Quick Cart Trigger Pill */}
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
            className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-all shadow-md"
            onClick={openCart}
            aria-label="Quick Checkout"
          >
            <span className="material-symbols-outlined text-[24px]">
              shopping_cart
            </span>
          </button>
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex items-center gap-space-xs overflow-x-auto pb-space-sm scrollbar-none mb-space-lg">
        <button
          className={`px-space-lg py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-all ${
            activeCategory === 'all'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          Semua Menu
        </button>
        <button
          className={`px-space-lg py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-all ${
            activeCategory === 'wonton'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('wonton')}
        >
          Wonton & Pangsit
        </button>
        <button
          className={`px-space-lg py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-all ${
            activeCategory === 'siomay'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('siomay')}
        >
          Siomay Krispi Emas
        </button>
        <button
          className={`px-space-lg py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-all ${
            activeCategory === 'spicy'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('spicy')}
        >
          Seri Spicy Lava
        </button>
        <button
          className={`px-space-lg py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-all ${
            activeCategory === 'combo'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('combo')}
        >
          Paket Mabar Rame-Rame
        </button>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-outline-variant/20 ${
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
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                src={item.image}
              />
              <span
                className={`absolute top-3 left-3 ${item.tagBgClass} ${item.tagTextClass} px-space-sm py-space-xs rounded-full font-label-caps text-label-caps font-bold shadow-sm`}
              >
                {item.tag}
              </span>
              <span className="absolute bottom-3 right-3 bg-inverse-surface/85 text-inverse-on-surface px-space-sm py-space-xs rounded-lg font-body-sm text-body-sm flex items-center gap-1 backdrop-blur-sm">
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
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm active:scale-95"
                  onClick={() => addToCart(item.name, item.price)}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                  <span>Pesan</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
