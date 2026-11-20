import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('glow_glam_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('glow_glam_orders');
      if (savedOrders) return JSON.parse(savedOrders);
      // Default demo mock order
      return [
        {
          id: 'GG-ORD-89412',
          date: '18 Nov 2026',
          status: 'Delivered',
          items: [
            {
              name: 'Velvet Petal Weightless Matte Lipstick',
              shade: 'Rose Cashmere',
              price: 1399,
              quantity: 1
            },
            {
              name: 'Dew Bloom Liquid Radiant Blush',
              shade: 'Soft Peony',
              price: 1199,
              quantity: 1
            }
          ],
          total: 2598,
          paymentMethod: 'UPI'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('glow_glam_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('glow_glam_user');
      }
    } catch (e) {
      console.error('Failed to sync user with localStorage', e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('glow_glam_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to sync orders with localStorage', e);
    }
  }, [orders]);

  const login = async (email, password) => {
    // Mock authentication with real simulation (ready for Django JWT)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const authUser = {
            id: 'usr_001',
            name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            email,
            phone: '+91 98765 43210',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
            memberTier: 'Glow VIP Rouge',
            points: 1250,
            addresses: [
              {
                id: 'addr_1',
                type: 'Home',
                name: 'Deepthi Rao',
                addressLine: 'Flat 402, Magnolia Residency, Bandra West',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400050',
                isDefault: true
              }
            ]
          };
          setUser(authUser);
          localStorage.setItem('glow_glam_auth_token', 'mock_jwt_token_glow_glam');
          resolve({ success: true, user: authUser });
        } else {
          reject(new Error('Please enter valid email and password'));
        }
      }, 500);
    });
  };

  const register = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.name) {
          const newUser = {
            id: 'usr_' + Date.now(),
            name: userData.name,
            email: userData.email,
            phone: userData.phone || '+91 98765 00000',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
            memberTier: 'Glow Insider',
            points: 200,
            addresses: []
          };
          setUser(newUser);
          localStorage.setItem('glow_glam_auth_token', 'mock_jwt_token_glow_glam');
          resolve({ success: true, user: newUser });
        } else {
          reject(new Error('Please fill all required fields'));
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('glow_glam_auth_token');
    localStorage.removeItem('glow_glam_user');
  };

  const updateProfile = (data) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  const addOrder = (order) => {
    const newOrder = {
      id: 'GG-ORD-' + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Processing',
      ...order
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        orders,
        login,
        register,
        logout,
        updateProfile,
        addOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
