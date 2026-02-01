import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Navigation,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Star,
  ChevronRight,
  ExternalLink,
  Flame
} from 'lucide-react';
import { toast } from 'sonner';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

/* ============================================
   CONTACT PAGE
   Premium contact experience with a real
   Leaflet interactive map (dark tiles),
   glassmorphism cards, and split-screen layout
   ============================================ */

/* -------  Leaflet custom marker icon  ------- */
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="position:relative;width:48px;height:48px;">
        <div style="position:absolute;inset:-8px;border-radius:50%;background:rgba(249,115,22,0.25);animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></div>
        <div style="position:absolute;inset:0;border-radius:50%;background:linear-gradient(135deg,#f97316,#fbbf24);box-shadow:0 0 24px rgba(249,115,22,0.6);display:flex;align-items:center;justify-content:center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -52],
  });
};

/* -------  Map auto-zoom on load  ------- */
function MapController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

/* ============================================
   MAIN CONTACT COMPONENT
   ============================================ */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ContactSection 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitted={submitted}
      />
      <MapSection />
      <QuickContactSection />
      <FAQCtaSection />
    </motion.div>
  );
};

/* ============================================
   HERO SECTION
   ============================================ */
const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
      
      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * 500,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -200, null],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}
      
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <MessageCircle className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">24/7 Customer Support</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have questions? Need a delivery? We're here to help. Reach out to us anytime, 
            and our team will respond within minutes.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Clock, label: 'Response Time', value: '< 5 mins' },
              { icon: Star, label: 'Satisfaction', value: '99%' },
              { icon: Shield, label: 'Support', value: '24/7' }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
};

/* ============================================
   CONTACT SECTION
   ============================================ */
