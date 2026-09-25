import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Picture from '../components/ui/Picture';
import ProcessSteps from '../components/ui/ProcessSteps';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/ui/CTASection';
import { DELIVERY_STEPS } from '../data/site';

const RECEIVE = [
  'Progress reports summarising completed and outstanding work',
  'Completion records with photographs',
  'An issue log with actions and status',
];

const PHOTOS = [
  { id: 'team-van', caption: 'A Bluegrid field team with a company van.' },
  { id: 'site-briefing', caption: 'A team briefing beside site barriers.' },
  { id: 'excavation-team', caption: 'Operatives working in a small excavation.' },
];

const ProjectsPage = () => (
  <>
    <Seo
      title="How we deliver our work"
      description="How Bluegrid Utilities plans, mobilises, delivers and verifies field work, and the records clients receive."
    />
    <PageHero
      title="How we deliver our work"
      intro="Every job follows the same four stages, so clients know how work is managed and what evidence they will receive."
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Our work' }]}
    />

    <section className="section" aria-labelledby="approach-heading">
      <div className="container-bg">
        <SectionHeading id="approach-heading" title="Our delivery approach" />
        <ProcessSteps steps={DELIVERY_STEPS} />
      </div>
    </section>

    <section className="section section--tint" aria-labelledby="receive-heading">
      <div className="container-bg">
        <SectionHeading id="receive-heading" title="What clients receive" />
        <ul className="check-list">
          {RECEIVE.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>

    <section className="section" aria-labelledby="teams-heading">
      <div className="container-bg">
        <SectionHeading id="teams-heading" title="Our field teams" />
        <div className="grid-cards">
          {PHOTOS.map((p) => (
            <figure key={p.id} style={{ margin: 0 }}>
              <div className="media ratio-3-2">
                <Picture id={p.id} sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <figcaption className="caption">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--tint" aria-labelledby="examples-heading">
      <div className="container-bg">
        <SectionHeading id="examples-heading" title="Project examples" />
        <p className="prose">
          We publish project examples only once the client and site permissions are confirmed. If you would like to
          discuss our experience for a specific requirement, please get in touch.
        </p>
        <div className="btn-row" style={{ marginTop: 24 }}>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </div>
      </div>
    </section>

    <CTASection title="Discuss a requirement" text="Tell us about the work and we will confirm how we can support it." label="Make an enquiry" />
  </>
);

export default ProjectsPage;
