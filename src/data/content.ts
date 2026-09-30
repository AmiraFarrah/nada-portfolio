/* ============================================================
   CONTENT.TS
   Profile, hero, skill cards, "selected work" intro, tools and
   footer. Edit the text here, no need to open a component.

   Media paths point inside /public:
     "/media/video/x.mp4"  ->  public/media/video/x.mp4
   ============================================================ */

export type Metric = { n: string; l: string };

/* Kept so older components still compile if they are left in the project. */
export type CaseItem = {
  id: string;
  title: string;
  sub: string;
  context: string;
  action: string;
  outcome: string;
  metrics?: Metric[];
  tools?: string;
  visuals?: { type: 'image' | 'video'; src: string; poster?: string }[];
  note?: string;
};

/* ------------------------------------------------------------
   PROFILE
   ------------------------------------------------------------ */
export const profile = {
  name: 'Nada Abessi',
  role: 'Internal Communications and Content',
  location: 'Sousse, Tunisia · Open to relocating to Germany',
  scope: 'Tunisia · Belgium · Morocco · The Netherlands',
  email: 'abessi.nadaa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nada-abessi',
  linkedinLabel: 'linkedin.com/in/nada-abessi',
};

/* ------------------------------------------------------------
   HERO
   ------------------------------------------------------------ */
export const hero = {
  rule: ['Internal communications', 'Employee engagement', 'Content people share'],
  role: 'I help people inside a company stay informed, involved and proud of where they work.',
  intro:
    'I write the newsletter, film the video, help run the event and then check the numbers to see what worked. Most of my work has been with international teams, in English and French.',
  portrait: '/media/portrait/nada-cutout.png',
  portraitAlt: 'Nada Abessi',

  pillars: [
    {
      title: 'Internal communications',
      body: 'Monthly newsletters, intranet updates, team channels and the guides behind them. Clear enough that nobody has to ask twice.',
    },
    {
      title: 'Engagement campaigns',
      body: 'Ideas that get people involved, not just informed. Challenges, events and content that people actually want to be part of.',
    },
    {
      title: 'Content production',
      body: 'Idea, script, filming, editing, publishing. I usually take a piece from the first draft all the way to the final post.',
    },
    {
      title: 'Measurement',
      body: 'Open rates, clicks, Looker Studio dashboards and Power BI reports. I look at what worked and improve the next one.',
    },
  ],
};

/* ------------------------------------------------------------
   SELECTED WORK INTRO (shown just before the first project)
   ------------------------------------------------------------ */
export const selectedWork = {
  title: 'Selected work',
  body:
    'Here are some of the projects I can share. A lot of my work, like internal documents and team data, stays confidential, so this is only part of the story. I am always happy to walk you through the rest in a conversation.',
};

/* ------------------------------------------------------------
   TOOLS (grouped)
   ------------------------------------------------------------ */
export const toolGroups = [
  {
    label: 'AI in my daily work',
    items: ['Microsoft Copilot', 'ChatGPT', 'Gemini', 'CapCut AI', 'Canva AI', 'Notion AI'],
  },
  {
    label: 'Internal comms and collaboration',
    items: ['Microsoft Teams', 'SharePoint', 'Slack', 'Confluence', 'Notion', 'Trello', 'Asana', 'Google Workspace'],
  },
  {
    label: 'Email and web',
    items: ['Mailchimp', 'Brevo', 'HubSpot', 'WordPress'],
  },
  {
    label: 'Data and reporting',
    items: ['Power BI', 'Looker Studio', 'Google Analytics', 'Google Search Console'],
  },
  {
    label: 'Design, video and audio',
    items: ['Canva', 'Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'After Effects', 'CapCut', 'Descript', 'Audacity'],
  },
];

/* ------------------------------------------------------------
   FOOTER
   ------------------------------------------------------------ */
export const footer = {
  headline: "Let's make internal communication people actually read.",
  sub: 'Open to internal communications internships, and happy to move to Germany.',
  languages: 'Arabic (native) · English (fluent) · French (fluent) · German (B1)',
  note:
    'Some of this work was done inside organisations. It is shown the way it was published, and internal figures or names have been removed where needed.',
};
