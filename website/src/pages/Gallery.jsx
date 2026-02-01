import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn,
  Download,
  Share2,
  Camera,
  Building2,
  Users,
  Truck,
  Award,
  Flame,
  Grid3X3,
  LayoutGrid
} from 'lucide-react';

// SEO Component
function SEO() {
  return (
    <>
      <title>Gallery | Tawana Gas Refill & Exchange | Our Work & Facility</title>
      <meta name="description" content="Explore our gallery showcasing Tawana Gas facilities, delivery fleet, team, and happy customers. See why we're Pretoria's trusted LPG gas supplier." />
    </>
  );
}

// Gallery Data
const galleryImages = [
  {
    id: 1,
    src: "1.jpg",
    alt: "Gas Cylinder Storage Facility",
    category: "facility",
    title: "Our Main Storage Facility",
    description: "State-of-the-art storage facility ensuring safe and organized cylinder management.",
    /* VISION: Professional photo of organized gas cylinder storage warehouse with safety measures visible */
  },
  {
    id: 2,
    src: "2.jpg",
    alt: "Delivery Team",
    category: "team",
    title: "Professional Delivery Team",
    description: "Our dedicated team ready to serve you 24/7.",
    /* VISION: Tawana Gas delivery team in uniform, smiling, professional appearance */
  },
  {
    id: 3,
    src: "3.jpg",
    alt: "Delivery Vehicle",
    category: "delivery",
    title: "Modern Delivery Fleet",
    description: "Our well-maintained vehicles ensuring safe and timely deliveries.",
    /* VISION: Branded delivery van/truck with Tawana Gas logo, clean and professional */
  },
  {
    id: 4,
    src: "4.jpg",
    alt: "Customer Kitchen",
    category: "customers",
    title: "Happy Customer",
    description: "One of our valued customers enjoying reliable gas supply.",
    /* VISION: Customer in their kitchen using gas stove, happy expression */
  },
  {
    id: 5,
    src: "5.jpg",
    alt: "Gas Cylinders",
    category: "facility",
    title: "Quality Cylinders",
    description: "Premium LPG cylinders ready for delivery.",
    /* VISION: Neatly arranged blue gas cylinders, professional product display */
  },
  {
    id: 6,
    src: "6.jpg",
    alt: "Restaurant Partner",
    category: "customers",
    title: "Restaurant Partner",
    description: "Trusted by Pretoria's finest restaurants.",
    /* VISION: Professional restaurant kitchen powered by Tawana Gas */
  },
  {
    id: 7,
    src: "7.jpg",
    alt: "Safety Inspection",
    category: "facility",
    title: "Safety First",
    description: "Regular safety inspections ensure quality and compliance.",
    /* VISION: Technician performing safety check on gas cylinder */
  },
  {
    id: 8,
    src: "8.jpg",
    alt: "Team Meeting",
    category: "team",
    title: "Team Excellence",
    description: "Regular training sessions keep our team at their best.",
    /* VISION: Tawana Gas team in a training/meeting session */
  },
  {
    id: 9,
    src: "9.jpg",
    alt: "Delivery in Progress",
    category: "delivery",
    title: "Doorstep Delivery",
    description: "Free delivery service throughout Pretoria.",
    /* VISION: Delivery person handing over gas cylinder to customer at doorstep */
  },
  {
    id: 10,
    src: "10.jpg",
    alt: "Residential Customer",
    category: "customers",
    title: "Home Service",
    description: "Serving families across Pretoria.",
    /* VISION: Happy family home with reliable gas supply */
  },
  {
    id: 11,
    src: "11.jpg",
    alt: "Quality Control",
    category: "facility",
    title: "Quality Control",
    description: "Rigorous quality checks on every cylinder.",
    /* VISION: Quality control station with inspection equipment */
  },
  {
    id: 12,
    src: "12.jpg",
    alt: "Award Ceremony",
    category: "team",
    title: "Excellence Recognized",
    description: "Our commitment to quality earns recognition.",
    /* VISION: Team receiving award or recognition for service excellence */
  },
  {
    id: 13,
    src: "13.jpg",
    alt: "Night Delivery",
    category: "delivery",
    title: "24/7 Service",
    description: "Always ready to deliver, day or night.",
    /* VISION: Delivery vehicle on the road at night with lights on */
  },
  {
    id: 14,
    src: "14.jpg",
    alt: "Customer Testimonial",
    category: "customers",
    title: "Satisfied Customer",
    description: "Hear from our happy customers.",
    /* VISION: Customer giving testimonial or review about Tawana Gas */
  },
  {
    id: 15,
    src: "15.jpeg",
    alt: "Delivery Vehicle",
    category: "delivery",
    title: "Delivery Vehicle",
    description: "Our well-maintained vehicles ensuring safe and timely deliveries.",
    /* VISION: Delivery van/truck with Tawana Gas logo, clean and professional */
  },
];

