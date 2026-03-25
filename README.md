# XYZ Analytics Portal

A professional React analytics portal for XYZ retail outlets across Bangalore.
Built with React 18, React Router, Recharts, and Vite.

---

## Quick Start — Step by Step

### Prerequisites
- **Node.js** v18+ (download from https://nodejs.org)
- **npm** v9+ (comes with Node)

Check your versions:
```bash
node -v   # should be 18.x or higher
npm -v    # should be 9.x or higher
```

---

### Step 1 — Extract the project

Unzip `xyz-analytics.zip` to a folder of your choice.

```bash
unzip xyz-analytics.zip
cd xyz-analytics
```

---

### Step 2 — Install dependencies

```bash
npm install
```

This installs React, React Router, Recharts, and Vite (takes ~30s).

---

### Step 3 — Start the development server

```bash
npm run dev
```

You'll see output like:
```
  VITE v5.x  ready in 400ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open **http://localhost:5173** in your browser.

---

### Step 4 — Build for production (optional)

```bash
npm run build
```

Output goes to `dist/`. Deploy this folder to any static host
(Netlify, Vercel, GitHub Pages, etc.).

```bash
npm run preview   # preview the production build locally
```

---

## Project Structure

```
xyz-analytics/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          ← React entry point
    ├── App.jsx           ← Routes
    ├── index.css         ← All global styles + CSS variables
    ├── components/
    │   ├── Sidebar.jsx   ← Left navigation
    │   └── Header.jsx    ← Top header bar
    └── pages/
        ├── Home.jsx      ← Home page with hero + stats
        ├── Sales.jsx     ← Sales dashboard + charts
        ├── Quality.jsx   ← Quality dashboard + charts
        └── About.jsx     ← About page
```

---

## Brand Colors

| Name            | Hex       | Usage                          |
|-----------------|-----------|--------------------------------|
| Teal            | `#18837E` | Primary UI, charts, active nav |
| Yale Blue       | `#004975` | Sidebar, headers               |
| Razzmatazz      | `#DB3069` | Alerts, issues, negative values|
| Amethyst Smoke  | `#9882AC` | Accent, filters, badges        |
| White Smoke     | `#F2F2F2` | Page & card backgrounds        |

Colors are defined as CSS variables in `src/index.css`:
```css
:root {
  --teal:       #18837E;
  --pink:       #DB3069;
  --blue:       #004975;
  --lavender:   #9882AC;
  --light-gray: #F2F2F2;
}
```

---

## Embedding Tableau Dashboards

Both the **Sales** and **Quality** pages have a **"Connect Tableau"** button.

1. Go to your dashboard on **Tableau Public**
2. Click **Share** → **Copy Embed Link**
3. Click **Connect Tableau** in the portal
4. Paste the URL and click **Load**

---

## Pages

| Route      | Page              | Description                                    |
|------------|-------------------|------------------------------------------------|
| `/`        | Home              | Hero banner, KPI stats, outlet table, nav cards|
| `/sales`   | Sales Dashboard   | Revenue charts, zone breakdown, Tableau embed  |
| `/quality` | Quality Dashboard | Issue tracker, radar chart, outlet audit table |
| `/about`   | About             | Project info, data sources, tools, brand palette|

---

## Customisation

### Change the portal name
Edit `src/components/Sidebar.jsx` → `logo-name` and `logo-sub` spans.

### Add real data
Replace the static arrays in `Sales.jsx` and `Quality.jsx` with API calls or
import your own JSON/CSV files.

### Add a new page
1. Create `src/pages/NewPage.jsx`
2. Add a `<Route>` in `src/App.jsx`
3. Add a `<NavLink>` in `src/components/Sidebar.jsx`

---

## Tech Stack

- **React 18** — UI framework
- **React Router v6** — client-side routing
- **Recharts** — charting (AreaChart, BarChart, RadarChart)
- **Vite** — dev server & bundler
- **Plain CSS** with CSS variables — no Tailwind dependency
- **DM Sans + DM Serif Display** — Google Fonts
