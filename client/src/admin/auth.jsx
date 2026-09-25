import { useCallback, useEffect, useMemo, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { api, session, setUnauthorizedHandler } from './api';
import { AuthContext, useAuth } from './auth-context';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => session.get()?.user || null);

  const logout = useCallback(() => {
    session.clear();
    setUser(null);
  }, []);

  useEffect(() => {
    setUnauthorizedHandler(() => setUser(null));
    // Confirm a stored session is still valid (server restart, password change, deleted user).
    if (session.get()) api.get('/auth/me').then((r) => setUser(r.data)).catch(() => {});
  }, []);

  const login = useCallback(async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    session.set(data);
    setUser(data.user);
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/admin/login" replace state={{ from: location.pathname + location.search }} />;
  return children;
};
