import { hero, profile, selectedWork } from '../data/content';

export default function Hero() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero__inner">
          <div className="hero__rule">
            {hero.rule.map((r, i) => (
              <span key={r}>
                {i > 0 && <span className="dot">/</span>} {r}
              </span>
            ))}
          </div>

          <div className="hero__grid">
            <div className="hero__text">
              <p className="hero__hello">Hello, I&rsquo;m</p>
              <h1 className="hero__name">{profile.name}</h1>
              <p className="hero__role">{hero.role}</p>
              <p className="hero__intro">{hero.intro}</p>
              <div className="hero__meta">
                <span className="cap cap--signal">{profile.scope}</span>
                <span className="cap cap--ghost">{profile.location}</span>
              </div>
            </div>

            <figure className="hero__portrait">
              <img src={hero.portrait} alt={hero.portraitAlt} />
            </figure>
          </div>
        </div>
      </header>

      <section className="pillars-band">
        <div className="wrap">
          <div className="pillars">
            {hero.pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <h2 className="pillar__title">{p.title}</h2>
                <p className="pillar__body">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="selected">
            <h2 className="selected__title">{selectedWork.title}</h2>
            <p className="selected__body">{selectedWork.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}
