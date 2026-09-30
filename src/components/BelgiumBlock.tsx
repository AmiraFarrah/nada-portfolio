import { belgium as b } from '../data/belgium';
import BelgiumMap from './BelgiumMap';
import Metrics from './Metrics';
import PhotoGrid from './PhotoGrid';
import Reveal from './Reveal';

export default function BelgiumBlock({ tone }: { tone: 'paper' | 'ink' | 'dim' }) {
  return (
    <section id={b.id} className={`band band--${tone}`}>
      <div className="wrap">
        <div className="head">
          <div className="head__row">
            <span className="head__num">{b.num}</span>
            <h2>{b.title}</h2>
          </div>
        </div>

        <div className="camp__org">{b.org}</div>
        <div className="camp__period camp__period--top">{b.period}</div>
        {b.intro.map((p, i) => (
          <p className="camp__intro" key={i}>
            {p}
          </p>
        ))}

        <Metrics items={b.kpis} />

        {/* Newsletters + map */}
        <div className="sub">
          <h3 className="sub__title">{b.newsletters.title}</h3>
          {b.newsletters.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="sub__label">{b.newsletters.mapTitle}</div>
          <Reveal>
            <BelgiumMap committees={b.newsletters.committees} hint={b.newsletters.mapHint} />
          </Reveal>
        </div>

        {/* Coaching */}
        <div className="sub">
          <h3 className="sub__title">{b.coaching.title}</h3>
          {b.coaching.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="steps">
            {b.coaching.steps.map((s, i) => (
              <div className="step" key={s.when}>
                <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
                <div className="step__when">{s.when}</div>
                <p className="step__what">{s.what}</p>
              </div>
            ))}
          </div>
          <PhotoGrid photos={b.coaching.photos} cols={2} />
        </div>

        {/* Newsletter samples */}
        <div className="sub">
          <h3 className="sub__title">{b.samples.title}</h3>
          <p>{b.samples.body}</p>
          <PhotoGrid photos={b.samples.photos.map((p) => ({ ...p, tall: true }))} cols={2} />
        </div>

        <div className="toolsline">
          <span className="fact__label">Tools</span> {b.tools}
        </div>
      </div>
    </section>
  );
}
