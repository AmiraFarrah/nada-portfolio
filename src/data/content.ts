/* ============================================================
   CONTENT.TS
   The main content file. Everything here is text you can edit
   without touching a component.

   Media paths point inside /public:
     "/media/video/x.mp4"  ->  public/media/video/x.mp4

   Search for "TODO" — those are the fields only Nada can fill.
   ============================================================ */

   export type Metric = { n: string; l: string };

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
     role: 'Content, Marketing and Internal Communications',
     location: 'Sousse, Tunisia',
     scope: 'Tunisia · Belgium · Morocco · The Netherlands',
     email: 'abessi.nadaa@gmail.com',
     linkedin: 'https://www.linkedin.com/in/nada-abessi',
     linkedinLabel: 'linkedin.com/in/nada-abessi',
   };
   
   /* ------------------------------------------------------------
      HERO
      ------------------------------------------------------------ */
   export const hero = {
     rule: ['Communications and Content', 'Employee Engagement', 'Marketing and Analytics'],
     role: 'Internal communications, employee engagement, and the content that carries them.',
     portrait: '/media/portrait/nada-cutout.png',
     portraitAlt: 'Nada Abessi',
     
     pillars: [
       {
         title: 'Internal communications',
         body: 'Monthly newsletters, Slack and Teams channels, and the documentation behind them — written so people stop having to ask.',
       },
       {
         title: 'Engagement campaigns',
         body: 'Getting people who are already inside to take part, not just to read.',
       },
       {
         title: 'Content production',
         body: 'Writing, filming, editing, publishing. Usually all four on the same piece.',
       },
       {
         title: 'Measurement',
         body: 'Open rates, dashboards, monthly reports — what got read, and what changes next month.',
       },
     ],
   };
   
   /* ------------------------------------------------------------
      OPENING STATEMENT  (no longer rendered — folded into the hero)
      ------------------------------------------------------------ */
   export const statement = {
     headline: 'Reach is easy to buy. Attention has to be earned twice.',
     body:
       'Once to get the click, and again to keep someone reading past the first paragraph.',
   };
   
   /* ------------------------------------------------------------
      SECTION — SEO & ORGANIC GROWTH
      ------------------------------------------------------------ */
   export const seoSection = {
     id: 'seo',
     num: '06',
     title: 'Search and organic growth',
     lead:
       'Four roles across agency, marketplace and health tech. The pattern is the same each time: find where intent already exists, then build the pages that meet it.',
     items: [
       {
         id: 'seo-aussui',
         title: 'Search visibility for a gaming marketplace',
         sub: 'Aussui — SEO Specialist',
         context:
           'Aussui sells games and gaming credit to two audiences that search very differently: players looking for a specific title or top-up, and resellers looking for supply and margin. One set of pages was being asked to serve both.',
         action:
           'TODO — describe what you actually did: keyword research and how you split player vs reseller intent, on-page work, content produced, technical fixes, internal linking.',
         outcome: 'TODO — rankings, organic sessions, conversions, or the period over which they moved.',
         tools: 'TODO — e.g. Google Analytics, Search Console, Semrush/Ahrefs, WordPress',
       },
       {
         id: 'seo-medvice',
         title: 'Organic acquisition in health tech',
         sub: 'Medvice — SEO Specialist',
         context:
           'TODO — what was Medvice, who were they trying to reach, and what was not working?',
         action: 'TODO — what you did.',
         outcome: 'TODO — what changed.',
         tools: 'TODO',
       },
       {
         id: 'seo-bridge',
         title: 'SEO analysis for a talent platform',
         sub: 'Bridge 4 Talents — SEO Analyst (internship)',
         context: 'TODO — the brief and the starting point.',
         action: 'TODO — audits, reporting, recommendations you made.',
         outcome: 'TODO — what was implemented and what it moved.',
         tools: 'TODO',
       },
       {
         id: 'seo-bizbooster',
         title: 'Growth experiments',
         sub: 'Bizbooster — Growth Hacker (internship)',
         context: 'TODO — what the team was trying to grow.',
         action: 'TODO — the experiments you ran.',
         outcome: 'TODO — results, or what you learned and changed.',
         tools: 'TODO',
       },
     ] as CaseItem[],
   };
   
   /* ------------------------------------------------------------
      TOOLS
      ------------------------------------------------------------ */
   export const tools = [
     'Google Analytics',
     'Google Search Console',
     'Looker Studio',
     'Power BI',
     'WordPress',
     'HubSpot',
     'Mailchimp',
     'Brevo',
     'Canva',
     'Figma',
     'Photoshop',
     'Illustrator',
     'InDesign',
     'Premiere Pro',
     'After Effects',
     'CapCut',
     'Descript',
     'Notion',
     'Asana',
     'Trello',
     'Slack',
     'SharePoint',
   ];
   
   /* ------------------------------------------------------------
      FOOTER
      ------------------------------------------------------------ */
   export const footer = {
     headline: 'Available for communications and content roles.',
     languages: 'Arabic (native) · English (fluent) · French (fluent) · German (B1)',
     note:
       'Some material relates to work done inside organisations and is shown in the form it was published. Client-specific and internal figures have been removed where relevant.',
   }; 