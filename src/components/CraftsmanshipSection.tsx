'use client';

import React from 'react';
import { CRAFTSMANSHIP_PILLARS } from '@/data/dimzyData';

export default function CraftsmanshipSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl" id="rahasia-gurih">
      <div className="max-w-[1280px] mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col items-center text-center mb-space-xl">
          <span className="font-label-caps text-label-caps text-tertiary font-bold tracking-widest uppercase">
            The DIMZY Craft
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs max-w-xl font-bold">
            Tiga Fondasi Kenikmatan Dimsum Goreng Sempurna
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-xs">
            Setiap butir dimsum melalui 4 tahap kurasi: pemilihan daging segar,
            pencampuran minyak wijen murni, pembungkusan kulit tipis artisanal, dan
            penggorengan suhu presisi 175°C.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {CRAFTSMANSHIP_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="flex flex-col p-space-lg bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed mb-space-md">
                <span className="material-symbols-outlined text-[28px]">
                  {pillar.icon}
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-tertiary font-semibold">
                {pillar.tag}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs mb-space-xs font-bold">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pillar.desc}
              </p>
              <div className="mt-space-md pt-space-sm bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {pillar.badgeLabel}
                </span>
                <div className="flex items-center gap-1 text-tertiary-container font-title-md text-title-md font-bold">
                  {pillar.num === '01' ? (
                    <div className="flex gap-1 text-tertiary-container">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          local_fire_department
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>{pillar.badgeValue}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
