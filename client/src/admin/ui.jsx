import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleAlert, CircleCheck, LoaderCircle, X, Plus, Trash2, ArrowUp, ArrowDown, Eye, EyeOff } from 'lucide-react';
import { cn } from '../lib/utils';
import { APPLICATION_STATUS, VACANCY_STATUS } from './format';
import { ToastContext } from './hooks';

// ---------------------------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------------------------

const BUTTON = {
  primary: 'bg-[#0066ff] text-white hover:bg-[#0052cc] shadow-sm',
  secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
  dangerGhost: 'text-red-600 hover:bg-red-50',
};

export const Button = ({ variant = 'primary', size = 'md', to, loading, icon: Icon, className, children, ...props }) => {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
    size === 'sm' ? 'h-8 px-3 text-xs' : 'h-9 px-4 text-sm',
    BUTTON[variant],
    className,
  );
  const content = (
    <>
      {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  );
  if (to) return <Link to={to} className={cls} {...props}>{content}</Link>;
  return <button type="button" className={cls} disabled={loading || props.disabled} {...props}>{content}</button>;
};

const TONES = {
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
  zinc: 'bg-zinc-100 text-zinc-600 ring-zinc-200',
  blue: 'bg-blue-50 text-blue-700 ring-blue-200',
  indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  violet: 'bg-violet-50 text-violet-700 ring-violet-200',
  amber: 'bg-amber-50 text-amber-800 ring-amber-200',
  teal: 'bg-teal-50 text-teal-700 ring-teal-200',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  red: 'bg-red-50 text-red-700 ring-red-200',
};
const DOTS = {
  slate: 'bg-slate-400', zinc: 'bg-zinc-400', blue: 'bg-blue-500', indigo: 'bg-indigo-500', violet: 'bg-violet-500',
  amber: 'bg-amber-500', teal: 'bg-teal-500', green: 'bg-emerald-500', red: 'bg-red-500',
};

export const Badge = ({ tone = 'slate', dot = true, className, children }) => (
  <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset whitespace-nowrap', TONES[tone], className)}>
    {dot && <span className={cn('h-1.5 w-1.5 rounded-full', DOTS[tone])} />}
    {children}
  </span>
);

export const VacancyStatus = ({ vacancy }) => {
  if (vacancy.isExpired) return <Badge tone="amber">Expired</Badge>;
  const s = VACANCY_STATUS[vacancy.status] || VACANCY_STATUS.draft;
  return <Badge tone={s.tone}>{s.label}</Badge>;
};

export const ApplicationStatus = ({ status }) => {
  const s = APPLICATION_STATUS[status] || APPLICATION_STATUS.new;
  return <Badge tone={s.tone}>{s.label}</Badge>;
};

export const Card = ({ className, children, ...props }) => (
  <div className={cn('rounded-lg border border-slate-200 bg-white shadow-sm', className)} {...props}>{children}</div>
);

export const CardHeader = ({ title, description, action, className }) => (
  <div className={cn('flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4', className)}>
    <div className="min-w-0">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      {description && <p className="mt-0.5 text-xs text-slate-500">{description}</p>}
    </div>
    {action}
  </div>
);

