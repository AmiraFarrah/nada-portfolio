/* ============================================================
   EDITORIAL.TS
   The two-up "writing that has to work" block.
   Left  — internal communications (AIESEC in Belgium)
   Right — editorial and traffic (Drest)
   ============================================================ */

export type EditorialSide = {
  id: string;
  index: string;
  label: string;
  title: string;
  body: string[];
  kpis?: { n: string; l: string }[];
  gallery?: { src?: string; alt: string }[];
  note?: string;
  tools?: string;
};

export const editorial = {
  id: 'editorial',
  num: '05',
  title: 'Writing that has to work',
  lead:
    'Two desks with opposite constraints. One writes for people who can leave the organisation; the other writes for people who can leave the page. Both are judged on whether anyone actually read it.',
  sides: [
    {
      id: 'internal',
      index: '01',
      label: 'Inside the organisation',
      title: 'A national newsletter that was not the same newsletter twice',
      body: [
        'Members stop paying attention to internal communications the moment it becomes announcements. The default fix is to send more. The actual fix is to send something that is visibly about the reader.',
        'Across a national entity, the audience was never one audience: local committees at different points in their cycle, with different problems, reading the same send. So the newsletter was built from a segmentation first — who is receiving this, what is true for them right now, and what is the next step that makes sense for them specifically. Where the same content went out to everyone, the updates and next steps around it changed per reality.',
        'I also coached the communications leads of six local committees, which meant the approach had to be documented well enough for somebody else to run it.',
      ],
      kpis: [
        { n: '100+', l: 'members reached monthly' },
        { n: '6', l: 'local committees coached' },
        { n: '13', l: 'months, monthly without a gap' },
      ],
      gallery: [
        { alt: 'Newsletter — TODO add image' },
        { alt: 'Segmentation plan — TODO add image' },
      ],
      note: 'AIESEC in Belgium · July 2024 — August 2025 · remote',
      tools: 'Mailchimp, Brevo, Canva, Slack, SharePoint',
    },

    {
      id: 'traffic',
      index: '02',
      label: 'On the open web',
      title: 'Editorial desk and performance reporting',
      body: [
        'As Traffic Manager I write and edit the articles, publish them through the CMS, and then build the reports that tell the marketing and commercial teams what the traffic actually did.',
        'Owning both ends changes what gets written. When the person writing the article is also the person who reports on it a month later, the brief stops being "produce content" and becomes "produce the piece that answers the thing people are searching for".',
        'TODO — add a concrete example: one article or series, what it was meant to do, and what the reporting showed afterwards.',
      ],
      kpis: [
        { n: 'TODO', l: 'articles published' },
        { n: 'TODO', l: 'organic traffic change' },
        { n: 'TODO', l: 'reporting cadence' },
      ],
      gallery: [
        { alt: 'Performance report — TODO add image' },
        { alt: 'Published article — TODO add image' },
      ],
      note: 'Drest.tn · February 2026 — present',
      tools: 'WordPress, Google Analytics, Looker Studio, Power BI',
    },
  ] as EditorialSide[],
};