const categories = [
  { id: "all", label: "All Photos", icon: Grid3X3 },
  { id: "facility", label: "Our Facility", icon: Building2 },
  { id: "team", label: "Our Team", icon: Users },
  { id: "delivery", label: "Delivery", icon: Truck },
  { id: "customers", label: "Happy Customers", icon: Award },
];

// Hero Section
function HeroSection() {
  return (
    <section 
      id="gallery-hero"
      className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a1628]"
    >
      {/* Background Collage Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-4 gap-1">
          {galleryImages.slice(0, 8).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden"
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Camera className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-white/80">Visual Journey</span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-white">Our</span>
            <br />
            <span className="gradient-text">Gallery</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Take a visual tour of our facilities, meet our team, and see why thousands trust Tawana Gas for their LPG needs.
          </p>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { value: "5000+", label: "Happy Customers" },
              { value: "24/7", label: "Service Hours" },
              { value: "100%", label: "Safety Record" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-orange-400">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
    </section>
  );
}

// Lightbox Component
function Lightbox({ image, images, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const currentIndex = images.findIndex(img => img.id === image.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation - Previous */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Image Container */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] mx-4"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl"
        />

        {/* Image Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
          <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
          <p className="text-white/70 text-sm">{image.description}</p>
          
          {/* Counter */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-white/50 text-sm">
              {currentIndex + 1} of {images.length}
            </p>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <ZoomIn className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-xl bg-black/50 backdrop-blur-sm overflow-x-auto max-w-[90vw]">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={(e) => {
              e.stopPropagation();
              // Find and set the selected image
              const diff = i - currentIndex;
              for (let j = 0; j < Math.abs(diff); j++) {
                if (diff > 0) onNext();
                else onPrev();
              }
            }}
            className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${
              img.id === image.id ? 'ring-2 ring-orange-500 scale-110' : 'opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Gallery Grid Section
function GalleryGridSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [layout, setLayout] = useState("masonry");

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section id="gallery-grid" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628]'
                    : 'glass text-white/70 hover:text-white border border-white/10 hover:border-orange-500/30'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Layout Toggle */}
          <div className="flex gap-2 p-1 rounded-xl glass">
            <button
              onClick={() => setLayout("masonry")}
              className={`p-2 rounded-lg transition-colors ${layout === "masonry" ? 'bg-orange-500 text-white' : 'text-white/60 hover:text-white'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-lg transition-colors ${layout === "grid" ? 'bg-orange-500 text-white' : 'text-white/60 hover:text-white'}`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-white/60 mb-8">
          Showing {filteredImages.length} photos
        </p>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className={
            layout === "masonry" 
              ? "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
              : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className={layout === "masonry" ? "break-inside-avoid" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      layout === "grid" ? "aspect-square" : ""
                    }`}
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">{image.description}</p>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <span className="text-white/80 text-xs capitalize">{image.category}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            images={filteredImages}
            onClose={() => setSelectedImage(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Video Section (Optional Feature)
function VideoSection() {
  return (
    <section id="video" className="py-24 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-4">
            Behind The Scenes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            See Us <span className="gradient-text">In Action</span>
          </h2>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden glass"
        >
          {/* VISION: Embedded video showing Tawana Gas operations - delivery process,
              team at work, customer testimonials, facility tour */}
          <img
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-2xl shadow-orange-500/50"
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </div>

          {/* Video Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-semibold">A Day at Tawana Gas</p>
            <p className="text-white/60 text-sm">Watch our team deliver excellence every day</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section id="gallery-cta" className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Flame className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Want To Be Part Of <span className="gradient-text">Our Story?</span>
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Tawana Gas for their LPG needs. Order now and experience the difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+27619273855"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold text-lg shadow-2xl shadow-orange-500/25"
            >
              <span>Order Now</span>
            </motion.a>
            <a
              href="https://www.instagram.com/tawanagas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
            >
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Gallery Page Component
export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO />
      <HeroSection />
      <GalleryGridSection />
      <VideoSection />
      <CTASection />
    </motion.div>
  );
}
