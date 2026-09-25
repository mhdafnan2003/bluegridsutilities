import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Picture from '../components/ui/Picture';
import ProcessSteps from '../components/ui/ProcessSteps';
import CTASection from '../components/ui/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import { SERVICES } from '../data/services';

const CheckList = ({ items }) => (
  <ul className="check-list">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const ServiceDetailPage = ({ service }) => {
  const enquiry = `/contact?service=${service.slug}`;
  const supporting = (service.supportingImages || []).filter((k) => k !== service.heroImage).slice(0, 2);
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const { begins, ends, excluded } = service.boundaries;

  return (
    <>
      <Seo title={service.title} description={service.intro} />
      <PageHero
        title={service.heading || service.title}
        intro={service.intro}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      >
        <div className="btn-row" style={{ marginTop: 24 }}>
          <Button to={enquiry}>Discuss this service</Button>
          <Button to="/services" variant="secondary">All services</Button>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="scope-heading">
        <div className="container-bg split split--55">
          <div>
            <SectionHeading id="scope-heading" title="What we do" />
            <CheckList items={service.scope} />
          </div>
          <div className="media ratio-16-9">
            <Picture id={service.heroImage} priority sizes="(min-width: 1024px) 540px, 100vw" />
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="process-heading">
        <div className="container-bg">
          <SectionHeading id="process-heading" title="How the work is delivered" />
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      <section className="section" aria-labelledby="boundaries-heading">
        <div className="container-bg">
          <SectionHeading id="boundaries-heading" title="Where our scope begins and ends" />
          <dl className="facts">
            <div><dt>Begins</dt><dd>{begins}</dd></div>
            <div><dt>Ends</dt><dd>{ends}</dd></div>
            <div><dt>Not included</dt><dd>{excluded}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="evidence-heading">
        <div className="container-bg split">
          <div>
            <SectionHeading id="evidence-heading" title="What you receive" />
            <CheckList items={service.evidence} />
          </div>
          {supporting.length > 0 && (
            <div className="grid-cards grid-cards--2">
              {supporting.map((k) => (
                <div className="media ratio-3-2" key={k}>
                  <Picture id={k} sizes="(min-width: 1024px) 280px, 50vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {service.example && (
        <section className="section" aria-labelledby="example-heading">
          <div className="container-bg">
            <SectionHeading id="example-heading" title={service.example.title} />
            <p className="prose">{service.example.text}</p>
          </div>
        </section>
      )}

      <CTASection
        id="service-cta"
        title="Discuss this service"
        text={`Tell us about your ${service.title.toLowerCase()} requirement and we will confirm how we can support it.`}
        to={enquiry}
        label="Discuss this service"
      />

      <nav className="section" aria-labelledby="other-heading" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container-bg">
          <h2 id="other-heading" style={{ fontSize: 24, lineHeight: '31px' }}>Other services</h2>
          <ul className="btn-row" style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
            {others.map((s) => (
              <li key={s.slug}><Link className="link-arrow" to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ServiceDetailPage;