export const PageHeader = ({ title, description, actions, back }) => (
  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="min-w-0">
      {back}
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </div>
    {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
  </div>
);

export const Spinner = ({ label = 'Loading…' }) => (
  <div className="flex items-center justify-center gap-2 py-16 text-sm text-slate-500">
    <LoaderCircle className="h-5 w-5 animate-spin text-[#0066ff]" /> {label}
  </div>
);

export const EmptyState = ({ icon: Icon, title, children, action }) => (
  <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
    {Icon && (
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
        <Icon className="h-5 w-5 text-slate-500" />
      </div>
    )}
    <p className="text-sm font-semibold text-slate-900">{title}</p>
    {children && <p className="mt-1 max-w-sm text-sm text-slate-500">{children}</p>}
    {action && <div className="mt-4">{action}</div>}
  </div>
);

export const ErrorBox = ({ error, onRetry }) => (
  <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
    <div className="flex-1">{error?.message || String(error)}</div>
    {onRetry && <button type="button" onClick={onRetry} className="font-medium underline">Retry</button>}
  </div>
);

// ---------------------------------------------------------------------------------------------
// Form fields
// ---------------------------------------------------------------------------------------------

const inputCls =
  'block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0066ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff]/20 disabled:bg-slate-50';

export const Field = ({ label, hint, error, required, children, className, htmlFor }) => (
  <div className={className}>
    {label && (
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    {children}
    {error ? <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p> : hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
  </div>
);

export const Input = ({ className, invalid, ...props }) => (
  <input className={cn(inputCls, invalid && 'border-red-400 focus:border-red-500 focus:ring-red-500/20', className)} {...props} />
);

/** Password input with a show/hide toggle. */
export const PasswordInput = ({ className, ...props }) => {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;
  return (
    <div className="relative">
      <Input {...props} type={visible ? 'text' : 'password'} className={cn('pr-10', className)} />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        aria-pressed={visible}
        title={visible ? 'Hide password' : 'Show password'}
        className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded-r-md text-slate-400 hover:text-slate-700 focus:outline-none focus-visible:text-[#0066ff]"
      >
        <Icon className="h-4 w-4" />
      </button>
    </div>
  );
};

export const Textarea = ({ className, invalid, ...props }) => (
  <textarea className={cn(inputCls, 'min-h-[96px] leading-relaxed', invalid && 'border-red-400', className)} {...props} />
);

export const Select = ({ className, children, ...props }) => (
  <select className={cn(inputCls, 'pr-8', className)} {...props}>{children}</select>
);

/** Editable list of short text items (responsibilities, requirements…). */
export const ListEditor = ({ value = [], onChange, placeholder, invalid, addLabel = 'Add item' }) => {
  const [draft, setDraft] = useState('');
  const set = (i, text) => onChange(value.map((v, j) => (j === i ? text : v)));
  const remove = (i) => onChange(value.filter((_, j) => j !== i));
  const move = (i, d) => {
    const next = [...value];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    onChange(next);
  };
  const add = () => {
    const t = draft.trim();
    if (!t) return;
    onChange([...value, t]);
    setDraft('');
  };
  return (
    <div className={cn('rounded-md border bg-slate-50/60 p-2', invalid ? 'border-red-400' : 'border-slate-200')}>
      {value.length > 0 && (
        <ol className="mb-2 space-y-1.5">
          {value.map((item, i) => (
            <li key={i} className="group flex items-start gap-2">
              <span className="mt-2 w-5 shrink-0 text-right text-xs tabular-nums text-slate-400">{i + 1}.</span>
              <textarea
                rows={1}
                value={item}
                onChange={(e) => set(i, e.target.value)}
                className={cn(inputCls, 'min-h-[38px] resize-y py-2')}
                aria-label={`Item ${i + 1}`}
              />
              <div className="flex shrink-0 items-center pt-1">
                <IconBtn label="Move up" disabled={i === 0} onClick={() => move(i, -1)}><ArrowUp className="h-3.5 w-3.5" /></IconBtn>
                <IconBtn label="Move down" disabled={i === value.length - 1} onClick={() => move(i, 1)}><ArrowDown className="h-3.5 w-3.5" /></IconBtn>
                <IconBtn label="Remove" danger onClick={() => remove(i)}><Trash2 className="h-3.5 w-3.5" /></IconBtn>
              </div>
            </li>
          ))}
        </ol>
      )}
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}
          placeholder={placeholder}
          className={inputCls}
        />
        <Button variant="secondary" icon={Plus} onClick={add} disabled={!draft.trim()}>{addLabel}</Button>
      </div>
    </div>
  );
};

const IconBtn = ({ label, danger, children, ...props }) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    className={cn('rounded p-1.5 text-slate-400 transition-colors disabled:opacity-30', danger ? 'hover:bg-red-50 hover:text-red-600' : 'hover:bg-slate-200 hover:text-slate-700')}
    {...props}
  >
    {children}
  </button>
);

// ---------------------------------------------------------------------------------------------
// Dialog + toasts
// ---------------------------------------------------------------------------------------------

export const Modal = ({ open, onClose, title, children, footer, width = 'max-w-md' }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    ref.current?.querySelector('textarea, input, select, button')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div ref={ref} className={cn('relative w-full rounded-lg bg-white shadow-xl', width)}>
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          <button type="button" onClick={onClose} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-5 py-4 text-sm text-slate-600">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-3 rounded-b-lg">{footer}</div>}
      </div>
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((message, tone = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, message, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);
  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 text-sm text-slate-800 shadow-lg">
            {t.tone === 'error' ? <CircleAlert className="h-5 w-5 shrink-0 text-red-500" /> : <CircleCheck className="h-5 w-5 shrink-0 text-emerald-500" />}
            <span className="pt-px">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
