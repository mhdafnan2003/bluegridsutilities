import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, Settings, LogOut, Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from './auth-context';
import logo from '../assets/images/logo.png';

const NAV = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/vacancies', label: 'Vacancies', icon: Briefcase },
  { to: '/admin/applications', label: 'Applications', icon: Users },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

const initials = (name = '') => name.split(/\s+/).map((p) => p[0]).join('').slice(0, 2).toUpperCase() || 'A';

const Sidebar = ({ onNavigate }) => {
  const { user, logout } = useAuth();
  return (
    <div className="flex h-full flex-col bg-[#0b2b47] text-slate-300">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white p-1">
          <img src={logo} alt="" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Bluegrid Utilities</p>
          <p className="text-[11px] uppercase tracking-wider text-slate-400">Recruitment</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Dashboard">
        {NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={cn('h-[18px] w-[18px]', isActive ? 'text-[#4d94ff]' : 'text-slate-400')} />
                {label}
              </>
            )}
          </NavLink>
        ))}
        <a
          href="/careers/jobs"
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white"
        >
          <ExternalLink className="h-[18px] w-[18px] text-slate-400" /> View live careers page
        </a>
      </nav>

      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-3 rounded-md px-2 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066ff] text-xs font-semibold text-white">
            {initials(user?.name)}
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-medium text-white">{user?.name}</p>
            <p className="truncate text-xs text-slate-400">{user?.email}</p>
          </div>
          <button type="button" onClick={logout} title="Sign out" aria-label="Sign out" className="rounded p-1.5 text-slate-400 hover:bg-white/10 hover:text-white">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',system-ui,sans-serif] text-slate-900 antialiased">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 lg:block">
        <Sidebar />
      </aside>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/50" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-72 max-w-[85%] shadow-xl">
            <button type="button" onClick={() => setOpen(false)} className="absolute right-3 top-4 z-10 rounded p-1.5 text-slate-300 hover:bg-white/10" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
            <Sidebar onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur lg:hidden">
          <button type="button" onClick={() => setOpen(true)} className="rounded p-1.5 text-slate-600 hover:bg-slate-100" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold text-slate-900">Bluegrid Recruitment</span>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
