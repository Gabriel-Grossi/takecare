"use client"
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/Hero';
import { NavigationBar } from '@/components/NavigationBar';
import { ServicesSection } from '@/components/sections/Services';
import { ContactUsSection } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center px-12">
        <NavigationBar />
        <HeroSection />
        <ServicesSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
