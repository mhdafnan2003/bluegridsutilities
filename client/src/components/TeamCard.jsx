import Picture from './ui/Picture';

/**
 * Leadership portrait card: 4:5 portrait, name (h3) and title.
 * Source portraits are framed inconsistently, so every card uses the same object-position to crop
 * them alike. Consistent studio-style portraits are still needed from Bluegrid.
 */
const TeamCard = ({ person }) => (
  <article className="card">
    <div className="media ratio-4-5">
      <Picture
        id={person.image}
        alt={`Portrait of ${person.name}`}
        position="50% 20%"
        sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
      />
    </div>
    <div className="card__body">
      <h3>{person.name}</h3>
      <p className="muted">{person.title}</p>
    </div>
  </article>
);

export default TeamCard;
