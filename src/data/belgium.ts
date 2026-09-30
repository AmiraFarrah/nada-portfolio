/* ============================================================
   BELGIUM.TS
   AIESEC in Belgium: regional newsletters + coaching.
   ============================================================ */

export type LocalCommittee = {
  id: string;
  name: string;
  region: 'Flanders' | 'Brussels' | 'Wallonia';
  x: number; // position on the map (SVG units, see BelgiumMap.tsx)
  y: number;
  note: string;
};

export const belgium = {
  id: 'aiesec-belgium',
  num: '01',
  title: 'One newsletter, five different realities',
  org: 'AIESEC in Belgium · National Internal Communications',
  period: 'July 2024 to August 2025 · Remote',
  intro: [
    'My job was to keep more than a hundred members across Belgium informed and motivated, month after month. Easy to say, harder to do when every city is living something different.',
  ],
  kpis: [
    { n: '100+', l: 'members reached every month' },
    { n: '5', l: 'local committees coached' },
    { n: '13', l: 'months without missing an issue' },
  ],

  newsletters: {
    title: 'Monthly newsletters, written for each region',
    body: [
      'Every month, members received a newsletter with the latest updates, the next steps and the focus of the month.',
      'But one version for everyone did not work. Belgium has different languages, different cultures and teams at very different points in their results. So each region got its own version. Same goals for all, a different way of saying it.',
    ],
    mapTitle: 'Different audience, different message',
    mapHint: 'Tap a city to see how the message changed.',
    committees: [
      {
        id: 'antwerp',
        name: 'UAntwerp',
        region: 'Flanders',
        x: 190.8,
        y: 51,
        note: 'Flemish region. Updates and next steps built around the team’s own results and priorities.',
      },
      {
        id: 'gent',
        name: 'Gent',
        region: 'Flanders',
        x: 125.9,
        y: 76.5,
        note: 'Flemish region. Same national goals, but the focus of the month matched where this team really stood.',
      },
      {
        id: 'leuven',
        name: 'Leuven',
        region: 'Flanders',
        x: 219.4,
        y: 102,
        note: 'Flemish region. A different rhythm and different results, so a different push each month.',
      },
      {
        id: 'brussels',
        name: 'Brussels',
        region: 'Brussels',
        x: 186.1,
        y: 106.5,
        note: 'The most international committee. Simple, clear English that works for everyone, whatever their background.',
      },
      {
        id: 'lln',
        name: 'Louvain-la-Neuve',
        region: 'Wallonia',
        x: 210.9,
        y: 133.5,
        note: 'French-speaking region. Its own tone, its own examples and its own priorities.',
      },
    ] as LocalCommittee[],
  },

  coaching: {
    title: 'Coaching spaces for every local committee',
    body: [
      'Newsletters keep people informed. Coaching keeps them going. I ran regular coaching spaces with the local committees, in the busy peak periods and in the calmer months too, because motivation drops fast when nobody checks in.',
    ],
    steps: [
      {
        when: 'Before the semester',
        what: 'Planning support and risk management. We set the goals together, looked at what could go wrong and prepared a plan B before it was needed.',
      },
      {
        when: 'During peak periods',
        what: 'More frequent check ins when the pressure was high, to solve problems quickly and keep the energy up.',
      },
      {
        when: 'During off peak periods',
        what: 'Lighter sessions to share wins, keep the link alive and prepare the next push, so nobody lost motivation in between.',
      },
    ],
    photos: [
      { caption: 'Coaching session photos coming soon' },
      { caption: 'Coaching session photos coming soon' },
    ] as { src?: string; caption: string }[],
  },

  samples: {
    title: 'From the newsletters',
    body: 'One example: a step by step budget guide shared before the semester, so every committee could plan its money with confidence from day one.',
    photos: [
      { src: '/media/belgium/finance-guide-budget.jpg', caption: 'Budget guide, part one: how to fill in the tool and set exchange goals.' },
      { src: '/media/belgium/finance-guide-steps.jpg', caption: 'Budget guide, part two: targets, fixed and variable costs, and who to ask for feedback.' },
    ],
  },

  tools: 'Mailchimp, Brevo, Canva, Slack, Microsoft Teams, SharePoint',
};
