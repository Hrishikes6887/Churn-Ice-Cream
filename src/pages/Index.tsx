import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BrandValues from '@/components/BrandValues';
import FlavorCategories from '@/components/FlavorCategories';
import CreateYourOwn from '@/components/CreateYourOwn';
import Reviews from '@/components/Reviews';
import ValuesHighlight from '@/components/ValuesHighlight';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandValues />
      <FlavorCategories />
      <CreateYourOwn />
      <Reviews />
      <ValuesHighlight />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
