import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  CheckCircle, 
  Sparkles, 
  ArrowLeft, 
  ShoppingBag,
  Lock,
  Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutPage = () => {
  const { cartItems, cartSubtotal, discountAmount, shippingAmount, cartTotal, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  const navigate = useNavigate();

  // Form fields
  const [formData, setFormData] = useState({
    fullName: user?.name || 'Deepthi Rao',
    email: user?.email || 'deepthi.rao@example.com',
    phone: user?.phone || '9876543210',
    address: 'Flat 402, Magnolia Residency, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    deliveryMethod: 'express', // express (free over 999), vip (199)
    paymentMethod: 'upi', // upi, card, cod
    upiId: 'deepthi@okhdfcbank',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvv: '•••'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);
  const [errors, setErrors] = useState({});

  if (cartItems.length === 0 && !orderConfirmed) {
    return (
      <div className="bg-ivory min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-12 h-12 mx-auto text-espresso-400 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-espresso-950 mb-2">Your Bag is Empty</h2>
          <p className="text-xs text-espresso-600 mb-6">Add beauty items to your shopping bag before proceeding to checkout.</p>
          <Link to="/shop" className="btn-primary">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit mobile number required';
    if (!formData.address.trim()) errs.address = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.pincode.trim() || formData.pincode.length !== 6) errs.pincode = '6-digit PIN code required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const placedOrder = addOrder({
        items: cartItems.map((i) => ({
          name: i.product.name,
          shade: i.shade?.name,
          price: i.price,
          quantity: i.quantity,
          image: i.product.image
        })),
        total: cartTotal,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
        customerName: formData.fullName,
        email: formData.email,
        paymentMethod: formData.paymentMethod.toUpperCase()
      });

      clearCart();
      setIsSubmitting(false);
      setOrderConfirmed(placedOrder);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#BA7263', '#DFB0A5', '#2A221D', '#CCA45B']
        });
      } catch (err) {
        console.error(err);
      }
    }, 1200);
  };

  // Order Confirmed View
  if (orderConfirmed) {
    return (
      <div className="bg-ivory min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-cream-50 p-8 sm:p-12 rounded-3xl border border-blush-200 shadow-card text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-rose-brown">
            Thank you for shopping with GLOW & GLAM
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-2 mb-3">
            Your Glam Order is Confirmed!
          </h1>

          <p className="text-xs sm:text-sm text-espresso-600 mb-6">
            We’re carefully hand-packaging your beauty treasures. An order confirmation with invoice has been sent to <strong>{orderConfirmed.email}</strong>.
          </p>

          <div className="bg-ivory p-6 rounded-2xl border border-blush-200 text-left space-y-3 mb-8">
            <div className="flex justify-between items-center pb-3 border-b border-blush-200 text-xs">
              <span className="text-espresso-500 uppercase font-semibold">Order Reference:</span>
              <span className="font-mono font-bold text-espresso-950">{orderConfirmed.id}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-espresso-500">Order Date:</span>
              <span className="font-medium text-espresso-800">{orderConfirmed.date}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-espresso-500">Shipping To:</span>
              <span className="font-medium text-espresso-800 text-right max-w-xs">{orderConfirmed.shippingAddress}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-espresso-500">Payment:</span>
              <span className="font-medium text-espresso-800">{orderConfirmed.paymentMethod}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-blush-200 font-bold text-sm">
              <span>Total Paid:</span>
              <span className="text-rose-brown">₹{orderConfirmed.total}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile" className="btn-primary py-3.5 px-8 rounded-xl">
              VIEW IN MY ORDERS
            </Link>
            <Link to="/shop" className="btn-secondary py-3.5 px-8 rounded-xl">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-espresso-500 mb-6">
          <Link to="/cart" className="hover:text-rose-brown flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back to Bag
          </Link>
          <span>/</span>
          <span className="text-espresso-950 font-semibold uppercase tracking-wider">Secure Checkout</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mb-10">
          Checkout & Delivery
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form: Delivery & Payment Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Customer Information Section */}
            <div className="bg-cream-50/70 p-6 sm:p-8 rounded-3xl border border-blush-200 shadow-soft space-y-4">
              <h2 className="font-serif text-lg font-bold text-espresso-950 pb-2 border-b border-blush-200">
                1. Customer & Delivery Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Deepthi Rao"
                    className={`w-full px-3.5 py-2.5 bg-ivory border ${errors.fullName ? 'border-red-500' : 'border-blush-300'} rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile"
                    className={`w-full px-3.5 py-2.5 bg-ivory border ${errors.phone ? 'border-red-500' : 'border-blush-300'} rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                  Email Address (for tracking & invoice) *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="deepthi@example.com"
                  className={`w-full px-3.5 py-2.5 bg-ivory border ${errors.email ? 'border-red-500' : 'border-blush-300'} rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                  Street Address & Flat / House No. *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Flat 402, Magnolia Residency, Bandra West"
                  className={`w-full px-3.5 py-2.5 bg-ivory border ${errors.address ? 'border-red-500' : 'border-blush-300'} rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown`}
                />
                {errors.address && <p className="text-[11px] text-red-600 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
                  />
                  {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
                  />
                  {errors.state && <p className="text-[11px] text-red-600 mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
                  />
                  {errors.pincode && <p className="text-[11px] text-red-600 mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-cream-50/70 p-6 sm:p-8 rounded-3xl border border-blush-200 shadow-soft space-y-4">
              <h2 className="font-serif text-lg font-bold text-espresso-950 pb-2 border-b border-blush-200">
                2. Shipping & Delivery Speed
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`p-4 rounded-2xl border-2 flex items-start space-x-3 cursor-pointer transition-all ${
                  formData.deliveryMethod === 'express' ? 'border-rose-brown bg-blush-50' : 'border-blush-200 bg-ivory'
                }`}>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="express"
                    checked={formData.deliveryMethod === 'express'}
                    onChange={handleInputChange}
                    className="mt-1 accent-rose-brown"
                  />
                  <div>
                    <span className="block text-xs font-bold text-espresso-950">Standard Express Delivery</span>
                    <span className="text-[11px] text-espresso-500">Delivered in 2-3 business days</span>
                    <span className="block text-xs font-semibold text-rose-brown mt-1">
                      {shippingAmount === 0 ? 'FREE' : '₹99'}
                    </span>
                  </div>
                </label>

                <label className={`p-4 rounded-2xl border-2 flex items-start space-x-3 cursor-pointer transition-all ${
                  formData.deliveryMethod === 'vip' ? 'border-rose-brown bg-blush-50' : 'border-blush-200 bg-ivory'
                }`}>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="vip"
                    checked={formData.deliveryMethod === 'vip'}
                    onChange={handleInputChange}
                    className="mt-1 accent-rose-brown"
                  />
                  <div>
                    <span className="block text-xs font-bold text-espresso-950">VIP White Glove Courier</span>
                    <span className="text-[11px] text-espresso-500">Next-day guaranteed delivery</span>
                    <span className="block text-xs font-semibold text-espresso-950 mt-1">₹199</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-cream-50/70 p-6 sm:p-8 rounded-3xl border border-blush-200 shadow-soft space-y-4">
              <h2 className="font-serif text-lg font-bold text-espresso-950 pb-2 border-b border-blush-200 flex items-center justify-between">
                <span>3. Payment Method</span>
                <span className="text-xs font-normal text-espresso-500 flex items-center">
                  <Lock className="w-3.5 h-3.5 text-rose-brown mr-1" /> Mock Encrypted Gateway
                </span>
              </h2>

              <div className="space-y-3">
                {/* UPI */}
                <label className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi' ? 'border-rose-brown bg-blush-50' : 'border-blush-200 bg-ivory'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="accent-rose-brown"
                    />
                    <Smartphone className="w-5 h-5 text-rose-brown" />
                    <span className="text-xs font-bold text-espresso-950">UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Fastest
                  </span>
                </label>

                {formData.paymentMethod === 'upi' && (
                  <div className="p-4 bg-ivory rounded-xl border border-blush-200 animate-fade-in">
                    <label className="block text-[11px] font-semibold text-espresso-700 mb-1">
                      Enter UPI ID / VPA
                    </label>
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      placeholder="username@okhdfcbank"
                      className="w-full px-3 py-2 bg-cream-50 border border-blush-300 rounded-lg text-xs"
                    />
                  </div>
                )}

                {/* Card */}
                <label className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  formData.paymentMethod === 'card' ? 'border-rose-brown bg-blush-50' : 'border-blush-200 bg-ivory'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="accent-rose-brown"
                    />
                    <CreditCard className="w-5 h-5 text-rose-brown" />
                    <span className="text-xs font-bold text-espresso-950">Credit / Debit Card (Visa, Mastercard, RuPay)</span>
                  </div>
                </label>

                {formData.paymentMethod === 'card' && (
                  <div className="p-4 bg-ivory rounded-xl border border-blush-200 space-y-3 animate-fade-in">
                    <div>
                      <label className="block text-[11px] font-semibold text-espresso-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cream-50 border border-blush-300 rounded-lg text-xs font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-espresso-700 mb-1">Expiry</label>
                        <input
                          type="text"
                          name="cardExp"
                          value={formData.cardExp}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-cream-50 border border-blush-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-espresso-700 mb-1">CVV</label>
                        <input
                          type="password"
                          name="cardCvv"
                          maxLength={3}
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-cream-50 border border-blush-300 rounded-lg text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* COD */}
                <label className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod' ? 'border-rose-brown bg-blush-50' : 'border-blush-200 bg-ivory'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="accent-rose-brown"
                    />
                    <Truck className="w-5 h-5 text-rose-brown" />
                    <span className="text-xs font-bold text-espresso-950">Cash on Delivery (COD)</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Summary: Items + Price Breakdown */}
          <div className="lg:col-span-5">
            <div className="bg-cream-50/80 p-6 sm:p-8 rounded-3xl border border-blush-200 shadow-card space-y-6 sticky top-28">
              <h2 className="font-serif text-xl font-bold text-espresso-950 pb-4 border-b border-blush-200">
                Order Summary ({cartItems.length})
              </h2>

              {/* Items List */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex items-center space-x-3 text-xs">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-xl border border-blush-200 shrink-0"
                    />
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-semibold text-espresso-900 truncate">{item.product.name}</h4>
                      {item.shade && (
                        <p className="text-[11px] text-espresso-500">Shade: {item.shade.name}</p>
                      )}
                      <p className="text-espresso-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-espresso-950 shrink-0">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2.5 text-xs text-espresso-700 pt-4 border-t border-blush-200">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso-950">₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-600 font-semibold">
                    <span>Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formData.deliveryMethod === 'vip' ? '₹199' : (shippingAmount === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingAmount}`)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-espresso-950 pt-3 border-t border-blush-200">
                  <span>Total Due</span>
                  <span className="text-xl text-rose-brown">
                    ₹{cartTotal + (formData.deliveryMethod === 'vip' ? 199 : 0)}
                  </span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 text-xs font-semibold tracking-widest uppercase shadow-elevated"
              >
                {isSubmitting ? (
                  <span>AUTHORIZING BEAUTY ORDER...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>CONFIRM & PLACE ORDER</span>
                  </>
                )}
              </button>

              <div className="pt-2 text-center text-[11px] text-espresso-400 flex items-center justify-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-rose-brown" />
                <span>30-Day Money Back Guarantee & 100% Authentic</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default CheckoutPage;
