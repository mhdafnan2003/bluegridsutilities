import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import ErrorBoundary from './components/ErrorBoundary';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import ServicesPage from './pages/ServicesPage';
import OperationalDelivery from './components/OperationalDelivery';
import HealthSafetyCompliance from './components/HealthSafetyCompliance';
import KPIOperationalMonitoring from './components/KPIOperationalMonitoring';
import OperationalCoverage from './components/OperationalCoverage';
import TrainingDevelopment from './components/TrainingDevelopment';
import Workforce from './components/Workforce';
import ApplyPage from './pages/ApplyPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import Management from './components/Management';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatWeAre from './components/WhatWeAre';
import WhyChooseBlueGrid from './components/WhyChooseBlueGrid';
import SustainabilityBanner from './components/SustainabilityBanner';
import JoinTeamBanner from './components/JoinTeamBanner';
import PartnerLogos from './components/PartnerLogos';
import GetInTouch from './components/GetInTouch';
import AboutCompanyPage from './pages/about/AboutCompanyPage';
import OurMissionsPage from './pages/about/OurMissionsPage';
import OurVisionsPage from './pages/about/OurVisionsPage';
import OurHistoryPage from './pages/about/OurHistoryPage';
import AccreditationsPage from './pages/about/AccreditationsPage';
import BoardDirectorsPage from './pages/about/BoardDirectorsPage';
import OurPoliciesPage from './pages/about/OurPoliciesPage';
import CareerPage from './pages/CareerPage';
import SustainabilityPage from './pages/SustainabilityPage';
import LatestNews from './components/LatestNews';

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
    <WhyChooseBlueGrid />
    <WhatWeAre />
    <PartnerLogos />
    <JoinTeamBanner />
    <OperationalCoverage />
    <SustainabilityBanner />
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
  </>
);

const ProjectsPage = () => (
  <>
    <OperationalDelivery />
  </>
);

const HealthSafetyPage = () => (
  <>
    <HealthSafetyCompliance />
  </>
);




const ContactPage = () => (
  <>
    <Contact />
  </>
);

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    transition={{ duration: 0.25, ease: 'easeOut' }}
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
                <AboutCompanyPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/missions"
          element={
            <PageTransition>
              <PageWrapper>
                <OurMissionsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/visions"
          element={
            <PageTransition>
              <PageWrapper>
                <OurVisionsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/history"
          element={
            <PageTransition>
              <PageWrapper>
                <OurHistoryPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/accreditations"
          element={
            <PageTransition>
              <PageWrapper>
                <AccreditationsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/directors"
          element={
            <PageTransition>
              <PageWrapper>
                <BoardDirectorsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/leadership"
          element={
            <PageTransition>
              <PageWrapper>
                <BoardDirectorsPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/about/policies"
          element={
            <PageTransition>
              <PageWrapper>
                <OurPoliciesPage />
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
          path="/health-safety"
          element={
            <PageTransition>
              <PageWrapper>
                <HealthSafetyPage />
              </PageWrapper>
            </PageTransition>
          }
        />
        <Route
          path="/health-safety/:sectionId"
          element={
            <PageTransition>
              <PageWrapper>
                <HealthSafetyPage />
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
          path="/careers"
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
          path="/news/:articleId"
          element={
            <PageTransition>
              <PageWrapper>
                <NewsDetailPage />
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
  );
};

const MainContent = () => {
  const location = useLocation();
  const isNewsSection = location.pathname.startsWith('/news');

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {!isNewsSection && <LatestNews />}
      <Footer />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        <ScrollToTop />
        <ScrollToAnchor />
        <MainContent />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
