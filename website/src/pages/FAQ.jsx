import React from 'react';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronRight,
  Flame,
  Truck,
  Shield,
  CreditCard,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Package,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ============================================
   FAQ PAGE
   Vision: A comprehensive FAQ experience with
   category filtering, search, animated accordions,
   and a unique bento-style layout
   ============================================ */

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // FAQ Categories
  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'ordering', label: 'Ordering & Delivery', icon: Truck },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'general', label: 'General', icon: Info }
  ];

  // FAQ Data
  const faqData = [
    {
      id: 1,
      category: 'ordering',
      question: 'How do I place an order for gas delivery?',
      answer: 'You can place an order through multiple channels: Call or WhatsApp us at +27 61 927 3855, visit our location at 169 Bourke Street, Pretoria, or fill out the contact form on our website. We accept orders 24/7 and aim to deliver within 2-4 hours in the Pretoria area.'
    },
    {
      id: 2,
      category: 'ordering',
      question: 'What areas do you deliver to?',
      answer: 'We offer free delivery throughout the Pretoria area including Pretoria Central, Hatfield, Arcadia, Sunnyside, Brooklyn, Menlo Park, and surrounding suburbs. For areas outside our standard delivery zone, please contact us for availability and potential delivery fees.'
    },
    {
      id: 3,
      category: 'ordering',
      question: 'How long does delivery take?',
      answer: 'Our standard delivery time is 2-4 hours within Pretoria. For urgent orders, we offer express delivery that can get gas to your location within 1-2 hours. Delivery times may vary during peak periods or adverse weather conditions.'
    },
    {
      id: 4,
      category: 'ordering',
      question: 'Can I track my delivery?',
      answer: 'Yes! Once your order is confirmed, we\'ll send you updates via WhatsApp. You\'ll receive a notification when your delivery is dispatched and an ETA. Our driver will also call you when they\'re nearby.'
    },
    {
      id: 5,
      category: 'products',
      question: 'What cylinder sizes do you offer?',
      answer: 'We stock a comprehensive range of LPG cylinders to suit every need: 3kg (perfect for camping), 5kg, 7kg, 9kg (most popular for households), 14kg, 19kg, and 48kg (ideal for commercial/industrial use). All cylinders are properly certified and inspected.'
    },
    {
      id: 6,
      category: 'products',
      question: 'What is the difference between refill and exchange?',
      answer: 'With a refill, we fill your existing cylinder with LPG gas - you keep the same cylinder. With an exchange, you trade your empty cylinder for a full one from our stock. Exchange is faster and convenient, while refill is ideal if you want to keep your specific cylinder. Both options are available at competitive rates.'
    },
    {
      id: 7,
      category: 'products',
      question: 'How do I know when my gas cylinder is empty or low?',
      answer: 'Signs that your cylinder is running low include: weak flame on your stove, inconsistent heating, or the cylinder feeling lighter than usual. You can also pour warm water down the side of the cylinder - the section that feels cool still contains gas. We recommend ordering a replacement when you notice these signs to avoid running out.'
    },
    {
      id: 8,
      category: 'products',
      question: 'Can I buy a new cylinder from you?',
      answer: 'Yes, we sell brand new gas cylinders in all sizes. New cylinders come with proper certification and documentation. If you\'re a first-time buyer without an existing cylinder, purchasing a new one is your best option. Contact us for current pricing and availability.'
    },
    {
      id: 9,
      category: 'safety',
      question: 'How should I store my gas cylinder?',
      answer: 'Store your cylinder in a well-ventilated area, away from heat sources, direct sunlight, and ignition sources. Keep it upright at all times, and never store it in basements or near drains. Ensure the valve is turned off when not in use. Indoor storage should be in a room with good ventilation.'
    },
    {
      id: 10,
      category: 'safety',
      question: 'What should I do if I smell gas?',
      answer: 'If you smell gas: 1) Don\'t use any electrical switches or create sparks, 2) Turn off the cylinder valve if safe to do so, 3) Open all windows and doors for ventilation, 4) Evacuate the area immediately, 5) Call us or emergency services from outside. Never ignore a gas smell - safety is paramount.'
    },
    {
      id: 11,
      category: 'safety',
      question: 'Are your cylinders safe and certified?',
      answer: 'Absolutely. All our cylinders are SABS (South African Bureau of Standards) certified and undergo regular safety inspections. We only supply gas that meets quality standards, and our refill process follows strict safety protocols. Your safety is our top priority.'
    },
    {
      id: 12,
      category: 'safety',
      question: 'How often should I have my regulator checked?',
      answer: 'Regulators should be inspected at least once a year and replaced every 5-7 years, or sooner if you notice signs of wear, damage, or gas leakage. We offer regulator inspections and can supply new regulators and hoses when needed.'
    },
    {
      id: 13,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, EFT/bank transfers, and card payments (Visa, Mastercard). For regular customers, we also offer account options. Payment is typically required upon delivery, though pre-payment can be arranged for bulk orders.'
    },
    {
      id: 14,
      category: 'payment',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! We offer competitive pricing for bulk orders and regular customers. Restaurants, businesses, and industrial clients can benefit from our bulk pricing programs. Contact us to discuss your requirements and get a customized quote.'
    },
    {
      id: 15,
      category: 'general',
      question: 'What are your operating hours?',
      answer: 'We operate 24 hours a day, 7 days a week, including public holidays. Whether you need gas at midnight or early Sunday morning, we\'re here to serve you. Our store at 169 Bourke Street, Pretoria is always open.'
    },
    {
      id: 16,
      category: 'general',
      question: 'How can I contact you for support?',
      answer: 'You can reach us anytime via: Phone/WhatsApp: +27 61 927 3855, Email: info@tawanagas.co.za, or visit us at 169 Bourke Street, Pretoria. We typically respond to messages within minutes and aim to resolve all queries promptly.'
    },
    {
      id: 17,
      category: 'general',
      question: 'Do you serve commercial/industrial customers?',
      answer: 'Yes, we serve businesses of all sizes including restaurants, hotels, industrial facilities, and construction sites. We offer bulk deliveries, regular scheduled deliveries, and competitive commercial rates. Contact us to set up a business account.'
    },
    {
      id: 18,
      category: 'ordering',
      question: 'Is there a minimum order for free delivery?',
      answer: 'We offer free delivery within Pretoria for all standard orders - no minimum required! Whether you need a single 3kg cylinder or multiple large cylinders, delivery is on us. For areas outside our standard zone, delivery fees may apply.'
    }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroSection 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      {/* Main FAQ Section */}
      <FAQSection 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredFAQs={filteredFAQs}
        openItems={openItems}
        toggleItem={toggleItem}
        searchQuery={searchQuery}
      />
      
      {/* Still Have Questions CTA */}
      <ContactCTASection />
    </motion.div>
  );
};

