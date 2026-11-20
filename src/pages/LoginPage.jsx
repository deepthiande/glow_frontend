import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sparkles, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('deepthi.rao@example.com');
  const [password, setPassword] = useState('glam1234');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from?.pathname || '/profile';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ivory min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-cream-50/80 p-8 sm:p-10 rounded-3xl border border-blush-200 shadow-card animate-fade-in">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blush-100 text-rose-brown text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Welcome Back</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-espresso-950">
            Sign In to GLOW & GLAM
          </h1>
          <p className="text-xs text-espresso-600 mt-2">
            Access your orders, beauty points, and curated wishlist.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full pl-10 pr-4 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown shadow-soft"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-rose-brown hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown shadow-soft"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-espresso-400 hover:text-espresso-700"
                aria-label="Toggle password"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3.5 rounded-xl flex items-center justify-center space-x-2 mt-4 shadow-elevated"
          >
            <span>{loading ? 'SIGNING IN...' : 'SIGN IN'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-blush-200 text-center text-xs text-espresso-600">
          <span>New to GLOW & GLAM? </span>
          <Link to="/register" className="font-semibold text-rose-brown hover:underline">
            Create an Account
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
