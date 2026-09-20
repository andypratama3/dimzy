'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Terima kasih telah berlangganan Warta DIMZY!');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-margin lg:px-margin-desktop pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop pb-space-2xl">
          {/* Brand Info */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                DIMZY
              </span>
              <span className="font-label-caps text-label-caps text-tertiary">
                Artisanal
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Sensasi renyah keemasan dimsum goreng gourmet dengan racikan rempah
              warisan dan saus cocol istimewa.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[18px]">
                  photo_camera
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                href="#"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                href="#"
                aria-label="TikTok"
              >
                <span className="material-symbols-outlined text-[18px]">
                  play_circle
                </span>
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md text-on-surface font-bold">
              Jam Operasional
            </h4>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between py-space-xs border-b border-outline-variant/10">
                <span className="text-on-surface font-label-md text-label-md font-semibold">
                  Senin - Kamis
                </span>
                <span>10:00 - 22:00 WIB</span>
              </div>
              <div className="flex justify-between py-space-xs border-b border-outline-variant/10">
                <span className="text-on-surface font-label-md text-label-md font-semibold">
                  Jumat - Minggu
                </span>
                <span>09:00 - 23:00 WIB</span>
              </div>
              <div className="flex items-center gap-space-xs text-tertiary font-label-md text-label-md pt-space-xs">
                <span className="material-symbols-outlined text-[16px]">
                  schedule
                </span>
                <span>Fresh fry made by order</span>
              </div>
            </div>
          </div>

          {/* Delivery Partners */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md text-on-surface font-bold">
              Pesan Cepat Online
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tersedia di mitra pesan antar favorit Anda:
            </p>
            <div className="flex flex-col gap-space-xs font-label-md text-label-md text-on-surface">
              <div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary">
                  moped
                </span>
                <span>GoFood Official Store</span>
              </div>
              <div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary">
                  two_wheeler
                </span>
                <span>GrabFood Signature</span>
              </div>
              <div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary">
                  shopping_bag
                </span>
                <span>ShopeeFood Super Resto</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md text-on-surface font-bold">
              Warta Gurih DIMZY
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Dapatkan voucher eksklusif dan kabar menu musiman pertama kali.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-space-xs">
              <div className="relative">
                <input
                  className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container"
                  placeholder="Masukkan alamat email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="mt-space-xs w-full py-space-xs px-space-md bg-inverse-surface text-inverse-on-surface rounded-lg font-label-md text-label-md hover:bg-on-surface transition-colors flex items-center justify-center gap-space-xs"
                  type="submit"
                >
                  <span>Langganan</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2024 DIMZY Artisan Dimsum Goreng. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-space-lg font-label-md text-label-md">
            <a className="hover:text-on-surface transition-colors" href="#">
              Syarat & Ketentuan
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
