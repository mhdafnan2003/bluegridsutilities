import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Pencil, Send, Ban, Archive, Copy, Trash2, ExternalLink, MapPin, Clock, Calendar, Briefcase, RotateCcw } from 'lucide-react';
import { api } from '../api';
import ApplicationsTable from '../ApplicationsTable';
import DeleteVacancyDialog from '../DeleteVacancyDialog';
import { daysUntil, fmtDate, fmtDateTime, VACANCY_STATUS } from '../format';
import { Button, Card, CardHeader, ErrorBox, Modal, PageHeader, Spinner, Textarea, VacancyStatus } from '../ui';
import { useApi, useToast } from '../hooks';
import { cn } from '../../lib/utils';

const ACTIONS = {
  published: { label: 'Publish', icon: Send, variant: 'primary', confirm: 'The vacancy will appear on the Current Vacancies page and start accepting applications.' },
  pending_approval: { label: 'Submit for approval', icon: Send, variant: 'secondary', confirm: 'The vacancy stays hidden from the website until it is published.' },
  closed: { label: 'Close', icon: Ban, variant: 'secondary', confirm: 'The vacancy will be removed from the vacancies list and stop accepting applications. Existing applications are kept.' },
  draft: { label: 'Move to draft', icon: RotateCcw, variant: 'secondary', confirm: 'The vacancy will be hidden from the website.' },
  archived: { label: 'Archive', icon: Archive, variant: 'secondary', confirm: 'The vacancy is hidden everywhere on the website. Applications are kept and stay visible here.' },
};

const NEXT = {
  draft: ['published', 'pending_approval', 'archived'],
  pending_approval: ['published', 'draft', 'archived'],
  published: ['closed', 'archived'],
  closed: ['published', 'archived'],
  archived: ['draft'],
};

const List = ({ title, items }) =>
  items?.length ? (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 marker:text-slate-300">
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  ) : null;

const Row = ({ label, children }) => (
  <div className="grid grid-cols-3 gap-3 py-2.5 text-sm">
    <dt className="text-slate-500">{label}</dt>
    <dd className="col-span-2 text-slate-900">{children || <span className="text-slate-400">—</span>}</dd>
  </div>
);

const VacancyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [tab, setTab] = useState('applications');
  const [filters, setFilters] = useState({});
  const [pending, setPending] = useState(null); // { status } being confirmed
  const [deleting, setDeleting] = useState(false);
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const { data: v, error, loading, reload } = useApi(() => api.get(`/vacancies/${id}`).then((r) => r.data), [id]);

  if (loading && !v) return <Spinner />;
  if (error) return <ErrorBox error={error} onRetry={reload} />;

  const left = daysUntil(v.closingDate);
  const publicUrl = `/careers/jobs/${v.slug}`;

  const run = async () => {
    setBusy(true);
    try {
      const r = await api.post(`/vacancies/${v.id}/status`, { status: pending.status, notes });
      toast(r.message || 'Status updated.');
      setPending(null);
      setNotes('');
      reload();
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      setBusy(false);
    }
  };

  const duplicate = async () => {
    try {
      const { data } = await api.post(`/vacancies/${v.id}/duplicate`);
      toast('Draft copy created.');
      navigate(`/admin/vacancies/${data.id}/edit`);
    } catch (err) {
      toast(err.message, 'error');
    }
  };

  const tabs = [
    { key: 'applications', label: 'Applications', count: v.applicationCount },
    { key: 'details', label: 'Vacancy details' },
    { key: 'activity', label: 'Activity', count: v.events.length },
  ];

  return (
    <>
      <PageHeader
        back={
          <Link to="/admin/vacancies" className="mb-2 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Vacancies
          </Link>
        }
        title={v.title}
        description={
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <VacancyStatus vacancy={v} />
            <span className="font-mono text-xs">{v.reference}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{v.location}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> Closes {fmtDate(v.closingDate)}
              {v.isOpen && left !== null && <span className={cn(left <= 7 && 'font-medium text-amber-700')}>({left <= 0 ? 'today' : `${left}d left`})</span>}
            </span>
          </span>
        }
        actions={
          <>
            {v.isOpen && <Button variant="ghost" icon={ExternalLink} onClick={() => window.open(publicUrl, '_blank', 'noopener')}>View on site</Button>}
            <Button variant="secondary" icon={Pencil} to={`/admin/vacancies/${v.id}/edit`}>Edit</Button>
            {(NEXT[v.status] || []).map((s) => {
              const a = ACTIONS[s];
              return <Button key={s} variant={a.variant} icon={a.icon} onClick={() => setPending({ status: s })}>{a.label}</Button>;
            })}
          </>
        }
      />

      {v.isExpired && (
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          The closing date has passed, so this vacancy is no longer shown on the website. Edit the closing date to reopen it, or close it.
        </div>
      )}

      <div className="mb-4 flex gap-1 border-b border-slate-200" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              '-mb-px inline-flex items-center gap-2 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors',
              tab === t.key ? 'border-[#0066ff] text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800',
            )}
          >
            {t.label}
            {t.count !== undefined && <span className="rounded bg-slate-100 px-1.5 text-xs tabular-nums text-slate-600">{t.count}</span>}
          </button>
        ))}
      </div>

      {tab === 'applications' && (
        <Card>
          <ApplicationsTable filters={filters} onFiltersChange={setFilters} lockedVacancyId={v.id} />
        </Card>
      )}

      {tab === 'details' && (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader title="As shown on the website" action={<Button size="sm" variant="ghost" icon={Pencil} to={`/admin/vacancies/${v.id}/edit`}>Edit</Button>} />
            <div className="space-y-6 px-5 py-5">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Role summary</h3>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">{v.roleSummary}</p>
              </div>
              <List title="Key responsibilities" items={v.keyResponsibilities} />
              <List title="Essential requirements" items={v.essentialRequirements} />
              <List title="Desirable requirements" items={v.desirableRequirements} />
              <List title="Required cards and licences" items={v.requiredCardsLicences} />
              <List title="Pay and benefits" items={v.payAndBenefits} />
              {v.rightToWorkSponsorship && (
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-slate-900">Right to work</h3>
                  <p className="text-sm text-slate-600">{v.rightToWorkSponsorship}</p>
                </div>
              )}
            </div>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader title="Summary" />
              <dl className="divide-y divide-slate-100 px-5 py-1">
                <Row label="Category">{v.category}</Row>
                <Row label="Town">{v.town}</Row>
                <Row label="Employment">{v.employmentType}</Row>
                <Row label="Pattern">{v.workingPattern}</Row>
                <Row label="Pay">
                  {v.salaryRate}
                  {v.salaryRate && !v.displaySalary && <span className="mt-1 block text-xs text-amber-700">Hidden on website</span>}
                </Row>
                <Row label="Options">{v.engagementTypes.length ? v.engagementTypes.join(' · ') : null}</Row>
                <Row label="Opens">{fmtDate(v.openingDate)}</Row>
                <Row label="Closes">{fmtDateTime(v.closingDate)}</Row>
                <Row label="Web address"><span className="break-all font-mono text-xs">{publicUrl}</span></Row>
              </dl>
            </Card>
            <Card>
              <CardHeader title="Internal" />
              <dl className="divide-y divide-slate-100 px-5 py-1">
                <Row label="Hiring manager">{v.hiringManager}</Row>
                <Row label="Approver">{v.approver}</Row>
                <Row label="Created">{fmtDate(v.createdAt)}</Row>
                <Row label="Updated">{fmtDateTime(v.updatedAt)}</Row>
              </dl>
            </Card>
            <Card className="p-5">
              <h3 className="text-sm font-semibold text-slate-900">More actions</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button size="sm" variant="secondary" icon={Copy} onClick={duplicate}>Duplicate as draft</Button>
                <Button
                  size="sm"
                  variant="dangerGhost"
                  icon={Trash2}
                  onClick={() => setDeleting(true)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {tab === 'activity' && (
        <Card>
          <ol className="divide-y divide-slate-100">
            {v.events.map((e, i) => (
              <li key={i} className="flex gap-4 px-5 py-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  {e.changeType.startsWith('STATUS') ? <Send className="h-3.5 w-3.5 text-slate-500" /> : e.changeType === 'CREATED' ? <Briefcase className="h-3.5 w-3.5 text-slate-500" /> : <Pencil className="h-3.5 w-3.5 text-slate-500" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-900">
                    <span className="font-medium">{e.changedBy}</span>{' '}
                    <span className="text-slate-600">{describe(e.changeType)}</span>
                  </p>
                  {e.notes && <p className="mt-0.5 text-sm text-slate-500">{e.notes}</p>}
                </div>
                <time className="shrink-0 text-xs text-slate-400"><Calendar className="mr-1 inline h-3 w-3" />{fmtDateTime(e.timestamp)}</time>
              </li>
            ))}
          </ol>
        </Card>
      )}

      <Modal
        open={Boolean(pending)}
        onClose={() => !busy && setPending(null)}
        title={`${ACTIONS[pending?.status]?.label || ''}?`}
        footer={
          <>
            <Button variant="ghost" onClick={() => setPending(null)} disabled={busy}>Cancel</Button>
            <Button loading={busy} onClick={run}>{ACTIONS[pending?.status]?.label}</Button>
          </>
        }
      >
        {pending && (
            <div className="space-y-4">
              <p>{ACTIONS[pending.status].confirm}</p>
              <p className="text-xs text-slate-500">
                {VACANCY_STATUS[v.status].label} → <span className="font-medium text-slate-700">{VACANCY_STATUS[pending.status].label}</span>
              </p>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Note for the activity log (optional)" rows={2} className="min-h-[64px]" maxLength={500} />
            </div>
        )}
      </Modal>

      {deleting && (
        <DeleteVacancyDialog
          vacancy={v}
          onClose={() => setDeleting(false)}
          onDone={(result) => {
            setDeleting(false);
            if (result === 'deleted') navigate('/admin/vacancies');
            else reload();
          }}
        />
      )}
    </>
  );
};

const describe = (type) => {
  const m = /^STATUS_CHANGE \((\w+) -> (\w+)\)$/.exec(type);
  if (m) return `changed status from ${VACANCY_STATUS[m[1]]?.label || m[1]} to ${VACANCY_STATUS[m[2]]?.label || m[2]}`;
  if (type === 'STATUS_CHANGE') return 'changed the status';
  if (type === 'CREATED') return 'created the vacancy';
  if (type === 'UPDATED') return 'edited the vacancy';
  if (type === 'RESEEDED') return 'reset the vacancy to seed content';
  return type.toLowerCase();
};

export default VacancyDetailPage;
