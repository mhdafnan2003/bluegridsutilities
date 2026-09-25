import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download, FileText, Inbox, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { api, qs } from './api';
import { APPLICATION_ORDER, APPLICATION_STATUS, fmtDateTime, timeAgo } from './format';
import { ApplicationStatus, Button, EmptyState, ErrorBox, Input, Select, Spinner } from './ui';
import { useApi, useToast } from './hooks';

/**
 * Filterable, paginated applications table. `filters` / `onFiltersChange` let a parent keep the
 * filters in the URL; `lockedVacancyId` hides the vacancy column and filter (vacancy detail page).
 */
const ApplicationsTable = ({ filters, onFiltersChange, lockedVacancyId, vacancies = [] }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [search, setSearch] = useState(filters.q || '');
  const [exporting, setExporting] = useState(false);
  const vacancyId = lockedVacancyId || filters.vacancyId;
  const page = Number(filters.page) || 1;

  // Debounce the search box into the filters.
  useEffect(() => {
    const t = setTimeout(() => {
      if ((filters.q || '') !== search.trim()) onFiltersChange({ ...filters, q: search.trim(), page: 1 });
    }, 300);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  const query = { vacancyId, status: filters.status, q: filters.q, sort: filters.sort, page, pageSize: 20 };
  const { data, error, loading, reload } = useApi(() => api.get(`/applications${qs(query)}`), [JSON.stringify(query)]);

  const update = (patch) => onFiltersChange({ ...filters, ...patch, page: patch.page ?? 1 });
  const pages = data ? Math.max(1, Math.ceil(data.total / data.pageSize)) : 1;
  const filtered = Boolean(filters.status || filters.q || (!lockedVacancyId && filters.vacancyId));

  const exportCsv = async () => {
    setExporting(true);
    try {
      await api.download(`/applications/export.csv${qs({ vacancyId, status: filters.status, q: filters.q, sort: filters.sort })}`, 'applications.csv');
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      setExporting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email, phone, postcode" className="pl-9" aria-label="Search applications" />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          {!lockedVacancyId && (
            <Select value={filters.vacancyId || ''} onChange={(e) => update({ vacancyId: e.target.value })} className="col-span-2 sm:w-56" aria-label="Filter by vacancy">
              <option value="">All vacancies</option>
              {vacancies.map((v) => <option key={v.id} value={v.id}>{v.title}</option>)}
            </Select>
          )}
          <Select value={filters.status || ''} onChange={(e) => update({ status: e.target.value })} className="sm:w-40" aria-label="Filter by status">
            <option value="">All stages</option>
            {APPLICATION_ORDER.map((s) => <option key={s} value={s}>{APPLICATION_STATUS[s].label}</option>)}
          </Select>
          <Select value={filters.sort || 'newest'} onChange={(e) => update({ sort: e.target.value })} className="sm:w-36" aria-label="Sort">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="name">Surname A–Z</option>
          </Select>
          <Button variant="secondary" icon={Download} onClick={exportCsv} loading={exporting} className="col-span-2 sm:col-span-1" title="Download the filtered list as a spreadsheet">
            Export CSV
          </Button>
        </div>
      </div>

      {loading && !data ? (
        <Spinner />
      ) : error ? (
        <div className="p-4"><ErrorBox error={error} onRetry={reload} /></div>
      ) : data.data.length === 0 ? (
        <EmptyState icon={Inbox} title={filtered ? 'No applications match these filters' : 'No applications yet'}>
          {filtered ? 'Try clearing the search or stage filter.' : 'When candidates apply on the website, their applications and CVs appear here.'}
        </EmptyState>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3 font-medium">Candidate</th>
                  {!lockedVacancyId && <th className="px-3 py-3 font-medium">Vacancy</th>}
                  <th className="px-3 py-3 font-medium">Location</th>
                  <th className="px-3 py-3 font-medium">Route</th>
                  <th className="px-3 py-3 font-medium">Stage</th>
                  <th className="px-5 py-3 text-right font-medium">Applied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.data.map((a) => (
                  <tr key={a.id} onClick={() => navigate(`/admin/applications/${a.id}`)} className="cursor-pointer hover:bg-slate-50">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                          {(a.firstName[0] || '') + (a.lastName[0] || '')}
                          {a.status === 'new' && <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#0066ff] ring-2 ring-white" title="New" />}
                        </div>
                        <div className="min-w-0">
                          <Link to={`/admin/applications/${a.id}`} onClick={(e) => e.stopPropagation()} className={`hover:text-[#0066ff] ${a.status === 'new' ? 'font-semibold text-slate-900' : 'font-medium text-slate-800'}`}>
                            {a.fullName}
                          </Link>
                          <p className="truncate text-xs text-slate-500">{a.email}</p>
                        </div>
                      </div>
                    </td>
                    {!lockedVacancyId && (
                      <td className="max-w-[220px] px-3 py-3">
                        <p className="truncate text-slate-700">{a.vacancyTitle}</p>
                        <p className="font-mono text-xs text-slate-400">{a.vacancyReference}</p>
                      </td>
                    )}
                    <td className="px-3 py-3 text-slate-600 whitespace-nowrap">{[a.town, a.postcode].filter(Boolean).join(', ')}</td>
                    <td className="max-w-[180px] px-3 py-3">
                      <p className="truncate text-slate-600">{a.engagementRoute}</p>
                      {a.cv && <p className="inline-flex items-center gap-1 text-xs text-slate-400"><FileText className="h-3 w-3" /> CV attached</p>}
                    </td>
                    <td className="px-3 py-3"><ApplicationStatus status={a.status} /></td>
                    <td className="px-5 py-3 text-right whitespace-nowrap" title={fmtDateTime(a.submittedAt)}>
                      <span className="text-slate-600">{timeAgo(a.submittedAt)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-sm text-slate-500">
            <span>
              {(page - 1) * data.pageSize + 1}–{Math.min(page * data.pageSize, data.total)} of <span className="font-medium text-slate-700">{data.total}</span>
            </span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" icon={ChevronLeft} disabled={page <= 1} onClick={() => update({ page: page - 1 })} aria-label="Previous page" />
              <span className="px-2 tabular-nums">{page} / {pages}</span>
              <Button variant="ghost" size="sm" icon={ChevronRight} disabled={page >= pages} onClick={() => update({ page: page + 1 })} aria-label="Next page" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ApplicationsTable;
