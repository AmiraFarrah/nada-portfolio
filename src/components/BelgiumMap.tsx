import { useState } from 'react';
import type { LocalCommittee } from '../data/belgium';

/* Simplified outline of Belgium, projected from real coordinates.
   Flanders in the north, Wallonia in the south, Brussels in the middle. */
const OUTLINE =
  'M13.4,70.5 L92.5,28.5 L138.3,52.5 L175.6,31.5 L188.9,18 L205.1,12 L232.8,22.5 L257.6,19.5 L271,45 L300.5,43.5 L329.2,60 L309.1,79.5 L320.6,117 L345.4,121.5 L369.2,141 L381.6,184.5 L355.9,214.5 L340.6,208.5 L319.6,235.5 L325.4,301.5 L292.9,309 L235.7,264 L234.7,213 L174.6,240 L167,193.5 L125,189 L84.9,154.5 L59.2,118.5 L47.7,129 L21.9,112.5 Z';
const FLANDERS =
  'M47.7,129 L21.9,112.5 L13.4,70.5 L92.5,28.5 L138.3,52.5 L175.6,31.5 L188.9,18 L205.1,12 L232.8,22.5 L257.6,19.5 L271,45 L300.5,43.5 L329.2,60 L309.1,79.5 L320.6,117 L300.5,121.5 L257.6,124.5 L229,117 L198.5,129 L162.2,129 L130.7,121.5 L84.9,126 L43.9,127.5 Z';

const REGION_LABELS = [
  { t: 'FLANDERS', x: 70, y: 100 },
  { t: 'WALLONIA', x: 255, y: 205 },
];

export default function BelgiumMap({ committees, hint }: { committees: LocalCommittee[]; hint: string }) {
  const [active, setActive] = useState(committees[0]?.id);
  const current = committees.find((c) => c.id === active) ?? committees[0];

  return (
    <div className="bmap">
      <svg className="bmap__svg" viewBox="0 0 395 320" role="img" aria-label="Map of Belgium with the local committees">
        <path className="bmap__land bmap__land--wal" d={OUTLINE} />
        <path className="bmap__land bmap__land--fla" d={FLANDERS} />
        <circle className="bmap__land bmap__land--bru" cx="186.1" cy="106.5" r="11" />
        <path className="bmap__outline" d={OUTLINE} pathLength={1} />
        {REGION_LABELS.map((r) => (
          <text key={r.t} className="bmap__region" x={r.x} y={r.y}>
            {r.t}
          </text>
        ))}

        {committees.map((c, i) => {
          const on = c.id === current?.id;
          return (
            <g
              key={c.id}
              className={`bmap__pin${on ? ' is-on' : ''}`}
              style={{ ['--d' as string]: `${0.9 + i * 0.18}s` }}
              transform={`translate(${c.x} ${c.y})`}
              onClick={() => setActive(c.id)}
              onMouseEnter={() => setActive(c.id)}
            >
              <circle className="bmap__pulse" r="7" />
              <circle className="bmap__dot" r="5.2" />
            </g>
          );
        })}
      </svg>

      <div className="bmap__side">
        <p className="bmap__hint">{hint}</p>
        <div className="bmap__tabs" role="tablist">
          {committees.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === current?.id}
              className={`bmap__tab${c.id === current?.id ? ' is-on' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        {current && (
          <div className="bmap__card" key={current.id}>
            <div className="bmap__region-tag">{current.region}</div>
            <h4 className="bmap__name">{current.name}</h4>
            <p>{current.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
