import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './auth';
import { ToastProvider } from './ui';
import AdminLayout from './AdminLayout';
import LoginPage from './pages/LoginPage';
import OverviewPage from './pages/OverviewPage';
import VacanciesPage from './pages/VacanciesPage';
import VacancyFormPage from './pages/VacancyFormPage';
import VacancyDetailPage from './pages/VacancyDetailPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ApplicationDetailPage from './pages/ApplicationDetailPage';
import SettingsPage from './pages/SettingsPage';

// Keep the dashboard out of search engines.
const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    const prevTitle = document.title;
    document.title = 'Recruitment Dashboard | Bluegrid Utilities';
    return () => {
      meta.remove();
      document.title = prevTitle;
    };
  }, []);
};

const AdminApp = () => {
  useNoIndex();
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<RequireAuth><AdminLayout /></RequireAuth>}>
            <Route index element={<OverviewPage />} />
            <Route path="vacancies" element={<VacanciesPage />} />
            <Route path="vacancies/new" element={<VacancyFormPage />} />
            <Route path="vacancies/:id" element={<VacancyDetailPage />} />
            <Route path="vacancies/:id/edit" element={<VacancyFormPage />} />
            <Route path="applications" element={<ApplicationsPage />} />
            <Route path="applications/:id" element={<ApplicationDetailPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AdminApp;
