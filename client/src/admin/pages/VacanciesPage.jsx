import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Plus, Search, MapPin, Trash2 } from 'lucide-react';
import { api } from '../api';
import { VACANCY_STATUS, daysUntil, fmtDate } from '../format';
import { Button, Card, EmptyState, ErrorBox, Input, PageHeader, Spinner, VacancyStatus } from '../ui';
import { useApi } from '../hooks';
import DeleteVacancyDialog from '../DeleteVacancyDialog';
import { cn } from '../../lib/utils';

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'live', label: 'Live' },
  { key: 'draft', label: 'Draft' },
  { key: 'pending_approval', label: 'Pending' },
  { key: 'closed', label: 'Closed' },
  { key: 'archived', label: 'Archived' },
];

const matchesTab = (v, tab) => {
  if (tab === 'all') return v.status !== 'archived';
  if (tab === 'live') return v.isOpen;
  if (tab === 'closed') return v.status === 'closed' || v.isExpired;
  return v.status === tab;
};

const VacanciesPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('all');
  const [q, setQ] = useState('');
  const [deleting, setDeleting] = useState(null);
  const { data, error, loading, reload } = useApi(() => api.get('/vacancies').then((r) => r.data), []);

  const counts = useMemo(() => Object.fromEntries(TABS.map((t) => [t.key, (data || []).filter((v) => matchesTab(v, t.key)).length])), [data]);
  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    return (data || [])
      .filter((v) => matchesTab(v, tab))
      .filter((v) => !term || [v.title, v.reference, v.location, v.category].some((s) => s?.toLowerCase().includes(term)));
  }, [data, tab, q]);

  return (
    <>
      <PageHeader
        title="Vacancies"
        description="Published vacancies appear on the website's Current Vacancies page until their closing date."
        actions={<Button to="/admin/vacancies/new" icon={Plus}>New vacancy</Button>}
      />

      <Card>
        <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-1 overflow-x-auto" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  'inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  tab === t.key ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100',
                )}
              >
                {t.label}
                <span className={cn('rounded px-1.5 text-xs tabular-nums', tab === t.key ? 'bg-white/20' : 'bg-slate-100 text-slate-500')}>{counts[t.key] ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title, reference, location" className="pl-9" aria-label="Search vacancies" />
          </div>
        </div>

        {loading && !data ? (
          <Spinner />
        ) : error ? (
          <div className="p-4"><ErrorBox error={error} onRetry={reload} /></div>
        ) : rows.length === 0 ? (
          <EmptyState
            icon={Briefcase}
            title={data.length ? 'No vacancies match' : 'No vacancies yet'}
            action={!data.length && <Button to="/admin/vacancies/new" icon={Plus}>Create your first vacancy</Button>}
          >
            {data.length ? 'Try a different tab or search term.' : 'Create a vacancy, then publish it to show it on the website.'}
          </EmptyState>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3 font-medium">Vacancy</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Closing</th>
                  <th className="px-3 py-3 text-right font-medium">Applications</th>
                  <th className="px-3 py-3 text-right font-medium">Updated</th>
                  <th className="w-14 px-3 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((v) => {
                  const left = daysUntil(v.closingDate);
                  return (
                    <tr key={v.id} onClick={() => navigate(`/admin/vacancies/${v.id}`)} className="cursor-pointer hover:bg-slate-50">
                      <td className="px-5 py-3.5">
                        <Link to={`/admin/vacancies/${v.id}`} className="font-medium text-slate-900 hover:text-[#0066ff]" onClick={(e) => e.stopPropagation()}>
                          {v.title}
                        </Link>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 text-xs text-slate-500">
                          <span className="font-mono">{v.reference}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{v.town || v.location}</span>
                          <span>{v.category}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3.5"><VacancyStatus vacancy={v} /></td>
                      <td className="px-3 py-3.5 whitespace-nowrap">
                        <span className="text-slate-700">{fmtDate(v.closingDate)}</span>
                        {v.isOpen && left !== null && (
                          <p className={cn('text-xs', left <= 7 ? 'font-medium text-amber-700' : 'text-slate-400')}>{left <= 0 ? 'Closes today' : `${left} day${left === 1 ? '' : 's'} left`}</p>
                        )}
                      </td>
                      <td className="px-3 py-3.5 text-right">
                        <span className="font-semibold tabular-nums text-slate-900">{v.applicationCount}</span>
                        {v.newApplicationCount > 0 && <p className="text-xs font-medium text-[#0066ff]">{v.newApplicationCount} new</p>}
                      </td>
                      <td className="px-3 py-3.5 text-right text-xs text-slate-500 whitespace-nowrap">{fmtDate(v.updatedAt)}</td>
                      <td className="px-3 py-3.5 text-right">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setDeleting(v); }}
                          title="Delete vacancy"
                          aria-label={`Delete ${v.title}`}
                          className="rounded-md p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      {deleting && (
        <DeleteVacancyDialog key={deleting.id} vacancy={deleting} onClose={() => setDeleting(null)} onDone={() => { setDeleting(null); reload(); }} />
      )}
      <p className="mt-3 text-xs text-slate-400">
        Statuses: {Object.values(VACANCY_STATUS).map((s) => s.label).join(' → ')}. Only published vacancies before their closing date accept applications.
      </p>
    </>
  );
};

export default VacanciesPage;
