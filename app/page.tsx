import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Categories } from '@/components/Categories';
import { Featured } from '@/components/Featured';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Reviews } from '@/components/Reviews';
import { WholesaleInquiry } from '@/components/WholesaleInquiry';
import { StoreInfo } from '@/components/StoreInfo';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Featured />
      <WhyChooseUs />
      <Reviews />
      <WholesaleInquiry />
      <StoreInfo />
      <InstagramFeed />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
