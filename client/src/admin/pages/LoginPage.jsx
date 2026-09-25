import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../auth-context';
import { Button, ErrorBox, Field, Input, PasswordInput } from '../ui';
import logo from '../../assets/images/logo.png';

const LoginPage = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const target = location.state?.from?.startsWith('/admin') ? location.state.from : '/admin';
  if (user) return <Navigate to={target} replace />;

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await login(email.trim(), password);
      navigate(target, { replace: true });
    } catch (err) {
      setError(err);
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen font-['Inter',system-ui,sans-serif] antialiased">
      <div className="relative hidden w-[44%] flex-col justify-between overflow-hidden bg-[#0b2b47] p-12 text-white lg:flex">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white p-1.5">
            <img src={logo} alt="" className="max-h-full max-w-full object-contain" />
          </div>
          <span className="text-lg font-semibold">Bluegrid Utilities</span>
        </div>
        <div className="relative max-w-md">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#4d94ff]">Recruitment dashboard</p>
          <h1 className="text-3xl font-semibold leading-tight">Publish vacancies and manage every application in one place.</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Vacancies you publish here appear on the website's Current Vacancies page straight away. Applications and CVs arrive here as candidates submit them.
          </p>
        </div>
        <p className="relative text-xs text-slate-400">Authorised staff only. Candidate data is confidential.</p>
      </div>

      <div className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <img src={logo} alt="Bluegrid Utilities" className="h-10 w-auto" />
          </div>
          <div className="mb-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0066ff]/10">
              <Lock className="h-5 w-5 text-[#0066ff]" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Sign in</h2>
            <p className="mt-1 text-sm text-slate-500">Use your dashboard account to continue.</p>
          </div>
          <form onSubmit={submit} className="space-y-4" noValidate>
            {error && <ErrorBox error={error} />}
            <Field label="Login ID" htmlFor="email" hint="Your email address or username.">
              <Input id="email" type="text" autoCapitalize="none" spellCheck={false} autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
            </Field>
            <Field label="Password" htmlFor="password">
              <PasswordInput id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Field>
            <Button type="submit" className="h-10 w-full" loading={busy} disabled={!email || !password}>Sign in</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
