import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Inbox, Users, TrendingUp, TrendingDown, Minus, Plus, ChevronRight, Clock, TriangleAlert } from 'lucide-react';
import { api } from '../api';
import { useAuth } from '../auth-context';
import { APPLICATION_ORDER, APPLICATION_STATUS, daysUntil, fmtDate, timeAgo } from '../format';
import { ApplicationStatus, Button, Card, CardHeader, EmptyState, ErrorBox, PageHeader, Spinner, VacancyStatus } from '../ui';
import { useApi } from '../hooks';

const StatTile = ({ label, value, sub, icon: Icon, to }) => {
  const body = (
    <Card className="h-full p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
          <Icon className="h-4 w-4 text-slate-500" />
        </div>
      </div>
      <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-slate-900">{value}</p>
      {sub && <div className="mt-1 text-xs text-slate-500">{sub}</div>}
    </Card>
  );
  return to ? <Link to={to} className="block">{body}</Link> : body;
};

const Trend = ({ now, prev }) => {
  if (!prev && !now) return <span>No applications in the last 14 days</span>;
  const diff = now - prev;
  const Icon = diff > 0 ? TrendingUp : diff < 0 ? TrendingDown : Minus;
  return (
    <span className="inline-flex items-center gap-1">
      <Icon className="h-3.5 w-3.5" />
      {diff === 0 ? 'Same as' : `${Math.abs(diff)} ${diff > 0 ? 'more' : 'fewer'} than`} the previous 7 days
    </span>
  );
};