/* ============================================
   HERO SECTION
   Search-focused hero with animated background
   ============================================ */
const HeroSection = ({ searchQuery, setSearchQuery }) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Question Marks */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl text-orange-500/10 font-bold select-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        >
          ?
        </motion.div>
      ))}
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500/15 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px]" />
      
      {/* Content */}
      <div className="pt-30 relative z-10 container mx-auto px-4 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Help Center</span>
          </motion.div>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Find instant answers to your questions about gas refills, deliveries, safety, and more.
          </p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <div className="relative flex items-center bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-xl">
                <Search className="w-6 h-6 text-gray-400 ml-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full px-4 py-5 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-4 px-4 py-2 rounded-xl bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
};

/* ============================================
   MAIN FAQ SECTION
   Category tabs and accordion items
   ============================================ */
const FAQSection = ({ categories, activeCategory, setActiveCategory, filteredFAQs, openItems, toggleItem, searchQuery }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </motion.div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <FAQItem 
                  faq={faq} 
                  isOpen={openItems.includes(faq.id)}
                  toggleItem={toggleItem}
                  categories={categories}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No questions found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or category filter</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                }}
                className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                View All Questions
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   FAQ ITEM COMPONENT
   Single accordion item with animation
   ============================================ */
const FAQItem = ({ faq, isOpen, toggleItem, categories }) => {
  const category = categories.find(c => c.id === faq.category);
  const CategoryIcon = category?.icon || HelpCircle;

  return (
    <div className="relative">
      {/* Glow Effect when Open */}
      {isOpen && (
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-xl" />
      )}
      
      <div className={`relative rounded-2xl bg-white/5 border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-orange-500/30' : 'border-white/10 hover:border-white/20'
      }`}>
        {/* Question Header */}
        <button
          onClick={() => toggleItem(faq.id)}
          className="w-full p-6 flex items-start gap-4 text-left"
        >
          {/* Category Icon */}
          <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors ${
            isOpen 
              ? 'bg-gradient-to-br from-orange-500 to-yellow-500' 
              : 'bg-white/10'
          }`}>
            <CategoryIcon className="w-5 h-5 text-white" />
          </div>
          
          {/* Question Text */}
          <div className="flex-1">
            <h3 className={`text-lg font-semibold transition-colors ${
              isOpen ? 'text-orange-400' : 'text-white'
            }`}>
              {faq.question}
            </h3>
            <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 block">
              {category?.label}
            </span>
          </div>
          
          {/* Toggle Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
              isOpen ? 'bg-orange-500/20' : 'bg-white/10'
            }`}
          >
            <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-orange-400' : 'text-gray-400'}`} />
          </motion.div>
        </button>
        
        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="pl-14 pr-12 pt-4 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ============================================
   CONTACT CTA SECTION
   Still have questions? Contact us
   ============================================ */
const ContactCTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const quickLinks = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '24/7 support line',
      action: 'tel:+27619273855',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat support',
      action: 'https://wa.me/27619273855',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: Sparkles,
      title: 'Contact Form',
      description: 'Detailed inquiries',
      action: '/contact',
      gradient: 'from-orange-500 to-yellow-500',
      isLink: true
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#0d2847]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">Still Need Help?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
            <span className="text-white">Can't Find Your </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Answer?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our team is ready to help you 24/7. Reach out through any of these channels 
            and we'll get back to you in no time.
          </p>
        </motion.div>
        
        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickLinks.map((link, index) => {
            const Component = link.isLink ? Link : 'a';
            const props = link.isLink 
              ? { to: link.action }
              : { href: link.action, target: link.action.startsWith('http') ? '_blank' : undefined, rel: link.action.startsWith('http') ? 'noopener noreferrer' : undefined };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Component
                  {...props}
                  className="group block p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${link.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <link.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-1">{link.title}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                  
                  {/* Arrow */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm font-medium">Get Help</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Component>
              </motion.div>
            );
          })}
        </div>
        
        {/* Emergency Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Emergency?</h4>
                <p className="text-gray-400 text-sm">
                  If you smell gas or suspect a leak, evacuate immediately and call us at{' '}
                  <a href="tel:+27619273855" className="text-orange-400 hover:text-orange-300 font-medium">
                    +27 61 927 3855
                  </a>
                  {' '}from a safe location. Never use electrical switches near a suspected gas leak.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
