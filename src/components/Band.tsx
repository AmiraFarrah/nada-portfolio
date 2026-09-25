import type { ReactNode } from 'react';

type Props = {
  id?: string;
  tone?: 'paper' | 'ink' | 'dim';
  num?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
};

export default function Band({ id, tone = 'paper', num, title, lead, children }: Props) {
  return (
    <section id={id} className={`band band--${tone}`}>
      <div className="wrap">
        {title && (
          <div className="head">
            <div className="head__row">
              {num && <span className="head__num">{num}</span>}
              <h2>{title}</h2>
            </div>
            {lead && <p className="lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
