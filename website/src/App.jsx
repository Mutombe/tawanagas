import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { useState, useEffect, createContext } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Modals
import CookieConsent from './components/ui/CookieConsent';
import PrivacyModal from './components/ui/PrivacyModal';
import TermsModal from './components/ui/TermsModal';

// Context
export const ModalContext = createContext();
export const SearchContext = createContext();

// Animated Routes Wrapper
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </AnimatePresence>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Check if cookies were already accepted
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowCookies(false);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookies(false);
  };

  return (
    <Router>
      <ModalContext.Provider value={{ 
        showPrivacy, setShowPrivacy, 
        showTerms, setShowTerms,
        showCookies, setShowCookies,
        acceptCookies
      }}>
        <SearchContext.Provider value={{
          searchOpen, setSearchOpen,
          searchQuery, setSearchQuery
        }}>
          <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
            {/* Toast Notifications */}
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(10, 22, 40, 0.95)',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)',
                },
              }}
            />
            
            {/* Navigation */}
            <Navbar />
            
            {/* Scroll Reset */}
            <ScrollToTop />
            
            {/* Main Content */}
            <main>
              <AnimatedRoutes />
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Modals */}
            <AnimatePresence>
              {/* Cookie consent disabled for now */}
              {/* {showCookies && <CookieConsent />} */}
              {showPrivacy && <PrivacyModal />}
              {showTerms && <TermsModal />}
            </AnimatePresence>
          </div>
        </SearchContext.Provider>
      </ModalContext.Provider>
    </Router>
  );
}

export default App;