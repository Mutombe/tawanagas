import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Cookie, X, Shield, Check } from 'lucide-react';
import { ModalContext } from '../../App';

export default function CookieConsent() {
  const { acceptCookies, setShowPrivacy, setShowCookies } = useContext(ModalContext);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-dark rounded-2xl p-6 shadow-2xl shadow-black/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20">
                <Cookie className="w-8 h-8 text-orange-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                We Value Your Privacy
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. 
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-orange-400 hover:text-orange-300 underline underline-offset-2 ml-1"
                >
                  Learn more
                </button>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCookies(false)}
                className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Decline
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={acceptCookies}
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-shadow text-sm"
              >
                <Check className="w-4 h-4" />
                Accept All
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
