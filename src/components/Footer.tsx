import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Creations', href: '/#creations' },
    { label: 'Create Your Own', href: '/create-your-own' },
    { label: 'Achievements', href: '/#achievements' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/churnfresh', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/churnfresh', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@churnfresh', label: 'YouTube' },
    { icon: MapPin, href: 'https://maps.app.goo.gl/g4UdbJUqrNo4FC9n6', label: 'Google Maps' },
  ];

  return (
    <footer className="bg-chocolate py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-cream/30 bg-cream/10 flex items-center justify-center">
                <span className="font-heading font-bold text-cream text-sm">CF</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-cream tracking-wide block">
                  CHURN
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-cream/60">
                  Fresh Ice Cream
                </span>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Authentic Italian gelato crafted with love in Bangalore. 
              100% natural ingredients, infinite possibilities.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-cream group-hover:text-chocolate transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-cream/70">
                  146, 2nd Cross Rd, Jaladarsini Layout<br />
                  Mathikere, Bengaluru<br />
                  Karnataka 560094
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-cream/70">+91 81053 17181</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-cream/70">churnfresh@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-cream/70">
                  <p className="font-semibold text-gold">Hours</p>
                  <p>Mon - Sun: 1:30 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="text-center">
            <p className="text-cream/50 text-sm">
              © {currentYear} Churn Fresh Ice Cream. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
