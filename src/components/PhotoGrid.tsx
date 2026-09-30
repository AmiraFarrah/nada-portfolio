import Placeholder from './Placeholder';
import Reveal from './Reveal';

type Photo = { src?: string; caption: string; tall?: boolean };

/* Polaroid-style photos, same feel as the CV/portfolio PDF. */
export default function PhotoGrid({ photos, cols }: { photos: Photo[]; cols?: 2 | 3 }) {
  if (!photos || photos.length === 0) return null;
  const n = cols ?? (photos.length >= 3 ? 3 : 2);
  return (
    <div className={`polas polas--${n}`}>
      {photos.map((p, i) => (
        <Reveal key={`${p.caption}-${i}`}>
          <figure className={`pola${p.tall ? ' pola--tall' : ''}`} style={{ ['--tilt' as string]: `${[-1.6, 1.2, -0.8][i % 3]}deg` }}>
            <div className="pola__img">
              {p.src ? <img src={p.src} alt={p.caption} loading="lazy" /> : <Placeholder label={p.caption} />}
            </div>
            {p.src && <figcaption>{p.caption}</figcaption>}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
