import './styles/portfolio.css';

import Hero from './components/Hero';
import BelgiumBlock from './components/BelgiumBlock';
import CampaignBlock from './components/CampaignBlock';

import { profile, toolGroups, footer } from './data/content';
import { campaigns } from './data/campaigns';

const byId = (id: string) => campaigns.find((c) => c.id === id)!;

export default function App() {
  return (
    <div className="pf">
      <Hero />

      <main className="sheet">
        {/* 01 · AIESEC in Belgium */}
        <BelgiumBlock tone="paper" />

        {/* 02 · Hult Prize */}
        <CampaignBlock campaign={byId('hult-prize')} tone="ink" />

        {/* 03 · AIESEC in Tunisia, NAT'CO */}
        <CampaignBlock campaign={byId('natco')} tone="dim" />

        {/* 04 · DREST */}
        <CampaignBlock campaign={byId('drest')} tone="ink" />

        {/* Tools + contact */}
        <section className="band band--deep foot">
          <div className="wrap">
            <div className="toolgroups">
              {toolGroups.map((g) => (
                <div className="toolgroup" key={g.label}>
                  <div className="toolgroup__label">{g.label}</div>
                  <div className="tools">
                    {g.items.map((t) => (
                      <span className="tool" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="foot__grid">
              <div>
                <h2 style={{ maxWidth: '18ch' }}>{footer.headline}</h2>
                <p style={{ marginTop: '1.2rem' }}>{footer.sub}</p>
                <p style={{ marginTop: '0.6rem', fontSize: '0.9rem', color: 'var(--on-ink-muted)' }}>{footer.languages}</p>
              </div>
              <div>
                <p style={{ margin: 0 }}>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
                <p style={{ margin: '0.5rem 0 0' }}>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {profile.linkedinLabel}
                  </a>
                </p>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--on-ink-muted)', fontSize: '0.9rem' }}>{profile.location}</p>
              </div>
            </div>

            <p className="foot__note">{footer.note}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
