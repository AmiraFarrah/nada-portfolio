import './styles/portfolio.css';

import Hero from './components/Hero';
import Band from './components/Band';
import CampaignBlock from './components/CampaignBlock';
import EditorialBlock from './components/EditorialBlock';
import CaseList from './components/CaseList';

import { profile, seoSection, tools, footer } from './data/content';
import { campaigns } from './data/campaigns';

export default function App() {
  return (
    <div className="pf">
      <Hero />

      <main className="sheet">
        

        {/* 01 — Hult Prize */}
        <CampaignBlock campaign={campaigns[0]} tone="ink" />

        {/* 02 — Aussui */}
        <CampaignBlock campaign={campaigns[1]} tone="dim" />

        {/* 03 — NATCO 2021 */}
        <CampaignBlock campaign={campaigns[2]} tone="ink" />

        {/* 04 — Drest employee engagement */}
        <CampaignBlock campaign={campaigns[3]} tone="dim" />

        {/* 05 — Editorial / internal comms */}
        <EditorialBlock tone="paper" />

        {/* 04 — SEO */}
        <Band id={seoSection.id} tone="ink" num={seoSection.num} title={seoSection.title} lead={seoSection.lead}>
          <CaseList items={seoSection.items} />
        </Band>

        {/* Tools + contact */}
        <section className="band band--ink foot">
          <div className="wrap">
            <div className="tools" style={{ marginBottom: '3.5rem' }}>
              {tools.map((t) => (
                <span className="tool" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="foot__grid">
              <div>
                <h2 style={{ maxWidth: '16ch' }}>{footer.headline}</h2>
                <p style={{ marginTop: '1.4rem', fontSize: '0.9rem', color: 'var(--on-ink-muted)' }}>
                  {footer.languages}
                </p>
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
                <p style={{ margin: '0.5rem 0 0', color: 'var(--on-ink-muted)', fontSize: '0.9rem' }}>
                  {profile.location}
                </p>
              </div>
            </div>

            <p className="foot__note">{footer.note}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
