
-----

# 🛠️ Skip Selector – React + Vite Demo

A tiny, modern React project that demonstrates how to fetch live skip-hire data, display selectable "cards" with shadcn/Tailwind styling, and surface the chosen skip in a fixed bottom footer.

-----

## ✨ Features

| Feature           | What it does                                  |
| :---------------- | :-------------------------------------------- |
| **Live API** | Pulls skips via `GET /api/skips/by-location`  |
| **Responsive cards** | 1→2→3-column grid, hover lift, gradient overlay |
| **shadcn/ui** | Uses ready-made `<Card>`, `<Button>`, `<Badge>` primitives |
| **Footer summary** | Shows size, hire period & price of the selected skip |
| **Keyboard-friendly** | Radio inputs under the hood for full a11y     |
| **Vite + HMR** | Instant reload in development, fast prod build |

-----

## 📦 Tech Stack

| Layer             | Choice                     | Why?                            |
| :---------------- | :------------------------- | :------------------------------ |
| Build tool        | **Vite** | Lightning-fast dev server       |
| UI library        | **React 18** | The industry default            |
| Styling           | **Tailwind CSS + shadcn/ui** | Utility speed, polished UI      |
| Class helper      | **clsx** | Concise conditional classes     |
| HTTP              | native **fetch** | No extra deps                   |

-----

## 🚀 Quick Start

```bash
git clone https://github.com/your-org/skip-selector.git
cd skip-selector

# install deps
npm install            # or pnpm install / yarn

# start dev server
npm run dev
```

Visit `http://localhost:5173` and you should see the grid populated with live data for postcode NR32.

### Production Build

```bash
npm run build      # outputs to /dist
```

### 🔧 Configuration

| Name          | Default                                                                 | Description                                                     |
| :------------ | :---------------------------------------------------------------------- | :-------------------------------------------------------------- |
| `VITE_SKIP_API` | `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft` | Override the data source without touching code.                 |

Create a `.env` (or `.env.local`) in the project root if you need a different endpoint or postcode.

### 📂 Folder Structure

```
skip-selector/
├─ public/             # static assets
├─ src/
│  ├─ assets/skip-placeholder.jpg
│  ├─ components/
│  │  └─ SkipSelection/
│  │      ├─ SkipSelectionPage.jsx
│  │      ├─ SkipGrid.jsx
│  │      ├─ SkipCard.jsx
│  │      └─ BottomBanner.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css       # Tailwind base
├─ tailwind.config.js
└─ package.json
```

### 📝 Scripts

| Command         | Action                          |
| :-------------- | :------------------------------ |
| `npm run dev`   | Start Vite dev server           |
| `npm run build` | Optimized production build      |
| `npm run preview` | Local preview of the build      |
| `npm run lint`  | (Optional) run ESLint if configured |

-----

## 🤝 Contributing

1.  Fork the repo
2.  Create a feature branch (`git checkout -b feat/my-idea`)
3.  Commit your changes (`git commit -m "feat: add cool thing"`)
4.  Push to the branch (`git push origin feat/my-idea`)
5.  Open a Pull Request 🚀

-----

## 📜 License

MIT © 2025 — [Your Name]

Feel free to reuse the code and adapt it to your own skip-hire wizard, product picker, or any other selector workflow\!
