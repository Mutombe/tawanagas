import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { X, Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';
import { ModalContext } from '../../App';

const privacySections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, delivery address, and payment information.`
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: `We use the information we collect to process your orders, communicate with you about our services, send promotional communications (with your consent), and improve our services. We may also use your information to detect and prevent fraud.`
  },
  {
    icon: Lock,
    title: 'Information Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    content: `You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information below.`
  },
  {
    icon: Mail,
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at info@tawanagas.co.za or call us at +27 61 927 3855. You can also visit us at 169 Bourke Street, Pretoria, Gauteng.`
  },
];

export default function PrivacyModal() {
  const { setShowPrivacy } = useContext(ModalContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={() => setShowPrivacy(false)}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl max-h-[85vh] glass rounded-3xl overflow-hidden"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0a1628] to-transparent pb-4">
          <div className="flex items-center justify-between p-6 pb-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">Privacy Policy</h2>
                <p className="text-sm text-white/60">Last updated: January 2025</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowPrivacy(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white/60" />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 overflow-y-auto max-h-[calc(85vh-100px)]">
          {/* Intro */}
          <div className="mb-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-white/80 leading-relaxed">
              At Tawana Gas Refill & Exchange, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-orange-500/10 transition-colors">
                    <section.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowPrivacy(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
            >
              I Understand
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
