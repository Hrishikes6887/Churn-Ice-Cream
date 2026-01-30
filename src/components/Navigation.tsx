import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Creations', href: '#creations' },
    { label: 'Create Your Own', href: '#create' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'border-primary bg-primary' 
              : 'border-cream bg-cream/10'
          }`}>
            <span className={`font-heading font-bold text-sm ${
              isScrolled ? 'text-cream' : 'text-cream'
            }`}>
              CF
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl tracking-wide transition-colors ${
              isScrolled ? 'text-primary' : 'text-cream'
            }`}>
              CHURN
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${
              isScrolled ? 'text-muted-foreground' : 'text-cream/70'
            }`}>
              Fresh Ice Cream
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={isScrolled ? 'nav-link-dark' : 'nav-link'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-primary hover:bg-muted' : 'text-cream hover:bg-cream/10'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
