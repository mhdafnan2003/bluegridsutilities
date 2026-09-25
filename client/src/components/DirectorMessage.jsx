import Picture from './ui/Picture';
import { DIRECTOR_MESSAGE } from '../data/site';

/**
 * Message from the Managing Director. Text left (~55%), image right; on mobile the image comes first.
 * The image sits beside the text, never behind it.
 * TODO(assets): the supplied 1536x585 landscape photo is not in the repo yet. Swap it in for
 * `portrait-selbert` once optimised (and relax the ratio); do not crop or alter the original.
 */
const DirectorMessage = ({ id = 'director-message' }) => (
  <section id={id} className="section" aria-labelledby={`${id}-heading`}>
    <div className="container-bg">
      <div className="split split--55 split--reverse">
        <div className="media ratio-4-5" style={{ maxWidth: 420, width: '100%', justifySelf: 'center' }}>
          <Picture
            id="portrait-selbert"
            alt={`Portrait of ${DIRECTOR_MESSAGE.name}, ${DIRECTOR_MESSAGE.title}`}
            position="50% 20%"
            sizes="(min-width: 900px) 420px, 100vw"
          />
        </div>
        <div className="stack">
          <p className="label">Message from the Managing Director</p>
          <h2 id={`${id}-heading`}>{DIRECTOR_MESSAGE.heading}</h2>
          <div className="prose stack">
            {DIRECTOR_MESSAGE.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {/* Signature image slot: add an <img> here once an approved signature file is supplied. */}
          <p>
            <strong>{DIRECTOR_MESSAGE.name}</strong>
            <br />
            {DIRECTOR_MESSAGE.title}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DirectorMessage;
