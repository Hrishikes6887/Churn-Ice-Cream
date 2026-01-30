import { Instagram, Facebook, Twitter, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Creations', href: '#creations' },
    { label: 'Create Your Own', href: '#create' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-chocolate py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
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
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
                  123 MG Road, Indiranagar<br />
                  Bangalore, Karnataka 560038
                </p>
              </div>
              <p className="text-cream/70">
                <span className="text-gold">Phone:</span> +91 98765 43210
              </p>
              <p className="text-cream/70">
                <span className="text-gold">Email:</span> hello@churnfresh.in
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-6">Stay Updated</h4>
            <p className="text-cream/70 text-sm mb-4">
              Subscribe for new flavors, special offers, and exclusive events!
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gold hover:bg-gold-light text-chocolate font-semibold rounded-xl transition-all duration-300 text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {currentYear} Churn Fresh Ice Cream. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
