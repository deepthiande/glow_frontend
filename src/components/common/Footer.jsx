import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  RefreshCw 
} from 'lucide-react';

// Custom inline SVG icons for social media
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3v6Z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-espresso-950 text-cream-100 pt-16 pb-10 border-t border-rose-gold/20">
      {/* Brand Features Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-espresso-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-espresso-900 border border-rose-gold/30 flex items-center justify-center text-blush-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base text-ivory tracking-wide">100% Authentic Cosmetics</h4>
              <p className="text-xs text-espresso-300 mt-0.5">Sourced directly from certified clean ateliers</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-espresso-900 border border-rose-gold/30 flex items-center justify-center text-blush-300 shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base text-ivory tracking-wide">Complimentary Returns</h4>
              <p className="text-xs text-espresso-300 mt-0.5">Hassle-free 14-day shade exchange policy</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-espresso-900 border border-rose-gold/30 flex items-center justify-center text-blush-300 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base text-ivory tracking-wide">Cruelty-Free Always</h4>
              <p className="text-xs text-espresso-300 mt-0.5">Zero animal testing, ethically formulated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center group">
              <span className="font-serif tracking-[0.25em] text-2xl font-bold text-ivory">
                GLOW <span className="text-blush-300 font-light">&</span> GLAM
              </span>
              <Sparkles className="w-4 h-4 ml-2 text-blush-300" />
            </Link>
            <p className="text-xs leading-relaxed text-espresso-300 max-w-sm">
              GLOW & GLAM celebrates modern luxury beauty. Curating high-pigment, skin-loving cosmetics designed to make you feel radiant, bold, and unapologetically you.
            </p>
            <div className="pt-2">
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-rose-brown border border-espresso-800 text-blush-200 hover:text-ivory flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-rose-brown border border-espresso-800 text-blush-200 hover:text-ivory flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-rose-brown border border-espresso-800 text-blush-200 hover:text-ivory flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-rose-brown border border-espresso-800 text-blush-200 hover:text-ivory flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="font-serif text-sm tracking-widest uppercase text-ivory mb-4">
              Explore Collections
            </h5>
            <ul className="space-y-2.5 text-xs text-espresso-300">
              <li>
                <Link to="/shop?category=lipsticks" className="hover:text-blush-300 transition-colors">
                  Lipsticks & Glosses
                </Link>
              </li>
              <li>
                <Link to="/shop?category=face-makeup" className="hover:text-blush-300 transition-colors">
                  Foundations & Concealers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=eye-makeup" className="hover:text-blush-300 transition-colors">
                  Eyeshadows & Liners
                </Link>
              </li>
              <li>
                <Link to="/shop?category=blush-glow" className="hover:text-blush-300 transition-colors">
                  Liquid Blushes & Highlighters
                </Link>
              </li>
              <li>
                <Link to="/shop?category=brushes-tools" className="hover:text-blush-300 transition-colors">
                  Pro Vegan Brushes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=skincare" className="hover:text-blush-300 transition-colors">
                  Skin Prep & Balms
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h5 className="font-serif text-sm tracking-widest uppercase text-ivory mb-4">
              Client Concierge
            </h5>
            <ul className="space-y-2.5 text-xs text-espresso-300">
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  Our Story & Values
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blush-300 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blush-300 transition-colors">
                  Track Delivery
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-blush-300 transition-colors">
                  Beauty Wishlist
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  Shade Matching Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  FAQs & Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h5 className="font-serif text-sm tracking-widest uppercase text-ivory mb-4">
              Beauty Headquarters
            </h5>
            <div className="space-y-3 text-xs text-espresso-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blush-300 shrink-0 mt-0.5" />
                <span>
                  The Atelier, Level 4, Palladium Mall, High Street Phoenix, Mumbai 400013
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blush-300 shrink-0" />
                <span>+91 1800 209 8899 (Mon–Sat)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blush-300 shrink-0" />
                <span>concierge@glowandglam.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-espresso-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-espresso-400">
          <p>© {new Date().getFullYear()} GLOW & GLAM Luxury Beauty Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-blush-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blush-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-blush-300 cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
