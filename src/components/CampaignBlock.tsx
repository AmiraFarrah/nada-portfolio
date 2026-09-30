import type { Campaign } from '../data/campaigns';
import Metrics from './Metrics';
import PhotoGrid from './PhotoGrid';
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
            {c.intro.map((p, i) => (
              <p className="camp__intro" key={i}>
                {p}
              </p>
            ))}
            <div className="camp__period">{c.period}</div>
          </div>

          {(c.audience || c.approach) && (
            <div className="facts">
              {c.audience && (
                <div>
                  <div className="fact__label">Who we wanted to reach</div>
                  <p className="fact__value">{c.audience}</p>
                </div>
              )}
              {c.approach && (
                <div>
                  <div className="fact__label">The idea</div>
                  <p className="fact__value">{c.approach}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <Metrics items={c.kpis} />
        {c.kpiNote && <p className="kpi__note">{c.kpiNote}</p>}

        {c.timeline.length > 0 && (
          <div className="sub">
            {c.timelineTitle && <div className="sub__label">{c.timelineTitle}</div>}
            <div className="steps">
              {c.timeline.map((t, i) => (
                <div className="step" key={`${t.when}-${i}`}>
                  <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
                  <div className="step__when">{t.when}</div>
                  <p className="step__what">{t.what}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {c.photos && c.photos.length > 0 && <PhotoGrid photos={c.photos} />}

        {c.assets.length > 0 && (
          <div className="sub">
            {c.assetsTitle && <div className="sub__label">{c.assetsTitle}</div>}
            <div className="assets">
              {c.assets.map((a) => (
                <Reveal key={a.id}>
                  <article className="asset">
                    <div className={`asset__frame${a.image ? ' asset__frame--doc' : ''}`}>
                      {a.badge && <span className="cap cap--signal asset__badge">{a.badge}</span>}
                      {a.src ? (
                        <video src={a.src} poster={a.poster} controls playsInline preload="metadata" />
                      ) : a.image ? (
                        <img src={a.image} alt={a.title} loading="lazy" />
                      ) : (
                        <Placeholder label="Coming soon" />
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
          </div>
        )}

        {c.extra && (
          <div className="sub">
            <h3 className="sub__title">{c.extra.title}</h3>
            {c.extra.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {c.extra.photos && <PhotoGrid photos={c.extra.photos} cols={3} />}
          </div>
        )}

        {c.tools && (
          <div className="toolsline">
            <span className="fact__label">Tools</span> {c.tools}
          </div>
        )}
      </div>
    </section>
  );
}
