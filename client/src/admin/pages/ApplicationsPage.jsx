import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../api';
import ApplicationsTable from '../ApplicationsTable';
import { Card, PageHeader } from '../ui';

const KEYS = ['vacancyId', 'status', 'q', 'sort', 'page'];

const ApplicationsPage = () => {
  const [params, setParams] = useSearchParams();
  const [vacancies, setVacancies] = useState([]);
  const filters = Object.fromEntries(KEYS.map((k) => [k, params.get(k) || '']));

  useEffect(() => {
    api.get('/meta').then((r) => setVacancies(r.data.vacancies)).catch(() => {});
  }, []);

  const onFiltersChange = (next) => {
    const p = new URLSearchParams();
    for (const k of KEYS) if (next[k] && !(k === 'page' && Number(next[k]) === 1) && !(k === 'sort' && next[k] === 'newest')) p.set(k, next[k]);
    setParams(p, { replace: true });
  };

  return (
    <>
      <PageHeader title="Applications" description="Every application submitted through the website, with CVs and screening answers." />
      <Card>
        <ApplicationsTable filters={filters} onFiltersChange={onFiltersChange} vacancies={vacancies} />
      </Card>
    </>
  );
};

export default ApplicationsPage;
