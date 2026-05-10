import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage';
import Sectors from './components/Sectors';
import Workforce from './components/Workforce';
import ApplyPage from './pages/ApplyPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component to handle scrolling to hash fragments
const ScrollToAnchor = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <ServicesPage />
    <QuickInfo />
    <Sectors />
    <Workforce />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToAnchor />
      <div className="min-h-screen bg-gray-50 scroll-smooth">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apply" element={<ApplyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
