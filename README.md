# Nada Abessi — Portfolio

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
| `src/data/content.ts` | Profile, hero, opening statement, SEO case list, tools, footer |
| `src/data/campaigns.ts` | Hult Prize and Aussui campaign blocks |
| `src/data/editorial.ts` | The two-up block: internal comms + editorial/traffic |

Search the whole `src/data` folder for **`TODO`** — every field that still needs
real information is marked. Nothing else needs editing.

```bash
grep -rn "TODO" src/data
```

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

| Token | Value | Use |
|---|---|---|
| `--ink` | `#14100C` | dark band background |
| `--paper` | `#F7F3EC` | light band background |
| `--paper-dim` | `#EAE3D7` | alternate light band |
| `--signal` | `#C4562F` | accent: numbers, labels, links |

Display type **Fraunces**, body type **Inter**, both from Google Fonts.
All tokens are at the top of `src/styles/portfolio.css`.
