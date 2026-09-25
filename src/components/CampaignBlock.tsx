import type { Campaign } from '../data/campaigns';
import Metrics from './Metrics';
import Placeholder from './Placeholder';
import Reveal from './Reveal';

type Props = { campaign: Campaign; tone: 'paper' | 'ink' | 'dim' };

export default function CampaignBlock({ campaign: c, tone }: Props) {
  return (
    <section id={c.id} className={`band band--${tone}`}>
      <div className="wrap">
        <div className="head">
          <div className="head__row">
            <span className="head__num">{c.num}</span>
            <h2>{c.title}</h2>
          </div>
        </div>

        <div className="camp__top">
          <div>
            <div className="camp__org">{c.org}</div>
            <p>{c.objective}</p>
            <div className="camp__period">{c.period}</div>
          </div>

          <div className="facts">
            <div>
              <div className="fact__label">Who it had to reach</div>
              <p className="fact__value">{c.audience}</p>
            </div>
            <div>
              <div className="fact__label">The approach</div>
              <p className="fact__value">{c.approach}</p>
            </div>
          </div>
        </div>

        <Metrics items={c.kpis} />

        {c.timeline.length > 0 && (
          <div className="timeline">
            {c.timeline.map((t, i) => (
              <div className="tl" key={`${t.when}-${i}`}>
                <div className="tl__when">{t.when}</div>
                <p className="tl__what">{t.what}</p>
              </div>
            ))}
          </div>
        )}

        {c.assets.length > 0 && (
          <div className="assets">
            {c.assets.map((a) => (
              <Reveal key={a.id}>
                <article className="asset">
                  <div className="asset__frame">
                    {a.badge && <span className="cap cap--signal asset__badge">{a.badge}</span>}
                    {a.src ? (
                      <video src={a.src} poster={a.poster} controls playsInline preload="metadata" />
                    ) : a.image ? (
                      <img src={a.image} alt={a.title} loading="lazy" />
                    ) : (
                      <Placeholder label="Asset to be added" />
                    )}
                  </div>
                  <h3 className="asset__title">
                    {a.link ? (
                      <a href={a.link} target="_blank" rel="noreferrer">
                        {a.title} ↗
                      </a>
                    ) : (
                      a.title
                    )}
                  </h3>
                  <p className="asset__why">{a.why}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {c.materials && c.materials.length > 0 && (
          <div className="gal gal--wide">
            {c.materials.map((m, i) => (
              <figure className="figure" key={i}>
                {m.src ? (
                  <img src={m.src} alt={m.caption} loading="lazy" />
                ) : (
                  <Placeholder label="Image to be added" />
                )}
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {c.note && (
          <p style={{ marginTop: '2rem' }}>
            <span className="cap cap--note">{c.note}</span>
          </p>
        )}
      </div>
    </section>
  );
}
