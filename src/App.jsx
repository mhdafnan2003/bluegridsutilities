import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage';
import Sectors from './components/Sectors';
import OperationalDelivery from './components/OperationalDelivery';
import HealthSafetyCompliance from './components/HealthSafetyCompliance';
import KPIOperationalMonitoring from './components/KPIOperationalMonitoring';
import OperationalCoverage from './components/OperationalCoverage';
import TrainingDevelopment from './components/TrainingDevelopment';
import Workforce from './components/Workforce';
import ApplyPage from './pages/ApplyPage';
import Management from './components/Management';
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
    <OperationalDelivery />
    <HealthSafetyCompliance />
    <KPIOperationalMonitoring />
    <OperationalCoverage />
    <TrainingDevelopment />
    <Management />
    <Workforce />
    <Contact />
  </>
);

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/apply"
          element={
            <PageTransition>
              <ApplyPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToAnchor />
      <div className="min-h-screen bg-gray-50 scroll-smooth">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
