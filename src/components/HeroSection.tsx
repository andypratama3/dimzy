'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-margin lg:px-margin-desktop pt-space-xl pb-space-2xl overflow-hidden">
      {/* Ambient Warm Texture Glow */}
      <div className="absolute top-12 -left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-48 right-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-center">
        {/* Left Narrative Column */}
        <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
          {/* Floating Pill Status */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-fixed text-label-caps font-label-caps shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-tertiary -ml-3"></span>
            <span>ARTISANAL FRIED DIMSUM FRESHLY CRISPED</span>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight font-bold">
            Sensasi Renyah di Luar,{' '}
            <span className="text-tertiary-container italic underline decoration-tertiary-fixed-dim/50 decoration-wavy">
              Juicy & Gurih
            </span>{' '}
            di Dalam
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Racikan warisan autentik dengan 100% daging ayam & udang laut cincang
            murni, dibalut kulit tipis keemasan renyah maksimal, disajikan panas
            membakar bersama racikan khas{' '}
            <strong className="text-on-surface font-title-md">
              Signature Chili Oil DIMZY
            </strong>
            .
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-full bg-primary-container text-on-primary font-title-md text-title-md shadow-lg shadow-primary-container/25 hover:shadow-xl hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5"
              href="#katalog-menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
              <span>Pesan Sekarang (Gratis Ongkir)</span>
            </a>

            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-full bg-surface-container-high text-on-surface font-title-md text-title-md hover:bg-surface-variant transition-colors"
              href="#kalkulator-paket"
            >
              <span className="material-symbols-outlined text-[20px]">
                restaurant_menu
              </span>
              <span>Simulasi Porsi</span>
            </a>
          </div>

          {/* Quick USP Stat Counters */}
          <div className="grid grid-cols-3 gap-space-md w-full pt-space-md mt-space-sm bg-surface-container-low p-space-md rounded-xl border border-outline-variant/20">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs text-tertiary-container font-headline-sm text-headline-sm font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  verified
                </span>
                <span>100%</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Halal & Bahan Segar
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs text-tertiary-container font-headline-sm text-headline-sm font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  schedule
                </span>
                <span>15 Min</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Tiba Selagi Renyah
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs text-tertiary-container font-headline-sm text-headline-sm font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  local_fire_department
                </span>
                <span>3 Saus</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Racikan Rempah Asli
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual Imagery Column */}
        <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden bg-surface-container-lowest shadow-2xl p-space-sm border border-outline-variant/30">
            <img
              alt="Piring saji penuh dimsum goreng keemasan DIMZY dengan saus chili oil panas dan mangkuk teh kayu"
              className="w-full h-[460px] object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q"
            />

            {/* Floating Badge 1: Rating */}
            <div className="absolute top-6 left-6 flex items-center gap-space-xs bg-surface/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg text-on-surface border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-tertiary text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-title-md text-title-md font-bold">
                4.9 / 5.0
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                (18.400+ ulasan)
              </span>
            </div>

            {/* Floating Badge 2: Fresh Crisp Guarantee */}
            <div className="absolute bottom-6 left-6 flex items-center gap-space-sm bg-surface/95 backdrop-blur-md px-space-md py-space-sm rounded-2xl shadow-xl text-on-surface border border-outline-variant/30">
              <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary">
                <span className="material-symbols-outlined text-[22px]">
                  electric_bolt
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md font-bold">
                  Digoreng Dadakan
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Crisp maksimal tanpa minyak berlebih
                </span>
              </div>
            </div>

            {/* Floating Badge 3: Signature Chili Oil */}
            <div className="absolute top-8 right-6 hidden sm:flex items-center gap-space-xs bg-inverse-surface/90 text-inverse-on-surface px-space-md py-space-xs rounded-full shadow-md text-label-md font-label-md">
              <span className="text-tertiary-fixed font-bold">🌶️</span>
              <span>Free Signature Chili Oil</span>
            </div>
          </div>

          {/* Decorative Floating Spice Leaf / Tag */}
          <div className="absolute -bottom-4 -right-4 bg-primary-container text-on-primary px-space-md py-space-xs rounded-full font-label-caps text-label-caps shadow-md uppercase tracking-wider">
            Secret Recipe Since 2019
          </div>
        </div>
      </div>
    </section>
  );
}
