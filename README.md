# Professional Portfolio Website

A high-end, minimalist portfolio website for a Software Engineer and AI Researcher built with React and Vite.

## 🎨 Design

- **Color Palette**:
  - Background: `#f7f1f0` (Creamy off-white)
  - UI Elements: `#c3a6a0` (Soft taupe)
  - Accent/CTA: `#a15c38` (Terracotta)
  - Typography: `#262220` (Deep charcoal)

- **Typography**:
  - Headers: Playfair Display (serif)
  - Body: Inter (sans-serif)

- **Features**:
  - Slow fade transitions (0.8s)
  - Subtle drop shadows
  - Organic shapes
  - Responsive design

## 🛠 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tanimahossain
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   └── data/           # Data files for easy content updates
│       ├── personal.js
│       ├── experience.js
│       ├── education.js
│       ├── skills.js
│       ├── competitiveProgramming.js
│       ├── achievements.js
│       └── contact.js
├── components/
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Button, Card, Section
├── pages/              # Page components
│   ├── Home/
│   ├── Experience/
│   ├── CompetitiveProgramming/
│   ├── Achievements/
│   └── Contact/
├── styles/
│   └── index.css       # Global styles & CSS variables
├── App.jsx             # Main app with routing
├── App.css             # App-level styles & transitions
└── main.jsx            # Entry point
```

## 📝 Updating Content

All content is stored in data files under `src/assets/data/`. To update information:

1. **Personal Info & About**: Edit `src/assets/data/personal.js`
2. **Education**: Edit `src/assets/data/education.js`
3. **Experience & Skills**: Edit `src/assets/data/experience.js` and `skills.js`
4. **Competitive Programming**: Edit `src/assets/data/competitiveProgramming.js`
5. **Achievements**: Edit `src/assets/data/achievements.js`
6. **Contact Info**: Edit `src/assets/data/contact.js`

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --color-background: #f7f1f0;
  --color-ui: #c3a6a0;
  --color-accent: #a15c38;
  --color-text: #262220;
}
```

### Changing Fonts

Update the Google Fonts import and font-family variables in `src/styles/index.css`.

### Changing Transitions

Modify the transition duration variables in `src/styles/index.css`:

```css
:root {
  --transition-slow: 0.8s ease;
  --transition-medium: 0.4s ease;
  --transition-fast: 0.2s ease;
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: > 900px
- Tablet: 768px - 900px
- Mobile: < 768px

## 📄 License

MIT License
