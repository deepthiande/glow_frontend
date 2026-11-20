import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../../data/products';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDescription?.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectProduct = (productId) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  const popularSearches = [
    'Matte Lipstick',
    'Hydrating Foundation',
    'Liquid Blush',
    'Setting Powder',
    'Brush Set',
    'Vegan Lip Oil'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-espresso-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-ivory rounded-2xl shadow-elevated border border-blush-200 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-blush-200 px-6 py-4">
          <Search className="w-5 h-5 text-espresso-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for lipsticks, foundations, brushes, brands..."
            className="w-full bg-transparent text-espresso-900 placeholder-espresso-400 font-serif text-lg sm:text-xl focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-espresso-400 hover:text-espresso-800 transition-colors mr-2"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-espresso-600 hover:text-espresso-950 transition-colors rounded-full hover:bg-blush-100"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Content Area */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim() === '' ? (
            <div>
              <div className="flex items-center text-xs font-semibold tracking-wider uppercase text-espresso-500 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-rose-gold mr-1.5" />
                Trending Searches
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 bg-cream-100 hover:bg-blush-200 text-espresso-700 hover:text-espresso-900 rounded-full text-xs transition-colors duration-200 font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="text-xs font-semibold tracking-wider uppercase text-espresso-500 mb-3">
                Curated Recommendations
              </div>
              <div className="grid grid-cols-2 gap-3">
                {products.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p.id)}
                    className="flex items-center p-2.5 rounded-xl hover:bg-cream-100/80 cursor-pointer transition-colors group"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded-lg object-cover mr-3 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-espresso-900 truncate group-hover:text-rose-brown transition-colors">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-espresso-500">₹{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-espresso-500">
                  {results.length} Products Found
                </span>
                <button
                  onClick={handleSearchSubmit}
                  className="text-xs text-rose-brown hover:underline font-semibold flex items-center"
                >
                  View all results <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="space-y-3">
                {results.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectProduct(item.id)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-cream-100 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center space-x-3.5 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg shrink-0 border border-blush-200"
                      />
                      <div className="overflow-hidden">
                        <span className="text-[10px] uppercase tracking-wider text-espresso-500 font-semibold">
                          {item.brand}
                        </span>
                        <h4 className="text-sm font-medium text-espresso-900 group-hover:text-rose-brown transition-colors truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs mt-0.5">
                          <span className="font-semibold text-espresso-900">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-espresso-400 line-through">₹{item.originalPrice}</span>
                          )}
                          <span className="text-[10px] text-rose-600 font-medium">({item.discount}% off)</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-espresso-400 group-hover:text-rose-brown group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-blush-100 flex items-center justify-center text-espresso-500 mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg text-espresso-900 mb-1">No beauty matches found</h4>
              <p className="text-xs text-espresso-500 max-w-xs mx-auto mb-4">
                We couldn't find any products matching "{query}". Check spelling or explore our bestsellers.
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  navigate('/shop');
                  onClose();
                }}
                className="btn-outline-blush text-xs"
              >
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
