import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('glow_glam_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCoupon, setActiveCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Available coupons
  const VALID_COUPONS = {
    'GLOW10': { discount: 0.10, label: '10% OFF on all orders' },
    'FIRSTGLAM': { discount: 0.15, label: '15% OFF for new beauty lovers' },
    'BEAUTY20': { discount: 0.20, label: '20% OFF Special Glam edit' }
  };

  useEffect(() => {
    try {
      localStorage.setItem('glow_glam_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product, shade = null, quantity = 1) => {
    const selectedShade = shade || (product.shades && product.shades[0]) || null;
    const cartItemId = `${product.id}-${selectedShade ? selectedShade.name : 'default'}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            cartItemId,
            product,
            shade: selectedShade,
            quantity,
            price: product.price
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart ✨`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setActiveCoupon(null);
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (VALID_COUPONS[cleanCode]) {
      setActiveCoupon({
        code: cleanCode,
        discountRate: VALID_COUPONS[cleanCode].discount,
        label: VALID_COUPONS[cleanCode].label
      });
      setCouponError('');
      showToast(`Coupon "${cleanCode}" applied successfully! 🎁`);
      return true;
    } else {
      setCouponError('Invalid coupon code. Try GLOW10, FIRSTGLAM, or BEAUTY20.');
      return false;
    }
  };

  const removeCoupon = () => {
    setActiveCoupon(null);
    setCouponError('');
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Calculations
  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountAmount = activeCoupon
    ? Math.round(cartSubtotal * activeCoupon.discountRate)
    : 0;

  // Free shipping on orders above ₹999
  const shippingAmount = cartSubtotal === 0 || cartSubtotal >= 999 ? 0 : 99;

  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingAmount);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        cartSubtotal,
        discountAmount,
        shippingAmount,
        cartTotal,
        cartCount,
        activeCoupon,
        applyCoupon,
        removeCoupon,
        couponError,
        toastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
