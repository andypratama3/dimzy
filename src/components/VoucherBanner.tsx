'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function VoucherBanner() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useCart();

  const handleCopy = () => {
    navigator.clipboard.writeText('DIMZYRENYAH').then(() => {
      setCopied(true);
      showToast('Kupon DIMZYRENYAH berhasil disalin');
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin lg:px-margin-desktop py-space-2xl" id="promo-voucher">
      <div className="relative rounded-3xl overflow-hidden bg-inverse-surface text-inverse-on-surface p-space-xl lg:p-space-2xl shadow-xl border border-outline-variant/30">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-8 flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-tertiary-fixed font-bold tracking-widest uppercase">
              VOUCHER DISKON PENGGUNA BARU
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight font-bold">
              Dapatkan Diskon 25% Untuk Pesanan Pertama Anda
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl leading-relaxed">
              Gunakan kode kupon eksklusif saat pemesanan online atau sebutkan saat mampir ke outlet DIMZY terdekat.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm mt-space-sm">
              <div className="px-space-md py-space-xs rounded-xl bg-surface-container-lowest/15 text-surface-bright font-title-lg text-title-lg tracking-widest font-mono select-all border border-surface-bright/20">
                DIMZYRENYAH
              </div>

              <button
                className="min-h-[44px] inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                onClick={handleCopy}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? 'check_circle' : 'content_copy'}
                </span>
                <span>{copied ? 'Kode Berhasil Disalin' : 'Salin Kode Kupon'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-space-md bg-surface-container-lowest/10 rounded-2xl text-center border border-surface-bright/10 mt-space-md lg:mt-0">
            <span className="material-symbols-outlined text-[42px] text-tertiary-fixed mb-space-xs">
              local_fire_department
            </span>
            <span className="font-headline-sm text-headline-sm text-surface font-bold">
              Garansi Renyah
            </span>
            <p className="font-body-sm text-body-sm text-surface-container-high mt-space-xs">
              Jika pesanan tiba dalam kondisi melempem atau dingin, kami ganti baru tanpa biaya tambahan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
