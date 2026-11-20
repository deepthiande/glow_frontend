import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  X, 
  SlidersHorizontal, 
  ChevronDown, 
  Star, 
  Search, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import QuickViewModal from '../components/shop/QuickViewModal';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query params
  const initialCategory = searchParams.get('category') || 'all';
  const initialFilter = searchParams.get('filter') || 'all';
  const initialSearch = searchParams.get('search') || '';

  // Local filter states
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState(5000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState(initialFilter === 'bestsellers' ? 'bestseller' : initialFilter === 'new' ? 'newest' : 'featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync state if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);

    const fil = searchParams.get('filter');
    if (fil === 'bestsellers') setSortBy('bestseller');
    if (fil === 'new') setSortBy('newest');

    const srch = searchParams.get('search');
    if (srch !== null) setSearchQuery(srch);
  }, [searchParams]);

  // Unique Brands
  const allBrands = useMemo(() => {
    const brandsSet = new Set(products.map((p) => p.brand));
    return ['all', ...Array.from(brandsSet)];
  }, []);

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category
        if (selectedCategory !== 'all' && p.categorySlug.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
        // Brand
        if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
          return false;
        }
        // Price
        if (p.price > priceRange) {
          return false;
        }
        // Rating
        if (selectedRating > 0 && p.rating < selectedRating) {
          return false;
        }
        // Search
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matches =
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.shortDescription && p.shortDescription.toLowerCase().includes(q));
          if (!matches) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low-high') return a.price - b.price;
        if (sortBy === 'price-high-low') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
        return 0; // featured default
      });
  }, [selectedCategory, selectedBrand, priceRange, selectedRating, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange(5000);
    setSelectedRating(0);
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedBrand !== 'all' || 
    priceRange < 5000 || 
    selectedRating > 0 || 
    searchQuery.trim() !== '';

  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner / Breadcrumbs */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-espresso-500 uppercase tracking-widest mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-rose-brown font-semibold">Shop Collection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            The Beauty Boutique
          </h1>
          <p className="mt-2 text-sm sm:text-base text-espresso-600 font-light max-w-2xl">
            Explore {products.length} dermatologist-tested, high-performance cosmetics engineered for your everyday glamour.
          </p>
        </div>

        {/* Top Control Bar: Search, Count, Mobile Filter Trigger, Sort Dropdown */}
        <div className="bg-cream-50/80 p-4 rounded-2xl border border-blush-200/80 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-soft">
          
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, brand, or formula..."
              className="w-full pl-10 pr-9 py-2 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-rose-brown"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso-400 hover:text-espresso-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Products count */}
            <span className="text-xs text-espresso-500 font-medium whitespace-nowrap">
              Showing <strong className="text-espresso-900">{filteredProducts.length}</strong> of {products.length}
            </span>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center space-x-1.5 px-3.5 py-2 bg-ivory border border-blush-300 rounded-xl text-xs font-semibold text-espresso-800"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-espresso-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-ivory border border-blush-300 rounded-xl px-3 py-2 text-xs font-medium text-espresso-900 focus:outline-none focus:border-rose-brown cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="bestseller">Best Sellers</option>
                <option value="newest">New Arrivals</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Pill Bar */}
        {hasActiveFilters && (
          <div className="flex items-center flex-wrap gap-2 mb-6">
            <span className="text-xs text-espresso-500 font-medium mr-1">Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center text-xs bg-blush-100 text-espresso-800 px-3 py-1 rounded-full border border-blush-200">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="ml-1.5 text-espresso-500 hover:text-espresso-900">×</button>
              </span>
            )}
            {selectedBrand !== 'all' && (
              <span className="inline-flex items-center text-xs bg-blush-100 text-espresso-800 px-3 py-1 rounded-full border border-blush-200">
                Brand: {selectedBrand}
                <button onClick={() => setSelectedBrand('all')} className="ml-1.5 text-espresso-500 hover:text-espresso-900">×</button>
              </span>
            )}
            {priceRange < 5000 && (
              <span className="inline-flex items-center text-xs bg-blush-100 text-espresso-800 px-3 py-1 rounded-full border border-blush-200">
                Max ₹{priceRange}
                <button onClick={() => setPriceRange(5000)} className="ml-1.5 text-espresso-500 hover:text-espresso-900">×</button>
              </span>
            )}
            {selectedRating > 0 && (
              <span className="inline-flex items-center text-xs bg-blush-100 text-espresso-800 px-3 py-1 rounded-full border border-blush-200">
                ★ {selectedRating}+
                <button onClick={() => setSelectedRating(0)} className="ml-1.5 text-espresso-500 hover:text-espresso-900">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center text-xs bg-blush-100 text-espresso-800 px-3 py-1 rounded-full border border-blush-200">
                "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="ml-1.5 text-espresso-500 hover:text-espresso-900">×</button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-xs text-rose-brown hover:underline font-semibold ml-2 flex items-center"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset All
            </button>
          </div>
        )}

        {/* Main Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block lg:col-span-1 space-y-8 pr-4">
            
            {/* Category Filter */}
            <div className="bg-cream-50/70 p-5 rounded-2xl border border-blush-200/80">
              <h3 className="font-serif text-sm font-bold text-espresso-950 uppercase tracking-wider mb-4 pb-2 border-b border-blush-200">
                Categories
              </h3>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex justify-between items-center ${
                    selectedCategory === 'all'
                      ? 'bg-espresso-900 text-ivory font-semibold'
                      : 'text-espresso-700 hover:bg-blush-100'
                  }`}
                >
                  <span>All Makeup Products</span>
                  <span className="text-[10px] opacity-75">{products.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = products.filter((p) => p.categorySlug.toLowerCase() === cat.slug.toLowerCase()).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex justify-between items-center ${
                        selectedCategory.toLowerCase() === cat.slug.toLowerCase()
                          ? 'bg-espresso-900 text-ivory font-semibold'
                          : 'text-espresso-700 hover:bg-blush-100'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-75">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-cream-50/70 p-5 rounded-2xl border border-blush-200/80">
              <h3 className="font-serif text-sm font-bold text-espresso-950 uppercase tracking-wider mb-4 pb-2 border-b border-blush-200">
                Beauty Brand
              </h3>
              <div className="space-y-1.5">
                {allBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex justify-between items-center ${
                      selectedBrand === brand
                        ? 'bg-espresso-900 text-ivory font-semibold'
                        : 'text-espresso-700 hover:bg-blush-100'
                    }`}
                  >
                    <span>{brand === 'all' ? 'All Luxury Brands' : brand}</span>
                    {brand !== 'all' && (
                      <span className="text-[10px] opacity-75">
                        {products.filter((p) => p.brand === brand).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-cream-50/70 p-5 rounded-2xl border border-blush-200/80">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-blush-200">
                <h3 className="font-serif text-sm font-bold text-espresso-950 uppercase tracking-wider">
                  Price Limit
                </h3>
                <span className="text-xs font-bold text-rose-brown">Up to ₹{priceRange}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-rose-brown cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-espresso-400 mt-2">
                <span>₹500</span>
                <span>₹2,500</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* Customer Rating Filter */}
            <div className="bg-cream-50/70 p-5 rounded-2xl border border-blush-200/80">
              <h3 className="font-serif text-sm font-bold text-espresso-950 uppercase tracking-wider mb-4 pb-2 border-b border-blush-200">
                Minimum Rating
              </h3>
              <div className="space-y-2">
                {[4.5, 4.0, 3.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setSelectedRating(selectedRating === rate ? 0 : rate)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                      selectedRating === rate ? 'bg-blush-200 text-espresso-950 font-bold' : 'hover:bg-blush-100 text-espresso-700'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{rate} Stars & Above</span>
                    </div>
                    <span className="text-[10px] text-espresso-400">
                      ({products.filter((p) => p.rating >= rate).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Products Grid Area */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-cream-50/60 rounded-3xl p-12 text-center border border-blush-200">
                <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center text-espresso-400 mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-espresso-950 mb-2">
                  No matching formulas found
                </h3>
                <p className="text-xs text-espresso-600 max-w-md mx-auto mb-6 leading-relaxed">
                  We couldn't find any makeup matching your selected criteria. Try easing the price limit or resetting your category filters.
                </p>
                <button onClick={resetFilters} className="btn-primary">
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>

        </div>
      </div>

      {/* Mobile Filters Slide-Out Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-espresso-950/50 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-ivory h-full shadow-2xl flex flex-col z-10 border-r border-blush-200 overflow-y-auto p-6">
            <div className="flex items-center justify-between pb-4 border-b border-blush-200 mb-6">
              <h2 className="font-serif text-lg font-bold text-espresso-950">Filters</h2>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-espresso-500 hover:text-espresso-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="mb-6">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-espresso-950 mb-3">
                Category
              </h4>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-xs ${
                    selectedCategory === 'all' ? 'bg-espresso-900 text-ivory font-bold' : 'text-espresso-700'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.slug)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-xs ${
                      selectedCategory === c.slug ? 'bg-espresso-900 text-ivory font-bold' : 'text-espresso-700'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Price */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-espresso-950">
                  Max Price
                </h4>
                <span className="text-xs font-bold text-rose-brown">₹{priceRange}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-rose-brown"
              />
            </div>

            {/* CTAs */}
            <div className="mt-auto pt-6 border-t border-blush-200 flex space-x-3">
              <button
                onClick={() => {
                  resetFilters();
                  setMobileFilterOpen(false);
                }}
                className="flex-1 py-3 text-xs font-bold uppercase tracking-wider border border-espresso-800 rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 btn-primary py-3 rounded-xl"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

export default ShopPage;
