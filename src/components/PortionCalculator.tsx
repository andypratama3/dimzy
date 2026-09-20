'use client';

import React, { useState } from 'react';
import { PORTION_TIERS } from '@/data/dimzyData';
import { useCart } from '@/context/CartContext';

export default function PortionCalculator() {
  const [selectedTierId, setSelectedTierId] = useState<number>(1);
  const { addToCart } = useCart();

  const currentTier = PORTION_TIERS[selectedTierId];

  const waText = encodeURIComponent(
    `Halo DIMZY, saya ingin memesan ${currentTier.title} (Rp ${currentTier.price.toLocaleString('id-ID')})`
  );
  const waUrl = `https://wa.me/6281234567890?text=${waText}`;

  return (
    <section className="w-full bg-surface-container py-space-2xl" id="kalkulator-paket">
      <div className="max-w-[1280px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Explanatory Text */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-label-caps text-label-caps text-tertiary uppercase font-bold">
              Porsi Pas, Nggak Kurang Nggak Lebih
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs font-bold">
              Kalkulator Porsi Dimsum DIMZY
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-lg">
              Mau makan sendiri untuk camilan sore, nongkrong santai berdua, atau makan
              bareng seisi kantor? Geser pilihan untuk rekomendasi porsi dan budget
              terbaik.
            </p>

            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
                  1
                </div>
                <span className="font-body-md text-body-md text-on-surface font-semibold">
                  Pilih jumlah orang yang akan menikmati
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
                  2
                </div>
                <span className="font-body-md text-body-md text-on-surface font-semibold">
                  DIMZY meracik varian kombo & kuantiti saus ideal
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
                  3
                </div>
                <span className="font-body-md text-body-md text-on-surface font-semibold">
                  Kirim pesanan instan via WhatsApp atau Delivery Partner
                </span>
              </div>
            </div>
          </div>

          {/* Calculator Interactive Card */}
          <div className="lg:col-span-7 bg-surface p-space-lg lg:p-space-xl rounded-3xl shadow-xl flex flex-col gap-space-md border border-outline-variant/30">
            {/* Portion Segment Buttons */}
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-space-xs block font-bold">
                PILIH MOMEN MAKAN KAMU
              </label>
              <div className="grid grid-cols-3 gap-space-xs bg-surface-container-low p-space-xs rounded-xl border border-outline-variant/20">
                <button
                  className={`py-space-sm rounded-lg font-title-md text-title-md transition-all text-center ${
                    selectedTierId === 1
                      ? 'bg-surface text-on-surface shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  onClick={() => setSelectedTierId(1)}
                >
                  Makan Sendiri{' '}
                  <span className="block text-body-sm text-on-surface-variant font-normal">
                    1 Orang
                  </span>
                </button>

                <button
                  className={`py-space-sm rounded-lg font-title-md text-title-md transition-all text-center ${
                    selectedTierId === 2
                      ? 'bg-surface text-on-surface shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  onClick={() => setSelectedTierId(2)}
                >
                  Dua Orang{' '}
                  <span className="block text-body-sm text-on-surface-variant font-normal">
                    Date / Bestie
                  </span>
                </button>

                <button
                  className={`py-space-sm rounded-lg font-title-md text-title-md transition-all text-center ${
                    selectedTierId === 3
                      ? 'bg-surface text-on-surface shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  onClick={() => setSelectedTierId(3)}
                >
                  Rame-Rame{' '}
                  <span className="block text-body-sm text-on-surface-variant font-normal">
                    4-6 Orang
                  </span>
                </button>
              </div>
            </div>

            {/* Dynamic Result Preview Box */}
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border border-outline-variant/20">
              <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  {currentTier.title}
                </span>
                <span className="font-headline-sm text-headline-sm text-tertiary-container font-bold">
                  Rp {currentTier.price.toLocaleString('id-ID')}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs py-space-xs text-center">
                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="block font-headline-sm text-headline-sm text-primary-container font-bold">
                    {currentTier.pcs}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Total Dimsum
                  </span>
                </div>

                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="block font-headline-sm text-headline-sm text-primary-container font-bold">
                    {currentTier.sauce}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Saus Pilihan
                  </span>
                </div>

                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="block font-headline-sm text-headline-sm text-primary-container font-bold">
                    {currentTier.drinks}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Es Liang Teh
                  </span>
                </div>

                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="block font-headline-sm text-headline-sm text-tertiary-container font-bold">
                    {currentTier.estTime}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Estimasi Siap
                  </span>
                </div>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                "{currentTier.desc}"
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-xs">
              <a
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-xl bg-inverse-surface text-inverse-on-surface font-title-md text-title-md hover:bg-on-surface transition-all shadow-md"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                  send_to_mobile
                </span>
                <span>Pesan Paket Ini via WhatsApp</span>
              </a>

              <button
                className="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary transition-all shadow-md active:scale-95"
                onClick={() => addToCart(currentTier.title, currentTier.price)}
              >
                + Masukkan Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
