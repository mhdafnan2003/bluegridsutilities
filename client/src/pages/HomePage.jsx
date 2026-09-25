import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo';
import Button from '../components/ui/Button';
import Picture from '../components/ui/Picture';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import ProcessSteps from '../components/ui/ProcessSteps';
import CTASection from '../components/ui/CTASection';
import { SERVICES } from '../data/services';
import { DELIVERY_STEPS } from '../data/site';

const HomePage = () => (
  <>
    <Seo
      title="Bluegrid Utilities | Water metering and utility works delivery"
      description="Bluegrid Utilities supports water-metering programmes and associated utility works through field teams, project coordination and completion reporting."
    />

    <section className="hero" aria-labelledby="home-hero-heading">
      <div className="container-bg">
        <div className="hero__grid">
          <div className="hero__copy">
            <h1 id="home-hero-heading">Utility delivery, built on trust.</h1>
            <p className="lead">
              Bluegrid Utilities supports water-metering programmes and associated utility works through field teams,
              project coordination and completion reporting.
            </p>
            <div className="btn-row">
              <Button to="/services">Our services</Button>
              <Button to="/contact" variant="secondary">Discuss a project</Button>
            </div>
          </div>
          <div className="media ratio-hero">
            <Picture id="team-van" priority sizes="(min-width: 900px) 560px, 100vw" position="50% 40%" />
          </div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="home-services-heading">
      <div className="container-bg">
        <SectionHeading id="home-services-heading" title="Our services" />
        <div className="grid-cards">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          <Link className="link-arrow" to="/services">All services <span aria-hidden="true">→</span></Link>
        </p>
      </div>
    </section>

    <section className="section section--tint" aria-labelledby="home-who-heading">
      <div className="container-bg">
        <div className="split">
          <div className="media ratio-3-2">
            <Picture id="office-team" alt="Bluegrid team in the office beside the company logo" sizes="(min-width: 900px) 568px, 100vw" />
          </div>
          <div className="stack">
            <h2 id="home-who-heading">Who we are</h2>
            <p>
              Bluegrid Technology Ltd trades as Bluegrid Utilities, a UK-registered company supporting utility and
              infrastructure operations.
            </p>
            <p>Our approach is built on safe, planned delivery, supervision on site and clear records of completed work.</p>
            <div className="btn-row">
              <Button to="/about" variant="secondary">About Bluegrid</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="home-deliver-heading">
      <div className="container-bg">
        <SectionHeading id="home-deliver-heading" title="How we deliver">
          Every job follows the same four stages, from planning to the records we hand over.
        </SectionHeading>
        <ProcessSteps steps={DELIVERY_STEPS} />
        <p style={{ marginTop: 32 }}>
          <Link className="link-arrow" to="/projects">How we deliver our work <span aria-hidden="true">→</span></Link>
        </p>
      </div>
    </section>

    {/* "Our work" is omitted until Bluegrid supplies approved project evidence. */}

    <section className="section section--tint" aria-labelledby="home-careers-heading">
      <div className="container-bg">
        <div className="split split--reverse">
          <div className="media ratio-3-2">
            {/* careers-team: illustrative aerial view of a team in hi-vis; replace with a genuine Bluegrid team photo. */}
            <Picture id="careers-team" alt="" sizes="(min-width: 900px) 568px, 100vw" />
          </div>
          <div className="stack">
            <h2 id="home-careers-heading">Work with us</h2>
            <p>
              Our field and project teams are at the centre of how we deliver. We support people with briefings,
              supervision and clear expectations on every job.
            </p>
            <p>Bluegrid recruits when project requirements arise. Current vacancies are listed on our careers pages.</p>
            <div className="btn-row">
              <Button to="/careers/jobs">View vacancies</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      id="home-cta-heading"
      title="Discuss a project with us"
      text="Tell us about the work you need supported and we will respond to your enquiry."
    />
  </>
);

export default HomePage;
