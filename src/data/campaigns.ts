/* ============================================================
   CAMPAIGNS.TS
   Hult Prize, NAT'CO and DREST.
   (AIESEC in Belgium has its own file: belgium.ts)
   ============================================================ */

export type Kpi = { n: string; l: string };
export type TimelineStep = { when: string; what: string };

export type Asset = {
  id: string;
  title: string;
  src?: string; // /media/video/...
  poster?: string; // /media/posters/...
  image?: string; // use instead of src for a still
  badge?: string;
  why: string; // caption under the video: purpose and content
  link?: string;
};

export type Photo = { src?: string; caption: string; tall?: boolean };

export type Campaign = {
  id: string;
  num: string;
  title: string;
  org: string;
  period: string;
  intro: string[];
  audience?: string;
  approach?: string;
  kpis: Kpi[];
  kpiNote?: string;
  timelineTitle?: string;
  timeline: TimelineStep[];
  photos?: Photo[];
  assetsTitle?: string;
  assets: Asset[];
  extra?: { title: string; body: string[]; photos?: Photo[] };
  tools?: string;
};

export const campaigns: Campaign[] = [
  /* ----------------------------------------------------------
     HULT PRIZE
     ---------------------------------------------------------- */
  {
    id: 'hult-prize',
    num: '02',
    title: 'Hult Prize: from "what is that?" to "when is the next one?"',
    org: 'Hult Prize · OnCampus program, Sousse',
    period: 'One full edition, from launch to final',
    intro: [
      'I built awareness and kept students engaged around the Hult Prize, an international competition where students create a social business idea and pitch it to judges, first on campus and then on the international stage.',
      'Most students had never heard of it. Step by step, from awareness to registration, team building, the competition and what came after, they became active participants who were still following us when the next edition opened.',
    ],
    audience: 'University students, most of them new to the Hult Prize and to social entrepreneurship.',
    approach:
      'Start with the cause, not the competition. Then explain it simply. Then let the final and the students tell the story for us.',
    kpis: [
      { n: '120', l: 'students registered' },
      { n: '10', l: 'teams in the competition' },
      { n: '3', l: 'phases, one clear goal each' },
    ],
    timelineTitle: 'How the campaign worked',
    timeline: [
      {
        when: 'Phase 1 · Attraction and recruitment',
        what: 'We did not open with the competition. We opened with social entrepreneurship and the real problems students already cared about. Only then did we introduce the Hult Prize, with a clear date to register.',
      },
      {
        when: 'Phase 2 · Education and conversion',
        what: 'Signing up was only the start. Short educational content explained how the competition works and what teams were expected to do, so the people who registered came in ready.',
      },
      {
        when: 'Phase 3 · Competition and continuity',
        what: 'We filmed the campus final and shared it. The pitches and the students’ own experience became the content that made others want to join the next edition.',
      },
    ],
    photos: [
      { src: '/media/hult/hult-oncampus-team.jpg', caption: 'The organising team on event day.' },
      { src: '/media/hult/hult-oc-team.jpg', caption: 'Launch post for the OnCampus event, with the team and participants.' },
    ],
    assetsTitle: 'The videos, in the order they were published',
    assets: [
      {
        id: 'h-social-ent',
        title: 'Why social entrepreneurship matters',
        src: '/media/video/hult-social-entrepreneurship.mp4',
        poster: '/media/posters/hult-social-entrepreneurship.jpg',
        badge: 'Attraction',
        why: 'The first video of the campaign. It talks about social entrepreneurship and the problems around us, not about a competition. The idea was to make students care before asking them for anything.',
      },
      {
        id: 'h-join',
        title: 'Join us on November 15th',
        src: '/media/video/hult-join-us-nov15.mp4',
        poster: '/media/posters/hult-join-us-nov15.jpg',
        badge: 'Registration',
        why: 'Students asking each other on camera what the Hult Prize is. Light, curious and local, with one clear ask at the end: come to the info session on a set date.',
      },
      {
        id: 'h-form',
        title: 'Registrations are still open',
        src: '/media/video/hult-form-extended.mp4',
        poster: '/media/posters/hult-form-extended.jpg',
        badge: 'Second chance',
        why: 'Participants explain in their own words what the Hult Prize means: a life changing opportunity and a real social impact. Used to give more time to the students who were still hesitating.',
      },
      {
        id: 'h-day',
        title: 'Inside the event',
        src: '/media/video/hult-prize-day.mp4',
        poster: '/media/posters/hult-prize-day.jpg',
        badge: 'Event',
        why: 'Workshops, team work and pitches, filmed on the day. It showed participants their own experience and showed everyone else what they had missed.',
      },
      {
        id: 'h-winners',
        title: 'Meet the winning team',
        src: '/media/video/hult-winners-announcement.mp4',
        poster: '/media/posters/hult-winners-announcement.jpg',
        badge: 'Result',
        why: 'A short announcement of the campus winners. It celebrated the team publicly and showed the next students what is possible.',
      },
      {
        id: 'h-champions',
        title: 'The final, as it happened',
        src: '/media/video/hult-the-champions.mp4',
        poster: '/media/posters/hult-the-champions.jpg',
        badge: 'Recap',
        why: 'The recap of the final day: the energy, the pitches and the moment the winners were announced. This is the video that kept people talking until the next edition.',
      },
    ],
  },

  /* ----------------------------------------------------------
     NAT'CO
     ---------------------------------------------------------- */
  {
    id: 'natco',
    num: '03',
    title: 'NAT’CO: a conference people lived before, during and after',
    org: 'AIESEC in Tunisia · NAT’CO national conference',
    period: 'December 2021',
    intro: [
      'From anticipation to memories. The conference lasted three days, but I wanted the experience to start weeks before the first day and to stay with people long after the last one.',
      'So I built the content in three moments: before, during and after. The goal was simple. Keep delegates involved the whole time and turn what they lived into content they wanted to share.',
    ],
    audience:
      'More than 1,000 young delegates, the organising committee, and sponsor partners who wanted to see real engagement.',
    approach:
      'Make delegates the heroes of the content. What they posted, shared and remembered was also the clearest proof for sponsors that people were truly involved.',
    kpis: [
      { n: '1,000+', l: 'delegates' },
      { n: '22', l: 'people in the organising committee' },
      { n: '30', l: 'sponsor partners' },
    ],
    timelineTitle: 'Three moments, one experience',
    timeline: [
      {
        when: 'Phase 01 · Anticipate',
        what: 'Before the conference: fun and emotional videos, Reels, simple challenges and mini vlogs from each local committee to build excitement and get people talking.',
      },
      {
        when: 'Phase 02 · Engage',
        what: 'During the conference: daily Reels, questions, challenges, memes and live coverage. We captured the moments of delegates, the organising team and sponsors as they happened.',
      },
      {
        when: 'Phase 03 · Extend',
        what: 'After the conference: all the photos and videos became recaps, highlights and an after movie told from the local committees’ point of view, so the three days kept living online.',
      },
    ],
    photos: [
      { src: '/media/natco/natco-audience.jpg', caption: 'A full room of delegates, ready for the day.' },
      { src: '/media/natco/natco-team.jpg', caption: 'Part of the organising committee. Hold the vision, trust the process.' },
    ],
    assets: [],
    extra: {
      title: 'Member newsletters',
      body: [
        'Inside AIESEC I also wrote the monthly newsletter for the members of a local committee. What happened last month, updates from each department and a short word from the team to keep everyone moving in the same direction.',
      ],
      photos: [
        { src: '/media/newsletters/member-newsletter-cover.jpg', caption: 'The opening: a friendly hello before the updates.', tall: true },
        { src: '/media/newsletters/member-newsletter-department.jpg', caption: 'Department updates with real numbers, plus a word from the managers.', tall: true },
        { src: '/media/newsletters/member-newsletter-updates.jpg', caption: 'What is coming next for the whole committee.', tall: true },
      ],
    },
  },

  /* ----------------------------------------------------------
     DREST
     ---------------------------------------------------------- */
  {
    id: 'drest',
    num: '04',
    title: 'DREST: content made with the team, not just about it',
    org: 'Drest.tn · Traffic Manager',
    period: 'February 2026 to today',
    intro: [
      'At Drest I take care of what customers read and watch, and I also make sure the team feels part of the brand. I handle every video from start to finish: the idea, the script, the filming and the editing.',
      'The same videos do two jobs. Inside, they bring colleagues together and make them proud to share. Outside, they show customers the real people behind the brand.',
    ],
    audience: 'Drest customers, and the Drest team itself.',
    approach:
      'Put real colleagues in front of the camera. On the email side, every newsletter is tested, sent and then measured, so the next one is better.',
    kpis: [
      { n: '96.8%', l: 'emails delivered' },
      { n: '20.3%', l: 'open rate' },
      { n: '4.81%', l: 'click rate' },
      { n: '0.32%', l: 'unsubscribed' },
    ],
    kpiNote: 'Results of one newsletter campaign sent with Brevo.',
    timeline: [],
    assetsTitle: 'Videos and newsletters',
    assets: [
      {
        id: 'd-womens-day',
        title: 'Women’s Day with the team',
        src: '/media/video/drest-womens-day.mp4',
        poster: '/media/posters/drest-womens-day.jpg',
        badge: 'Employee engagement',
        why: 'The women of the team got a surprise gift, on camera. A warm moment inside the company that also became a brand post customers loved to see.',
      },
      {
        id: 'd-turning-5',
        title: 'Something is cooking: Drest turns 5',
        src: '/media/video/drest-turning-5.mp4',
        poster: '/media/posters/drest-turning-5.jpg',
        badge: 'Brand content',
        why: 'A teaser for the 5th anniversary. A pink envelope travels from hand to hand across the office until the big reveal. Short, curious and made to be shared.',
      },
      {
        id: 'd-newsletter-summer',
        title: 'A summer care newsletter',
        src: '/media/video/drest-newsletter-scroll.mp4',
        poster: '/media/posters/drest-newsletter-scroll.jpg',
        badge: 'Newsletter',
        why: 'A product newsletter built in Brevo. Clear sections, strong visuals and one simple action for the reader.',
      },
      {
        id: 'd-newsletter-bac',
        title: 'Ready for the sports exam?',
        image: '/media/drest/newsletter-bac-sport.jpg',
        badge: 'Newsletter',
        why: 'A seasonal newsletter for students before their sports exam. The subject line, the preview text and the offer all speak to one moment in their year.',
      },
    ],
    extra: {
      title: 'Writing and reporting',
      body: [
        'I also write and edit articles for the website and publish them in the CMS. Then I build Looker Studio dashboards so the marketing and commercial teams can see what the traffic is really doing, and I work with Power BI for metrics and reporting.',
        'Writing the article and reporting on it a month later changes how you write. You stop producing content for the sake of it and start writing what people are actually looking for.',
      ],
    },
    tools: 'Brevo, WordPress, Google Analytics, Looker Studio, Power BI, CapCut, Canva',
  },
];
