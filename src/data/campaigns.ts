/* ============================================================
   CAMPAIGNS.TS
   One entry per campaign: why it existed, who it had to move,
   when it ran, and the pieces that carried it.

   Search for "TODO" — those are the fields only Nada can fill.
   ============================================================ */

export type Kpi = { n: string; l: string };
export type TimelineStep = { when: string; what: string };

export type Asset = {
  id: string;
  title: string;
  src?: string;      // /media/video/... — leave undefined to show a placeholder
  poster?: string;   // /media/posters/...
  image?: string;    // use instead of src for a still
  badge?: string;
  why: string;       // why this piece was made the way it was
  link?: string;     // optional external link (e.g. the live post)
};

export type Campaign = {
  id: string;
  num: string;
  title: string;
  org: string;
  period: string;
  objective: string;
  audience: string;
  approach: string;
  kpis: Kpi[];
  timeline: TimelineStep[];
  assets: Asset[];
  materials?: { src?: string; caption: string }[];
  note?: string;
};

export const campaigns: Campaign[] = [
  /* ----------------------------------------------------------
     01 — HULT PRIZE, FULL CYCLE
     ---------------------------------------------------------- */
  {
    id: 'hult-prize',
    num: '01',
    title: 'One competition, three different asks',
    org: 'Hult Prize — IHEC Sousse',
    period: 'TODO — confirm the cycle (see note below)',
    objective:
      'Take a student body that had mostly never heard of the Hult Prize through a full cycle: sign up, understand what they had signed up for, and still be interested by the time the next edition opened.',
    audience:
      'University students in Tunisia. Two distinct states of knowledge — people who had never encountered the competition, and people already competing who needed to actually build something.',
    approach:
      'The same campaign could not speak to both. So it ran as three phases with three different jobs. Recruitment had to create curiosity and remove the excuse of not knowing what it was. Educational content had to make participants better at the thing they had entered, which is what keeps people from dropping out halfway. The final had to close the loop publicly, so the next edition opened to an audience that had already seen what the end looks like.',
    kpis: [
      { n: 'TODO', l: 'registrations' },
      { n: 'TODO', l: 'teams competing' },
      { n: 'TODO', l: 'reach across the cycle' },
    ],
    timeline: [
      { when: 'Phase 1', what: 'Recruitment — awareness, then a dated ask with a form behind it' },
      { when: 'Phase 2', what: 'Educational content for registered participants' },
      { when: 'Phase 3', what: 'The final, filmed and published as the opening move for the next edition' },
    ],
    assets: [
      {
        id: 'h-social-ent',
        title: 'What social entrepreneurship actually is',
        src: '/media/video/hult-social-entrepreneurship.mp4',
        poster: '/media/posters/hult-social-entrepreneurship.jpg',
        badge: 'Attraction',
        why:
          'TODO — the first ask is not "apply", it is "you already care about this". Say in your own words why the campaign opened on the idea rather than on the competition.',
      },
      {
        id: 'h-join',
        title: 'Join us Wednesday, November 15th',
        src: '/media/video/hult-join-us-nov15.mp4',
        poster: '/media/posters/hult-join-us-nov15.jpg',
        badge: 'Conversion',
        why:
          'TODO — a date, a place and one instruction. Why this piece came second rather than first.',
      },
      {
        id: 'h-form',
        title: 'The form stays open',
        src: '/media/video/hult-form-extended.mp4',
        poster: '/media/posters/hult-form-extended.jpg',
        badge: 'Second chance',
        why:
          'TODO — an extension is usually a sign a campaign underperformed. Framed as a second chance it becomes a reason to post again. Was that the thinking?',
      },
      {
        id: 'h-nichesss',
        title: 'Content tooling for participants',
        src: '/media/video/nichesss-content-tool.mp4',
        poster: '/media/posters/nichesss-content-tool.jpg',
        badge: 'Education',
        why:
          'TODO — CONFIRM THIS BELONGS HERE. This is a walkthrough of an AI writing tool. If it was part of the educational phase, say what problem participants had that it solved. If it belongs to a different project, tell me and I will move it.',
      },
      {
        id: 'h-day',
        title: 'Hult Prize day',
        src: '/media/video/hult-prize-day.mp4',
        poster: '/media/posters/hult-prize-day.jpg',
        badge: 'Event',
        why:
          'TODO — what was this cut for: recap for the people who came, or proof for the people who did not?',
      },
      {
        id: 'h-winners',
        title: 'The winning team',
        src: '/media/video/hult-winners-announcement.mp4',
        poster: '/media/posters/hult-winners-announcement.jpg',
        badge: 'Result',
        why:
          'TODO — why announce the winner publicly rather than privately? (Recognition for them, credibility for the next intake — in your own words.)',
      },
      {
        id: 'h-champions',
        title: 'The champions',
        src: '/media/video/hult-the-champions.mp4',
        poster: '/media/posters/hult-the-champions.jpg',
        badge: 'Result',
        why: 'TODO — how this one differed from the announcement above.',
      },
      {
        id: 'h-final-post',
        title: 'The final — on Instagram',
        badge: 'Live post',
        link: 'https://www.instagram.com/p/CpdajnMg64p/',
        why:
          'The published post, still live. Opens on Instagram. TODO — replace with the hosted file once the original is recovered.',
      },
    ],
    note:
      'TODO — DATE CONFLICT: the tracker says Feb 2022 (recruitment) and Apr 2022 (final), but the recruitment videos say "Wednesday, November 15th", which falls on a Wednesday in 2023, not 2022. Confirm whether this is one cycle or two separate editions.',
  },

  /* ----------------------------------------------------------
     02 — AUSSUI
     ---------------------------------------------------------- */
  {
    id: 'aussui',
    num: '02',
    title: 'Two audiences, one storefront',
    org: 'Aussui',
    period: 'TODO — dates',
    objective:
      'Get gamers and resellers to recognise Aussui and land on the site, rather than defaulting to the platforms they already use.',
    audience:
      'Gamers looking for specific titles and top-ups, and resellers looking for reliable supply. Different vocabulary, different urgency, different reason to trust a storefront they have not bought from before.',
    approach:
      'TODO — describe the approach. The tension worth writing about: one brand talking to a consumer and a trade audience at once. Separate creative, separate channels, separate landing pages?',
    kpis: [
      { n: 'TODO', l: 'reach' },
      { n: 'TODO', l: 'site visits' },
      { n: 'TODO', l: 'engagement rate' },
    ],
    timeline: [],
    assets: [
      {
        id: 'a-console',
        title: 'Console or mobile',
        src: '/media/video/aussui-console-or-mobile.mp4',
        poster: '/media/posters/aussui-console-or-mobile.jpg',
        badge: 'Awareness',
        why:
          'TODO — ten seconds, one line, one URL. What was this built to do, and where did it run?',
      },
      {
        id: 'a-affordable',
        title: 'Gaming, affordable',
        src: '/media/video/aussui-affordable-gaming.mp4',
        poster: '/media/posters/aussui-affordable-gaming.jpg',
        badge: 'Offer',
        why: 'TODO — price is the argument here rather than range. Why that order?',
      },
    ],
  },

  /* ----------------------------------------------------------
     03 — NATCO 2021
     ---------------------------------------------------------- */
  {
    id: 'natco',
    num: '03',
    title: 'The biggest conference AIESEC runs in Tunisia',
    org: 'AIESEC in Tunisia — NATCO',
    period: 'December 2021',
    objective:
      'Run people engagement and experience showcasing for a national conference with a thousand delegates in the room and thirty sponsor partners watching how it was run.',
    audience:
      'A thousand young delegates from across Tunisia, and thirty sponsor partners whose decision to come back the following year depended on what they saw.',
    approach:
      'TODO — this is the largest thing on the site by audience size, and currently the thinnest by detail. What did "people engagement" mean day to day? What did you actually produce or run, and how did you showcase the experience to the sponsors?',
    kpis: [
      { n: '1,000', l: 'youth delegates' },
      { n: '30', l: 'sponsor partners' },
      { n: 'TODO', l: 'add a third — sessions, content pieces, satisfaction score' },
    ],
    timeline: [],
    assets: [],
    note: 'Assets to be added — photos, recap video or sponsor-facing material would carry this section.',
  },

  /* ----------------------------------------------------------
     04 — DREST EMPLOYEE ENGAGEMENT
     ---------------------------------------------------------- */
  {
    id: 'drest-engagement',
    num: '04',
    title: 'Getting colleagues in front of the camera',
    org: 'Drest.tn',
    period: 'TODO — dates',
    objective:
      'TODO — what was employee engagement supposed to fix here? Recruitment, internal morale, brand reach, or all three?',
    audience: 'Drest employees.',
    approach:
      'TODO — short-form video (TikTok and reels) made with colleagues rather than about them. Describe how you got people who are not performers to take part, and who the finished videos were actually for.',
    kpis: [
      { n: 'TODO', l: 'videos published' },
      { n: 'TODO', l: 'participation' },
      { n: 'TODO', l: 'views or engagement' },
    ],
    timeline: [],
    assets: [],
    note: 'Assets to be added — even two of the reels would make this section work.',
  },
];
