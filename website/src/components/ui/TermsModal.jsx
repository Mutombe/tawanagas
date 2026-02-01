import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { X, FileText, AlertTriangle, Truck, CreditCard, Scale, HelpCircle } from 'lucide-react';
import { ModalContext } from '../../App';

const termsSections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    content: `By accessing or using Tawana Gas Refill & Exchange services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
  },
  {
    icon: Truck,
    title: 'Delivery Policy',
    content: `We offer free delivery within the Pretoria metropolitan area. Delivery times are estimates only and may vary depending on traffic, weather conditions, and order volume. We aim to deliver within 2-4 hours of order confirmation for in-stock items.`
  },
  {
    icon: AlertTriangle,
    title: 'Safety Requirements',
    content: `Customers must ensure proper storage and handling of LPG cylinders. Cylinders must be stored in a well-ventilated area, away from heat sources. We reserve the right to refuse service if safety requirements are not met.`
  },
  {
    icon: CreditCard,
    title: 'Payment Terms',
    content: `Payment is due at the time of delivery or pickup. We accept cash, card payments, and electronic transfers. All prices are inclusive of VAT unless otherwise stated. Prices are subject to change without notice.`
  },
  {
    icon: Scale,
    title: 'Liability',
    content: `Tawana Gas Refill & Exchange shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our liability is limited to the purchase price of the products.`
  },
  {
    icon: HelpCircle,
    title: 'Dispute Resolution',
    content: `Any disputes arising from these terms shall be resolved through negotiation in good faith. If resolution cannot be reached, disputes will be subject to the jurisdiction of South African courts.`
  },
];

export default function TermsModal() {
  const { setShowTerms } = useContext(ModalContext);

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
        onClick={() => setShowTerms(false)}
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
              <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20">
                <FileText className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">Terms of Service</h2>
                <p className="text-sm text-white/60">Last updated: January 2025</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowTerms(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white/60" />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 overflow-y-auto max-h-[calc(85vh-100px)]">
          {/* Intro */}
          <div className="mb-8 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
            <p className="text-white/80 leading-relaxed">
              Welcome to Tawana Gas Refill & Exchange. These Terms of Service govern your use of our products and services. Please read them carefully before using our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {termsSections.map((section, index) => (
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

          {/* Cylinder Exchange Terms */}
          <div className="mt-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-display font-semibold text-white mb-2">Cylinder Exchange Policy</h4>
            <ul className="text-white/70 text-sm space-y-2 list-disc list-inside">
              <li>Cylinders must be in good condition for exchange</li>
              <li>Damaged or expired cylinders may incur additional charges</li>
              <li>Deposits may be required for new cylinder purchases</li>
              <li>Exchange is subject to availability of matching cylinder sizes</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowTerms(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
            >
              I Accept These Terms
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
