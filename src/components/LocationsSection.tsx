'use client';

import React from 'react';
import { OUTLETS } from '@/data/dimzyData';

export default function LocationsSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl" id="lokasi-outlet">
      <div className="max-w-[1280px] mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span className="font-label-caps text-label-caps text-tertiary uppercase font-bold tracking-widest">
              Kunjungi Kitchen Kami
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs font-bold">
              Outlet & Dapur Penggorengan Segar
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-xs">
              Nikmati langsung hangat dari wajan penggorengan kami atau pesan instan dari outlet terdekat.
            </p>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md bg-surface px-space-md py-space-xs rounded-full border border-outline-variant/20 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
            <span>Semua Dapur Beroperasi Setiap Hari</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-surface p-space-md rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-caps text-label-caps text-tertiary font-bold">
                    {outlet.city}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-body-sm font-semibold">
                    Buka
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                  {outlet.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  {outlet.address}
                </p>
                <span className="inline-block mt-space-xs font-label-md text-label-md text-on-surface font-semibold">
                  {outlet.hours}
                </span>
              </div>

              <div className="mt-space-md pt-space-sm border-t border-outline-variant/20 flex flex-col gap-space-xs">
                <a
                  className="w-full min-h-[44px] flex items-center justify-center text-center py-space-xs bg-surface-container rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  href={outlet.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buka Google Maps
                </a>
                <a
                  className="w-full min-h-[44px] flex items-center justify-center text-center py-space-xs bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  href="#katalog-menu"
                >
                  Pesan Dari Outlet Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
