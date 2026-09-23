'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-margin lg:px-margin-desktop pt-space-xl pb-space-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-label-caps font-label-caps">
            <span>DOUBLE KULIT KRISPI DENGAN KEJU LUMER</span>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight font-bold">
            Dimsum Goreng Double Kulit,{' '}
            <span className="text-tertiary-container italic underline decoration-tertiary-fixed-dim/50 decoration-wavy">
              Krispi & Keju Lumer
            </span>{' '}
            di Dalam
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Dibalut teknik double kulit krispi yang digoreng pada suhu ideal 170-180°C agar renyah tanpa minyak berlebih dan tahan garing 4-6 jam. Dilengkapi isian keju lumer hangat serta cocolan saos sambal handmade segar.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
            <a
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-full bg-primary-container text-on-primary font-title-md text-title-md shadow-sm hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 font-semibold"
              href="#katalog-menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
              <span>Pesan Sekarang</span>
            </a>

            <a
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-full bg-surface-container-high text-on-surface font-title-md text-title-md hover:bg-surface-variant transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container font-semibold"
              href="#kalkulator-paket"
            >
              <span className="material-symbols-outlined text-[20px]">
                restaurant_menu
              </span>
              <span>Simulasi Porsi</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-space-md w-full pt-space-md mt-space-sm bg-surface-container-low p-space-md rounded-xl border border-outline-variant/20">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-space-xs text-tertiary-container font-headline-sm text-headline-sm font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  timer
                </span>
                <span>4-6 Jam</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Krispi Tahan Lama
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-space-xs text-tertiary-container font-headline-sm text-headline-sm font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  local_fire_department
                </span>
                <span>170-180°C</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Suhu Ideal Anti Gosong
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-space-xs text-tertiary-container font-headline-sm text-headline-sm font-bold">
                <span className="material-symbols-outlined text-[22px]">
                  soup_kitchen
                </span>
                <span>Fresh</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Saos Sambal Handmade
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md p-space-sm border border-outline-variant/30">
            <img
              alt="Piring saji penuh dimsum goreng double kulit keemasan DIMZY dengan lelehan keju lumer dan saos sambal handmade segar"
              className="w-full h-[440px] object-cover rounded-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q"
            />

            <div className="absolute top-6 left-6 flex items-center gap-space-xs bg-surface/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-sm text-on-surface border border-outline-variant/30">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                workspace_premium
              </span>
              <span className="font-title-md text-title-md font-bold">
                Double Kulit
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Isi Keju Lumer
              </span>
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-space-sm bg-surface/95 backdrop-blur-md px-space-md py-space-sm rounded-2xl shadow-md text-on-surface border border-outline-variant/30">
              <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary">
                <span className="material-symbols-outlined text-[22px]">
                  timer
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md font-bold">
                  Tahan Krispi 4-6 Jam
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Tidak menyerap banyak minyak & tidak cepat gosong
                </span>
              </div>
            </div>

            <div className="absolute top-8 right-6 hidden sm:flex items-center gap-space-xs bg-inverse-surface/90 text-inverse-on-surface px-space-md py-space-xs rounded-full shadow-sm text-label-md font-label-md">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
                soup_kitchen
              </span>
              <span>Saos Sambal Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
