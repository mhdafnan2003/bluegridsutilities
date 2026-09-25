import React, { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import ErrorBoundary from './components/ErrorBoundary';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import ServicesPage from './pages/ServicesPage';
import OperationalDelivery from './components/OperationalDelivery';
import HealthSafetyCompliance from './components/HealthSafetyCompliance';
import ApplyPage from './pages/ApplyPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatWeAre from './components/WhatWeAre';
import WhyChooseBlueGrid from './components/WhyChooseBlueGrid';
import PartnerLogos from './components/PartnerLogos';
import JoinTeamBanner from './components/JoinTeamBanner';
import OperationalCoverage from './components/OperationalCoverage';
import SustainabilityBanner from './components/SustainabilityBanner';
import GetInTouch from './components/GetInTouch';
import AboutCompanyPage from './pages/about/AboutCompanyPage';
import OurMissionsPage from './pages/about/OurMissionsPage';
import OurVisionsPage from './pages/about/OurVisionsPage';
import OurHistoryPage from './pages/about/OurHistoryPage';
import AccreditationsPage from './pages/about/AccreditationsPage';
import BoardDirectorsPage from './pages/about/BoardDirectorsPage';
import OurPoliciesPage from './pages/about/OurPoliciesPage';
import CandidatePrivacyPage from './pages/CandidatePrivacyPage';
import CareerPage from './pages/CareerPage';
import VacanciesPage from './pages/VacanciesPage';
import VacancyDetailPage from './pages/VacancyDetailPage';
import SustainabilityPage from './pages/SustainabilityPage';
import PageSEO from './components/PageSEO';

// Recruitment dashboard: loaded only when /admin is visited, so public pages don't download it.
const AdminApp = lazy(() => import('./admin/AdminApp'));

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
    <GetInTouch />
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
      {/* Home (Point 73: /) */}
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

      {/* About (Point 73: /about) */}
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

      {/* Candidate Privacy Notice, linked from the job application form */}
      <Route
        path="/policies/candidate-privacy"
        element={
          <PageTransition>
            <PageWrapper>
              <CandidatePrivacyPage />
            </PageWrapper>
          </PageTransition>
        }
      />
      {/* Policies (Point 73: /policies) */}
      <Route
        path="/policies"
        element={
          <PageTransition>
            <PageWrapper>
              <OurPoliciesPage />
            </PageWrapper>
          </PageTransition>
        }
      />

      {/* Services Overview (Point 73: /services) */}
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

      {/* Individual Service Direct URLs (Point 73 Matrix) */}
      <Route
        path="/services/:serviceSlug"
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

      {/* Safety & Quality (Point 73: /safety-quality with /health-safety alias) */}
      <Route
        path="/safety-quality"
        element={
          <PageTransition>
            <PageWrapper>
              <HealthSafetyPage />
            </PageWrapper>
          </PageTransition>
        }
      />
      <Route
        path="/safety-quality/:sectionId"
        element={
          <PageTransition>
            <PageWrapper>
              <HealthSafetyPage />
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

      {/* Careers Permanent Employer Page (Point 38 & 73: /careers) */}
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

      {/* Current Vacancies Dynamic Listing (Point 45 & 73: /careers/jobs) */}
      <Route
        path="/careers/jobs"
        element={
          <PageTransition>
            <PageWrapper>
              <VacanciesPage />
            </PageWrapper>
          </PageTransition>
        }
      />

      {/* Individual Vacancy Page (Point 49 & 74: /careers/jobs/:slug) */}
      <Route
        path="/careers/jobs/:slug"
        element={
          <PageTransition>
            <PageWrapper>
              <VacancyDetailPage />
            </PageWrapper>
          </PageTransition>
        }
      />
      <Route
        path="/careers/water-meter-installation-operative"
        element={
          <PageTransition>
            <PageWrapper>
              <VacancyDetailPage />
            </PageWrapper>
          </PageTransition>
        }
      />
      <Route
        path="/careers/:slug"
        element={
          <PageTransition>
            <PageWrapper>
              <VacancyDetailPage />
            </PageWrapper>
          </PageTransition>
        }
      />

      {/* News (Point 73: /news) */}
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

      {/* Contact (Point 73: /contact) */}
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

      {/* Apply Direct Form */}
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
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth flex flex-col justify-between">
      <PageSEO />
      <Header />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
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
        <Routes>
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
                <AdminApp />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <>
                {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
                <ScrollToTop />
                <ScrollToAnchor />
                <MainContent />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
