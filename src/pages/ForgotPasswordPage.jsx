import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSent(true);
    }
  };

  return (
    <div className="bg-ivory min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-cream-50/80 p-8 sm:p-10 rounded-3xl border border-blush-200 shadow-card text-center animate-fade-in">
        
        <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center text-rose-brown mx-auto mb-4">
          <Mail className="w-8 h-8" />
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mb-2">
          Reset Your Password
        </h1>
        <p className="text-xs text-espresso-600 mb-6">
          Enter your registered email address and we’ll send you password recovery instructions.
        </p>

        {isSent ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl mb-6 text-xs text-left space-y-2">
            <div className="flex items-center font-bold text-sm">
              <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
              Recovery Link Dispatched
            </div>
            <p>
              We’ve dispatched password reset link to <strong>{email}</strong>. Please check your spam folder if it doesn't appear in 2 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown"
            />
            <button type="submit" className="w-full btn-primary py-3.5 rounded-xl">
              SEND RECOVERY LINK
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-blush-200">
          <Link to="/login" className="text-xs text-rose-brown font-semibold hover:underline inline-flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back to Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;
