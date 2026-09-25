import { useState } from 'react';
import { Archive, TriangleAlert } from 'lucide-react';
import { api } from './api';
import { useToast } from './hooks';
import { Button, Modal } from './ui';

/**
 * Confirm and delete a vacancy. If it has applications, deleting them too needs an extra tick;
 * archiving is offered as the safer alternative. Calls onDone('deleted' | 'archived') on success.
 */
const DeleteVacancyDialog = ({ vacancy, onClose, onDone }) => {
  const toast = useToast();
  const [alsoApplications, setAlsoApplications] = useState(false);
  const [busy, setBusy] = useState(null);

  if (!vacancy) return null;
  const count = vacancy.applicationCount || 0;
  const plural = count === 1 ? 'application' : 'applications';

  const remove = async () => {
    setBusy('delete');
    try {
      const r = await api.del(`/vacancies/${vacancy.id}${count > 0 ? '?withApplications=true' : ''}`);
      toast(r.message || 'Vacancy deleted.');
      onDone('deleted');
    } catch (err) {
      toast(err.message, 'error');
      setBusy(null);
    }
  };

  const archive = async () => {
    setBusy('archive');
    try {
      await api.post(`/vacancies/${vacancy.id}/status`, { status: 'archived', notes: 'Archived instead of deleting' });
      toast('Vacancy archived. Its applications are kept.');
      onDone('archived');
    } catch (err) {
      toast(err.message, 'error');
      setBusy(null);
    }
  };

  return (
    <Modal
      open
      onClose={() => !busy && onClose()}
      title="Delete vacancy?"
      footer={
        <>
          <Button variant="ghost" onClick={onClose} disabled={Boolean(busy)}>Cancel</Button>
          {count > 0 && vacancy.status !== 'archived' && (
            <Button variant="secondary" icon={Archive} onClick={archive} loading={busy === 'archive'} disabled={Boolean(busy)}>Archive instead</Button>
          )}
          <Button variant="danger" onClick={remove} loading={busy === 'delete'} disabled={Boolean(busy) || (count > 0 && !alsoApplications)}>
            Delete permanently
          </Button>
        </>
      }
    >
      <p>
        <strong className="text-slate-900">{vacancy.title}</strong> <span className="font-mono text-xs text-slate-500">({vacancy.reference})</span> will be removed from the dashboard
        {vacancy.isOpen ? ' and from the website' : ''}. This cannot be undone.
      </p>
      {count > 0 && (
        <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-red-900">
          <p className="flex items-start gap-2 font-medium">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            This vacancy has {count} {plural}.
          </p>
          <label className="mt-3 flex items-start gap-2.5 text-sm">
            <input
              type="checkbox"
              checked={alsoApplications}
              onChange={(e) => setAlsoApplications(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-red-300 text-red-600 focus:ring-red-500"
            />
            <span>Also permanently delete the {count} {plural}, including CVs and notes.</span>
          </label>
          <p className="mt-2 text-xs text-red-800/80">To keep the candidates' records, choose “Archive instead”.</p>
        </div>
      )}
    </Modal>
  );
};

export default DeleteVacancyDialog;
