import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Sparkles, 
  LogOut, 
  Package, 
  CheckCircle, 
  Clock, 
  Edit3,
  Award
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';

const ProfilePage = () => {
  const { user, orders, logout, updateProfile } = useAuth();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('orders'); // orders, profile, addresses
  const [isEditing, setIsEditing] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || ''
  });
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!user) {
    return (
      <div className="bg-ivory min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-cream-50 p-10 rounded-3xl border border-blush-200 text-center shadow-soft">
          <User className="w-12 h-12 text-espresso-400 mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold text-espresso-950 mb-2">Sign In Required</h2>
          <p className="text-xs text-espresso-600 mb-6">
            Please log in or register to access your order history, VIP points, and saved addresses.
          </p>
          <div className="flex gap-3">
            <Link to="/login" className="flex-1 btn-primary py-3 rounded-xl">SIGN IN</Link>
            <Link to="/register" className="flex-1 btn-secondary py-3 rounded-xl">REGISTER</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header Hero */}
        <div className="bg-gradient-to-r from-cream-100 via-blush-100 to-cream-100 p-8 sm:p-10 rounded-3xl border border-blush-200 shadow-soft mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-ivory shadow-card"
              />
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-espresso-900 text-blush-300 text-[10px] font-bold tracking-widest uppercase mb-1.5">
                  <Award className="w-3 h-3 text-rose-gold" />
                  <span>{user.memberTier || 'Glow VIP Rouge'}</span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                  {user.name}
                </h1>
                <p className="text-xs text-espresso-600 mt-0.5">{user.email} • {user.phone}</p>
              </div>
            </div>

            {/* Points & Stats Card */}
            <div className="flex gap-4">
              <div className="bg-ivory/80 backdrop-blur-sm p-4 rounded-2xl border border-blush-200 text-center min-w-[110px]">
                <span className="block font-serif text-2xl font-bold text-rose-brown">{user.points || 1250}</span>
                <span className="text-[10px] uppercase font-semibold text-espresso-500">Glam Points</span>
              </div>
              <div className="bg-ivory/80 backdrop-blur-sm p-4 rounded-2xl border border-blush-200 text-center min-w-[110px]">
                <span className="block font-serif text-2xl font-bold text-espresso-950">{orders.length}</span>
                <span className="text-[10px] uppercase font-semibold text-espresso-500">Orders</span>
              </div>
              <Link to="/wishlist" className="bg-ivory/80 backdrop-blur-sm p-4 rounded-2xl border border-blush-200 text-center min-w-[110px] hover:border-rose-brown transition-colors">
                <span className="block font-serif text-2xl font-bold text-espresso-950">{wishlistCount}</span>
                <span className="text-[10px] uppercase font-semibold text-espresso-500">Wishlist</span>
              </Link>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeTab === 'orders' ? 'bg-espresso-900 text-ivory' : 'bg-cream-50 text-espresso-800 hover:bg-blush-100'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Order History</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeTab === 'profile' ? 'bg-espresso-900 text-ivory' : 'bg-cream-50 text-espresso-800 hover:bg-blush-100'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Account Details</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeTab === 'addresses' ? 'bg-espresso-900 text-ivory' : 'bg-cream-50 text-espresso-800 hover:bg-blush-100'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Saved Addresses</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase text-red-600 hover:bg-red-50 transition-colors pt-4"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Right Main Tab Area */}
          <div className="lg:col-span-9">
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-serif text-xl font-bold text-espresso-950 pb-2 border-b border-blush-200">
                  Your Recent Orders
                </h2>

                {orders.length === 0 ? (
                  <div className="bg-cream-50 p-10 rounded-2xl text-center border border-blush-200">
                    <p className="text-xs text-espresso-600 mb-4">You have not placed any orders yet.</p>
                    <Link to="/shop" className="btn-primary text-xs">Start Shopping</Link>
                  </div>
                ) : (
                  orders.map((ord) => (
                    <div
                      key={ord.id}
                      className="bg-cream-50/70 p-6 rounded-2xl border border-blush-200 shadow-soft space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blush-200 text-xs gap-2">
                        <div>
                          <span className="font-semibold text-espresso-900">Order #{ord.id}</span>
                          <span className="text-espresso-500 ml-2">Placed on {ord.date}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full text-[11px] flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                            {ord.status || 'Confirmed'}
                          </span>
                          <span className="font-bold text-espresso-950">₹{ord.total}</span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="space-y-3">
                        {ord.items?.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-xs">
                            {item.image && (
                              <img src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-blush-200" />
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-espresso-900">{item.name}</h4>
                              {item.shade && <p className="text-espresso-500 text-[11px]">Shade: {item.shade}</p>}
                            </div>
                            <span className="text-espresso-600">Qty: {item.quantity}</span>
                            <span className="font-bold text-espresso-900">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-cream-50/70 p-8 rounded-3xl border border-blush-200 shadow-soft animate-fade-in space-y-6">
                <div className="flex justify-between items-center pb-3 border-b border-blush-200">
                  <h2 className="font-serif text-xl font-bold text-espresso-950">
                    Account Details
                  </h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-xs text-rose-brown font-semibold hover:underline flex items-center"
                  >
                    <Edit3 className="w-3.5 h-3.5 mr-1" />
                    {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                  </button>
                </div>

                {saveSuccess && (
                  <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl border border-emerald-200">
                    Profile updated successfully! ✨
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      disabled={!isEditing}
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 disabled:opacity-75 focus:outline-none focus:border-rose-brown"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      disabled={!isEditing}
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 disabled:opacity-75 focus:outline-none focus:border-rose-brown"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      disabled={!isEditing}
                      value={profileForm.phone}
                      onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 disabled:opacity-75 focus:outline-none focus:border-rose-brown"
                    />
                  </div>

                  {isEditing && (
                    <button type="submit" className="btn-primary py-3 px-8 rounded-xl text-xs">
                      SAVE CHANGES
                    </button>
                  )}
                </form>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-serif text-xl font-bold text-espresso-950 pb-2 border-b border-blush-200">
                  Saved Delivery Addresses
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-cream-50 p-6 rounded-2xl border-2 border-rose-brown/60 space-y-2 relative">
                    <span className="absolute top-4 right-4 text-[10px] bg-rose-brown text-ivory px-2 py-0.5 rounded-full font-bold uppercase">
                      Default
                    </span>
                    <h3 className="font-serif text-sm font-bold text-espresso-950">Primary Residence</h3>
                    <p className="text-xs text-espresso-700 font-medium">Deepthi Rao</p>
                    <p className="text-xs text-espresso-600 leading-relaxed">
                      Flat 402, Magnolia Residency, Bandra West<br />
                      Mumbai, Maharashtra - 400050
                    </p>
                    <p className="text-xs text-espresso-600">Mobile: +91 98765 43210</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
