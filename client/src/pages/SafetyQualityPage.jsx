import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import Picture from '../components/ui/Picture';
import CTASection from '../components/ui/CTASection';

/** One topic block: text beside a photo, alternating background. */
const Topic = ({ id, title, image, alt, tint, reverse, children }) => (
  <section id={id} className={`section${tint ? ' section--tint' : ''}`} aria-labelledby={`${id}-heading`}>
    <div className="container-bg">
      <div className={`split${reverse ? ' split--reverse' : ''}`}>
        <div className="stack">
          <h2 id={`${id}-heading`}>{title}</h2>
          {children}
        </div>
        <div className="media ratio-3-2">
          <Picture id={image} alt={alt} sizes="(min-width: 900px) 568px, 100vw" />
        </div>
      </div>
    </div>
  </section>
);

const SafetyQualityPage = () => (
  <>
    <Seo
      title="Safety and quality"
      description="How Bluegrid Utilities plans work, briefs and supervises teams, checks delivery and records completed work."
    />
    <PageHero
      title="Safety and quality"
      intro="Safe, planned work with supervision on site and clear records of what has been completed."
    />

    <Topic
      id="safety-leadership"
      title="Safety leadership"
      image="site-team-barriers"
      alt="Field team in orange high-visibility clothing working behind barriers and traffic signs"
    >
      <p>
        Management is responsible for suitable working arrangements, competent supervision and the resources teams
        need. Every worker is expected to follow site rules, report hazards and stop work where conditions are unsafe.
      </p>
      <p>
        We encourage early reporting of unsafe conditions and near misses, and share what we learn through briefings.
        Incidents are escalated promptly, made safe, recorded and investigated, with statutory reporting handled
        where it applies.
      </p>
    </Topic>

    <Topic
      id="rams"
      title="Planning and RAMS"
      image="rams-briefing"
      alt="Operatives in high-visibility clothing reviewing a risk assessment on a tablet at a site briefing"
      tint
      reverse
    >
      <p>
        Work is assessed before it starts. Task-specific risk assessments and method statements (RAMS) set out the
        scope and sequence of work, the hazards and their controls, emergency arrangements, plant and equipment,
        the competence needed and the personal protective equipment (PPE) required.
      </p>
      <p>
        Teams are briefed before work begins and their acknowledgement is recorded. Where site conditions change,
        the risks are reviewed at the point of work. Where excavation is involved, underground services are checked
        against available plans and detection equipment is used by competent people, following the HSE guidance
        HSG47, &ldquo;Avoiding danger from underground services&rdquo;.
      </p>
    </Topic>

    <Topic
      id="competence"
      title="Competence"
      image="site-briefing"
      alt="Operatives in orange high-visibility clothing gathered for a briefing beside site barriers"
    >
      <p>
        Training and qualifications need to match the work being done. We keep a record of the role-relevant
        training and cards held by each person, and check them before people are deployed to a project.
      </p>
      <p>
        These cards and registrations, for example those under the New Roads and Street Works Act (NRSWA) or the
        Energy and Utilities Skills Register (EUSR), are individual evidence of a person&rsquo;s competence. They are
        not company accreditations.
      </p>
    </Topic>

    <Topic
      id="delivery-checks"
      title="Delivery checks"
      image="street-works-lead"
      alt="Operatives in orange high-visibility clothing working over an open excavation"
      tint
      reverse
    >
      <p>Supervisors inspect work on site. Checks cover:</p>
      <ul className="check-list">
        <li>barriers, access and public protection</li>
        <li>excavation controls and use of PPE</li>
        <li>equipment condition</li>
        <li>documentation and housekeeping</li>
        <li>quality of the finished work</li>
      </ul>
      <p>Issues are corrected at the time and recorded.</p>
    </Topic>

    <Topic
      id="records"
      title="Completion records"
      image="careers-supervision"
      alt="Supervisor in orange high-visibility clothing recording notes on site"
    >
      <p>
        Completed work is recorded so the client can see what was done. Depending on the service, records can include
        photographs of the location, details of the work carried out and a completion record submitted to the client.
        Each <Link to="/services">service page</Link> lists the evidence we hand over.
      </p>
    </Topic>

    <Topic
      id="environment"
      title="Environmental care"
      image="site-ground-work"
      alt="Operative working at ground level in a site excavation with barriers behind"
      tint
      reverse
    >
      <p>
        Environmental controls are considered when work is planned. They cover waste and the responsible disposal of
        excavated material, spills and protection of drains and watercourses, dust, noise, vehicle idling and
        avoiding nuisance to the public.
      </p>
      <p>
        See our <Link to="/sustainability">sustainability</Link> page for more. Policy statements can be requested
        through the <Link to="/contact">contact page</Link>.
      </p>
    </Topic>

    <CTASection
      id="safety-cta-heading"
      title="Questions about how we work?"
      text="Contact us to discuss our safety arrangements or to request a policy statement."
    />
  </>
);

export default SafetyQualityPage;
