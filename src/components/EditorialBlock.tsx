import { editorial } from '../data/editorial';
import Metrics from './Metrics';
import Placeholder from './Placeholder';

export default function EditorialBlock({ tone }: { tone: 'paper' | 'ink' | 'dim' }) {
  return (
    <section id={editorial.id} className={`band band--${tone}`}>
      <div className="wrap">
        <div className="head">
          <div className="head__row">
            <span className="head__num">{editorial.num}</span>
            <h2>{editorial.title}</h2>
          </div>
          <p className="lead">{editorial.lead}</p>
        </div>

        <div className="split">
          {editorial.sides.map((s) => (
            <div className="side" key={s.id}>
              <div className="side__index">{s.index}</div>
              <div className="side__label">{s.label}</div>
              <h3>{s.title}</h3>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <Metrics items={s.kpis} />

              {s.gallery && s.gallery.length > 0 && (
                <div className="gal">
                  {s.gallery.map((g, i) =>
                    g.src ? (
                      <img key={i} src={g.src} alt={g.alt} loading="lazy" />
                    ) : (
                      <Placeholder key={i} label={g.alt} />
                    )
                  )}
                </div>
              )}

              {s.tools && (
                <div>
                  <div className="fact__label">Tools</div>
                  <p className="fact__value">{s.tools}</p>
                </div>
              )}

              {s.note && <span className="cap cap--note">{s.note}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
