import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BrandStory from '@/components/BrandStory';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Add spacing for fixed navigation */}
      <div className="pt-20">
        <BrandStory />
      </div>

      <Footer />
    </div>
  );
};

export default About;
