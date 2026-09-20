'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import MenuShowcase from '@/components/MenuShowcase';
import PortionCalculator from '@/components/PortionCalculator';
import ReviewsSection from '@/components/ReviewsSection';
import LocationsSection from '@/components/LocationsSection';
import VoucherBanner from '@/components/VoucherBanner';
import CartModal from '@/components/CartModal';
import ToastNotification from '@/components/ToastNotification';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-1 pt-20">
        <HeroSection />
        <CraftsmanshipSection />
        <MenuShowcase />
        <PortionCalculator />
        <ReviewsSection />
        <LocationsSection />
        <VoucherBanner />
      </main>
      <CartModal />
      <ToastNotification />
      <Footer />
    </div>
  );
}
