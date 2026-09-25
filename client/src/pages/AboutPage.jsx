import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Picture from '../components/ui/Picture';
import SectionHeading from '../components/ui/SectionHeading';
import DirectorMessage from '../components/DirectorMessage';
import TeamCard from '../components/TeamCard';
import { LEADERSHIP, SITE } from '../data/site';
import directorBanner from '../assets/images/director_message_banner.jpg';

const AboutPage = () => (
  <>
    <Seo
      title="About Bluegrid Utilities"
      description="About Bluegrid Utilities: who we are, our leadership, how we work and company information."
    />
    <section id="director-message-banner" aria-label="A message from our Managing Director">
      <img
        src={directorBanner}
        alt="A message from our Managing Director, Selbert George: Building trust through the work we do."
        className="block w-full h-auto"
        width="1983"
        height="793"
        fetchpriority="high"
      />
    </section>
    <PageHero
      title="About Bluegrid Utilities"
      intro="A UK-registered company supporting utility and infrastructure operations with supervised field teams and clear records."
    />

    <section id="who-we-are" className="section" aria-labelledby="who-we-are-heading">
      <div className="container-bg">
        <div className="split">
          <div className="stack">
            <h2 id="who-we-are-heading">Who we are</h2>
            <p>
              {SITE.legalName} trades as {SITE.name}. We support water-metering programmes and associated utility
              works through field teams, project coordination and completion reporting.
            </p>
            <p>Our approach is built on safe, planned delivery, supervision on site and clear records of the work we complete.</p>
            <div className="btn-row">
              <Button to="/services" variant="secondary">Our services</Button>
            </div>
          </div>
          <div className="media ratio-3-2">
            <Picture id="office-team" alt="Bluegrid team in the office beside the company logo" sizes="(min-width: 900px) 568px, 100vw" />
          </div>
        </div>
      </div>
    </section>

    <div className="section--tint">
      <DirectorMessage />
    </div>

    <section id="leadership" className="section" aria-labelledby="leadership-heading">
      <div className="container-bg">
        <SectionHeading id="leadership-heading" title="Leadership" />
        <div className="grid-cards">
          {LEADERSHIP.map((p) => (
            <TeamCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>

    <section id="how-we-work" className="section section--tint" aria-labelledby="how-we-work-heading">
      <div className="container-bg">
        <div className="split">
          <div className="stack">
            <h2 id="how-we-work-heading">How we work</h2>
            <ul className="check-list">
              <li>Work is planned before teams mobilise, with risk assessments and method statements briefed to everyone involved.</li>
              <li>Field teams are supervised on site.</li>
              <li>Completed work is checked and recorded, and the records are handed to the client.</li>
              <li>We work responsibly with clients and respect the communities where we work.</li>
            </ul>
            <p>
              <Link className="link-arrow" to="/safety-quality">Safety and quality <span aria-hidden="true">→</span></Link>
            </p>
          </div>
          <div className="media ratio-3-2">
            <Picture id="site-briefing" alt="Operatives in orange high-visibility clothing gathered for a briefing beside site barriers" sizes="(min-width: 900px) 568px, 100vw" />
          </div>
        </div>
      </div>
    </section>

    <section id="growing-responsibly" className="section" aria-labelledby="growing-responsibly-heading">
      <div className="container-bg">
        <div className="prose stack">
          <h2 id="growing-responsibly-heading">Growing responsibly</h2>
          <p>
            As Bluegrid grows, our focus stays on safe, well-planned delivery, on training the people who carry out
            the work, and on respect for the communities our work serves.
          </p>
          <p>
            Read more about our day-to-day practice on the{' '}
            <Link to="/sustainability">sustainability</Link> page.
          </p>
        </div>
      </div>
    </section>

    <section id="company-information" className="section section--tint" aria-labelledby="company-information-heading">
      <div className="container-bg">
        <SectionHeading id="company-information-heading" title="Company information" />
        <dl className="facts">
          <div>
            <dt>Legal name</dt>
            <dd>{SITE.legalName}, trading as {SITE.name}</dd>
          </div>
          <div>
            <dt>Company number</dt>
            <dd>{SITE.companyNumber}, registered in England and Wales</dd>
          </div>
          {SITE.offices.map((o) => (
            <div key={o.id}>
              <dt>{o.label}</dt>
              <dd>{o.lines.join(', ')}</dd>
            </div>
          ))}
          <div>
            <dt>Enquiries</dt>
            <dd><a href={`mailto:${SITE.emails.enquiries}`}>{SITE.emails.enquiries}</a></dd>
          </div>
          <div>
            <dt>Recruitment</dt>
            <dd><a href={`mailto:${SITE.emails.recruitment}`}>{SITE.emails.recruitment}</a></dd>
          </div>
          <div>
            <dt>Telephone</dt>
            <dd><a href={SITE.phone.href}>{SITE.phone.display}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  </>
);

export default AboutPage;
