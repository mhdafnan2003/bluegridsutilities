import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Send } from 'lucide-react';
import { api } from '../api';
import { toDateInput } from '../format';
import { Button, Card, ErrorBox, Field, Input, ListEditor, PageHeader, Spinner, Textarea } from '../ui';
import { useToast } from '../hooks';

const EMPTY = {
  title: '',
  shortTitle: '',
  reference: '',
  category: 'Field operations',
  town: '',
  location: '',
  employmentType: '',
  engagementTypes: [],
  workingPattern: '',
  salaryRate: '',
  displaySalary: true,
  openingDate: '',
  closingDate: '',
  roleSummary: '',
  keyResponsibilities: [],
  essentialRequirements: [],
  desirableRequirements: [],
  requiredCardsLicences: [],
  payAndBenefits: [],
  rightToWorkSponsorship: 'Applicants must possess existing right to work in the UK. Bluegrid Utilities does not provide visa sponsorship for this vacancy.',
  hiringManager: '',
  approver: '',
  slug: '',
  seoTitle: '',
  seoDescription: '',
};

const Section = ({ title, description, children }) => (
  <Card className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-3">
    <div>
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </div>
    <div className="space-y-5 lg:col-span-2">{children}</div>
  </Card>
);

const VacancyFormPage = () => {
  const { id } = useParams();
  const editing = Boolean(id);
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [loadError, setLoadError] = useState(null);
  const [loading, setLoading] = useState(editing);
  const [saving, setSaving] = useState(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [categories, setCategories] = useState(['Field operations']);

  useEffect(() => {
    api.get('/meta').then((r) => setCategories(r.data.categories)).catch(() => {});
    if (!editing) return;
    api.get(`/vacancies/${id}`)
      .then(({ data }) => {
        const next = { ...EMPTY };
        for (const k of Object.keys(EMPTY)) if (data[k] !== null && data[k] !== undefined) next[k] = data[k];
        next.openingDate = toDateInput(data.openingDate);
        next.closingDate = toDateInput(data.closingDate);
        setForm(next);
      })
      .catch(setLoadError)
      .finally(() => setLoading(false));
  }, [editing, id]);

  const set = (key) => (e) => {
    const value = e?.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = async (status) => {
    setSaving(status || 'save');
    setErrors({});
    setFormError(null);
    const body = { ...form };
    if (!editing) body.status = status;
    try {
      const { data } = editing ? await api.put(`/vacancies/${id}`, body) : await api.post('/vacancies', body);
      toast(editing ? 'Vacancy saved.' : status === 'published' ? 'Vacancy published to the website.' : 'Vacancy saved as draft.');
      navigate(`/admin/vacancies/${data.id}`);
    } catch (err) {
      setErrors(err.fields || {});
      setFormError(err);
      setSaving(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) return <Spinner />;
  if (loadError) return <ErrorBox error={loadError} />;

  const f = (key, props = {}) => ({ id: key, value: form[key] ?? '', onChange: set(key), invalid: Boolean(errors[key]), ...props });

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(editing ? undefined : 'draft'); }} noValidate>
      <PageHeader
        back={
          <Link to={editing ? `/admin/vacancies/${id}` : '/admin/vacancies'} className="mb-2 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> {editing ? 'Back to vacancy' : 'Vacancies'}
          </Link>
        }
        title={editing ? 'Edit vacancy' : 'New vacancy'}
        description={editing ? form.title : 'Fill in the details candidates will see on the vacancy page.'}
      />

      {formError && <div className="mb-6"><ErrorBox error={formError} /></div>}

      <div className="space-y-6">
        <Section title="Role" description="How the vacancy is named and grouped on the website.">
          <Field label="Job title" required error={errors.title} htmlFor="title" hint="Shown as the main heading, e.g. “Water Meter Installation Operative – Digging & Reinstatement”.">
            <Input {...f('title')} maxLength={150} />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Short title" error={errors.shortTitle} htmlFor="shortTitle" hint="Used in page titles. Defaults to the job title.">
              <Input {...f('shortTitle')} maxLength={100} />
            </Field>
            <Field label="Category" required error={errors.category} htmlFor="category">
              <Input {...f('category')} list="category-options" maxLength={80} />
              <datalist id="category-options">{categories.map((c) => <option key={c} value={c} />)}</datalist>
            </Field>
          </div>
          <Field label="Reference" error={errors.reference} htmlFor="reference" hint="Leave blank to generate one, e.g. BG-FIE-COV-2026.">
            <Input {...f('reference')} className="font-mono uppercase sm:max-w-xs" maxLength={40} />
          </Field>
        </Section>

        <Section title="Location and terms" description="Shown in the vacancy summary line and on the application form.">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Town" error={errors.town} htmlFor="town" hint="Short name, e.g. Coventry.">
              <Input {...f('town')} maxLength={80} />
            </Field>
            <Field label="Location" required error={errors.location} htmlFor="location" hint="e.g. Coventry and surrounding operational areas.">
              <Input {...f('location')} maxLength={150} />
            </Field>
            <Field label="Employment type" required error={errors.employmentType} htmlFor="employmentType" hint="e.g. Permanent full-time or CIS subcontract.">
              <Input {...f('employmentType')} maxLength={120} />
            </Field>
            <Field label="Working pattern" error={errors.workingPattern} htmlFor="workingPattern" hint="e.g. Monday – Friday (standard site hours).">
              <Input {...f('workingPattern')} maxLength={120} />
            </Field>
          </div>
          <Field
            label="Engagement options"
            required
            error={errors.engagementTypes}
            hint="The routes candidates choose between on the application form. Put the PAYE/employed route first — candidates choosing any other route are asked for their CIS status."
          >
            <ListEditor value={form.engagementTypes} onChange={set('engagementTypes')} placeholder="e.g. Permanent full-time (PAYE employment)" addLabel="Add" invalid={Boolean(errors.engagementTypes)} />
          </Field>
        </Section>

        <Section title="Pay and benefits">
          <Field label="Pay / rate" error={errors.salaryRate} htmlFor="salaryRate" hint="e.g. Permanent PAYE: £34,000 per annum | CIS subcontract: £180–£220 per day.">
            <Input {...f('salaryRate')} maxLength={300} />
          </Field>
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" checked={form.displaySalary} onChange={set('displaySalary')} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0066ff] focus:ring-[#0066ff]" />
            <span>
              <span className="font-medium text-slate-700">Show pay on the website</span>
              <span className="block text-slate-500">Untick to keep the rate internal.</span>
            </span>
          </label>
          <Field label="Benefits" error={errors.payAndBenefits}>
            <ListEditor value={form.payAndBenefits} onChange={set('payAndBenefits')} placeholder="e.g. Full branded PPE and specialist tooling provided" />
          </Field>
        </Section>

        <Section title="Dates" description="Vacancies stop accepting applications automatically at the closing date.">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Opening date" error={errors.openingDate} htmlFor="openingDate" hint="Defaults to today.">
              <Input {...f('openingDate')} type="date" />
            </Field>
            <Field label="Closing date" required error={errors.closingDate} htmlFor="closingDate" hint="Closes at 5pm on this day.">
              <Input {...f('closingDate')} type="date" />
            </Field>
          </div>
        </Section>

        <Section title="Role details" description="The main content of the vacancy page.">
          <Field label="Role summary" required error={errors.roleSummary} htmlFor="roleSummary" hint="Two or three sentences. The first lines are shown on the vacancies list.">
            <Textarea {...f('roleSummary')} rows={4} maxLength={3000} />
          </Field>
          <Field label="Key responsibilities" error={errors.keyResponsibilities}>
            <ListEditor value={form.keyResponsibilities} onChange={set('keyResponsibilities')} placeholder="Add a responsibility" />
          </Field>
        </Section>

        <Section title="Requirements">
          <Field label="Essential requirements" error={errors.essentialRequirements}>
            <ListEditor value={form.essentialRequirements} onChange={set('essentialRequirements')} placeholder="Add an essential requirement" />
          </Field>
          <Field label="Desirable requirements" error={errors.desirableRequirements}>
            <ListEditor value={form.desirableRequirements} onChange={set('desirableRequirements')} placeholder="Add a desirable requirement" />
          </Field>
          <Field label="Required cards and licences" error={errors.requiredCardsLicences}>
            <ListEditor value={form.requiredCardsLicences} onChange={set('requiredCardsLicences')} placeholder="e.g. EUSR National Water Hygiene Card" />
          </Field>
          <Field label="Right to work and sponsorship" error={errors.rightToWorkSponsorship} htmlFor="rightToWorkSponsorship">
            <Textarea {...f('rightToWorkSponsorship')} rows={2} maxLength={600} className="min-h-[64px]" />
          </Field>
        </Section>

        <Section title="Internal" description="Never shown on the website.">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Hiring manager" error={errors.hiringManager} htmlFor="hiringManager">
              <Input {...f('hiringManager')} maxLength={100} />
            </Field>
            <Field label="Approver" error={errors.approver} htmlFor="approver">
              <Input {...f('approver')} maxLength={100} />
            </Field>
          </div>
        </Section>

        <Section title="Search and sharing" description="Optional. Sensible values are generated when left blank.">
          <Field label="Web address" error={errors.slug} htmlFor="slug" hint={`/careers/jobs/${form.slug || '(generated from the title)'}${editing ? ' — changing this breaks existing links.' : ''}`}>
            <Input {...f('slug')} className="font-mono" maxLength={80} />
          </Field>
          <Field label="Search title" error={errors.seoTitle} htmlFor="seoTitle">
            <Input {...f('seoTitle')} maxLength={120} />
          </Field>
          <Field label="Search description" error={errors.seoDescription} htmlFor="seoDescription">
            <Textarea {...f('seoDescription')} rows={2} maxLength={320} className="min-h-[64px]" />
          </Field>
        </Section>
      </div>

      <div className="sticky bottom-0 z-10 -mx-4 mt-6 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button variant="ghost" to={editing ? `/admin/vacancies/${id}` : '/admin/vacancies'}>Cancel</Button>
          {editing ? (
            <Button type="submit" icon={Save} loading={saving === 'save'}>Save changes</Button>
          ) : (
            <>
              <Button type="submit" variant="secondary" icon={Save} loading={saving === 'draft'} disabled={Boolean(saving)}>Save as draft</Button>
              <Button icon={Send} loading={saving === 'published'} disabled={Boolean(saving)} onClick={() => submit('published')}>Publish now</Button>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default VacancyFormPage;
