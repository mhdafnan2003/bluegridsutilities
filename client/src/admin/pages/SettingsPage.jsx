import { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { api } from '../api';
import { useAuth } from '../auth-context';
import { fmtDateTime } from '../format';
import { Button, Card, CardHeader, Field, PasswordInput, PageHeader } from '../ui';
import { useToast } from '../hooks';

const SettingsPage = () => {
  const { user } = useAuth();
  const toast = useToast();
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirm) {
      setErrors({ confirm: 'The passwords do not match.' });
      return;
    }
    setBusy(true);
    setErrors({});
    try {
      await api.post('/auth/password', { currentPassword: form.currentPassword, newPassword: form.newPassword });
      toast('Password updated.');
      setForm({ currentPassword: '', newPassword: '', confirm: '' });
    } catch (err) {
      setErrors(Object.keys(err.fields).length ? err.fields : { currentPassword: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <PageHeader title="Settings" description="Your dashboard account." />
      <div className="grid max-w-4xl gap-6">
        <Card>
          <CardHeader title="Account" />
          <dl className="grid gap-4 px-5 py-4 text-sm sm:grid-cols-3">
            <div><dt className="text-slate-500">Name</dt><dd className="mt-0.5 font-medium text-slate-900">{user?.name}</dd></div>
            <div><dt className="text-slate-500">Login ID</dt><dd className="mt-0.5 font-medium text-slate-900">{user?.email}</dd></div>
            <div><dt className="text-slate-500">Last sign-in</dt><dd className="mt-0.5 font-medium text-slate-900">{fmtDateTime(user?.lastLoginAt)}</dd></div>
          </dl>
        </Card>
        <Card>
          <CardHeader title="Password" description={user?.envManaged ? 'Set in the server configuration.' : 'At least 10 characters.'} />
          {user?.envManaged ? (
            <div className="px-5 py-5 text-sm text-slate-600">
              <p>This login is set in the server's <code className="rounded bg-slate-100 px-1.5 py-0.5">.env</code> file. To change the login ID or password, edit these lines and restart the server:</p>
              <pre className="mt-3 overflow-x-auto rounded-md bg-slate-900 px-4 py-3 text-xs leading-relaxed text-slate-100">{`ADMIN_ID=${user.email}\nADMIN_PASSWORD=your-new-password\nADMIN_NAME=${user.name}`}</pre>
            </div>
          ) : (
            <form onSubmit={submit} className="grid max-w-md gap-4 px-5 py-5" noValidate>
              <Field label="Current password" error={errors.currentPassword} htmlFor="currentPassword">
                <PasswordInput id="currentPassword" autoComplete="current-password" value={form.currentPassword} onChange={set('currentPassword')} invalid={Boolean(errors.currentPassword)} />
              </Field>
              <Field label="New password" error={errors.newPassword} htmlFor="newPassword">
                <PasswordInput id="newPassword" autoComplete="new-password" value={form.newPassword} onChange={set('newPassword')} invalid={Boolean(errors.newPassword)} />
              </Field>
              <Field label="Confirm new password" error={errors.confirm} htmlFor="confirm">
                <PasswordInput id="confirm" autoComplete="new-password" value={form.confirm} onChange={set('confirm')} invalid={Boolean(errors.confirm)} />
              </Field>
              <div>
                <Button type="submit" icon={KeyRound} loading={busy} disabled={!form.currentPassword || !form.newPassword}>Update password</Button>
              </div>
            </form>
          )}
        </Card>
        <p className="text-xs text-slate-500">
          To add another dashboard user, run <code className="rounded bg-slate-100 px-1.5 py-0.5">npm run admin:create -- &lt;login ID&gt; &lt;password&gt; [name]</code> in the server folder.
        </p>
      </div>
    </>
  );
};

export default SettingsPage;
