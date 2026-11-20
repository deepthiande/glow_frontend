import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import BestSellersSection from '../components/home/BestSellersSection';
import PromotionalBanner from '../components/home/PromotionalBanner';
import NewArrivalsSection from '../components/home/NewArrivalsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CustomerReviews from '../components/home/CustomerReviews';
import Newsletter from '../components/home/Newsletter';
import QuickViewModal from '../components/shop/QuickViewModal';

const HomePage = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroSection />

      {/* Shop by Category */}
      <CategorySection />

      {/* Best Sellers */}
      <BestSellersSection onQuickView={handleOpenQuickView} />

      {/* Promotional Editorial Banner */}
      <PromotionalBanner />

      {/* New Arrivals */}
      <NewArrivalsSection onQuickView={handleOpenQuickView} />

      {/* Brand Pillars */}
      <WhyChooseUs />

      {/* Customer Reviews & Testimonials */}
      <CustomerReviews />

      {/* Newsletter */}
      <Newsletter />

      {/* Quick View Interactive Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default HomePage;
