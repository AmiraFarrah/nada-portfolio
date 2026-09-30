# Nada Abessi · Portfolio

Vite + React + TypeScript. No CSS framework, no runtime dependencies beyond React.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Deploy (Vercel)

Push to GitHub, import the repo in Vercel. Framework preset: **Vite**.
Build command `npm run build`, output directory `dist`. Nothing else to configure.

## Where the content lives

All text is in `src/data/`. You should never need to open a component to change wording.

| File | What's in it |
|---|---|
| `src/data/content.ts` | Profile, hero, skill cards, "selected work" intro, tools, footer |
| `src/data/belgium.ts` | 01 AIESEC in Belgium: newsletters, map of local committees, coaching |
| `src/data/campaigns.ts` | 02 Hult Prize, 03 NAT'CO, 04 DREST |

Coaching photos for Belgium: add the files to `public/media/belgium/` and put
their paths in `coaching.photos` inside `src/data/belgium.ts`.

## Where the media lives

Everything under `public/`. A path in a data file is relative to `public/`:

```
"/media/video/aussui-spot.mp4"   ->  public/media/video/aussui-spot.mp4
"/media/campaigns/hult-final.jpg" -> public/media/campaigns/hult-final.jpg
```

Folders already created:

```
public/media/campaigns/    campaign stills and posters
public/media/newsletters/  newsletter spreads
public/media/seo/          dashboards, reports, SERP screenshots
public/media/drest/        published articles, performance reports
public/media/video/        .mp4 files
public/media/posters/      poster frames for the videos
public/media/docs/         PDFs (CV, case study one-pagers)
```

Any asset field left empty renders a visible dashed placeholder rather than a
broken image, so the site is presentable before every file is in place.

## Design system

Colours and fonts match the CV / portfolio PDF.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#19007D` | indigo band background |
| `--paper` | `#F7F6FB` | light band background |
| `--signal` | `#B10024` | red accent on light bands |
| `--signal-soft` | `#FF6B81` | red accent on indigo bands |

Display type **Anton**, body type **Poppins**, both from Google Fonts.
All tokens are at the top of `src/styles/portfolio.css`.
