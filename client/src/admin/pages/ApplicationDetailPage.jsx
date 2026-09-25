import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Download, FileText, Trash2, MessageSquare, Send, CircleCheck, TriangleAlert, Calendar } from 'lucide-react';
import { api } from '../api';
import { APPLICATION_ORDER, APPLICATION_STATUS, fmtBytes, fmtDate, fmtDateTime } from '../format';
import { ApplicationStatus, Button, Card, CardHeader, ErrorBox, Modal, PageHeader, Spinner, Textarea } from '../ui';
import { useApi, useToast } from '../hooks';
import { cn } from '../../lib/utils';

const Row = ({ label, children }) => (
  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm text-slate-500">{label}</dt>
    <dd className="text-sm text-slate-900 sm:col-span-2">{children || <span className="text-slate-400">Not provided</span>}</dd>
  </div>
);

const Timeline = ({ events }) => (
  <ol className="relative space-y-5 before:absolute before:bottom-2 before:left-[15px] before:top-2 before:w-px before:bg-slate-200">
    {events.map((e) => {
      const Icon = e.type === 'NOTE' ? MessageSquare : e.type === 'SUBMITTED' ? Send : CircleCheck;
      return (
        <li key={e.id} className="relative flex gap-3">
          <div className={cn('relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-4 ring-white', e.type === 'NOTE' ? 'bg-amber-50' : 'bg-slate-100')}>
            <Icon className={cn('h-3.5 w-3.5', e.type === 'NOTE' ? 'text-amber-600' : 'text-slate-500')} />
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <p className="text-sm text-slate-900">
              <span className="font-medium">{e.actor}</span>{' '}
              <span className="text-slate-600">
                {e.type === 'NOTE' && 'added a note'}
                {e.type === 'SUBMITTED' && 'submitted the application'}
                {e.type === 'STATUS_CHANGE' && (
                  <>moved to <span className="font-medium text-slate-900">{APPLICATION_STATUS[e.toStatus]?.label || e.toStatus}</span></>
                )}
              </span>
            </p>
            <time className="text-xs text-slate-400">{fmtDateTime(e.createdAt)}</time>
            {e.note && (
              <p className={cn('mt-2 whitespace-pre-line rounded-md p-3 text-sm', e.type === 'NOTE' ? 'border border-amber-100 bg-amber-50/60 text-slate-800' : 'bg-slate-50 text-slate-600')}>{e.note}</p>
            )}
          </div>
        </li>
      );
    })}
  </ol>
);

const ApplicationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { data: a, error, loading, reload, setData } = useApi(() => api.get(`/applications/${id}`).then((r) => r.data), [id]);
  const [note, setNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);
  const [stage, setStage] = useState(null); // target status being confirmed
  const [stageNote, setStageNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (loading && !a) return <Spinner />;
  if (error) return <ErrorBox error={error} onRetry={reload} />;

  const changeStage = async () => {
    setBusy(true);
    try {
      const { data } = await api.patch(`/applications/${a.id}/status`, { status: stage, note: stageNote });
      setData({ ...a, ...data });
      toast(`Moved to ${APPLICATION_STATUS[stage].label}.`);
      setStage(null);
      setStageNote('');
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      setBusy(false);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    setSavingNote(true);
    try {
      const { data } = await api.post(`/applications/${a.id}/notes`, { note });
      setData({ ...a, events: data });
      setNote('');
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      setSavingNote(false);
    }
  };

  const downloadCv = async () => {
    setDownloading(true);
    try {
      await api.download(`/applications/${a.id}/cv`, a.cv.filename);
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      setDownloading(false);
    }
  };

  const remove = async () => {
    setBusy(true);
    try {
      await api.del(`/applications/${a.id}`);
      toast('Application deleted.');
      navigate('/admin/applications');
    } catch (err) {
      toast(err.message, 'error');
      setBusy(false);
    }
  };

  return (
    <>
      <PageHeader
        back={
          <button type="button" onClick={() => navigate(-1)} className="mb-2 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        }
        title={a.fullName}
        description={
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <ApplicationStatus status={a.status} />
            <span>
              Applied for{' '}
              <Link to={`/admin/vacancies/${a.vacancyId}`} className="font-medium text-slate-700 hover:text-[#0066ff]">{a.vacancyTitle}</Link>
            </span>
            <span className="text-slate-400">·</span>
            <span>{fmtDateTime(a.submittedAt)}</span>
          </span>
        }
        actions={
          <>
            <Button variant="secondary" icon={Mail} onClick={() => { window.location.href = `mailto:${a.email}?subject=${encodeURIComponent(`Your application: ${a.vacancyTitle} (${a.vacancyReference})`)}`; }}>
              Email candidate
            </Button>
            {a.cv && <Button icon={Download} onClick={downloadCv} loading={downloading}>Download CV</Button>}
          </>
        }
      />

      {a.emailStatus === 'failed' && (
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <p>The notification email to the recruitment inbox failed ({a.emailError}). The application is safely stored here.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <Card>
            <CardHeader title="Contact" />
            <div className="grid gap-4 px-5 py-4 sm:grid-cols-3">
              <a href={`mailto:${a.email}`} className="flex min-w-0 items-center gap-2.5 text-sm text-slate-700 hover:text-[#0066ff]">
                <Mail className="h-4 w-4 shrink-0 text-slate-400" /><span className="truncate">{a.email}</span>
              </a>
              <a href={`tel:${a.phone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-[#0066ff]">
                <Phone className="h-4 w-4 shrink-0 text-slate-400" />{a.phone}
              </a>
              <span className="flex items-center gap-2.5 text-sm text-slate-700">
                <MapPin className="h-4 w-4 shrink-0 text-slate-400" />{[a.town, a.postcode].filter(Boolean).join(', ')}
              </span>
            </div>
          </Card>

          <Card>
            <CardHeader title="Screening answers" />
            <dl className="divide-y divide-slate-100 px-5">
              <Row label="Engagement route">{a.engagementRoute}</Row>
              {a.cisStatus && <Row label="CIS status">{a.cisStatus}</Row>}
              <Row label="Right to work">{a.rightToWork}</Row>
              <Row label="Needs sponsorship">{a.sponsorship}</Row>
              <Row label="Driving licence">{a.drivingLicence}</Row>
              <Row label="Interview availability">{a.interviewAvailability}</Row>
              <Row label="Earliest start">{a.startDate ? fmtDate(a.startDate) : null}</Row>
            </dl>
          </Card>

          <Card>
            <CardHeader title="Experience and qualifications" />
            <dl className="divide-y divide-slate-100 px-5">
              <Row label="Years of experience">{a.experienceYears}</Row>
              <Row label="Certificates">
                {a.certificates.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {a.certificates.map((c) => <span key={c} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{c}</span>)}
                  </div>
                )}
              </Row>
              <Row label="Other certificates">{a.otherCertificates}</Row>
              <Row label="Relevant experience">{a.relevantExperience && <p className="whitespace-pre-line leading-relaxed">{a.relevantExperience}</p>}</Row>
              <Row label="CV">
                {a.cv && (
                  <button type="button" onClick={downloadCv} className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-left hover:border-[#0066ff] hover:bg-blue-50/40">
                    <FileText className="h-5 w-5 text-[#0066ff]" />
                    <span>
                      <span className="block text-sm font-medium text-slate-900">{a.cv.filename}</span>
                      <span className="block text-xs text-slate-500">{fmtBytes(a.cv.size)} · click to download</span>
                    </span>
                  </button>
                )}
              </Row>
            </dl>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Stage" description="Move the candidate through your hiring process." />
            <div className="grid grid-cols-2 gap-2 p-4">
              {APPLICATION_ORDER.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => s !== a.status && setStage(s)}
                  aria-pressed={s === a.status}
                  className={cn(
                    'rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors',
                    s === a.status ? 'border-[#0066ff] bg-blue-50 text-[#0052cc]' : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50',
                  )}
                >
                  {APPLICATION_STATUS[s].label}
                </button>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="Notes and activity" description="Visible to dashboard users only." />
            <form onSubmit={addNote} className="border-b border-slate-100 p-4">
              <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add an internal note…" rows={3} maxLength={2000} className="min-h-[80px]" />
              <div className="mt-2 flex justify-end">
                <Button type="submit" size="sm" loading={savingNote} disabled={!note.trim()}>Add note</Button>
              </div>
            </form>
            <div className="p-4"><Timeline events={a.events} /></div>
          </Card>

          <Card className="p-5">
            <h3 className="text-sm font-semibold text-slate-900">Data retention</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Application <span className="font-mono">{a.id}</span>. Deleting removes the candidate's details and CV permanently, for example when a retention period ends or on request.
            </p>
            <Button size="sm" variant="dangerGhost" icon={Trash2} className="mt-3 -ml-3" onClick={() => setConfirmDelete(true)}>Delete application</Button>
          </Card>
        </div>
      </div>

      <Modal
        open={Boolean(stage)}
        onClose={() => !busy && setStage(null)}
        title={stage ? `Move to ${APPLICATION_STATUS[stage].label}` : ''}
        footer={
          <>
            <Button variant="ghost" onClick={() => setStage(null)} disabled={busy}>Cancel</Button>
            <Button loading={busy} onClick={changeStage}>Confirm</Button>
          </>
        }
      >
        <p className="mb-3">
          <span className="font-medium text-slate-900">{a.fullName}</span> will move from {APPLICATION_STATUS[a.status].label} to{' '}
          <span className="font-medium text-slate-900">{stage && APPLICATION_STATUS[stage].label}</span>. The candidate is not notified automatically.
        </p>
        <Textarea value={stageNote} onChange={(e) => setStageNote(e.target.value)} placeholder="Reason or note (optional)" rows={2} className="min-h-[64px]" maxLength={1000} />
      </Modal>

      <Modal
        open={confirmDelete}
        onClose={() => !busy && setConfirmDelete(false)}
        title="Delete application?"
        footer={
          <>
            <Button variant="ghost" onClick={() => setConfirmDelete(false)} disabled={busy}>Cancel</Button>
            <Button variant="danger" loading={busy} onClick={remove}>Delete permanently</Button>
          </>
        }
      >
        <p>
          This permanently deletes {a.fullName}'s application, answers, notes{a.cv ? ' and CV' : ''}. This cannot be undone.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500"><Calendar className="h-3.5 w-3.5" /> Submitted {fmtDateTime(a.submittedAt)}</p>
      </Modal>
    </>
  );
};

export default ApplicationDetailPage;
