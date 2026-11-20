import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMakeupDropdownOpen, setIsMakeupDropdownOpen] = useState(false);

  const { cartCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsMakeupDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { 
      name: 'Makeup', 
      path: '/shop?category=lipsticks',
      hasDropdown: true,
      sublinks: [
        { name: 'Lipsticks', path: '/shop?category=lipsticks' },
        { name: 'Face Makeup', path: '/shop?category=face-makeup' },
        { name: 'Eye Makeup', path: '/shop?category=eye-makeup' },
        { name: 'Blush & Glow', path: '/shop?category=blush-glow' },
        { name: 'Brushes & Tools', path: '/shop?category=brushes-tools' },
        { name: 'Skincare & Prep', path: '/shop?category=skincare' }
      ]
    },
    { name: 'Best Sellers', path: '/shop?filter=bestsellers' },
    { name: 'New Arrivals', path: '/shop?filter=new' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-ivory/95 backdrop-blur-md shadow-soft border-b border-blush-200/80 py-3' 
        : 'bg-ivory border-b border-blush-100 py-4.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-espresso-800 hover:text-espresso-950 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 ml-1 text-espresso-700 hover:text-espresso-950"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link to="/" className="inline-flex items-center group">
              <span className="font-serif tracking-[0.25em] text-xl sm:text-2xl font-bold text-espresso-950 group-hover:text-rose-brown transition-colors">
                GLOW <span className="text-rose-brown font-light">&</span> GLAM
              </span>
              <Sparkles className="w-3.5 h-3.5 ml-1.5 text-blush-400 group-hover:text-rose-gold group-hover:rotate-12 transition-all" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setIsMakeupDropdownOpen(true)}
                    onMouseLeave={() => setIsMakeupDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-xs font-semibold tracking-widest uppercase transition-colors duration-200 flex items-center py-2 ${
                          isActive ? 'text-rose-brown' : 'text-espresso-700 hover:text-rose-brown'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {isMakeupDropdownOpen && (
                      <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-fadeIn">
                        <div className="bg-ivory rounded-xl shadow-elevated border border-blush-200 py-2.5 overflow-hidden">
                          {link.sublinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-4 py-2 text-xs text-espresso-700 hover:text-rose-brown hover:bg-blush-50 transition-colors font-medium"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs font-semibold tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                      isActive 
                        ? 'text-rose-brown after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rose-brown' 
                        : 'text-espresso-700 hover:text-rose-brown'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search (Desktop) */}
            <button
              onClick={onOpenSearch}
              className="btn-icon hidden lg:flex"
              title="Search Products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <Link
              to={isAuthenticated ? '/profile' : '/login'}
              className="btn-icon"
              title={isAuthenticated ? `Hello, ${user.name}` : 'Login / Register'}
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="btn-icon relative"
              title="Your Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="badge-count animate-scale">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="btn-icon relative"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="badge-count animate-scale">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-espresso-950/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="relative w-4/5 max-w-sm bg-ivory h-full shadow-2xl flex flex-col z-10 border-r border-blush-200 animate-slide-up">
            <div className="flex items-center justify-between p-5 border-b border-blush-200">
              <span className="font-serif tracking-widest text-lg font-bold text-espresso-900">
                GLOW & GLAM
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-espresso-500 hover:text-espresso-900 rounded-full"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 px-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors ${
                          isActive
                            ? 'bg-blush-100 text-rose-brown'
                            : 'text-espresso-800 hover:bg-cream-100'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                    {link.hasDropdown && (
                      <div className="pl-6 space-y-1 py-1">
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-espresso-600 hover:text-rose-brown font-medium"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-blush-200 space-y-3">
                <Link
                  to={isAuthenticated ? '/profile' : '/login'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-cream-100 text-espresso-800 text-xs font-semibold uppercase tracking-wider"
                >
                  <User className="w-4 h-4 text-rose-brown" />
                  <span>{isAuthenticated ? `My Account (${user.name})` : 'Sign In / Register'}</span>
                </Link>

                <Link
                  to="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-cream-100 text-espresso-800 text-xs font-semibold uppercase tracking-wider"
                >
                  <span className="flex items-center space-x-3">
                    <Heart className="w-4 h-4 text-rose-brown" />
                    <span>Wishlist</span>
                  </span>
                  <span className="text-xs bg-rose-brown text-ivory px-2 py-0.5 rounded-full font-bold">
                    {wishlistCount}
                  </span>
                </Link>
              </div>
            </div>

            <div className="p-5 border-t border-blush-200 text-center text-xs text-espresso-500">
              <p className="font-serif italic">Your beauty, your rules.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