const ContactSection = ({ formData, handleChange, handleSubmit, isSubmitting, submitted }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      value: '+27 61 927 3855',
      subtext: 'Available 24/7',
      href: 'tel:+27619273855',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@tawanagas.co.za',
      subtext: 'We reply within hours',
      href: 'mailto:info@tawanagas.co.za',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '169 Bourke Street',
      subtext: 'Pretoria, Gauteng',
      href: 'https://maps.google.com/?q=169+Bourke+Street+Pretoria',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      value: 'Open 24 Hours',
      subtext: 'Monday - Sunday',
      href: null,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'refill', label: 'Gas Refill' },
    { value: 'exchange', label: 'Cylinder Exchange' },
    { value: 'delivery', label: 'Delivery Request' },
    { value: 'bulk', label: 'Bulk Order' },
    { value: 'support', label: 'Customer Support' }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a1628]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
      
      <div className="absolute top-20 left-10 w-72 h-72 border border-blue-500/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-orange-500/10 rounded-full" />
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Whether you need a quick refill, want to place a bulk order, or have questions about our services, 
              we're always ready to assist. Choose your preferred way to reach us.
            </p>
            
            <div className="space-y-4 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href?.startsWith('http') ? '_blank' : undefined}
                  rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 ${method.href ? 'cursor-pointer' : 'cursor-default'}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: method.href ? 10 : 0 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-[#0a1628] flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">{method.title}</p>
                    <p className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-400">{method.subtext}</p>
                  </div>
                  {method.href && (
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <h3 className="font-semibold text-white">Follow Us</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with our latest offers and gas delivery updates on social media.
              </p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'WhatsApp'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50" />
                
                <div className="relative">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-gray-400">Fill out the form below and we'll get back to you shortly.</p>
                  </div>
                  
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-400">We'll respond within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                            placeholder="+27 61 927 3855"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Service Type</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            {services.map(service => (
                              <option key={service.value} value={service.value} className="bg-[#0a1628]">
                                {service.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   MAP SECTION — Real Leaflet Map
   Dark CartoDB tiles, custom animated marker,
   styled popup with business info
   ============================================ */
const TAWANA_COORDS = [-25.7479, 28.1880]; // 169 Bourke Street, Pretoria

const MapSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Small delay so the section animates in before the map loads
    if (isInView) {
      const timer = setTimeout(() => setMapReady(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Our Location</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Find Us{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Easily
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conveniently located in the heart of Pretoria, we're easy to find and always ready to serve you.
          </p>
        </motion.div>
        
        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30"
        >
          {/* Actual Leaflet Map */}
          <div className="relative h-[420px] lg:h-[520px]">
            {mapReady ? (
              <MapContainer
                center={TAWANA_COORDS}
                zoom={15}
                scrollWheelZoom={false}
                zoomControl={true}
                className="w-full h-full z-0"
                style={{ background: '#0a1628' }}
              >
                {/* Dark-themed map tiles — CartoDB Dark Matter */}
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                <MapController center={TAWANA_COORDS} zoom={15} />

                {/* Custom Marker */}
                <Marker position={TAWANA_COORDS} icon={createCustomIcon()}>
                  <Popup maxWidth={320} className="custom-popup">
                    <div className="p-5">
                      {/* Logo / Title Row */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                          <Flame className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base leading-tight">Tawana Gas</h3>
                          <p className="text-orange-400 text-xs font-medium">Refill & Exchange</p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="space-y-2.5 mb-4">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">169 Bourke Street, Pretoria, Gauteng</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <a href="tel:+27619273855" className="text-gray-300 text-sm hover:text-white transition-colors">
                            +27 61 927 3855
                          </a>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">Open 24/7</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <a
                          href="https://maps.google.com/?q=169+Bourke+Street+Pretoria"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          Directions
                        </a>
                        <a
                          href="tel:+27619273855"
                          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-semibold hover:bg-white/20 transition-all"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          Call
                        </a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              /* Loading state while map initialises */
              <div className="w-full h-full bg-gradient-to-br from-[#0d2847] to-[#0a1628] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full"
                />
              </div>
            )}
          </div>

          {/* Floating Location Card (overlay on the map) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-[1000] p-5 rounded-2xl bg-[#0a1628]/90 backdrop-blur-xl border border-white/10 max-w-xs shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">Tawana Gas Refill & Exchange</h3>
                <p className="text-gray-400 text-sm mb-3">169 Bourke Street, Pretoria, Gauteng</p>
                <a
                  href="https://maps.google.com/?q=169+Bourke+Street+Pretoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================
   QUICK CONTACT SECTION
   ============================================ */
const QuickContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const quickActions = [
    {
      icon: Phone,
      title: 'Call Us Now',
      description: 'Speak directly with our team for immediate assistance',
      action: 'tel:+27619273855',
      buttonText: '+27 61 927 3855',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick and convenient messaging for orders and queries',
      action: 'https://wa.me/27619273855',
      buttonText: 'Start Chat',
      gradient: 'from-green-400 to-green-600',
      bgGradient: 'from-green-400/10 to-green-600/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send detailed inquiries and we\'ll respond within 24 hours',
      action: 'mailto:info@tawanagas.co.za',
      buttonText: 'Send Email',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-[#0a1628] to-[#0d2847]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Quick{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your preferred method to reach us. We're available 24/7 to serve you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.action}
              target={action.action.startsWith('http') ? '_blank' : undefined}
              rel={action.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${action.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${action.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${action.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-2xl bg-[#0a1628] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{action.description}</p>
                
                <div className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${action.gradient} text-white font-medium group-hover:shadow-lg transition-shadow duration-300`}>
                  {action.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   FAQ CTA SECTION
   ============================================ */
const FAQCtaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-blue-900/30 to-[#0d2847]/50 border border-blue-500/20 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Quick Answers</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">
                Have Questions?
              </h2>
              <p className="text-gray-400 max-w-lg">
                Check out our frequently asked questions page for instant answers to common queries 
                about gas refills, deliveries, safety, and more.
              </p>
            </div>
            
            <motion.a
              href="/faq"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View FAQ</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;