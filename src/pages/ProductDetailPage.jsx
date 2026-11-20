import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles, 
  Check, 
  ArrowRight,
  Share2,
  ChevronRight
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/shop/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Find product
  const product = products.find((p) => p.id === id) || products[0];

  const [activeImage, setActiveImage] = useState(product?.image);
  const [selectedShade, setSelectedShade] = useState(
    product?.shades && product.shades.length > 0 ? product.shades[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // details, ingredients, howToUse, reviews
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // New review state
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewName, setReviewName] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [submittedReview, setSubmittedReview] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedShade(product.shades && product.shades.length > 0 ? product.shades[0] : null);
      setQuantity(1);
      setPincodeStatus(null);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-serif">Product Not Found</h2>
        <Link to="/shop" className="btn-primary mt-4">Return to Shop</Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedShade, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedShade, quantity);
    navigate('/checkout');
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6 && /^\d+$/.test(pincode.trim())) {
      setPincodeStatus({
        valid: true,
        message: `Express Delivery available to ${pincode} within 48 Hours!`
      });
    } else {
      setPincodeStatus({
        valid: false,
        message: 'Please enter a valid 6-digit Indian PIN code.'
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewName || !reviewComment) return;
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setReviewName('');
      setReviewComment('');
    }, 4000);
  };

  // Related products
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-ivory min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail */}
        <nav className="flex items-center space-x-2 text-xs text-espresso-500 uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-rose-brown">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-rose-brown">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.categorySlug}`} className="hover:text-rose-brown">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-espresso-950 font-semibold truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnail Strip */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
              {product.images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImage === img ? 'border-rose-brown shadow-sm scale-105' : 'border-blush-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Featured Image */}
            <div className="relative flex-1 aspect-square rounded-3xl overflow-hidden bg-cream-100 border border-blush-200/80 shadow-soft group">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                {product.isBestSeller && (
                  <span className="bg-espresso-950 text-ivory text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Best Seller
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-rose-brown text-ivory text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Wishlist and Share Floating Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-full transition-all duration-200 shadow-card ${
                    isWishlisted ? 'bg-rose-600 text-ivory' : 'bg-ivory/90 backdrop-blur-sm text-espresso-700 hover:text-rose-600 hover:bg-ivory'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3 rounded-full bg-ivory/90 backdrop-blur-sm text-espresso-700 hover:text-espresso-950 hover:bg-ivory transition-all shadow-card relative"
                  title="Share link"
                >
                  <Share2 className="w-5 h-5" />
                  {copiedLink && (
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-espresso-900 text-ivory text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Buying Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-rose-brown">
                {product.brand}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-1 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-espresso-900">{product.rating}</span>
                <span className="text-xs text-espresso-500">({product.reviewsCount} reviews)</span>
                <span className="text-blush-400">|</span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1" /> In Stock & Ready to Ship
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-cream-50 p-4 rounded-2xl border border-blush-200/80 flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-espresso-950">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-base text-espresso-400 line-through">₹{product.originalPrice}</span>
              )}
              {product.discount > 0 && (
                <span className="text-xs bg-rose-brown text-ivory font-bold px-2.5 py-0.5 rounded-full">
                  SAVE {product.discount}%
                </span>
              )}
              <span className="text-[11px] text-espresso-500 ml-auto">Inclusive of all taxes</span>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-espresso-600 leading-relaxed font-light">
              {product.shortDescription || product.description}
            </p>

            {/* Shade Selection */}
            {product.shades && product.shades.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold uppercase tracking-wider text-espresso-900">
                    Shade: <span className="text-rose-brown">{selectedShade?.name}</span>
                  </span>
                  <span className="text-[11px] text-espresso-500">{product.shades.length} Shades Available</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.shades.map((shade) => (
                    <button
                      key={shade.name}
                      onClick={() => setSelectedShade(shade)}
                      className={`group flex items-center space-x-2 px-3 py-1.5 rounded-full border-2 transition-all ${
                        selectedShade?.name === shade.name
                          ? 'border-rose-brown bg-blush-50 shadow-sm scale-105'
                          : 'border-blush-200 hover:border-blush-400 bg-ivory'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: shade.hex }}
                      />
                      <span className="text-xs font-medium text-espresso-800">{shade.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-espresso-700">
                Quantity
              </span>
              <div className="flex items-center border border-blush-300 rounded-xl bg-ivory">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2 text-espresso-700 hover:text-espresso-950 font-bold"
                  aria-label="Decrease"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold text-espresso-900 min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2 text-espresso-700 hover:text-espresso-950 font-bold"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Bag & Buy Now */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 shadow-elevated"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG • ₹{product.price * quantity}</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 btn-secondary py-4 rounded-xl flex items-center justify-center space-x-2 bg-cream-100 hover:bg-espresso-950 hover:text-ivory"
                >
                  <span>BUY NOW</span>
                </button>
              </div>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="bg-cream-50/80 p-4 rounded-2xl border border-blush-200/80 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-espresso-800">
                <Truck className="w-4 h-4 text-rose-brown" />
                <span>Check Delivery & Cash on Delivery</span>
              </div>
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode (e.g. 400050)"
                  className="flex-1 px-3 py-2 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-espresso-900 text-ivory text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-rose-brown transition-colors"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p className={`text-xs mt-1.5 font-medium ${pincodeStatus.valid ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {pincodeStatus.message}
                </p>
              )}
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-blush-200 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-rose-brown mb-1" />
                <span className="text-[11px] font-medium text-espresso-700">100% Genuine</span>
              </div>
              <div className="flex flex-col items-center">
                <RefreshCw className="w-4 h-4 text-rose-brown mb-1" />
                <span className="text-[11px] font-medium text-espresso-700">14-Day Shade Swap</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-4 h-4 text-rose-brown mb-1" />
                <span className="text-[11px] font-medium text-espresso-700">Clean Formula</span>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Description, Ingredients, How to Use, Reviews */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-blush-200">
          
          {/* Tab Navigation */}
          <div className="flex justify-center border-b border-blush-200 gap-6 sm:gap-10 pb-4 overflow-x-auto">
            {[
              { id: 'details', label: 'Product Details' },
              { id: 'ingredients', label: 'Clean Ingredients' },
              { id: 'howToUse', label: 'How to Apply' },
              { id: 'reviews', label: `Reviews (${product.reviewsCount})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-serif text-sm sm:text-base tracking-wider uppercase pb-2 transition-all relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-espresso-950 font-bold after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-rose-brown'
                    : 'text-espresso-500 hover:text-espresso-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-8 max-w-4xl mx-auto">
            {activeTab === 'details' && (
              <div className="space-y-6 text-sm text-espresso-700 leading-relaxed animate-fade-in">
                <p className="text-base font-light">{product.description}</p>
                {product.benefits && (
                  <div>
                    <h3 className="font-serif text-base font-bold text-espresso-950 mb-3">
                      Formulation Highlights:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.benefits.map((b, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-brown" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="text-xs text-espresso-500 pt-4 border-t border-blush-200">
                  <span>SKU: {product.sku}</span> | <span>Formulated in Paris & Milan</span>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-4 text-sm text-espresso-700 leading-relaxed animate-fade-in">
                <div className="bg-cream-50 p-6 rounded-2xl border border-blush-200">
                  <h4 className="font-serif text-base font-bold text-espresso-950 mb-2">
                    Key Active Ingredients:
                  </h4>
                  <p className="text-xs leading-relaxed font-mono text-espresso-600">
                    {product.ingredients}
                  </p>
                </div>
                <p className="text-xs text-espresso-500 italic">
                  Note: Formulated without parabens, phthalates, synthetic sulfates, or mineral oil. 100% vegan & cruelty-free.
                </p>
              </div>
            )}

            {activeTab === 'howToUse' && (
              <div className="space-y-4 text-sm text-espresso-700 leading-relaxed animate-fade-in">
                <div className="bg-cream-50 p-6 rounded-2xl border border-blush-200">
                  <h4 className="font-serif text-base font-bold text-espresso-950 mb-2">
                    MUA Pro-Tips & Application:
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed font-light">
                    {product.howToUse}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8 animate-fade-in">
                {/* Submit New Review Form */}
                <div className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-blush-200">
                  <h4 className="font-serif text-lg font-bold text-espresso-950 mb-4">
                    Write a Review
                  </h4>
                  {submittedReview ? (
                    <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-medium">
                      Thank you! Your verified review has been published to the community. ✨
                    </div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                          Your Rating
                        </label>
                        <div className="flex gap-1 text-amber-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setReviewRating(star)}
                              className="p-1"
                            >
                              <Star className={`w-5 h-5 ${star <= reviewRating ? 'fill-current' : 'text-espresso-300'}`} />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={reviewName}
                            onChange={(e) => setReviewName(e.target.value)}
                            placeholder="e.g. Radhika M."
                            className="w-full px-3.5 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                          Your Honest Review
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          placeholder="Tell us what you loved about the formula, wear time, and texture..."
                          className="w-full px-3.5 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
                        />
                      </div>

                      <button type="submit" className="btn-primary py-3">
                        SUBMIT REVIEW
                      </button>
                    </form>
                  )}
                </div>

                {/* Pre-existing Reviews list */}
                <div className="space-y-4">
                  <div className="p-5 bg-ivory rounded-2xl border border-blush-200">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-espresso-400">2 days ago</span>
                    </div>
                    <h5 className="font-serif text-sm font-bold text-espresso-900">Simply Ethereal Finish!</h5>
                    <p className="text-xs text-espresso-600 mt-1">
                      Blends like magic and doesn't cling to dry patches at all. Truly worth every rupee!
                    </p>
                    <span className="text-[11px] text-rose-brown font-semibold block mt-2">— Sneha K., Verified Buyer</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-blush-200">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-rose-brown">
                Complete Your Beauty Ritual
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mt-1">
                You May Also Love
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetailPage;
