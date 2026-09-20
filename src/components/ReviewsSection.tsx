'use client';

import React from 'react';
import { REVIEWS } from '@/data/dimzyData';

export default function ReviewsSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin lg:px-margin-desktop py-space-2xl">
      <div className="flex flex-col items-center text-center mb-space-xl">
        <div className="inline-flex items-center gap-space-xs text-tertiary font-label-caps text-label-caps uppercase">
          <span className="material-symbols-outlined text-[16px]">
            reviews
          </span>
          Apa Kata Para Pecinta Krispi
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs max-w-xl font-bold">
          Kriuknya Bikin Nggak Mau Berhenti Ngunyah
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-xs">
          Lebih dari 18.000 pelanggan telah membuktikan renyahnya dimsum goreng
          DIMZY.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-space-lg bg-surface-container-low rounded-2xl flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center gap-1 text-tertiary mb-space-sm">
                {[...Array(rev.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                {rev.quote}
              </p>
            </div>

            <div className="flex items-center gap-space-sm mt-space-lg pt-space-sm border-t border-outline-variant/20">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-title-md ${rev.initialsBgClass}`}
              >
                {rev.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md font-bold text-on-surface">
                  {rev.name}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {rev.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
