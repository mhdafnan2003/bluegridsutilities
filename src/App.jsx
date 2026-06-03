import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import ServicesPage from './pages/ServicesPage';
import Services from './components/Services';
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
import WhatWeDo from './components/WhatWeDo';
import WhatWeAre from './components/WhatWeAre';
import SustainabilityBanner from './components/SustainabilityBanner';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component to handle scrolling to hash fragments (if any remain)
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
    <FeatureCards />
    <WhatWeAre />
    <WhatWeDo />
    <SustainabilityBanner />
    <OperationalCoverage />
  </>
);

const AboutPage = () => (
  <>
    <About />
    <Management />
  </>
);

const ServicesRoutePage = () => (
  <>
    <ServicesPage />
    <Services />
  </>
);

const ProjectsPage = () => (
  <>
    <OperationalDelivery />
    <Sectors />
    <OperationalCoverage />
  </>
);

const SustainabilityPage = () => (
  <>
    <HealthSafetyCompliance />
  </>
);

const CareerPage = () => (
  <>
    <Workforce />
    <TrainingDevelopment />
  </>
);

const NewsPage = () => (
  <>
    <QuickInfo />
    <KPIOperationalMonitoring />
  </>
);

const ContactPage = () => (
  <>
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

const PageWrapper = ({ children, isHome }) => {
  return (
    <div className={isHome ? "" : "pt-[130px] md:pt-[150px] lg:pt-[165px]"}>
      {children}
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <PageWrapper isHome>
                <HomePage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <PageWrapper>
                <ServicesRoutePage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <PageWrapper>
                <ProjectsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/sustainability"
          element={
            <PageTransition>
              <PageWrapper>
                <SustainabilityPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/career"
          element={
            <PageTransition>
              <PageWrapper>
                <CareerPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/news"
          element={
            <PageTransition>
              <PageWrapper>
                <NewsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/apply"
          element={
            <PageTransition>
              <PageWrapper>
                <ApplyPage />
              </PageWrapper>
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
