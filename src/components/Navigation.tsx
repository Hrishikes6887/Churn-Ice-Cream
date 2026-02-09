import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/LOGO.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: isHomePage ? '#home' : '/', isRoute: !isHomePage },
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Our Creations', href: isHomePage ? '#creations' : '/#creations', isRoute: false },
    { label: 'Create Your Own', href: isHomePage ? '#create' : '/#create', isRoute: false },
    { label: 'Achievements', href: isHomePage ? '#achievements' : '/#achievements', isRoute: false },
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
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Churn Fresh Ice Cream" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover transition-all duration-300 hover:scale-105"
            style={{ imageRendering: 'crisp-edges' }}
          />
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-2xl md:text-3xl tracking-wide transition-colors ${
              isScrolled ? 'text-primary' : 'text-cream'
            }`}>
              CHURN
            </span>
            <span className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              isScrolled ? 'text-muted-foreground' : 'text-cream/80'
            }`}>
              Fresh Ice Cream
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className={isScrolled ? 'nav-link-dark' : 'nav-link'}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={isScrolled ? 'nav-link-dark' : 'nav-link'}
              >
                {link.label}
              </a>
            )
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
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
