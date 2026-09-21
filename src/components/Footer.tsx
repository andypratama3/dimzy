'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [infoModalContent, setInfoModalContent] = useState<{ title: string; content: string } | null>(null);
  const { showToast } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Terima kasih telah berlangganan Warta DIMZY');
      setEmail('');
    }
  };

  const openTerms = () => {
    setInfoModalContent({
      title: 'Syarat & Ketentuan Pemesanan',
      content:
        'Semua pesanan dimsum goreng diproses langsung setelah pesanan terkonfirmasi untuk menjamin suhu dan kerenyahan optimal. Pengiriman dilakukan melalui kurir instan mitra atau pengambilan langsung di outlet. Jika terdapat ketidaksesuaian pesanan, hubungi layanan pelanggan kami dalam kurun waktu 1 jam setelah pesanan diterima.',
    });
  };

  const openPrivacy = () => {
    setInfoModalContent({
      title: 'Kebijakan Privasi',
      content:
        'DIMZY menjaga kerahasiaan data pelanggan. Informasi kontak (nama, nomor telepon, dan alamat kirim) hanya digunakan untuk memproses pengiriman pesanan dan pengiriman warta promosi resmi apabila Anda telah mendaftar secara sukarela.',
    });
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-margin lg:px-margin-desktop pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop pb-space-2xl">
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
                className="min-w-[44px] min-h-[44px] rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Resmi DIMZY"
              >
                <span className="material-symbols-outlined text-[20px]">
                  photo_camera
                </span>
              </a>
              <a
                className="min-w-[44px] min-h-[44px] rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Resmi DIMZY"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
              </a>
              <a
                className="min-w-[44px] min-h-[44px] rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Resmi DIMZY"
              >
                <span className="material-symbols-outlined text-[20px]">
                  play_circle
                </span>
              </a>
            </div>
          </div>

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
                <span>Goreng dadakan tiap pesanan masuk</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md text-on-surface font-bold">
              Pesan Cepat Online
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tersedia di mitra pesan antar favorit Anda:
            </p>
            <div className="flex flex-col gap-space-xs font-label-md text-label-md text-on-surface">
              <a
                href="#lokasi-outlet"
                className="min-h-[44px] flex items-center gap-space-sm p-space-xs px-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                <span className="material-symbols-outlined text-primary">
                  moped
                </span>
                <span>GoFood Official Outlet</span>
              </a>
              <a
                href="#lokasi-outlet"
                className="min-h-[44px] flex items-center gap-space-sm p-space-xs px-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                <span className="material-symbols-outlined text-primary">
                  two_wheeler
                </span>
                <span>GrabFood Signature Kitchen</span>
              </a>
              <a
                href="#lokasi-outlet"
                className="min-h-[44px] flex items-center gap-space-sm p-space-xs px-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                <span className="material-symbols-outlined text-primary">
                  shopping_bag
                </span>
                <span>ShopeeFood Super Resto</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md text-on-surface font-bold">
              Warta Gurih DIMZY
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Dapatkan voucher eksklusif dan kabar menu musiman pertama kali.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-space-xs">
              <div className="flex flex-col gap-space-xs">
                <input
                  className="w-full min-h-[44px] px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container"
                  placeholder="Masukkan alamat email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Alamat email untuk berlangganan"
                />
                <button
                  className="min-h-[44px] w-full py-space-xs px-space-md bg-inverse-surface text-inverse-on-surface rounded-lg font-label-md text-label-md hover:bg-on-surface transition-colors flex items-center justify-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                  type="submit"
                >
                  Berlangganan
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2024 DIMZY Artisan Dimsum Goreng. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-space-lg font-label-md text-label-md">
            <button
              onClick={openTerms}
              className="hover:text-on-surface transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
            >
              Syarat & Ketentuan
            </button>
            <button
              onClick={openPrivacy}
              className="hover:text-on-surface transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
            >
              Kebijakan Privasi
            </button>
          </div>
        </div>
      </div>

      {infoModalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-modal-title"
        >
          <div className="bg-surface w-full max-w-lg rounded-3xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-outline-variant/30">
            <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
              <h3 id="info-modal-title" className="font-title-lg text-title-lg text-on-surface font-bold">
                {infoModalContent.title}
              </h3>
              <button
                onClick={() => setInfoModalContent(null)}
                className="min-w-[44px] min-h-[44px] rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
                aria-label="Tutup Dialog"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              {infoModalContent.content}
            </p>
            <div className="pt-space-xs flex justify-end">
              <button
                onClick={() => setInfoModalContent(null)}
                className="min-h-[44px] px-space-lg py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