/** 30-day applications bar chart: one series, so no legend; hover shows the day's count. */
const DailyChart = ({ daily }) => {
  const [hover, setHover] = useState(null);
  const max = Math.max(4, ...daily.map((d) => d.count));
  const niceMax = Math.ceil(max / 4) * 4;
  const W = 720;
  const H = 180;
  const pad = { l: 28, r: 4, t: 8, b: 22 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;
  const slot = plotW / daily.length;
  const barW = Math.max(4, slot - 2);
  const ticks = [0, niceMax / 2, niceMax];
  const y = (v) => pad.t + plotH - (v / niceMax) * plotH;
  const label = (d) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const total = daily.reduce((s, d) => s + d.count, 0);

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Applications per day over the last 30 days, ${total} in total`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke="#e2e8f0" strokeDasharray={t === 0 ? undefined : '3 3'} />
            <text x={pad.l - 8} y={y(t)} dy="0.32em" textAnchor="end" className="fill-slate-400 text-[10px] tabular-nums">{t}</text>
          </g>
        ))}
        {daily.map((d, i) => {
          const x = pad.l + i * slot + (slot - barW) / 2;
          const h = (d.count / niceMax) * plotH;
          const r = Math.min(4, barW / 2, h);
          const top = pad.t + plotH - h;
          return (
            <g key={d.date} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={pad.l + i * slot} y={pad.t} width={slot} height={plotH} fill={hover === i ? '#f1f5f9' : 'transparent'} />
              {h > 0 && (
                <path
                  d={`M${x},${pad.t + plotH} V${top + r} Q${x},${top} ${x + r},${top} H${x + barW - r} Q${x + barW},${top} ${x + barW},${top + r} V${pad.t + plotH} Z`}
                  fill={hover === i ? '#0052cc' : '#0066ff'}
                />
              )}
            </g>
          );
        })}
        {[0, 7, 14, 21, 29].map((i) => (
          <text key={i} x={pad.l + i * slot + slot / 2} y={H - 6} textAnchor="middle" className="fill-slate-400 text-[10px]">{label(daily[i].date)}</text>
        ))}
      </svg>
      {hover !== null && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs shadow-md"
          style={{ left: `${((pad.l + hover * slot + slot / 2) / W) * 100}%` }}
        >
          <p className="font-medium text-slate-900">{label(daily[hover].date)}</p>
          <p className="text-slate-500"><span className="font-semibold tabular-nums text-slate-900">{daily[hover].count}</span> application{daily[hover].count === 1 ? '' : 's'}</p>
        </div>
      )}
    </div>
  );
};

const Pipeline = ({ byStatus, total }) => (
  <ul className="space-y-3">
    {APPLICATION_ORDER.map((s) => {
      const n = byStatus[s] || 0;
      const pct = total ? (n / total) * 100 : 0;
      return (
        <li key={s}>
          <Link to={`/admin/applications?status=${s}`} className="group block">
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-slate-700 group-hover:text-[#0066ff]">{APPLICATION_STATUS[s].label}</span>
              <span className="tabular-nums font-medium text-slate-900">{n}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-[#0f3a5e]" style={{ width: `${pct}%` }} />
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
);

const greeting = () => {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
};

const OverviewPage = () => {
  const { user } = useAuth();
  const { data, error, loading, reload } = useApi(() => api.get('/overview').then((r) => r.data), []);
  const firstName = useMemo(() => (user?.name || '').split(' ')[0], [user]);

  if (loading && !data) return <Spinner />;
  if (error) return <ErrorBox error={error} onRetry={reload} />;
  const { vacancies, applications: apps } = data;

  return (
    <>
      <PageHeader
        title={`${greeting()}${firstName ? `, ${firstName}` : ''}`}
        description="Recruitment activity across all vacancies."
        actions={<Button to="/admin/vacancies/new" icon={Plus}>New vacancy</Button>}
      />

      {apps.emailFailures > 0 && (
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            {apps.emailFailures} application{apps.emailFailures === 1 ? '' : 's'} could not be emailed to the recruitment inbox. They are saved here, so nothing is lost, but check the server's SMTP settings.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Live vacancies" value={vacancies.open} icon={Briefcase} to="/admin/vacancies" sub={`${vacancies.total} in total · ${vacancies.byStatus.draft + vacancies.byStatus.pending_approval} in draft or pending`} />
        <StatTile label="New applications" value={apps.byStatus.new} icon={Inbox} to="/admin/applications?status=new" sub="Waiting for first review" />
        <StatTile label="Last 7 days" value={apps.last7} icon={TrendingUp} sub={<Trend now={apps.last7} prev={apps.prev7} />} />
        <StatTile label="All applications" value={apps.total} icon={Users} to="/admin/applications" sub={`${apps.byStatus.hired} hired · ${apps.byStatus.interview} at interview`} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader title="Applications received" description="Per day, last 30 days" />
          <div className="px-4 pb-3 pt-4">
            <DailyChart daily={apps.daily} />
          </div>
        </Card>
        <Card>
          <CardHeader title="Hiring pipeline" description="All applications by stage" />
          <div className="px-5 py-4">
            <Pipeline byStatus={apps.byStatus} total={apps.total} />
          </div>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5">
        <Card className="xl:col-span-3">
          <CardHeader
            title="Latest applications"
            action={<Link to="/admin/applications" className="text-xs font-medium text-[#0066ff] hover:underline">View all</Link>}
          />
          {apps.recent.length === 0 ? (
            <EmptyState icon={Inbox} title="No applications yet">Applications submitted on the website will appear here.</EmptyState>
          ) : (
            <ul className="divide-y divide-slate-100">
              {apps.recent.map((a) => (
                <li key={a.id}>
                  <Link to={`/admin/applications/${a.id}`} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                      {(a.firstName[0] || '') + (a.lastName[0] || '')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900">{a.fullName}</p>
                      <p className="truncate text-xs text-slate-500">{a.vacancyTitle}</p>
                    </div>
                    <div className="hidden text-right sm:block">
                      <ApplicationStatus status={a.status} />
                      <p className="mt-1 text-xs text-slate-400">{timeAgo(a.submittedAt)}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader
            title="Vacancies"
            description="By applications received"
            action={<Link to="/admin/vacancies" className="text-xs font-medium text-[#0066ff] hover:underline">Manage</Link>}
          />
          {vacancies.top.length === 0 ? (
            <EmptyState icon={Briefcase} title="No vacancies yet" action={<Button to="/admin/vacancies/new" icon={Plus} size="sm">New vacancy</Button>} />
          ) : (
            <ul className="divide-y divide-slate-100">
              {vacancies.top.map((v) => {
                const left = daysUntil(v.closingDate);
                return (
                  <li key={v.id}>
                    <Link to={`/admin/vacancies/${v.id}`} className="block px-5 py-3 hover:bg-slate-50">
                      <div className="flex items-start justify-between gap-3">
                        <p className="min-w-0 text-sm font-medium text-slate-900 line-clamp-2">{v.title}</p>
                        <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-900">{v.applicationCount}</span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <VacancyStatus vacancy={v} />
                        {v.newApplicationCount > 0 && <span className="font-medium text-[#0066ff]">{v.newApplicationCount} new</span>}
                        {v.isOpen && left !== null && (
                          <span className={`inline-flex items-center gap-1 ${left <= 7 ? 'font-medium text-amber-700' : ''}`}>
                            <Clock className="h-3 w-3" /> Closes {fmtDate(v.closingDate)}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
};

export default OverviewPage;
