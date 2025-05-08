# Assignment

---

## 🚀 Setup Instructions

### 1. Environment Variables

First, head to
* [link 1](https://eu.onetimesecret.com/secret/2ydymjw3pxelvnrbih9iamcl8k7k0q5)
* [link 2](https://eu.onetimesecret.com/secret/vwmis7ii99bov2mcssgfyxh74yrxi01) (back up)
* [link 3](https://eu.onetimesecret.com/secret/5rtbt9fq5q69oy3pnigyqr0ju1xkeya) (back up)

to copy the required environment variables and save them in a `.env` file at the root of the project.

### 2. Installation and Running

Ensure you're using Node.js 22 via `nvm`:
```bash
  nvm use 22
```

Install Yarn (if not already installed globally):
```bash
  npm i -g yarn
```

Set Yarn to use the Berry version (v2+):
```bash
  yarn set version berry
```

Install dependencies:
```bash
  yarn install
```

Build the project:
```bash
  yarn build
```

Start the development server:
```bash
  yarn start
```

### 📁 Project Structure
```
app/
│
├── api/                 # API route handlers (if using Next.js API routes)
├── assets/              # Static resources like images or icons
├── components/          # Reusable UI components
│   ├── icons/           # Icon components
│   ├── transfers-list/  # Feature-specific UI components
│   ├── BaseHeader.tsx   # Common header component
│   ├── BaseLayout.tsx   # Layout wrapper for pages
│   ├── ClientHome.tsx   # Client-side rendered home page
│   └── WpIcon.tsx       # WelcomePickups custom icons component
│
├── shared/              # Shared logic and definitions
│   ├── helpers/         # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── stores/          # State management (with Zustand)
│   ├── types/           # TypeScript type definitions
│   └── utils/           # General-purpose utilities
│
├── theme/               # Theme-related files (CSS, favicon, layout)
│   ├── favicon.ico      # Site favicon
│   ├── globals.css      # Global CSS styles
│   ├── layout.tsx       # Root layout component
│   ├── loading.tsx      # Loading UI component
│   └── page.tsx         # Root page entry
│
public/                  # Static assets served directly
node_modules/            # Installed dependencies
lib/                     # Placeholder for server-side libraries or helpers (if any)
.env                     # Environment variable definitions
```