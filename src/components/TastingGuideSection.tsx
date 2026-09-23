'use client';

import React from 'react';
import { PAIRING_RITUALS } from '@/data/dimzyData';

export default function TastingGuideSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin lg:px-margin-desktop py-space-2xl" id="panduan-cocol">
      <div className="flex flex-col items-center text-center mb-space-xl">
        <span className="font-label-caps text-label-caps text-tertiary uppercase font-bold tracking-widest">
          Ritual Menikmati Dimsum
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs max-w-xl font-bold">
          Panduan Cocol & Kerenyahan Awet 4-6 Jam
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-xs">
          Nikmati sensasi keju lumer hangat berpadu lapisan double kulit krispi dan cocolan saos sambal handmade segar rebusan air bertahap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {PAIRING_RITUALS.map((ritual) => (
          <div
            key={ritual.id}
            className="p-space-lg bg-surface-container-low rounded-2xl flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-caps text-label-caps text-tertiary font-bold uppercase">
                  {ritual.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[22px]">
                    {ritual.icon}
                  </span>
                </div>
              </div>

              <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                {ritual.title}
              </h3>
              <span className="inline-block mt-1 font-label-md text-label-md text-tertiary-container font-semibold">
                {ritual.pairing}
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                {ritual.note}
              </p>
            </div>

            <div className="mt-space-lg pt-space-sm border-t border-outline-variant/20">
              <a
                className="inline-flex items-center min-h-[44px] text-primary-container font-label-md text-label-md font-semibold hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
                href="#katalog-menu"
              >
                <span>Coba Sekarang di Menu</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
