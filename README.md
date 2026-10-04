# SOPStudio

A browser-based document editor for creating, editing, and exporting Standard Operating Procedure (SOP) documents. Runs entirely client-side with no server upload required.

## Features

- Create new SOP documents with a rich-text editor
- Five document templates (Corporate Professional, Industrial, Modern Minimal, Quality/Compliance, Technical)
- Structured SOP content sections
- Editable tables
- Images with captions and numbering
- Callout blocks (Information, Note, Warning, Danger, Tip)
- Equations
- Procedure steps
- Table of Contents
- Headers and footers
- DOCX and PDF export
- Markdown and DOCX import
- Local storage for settings
- IndexedDB for document drafts
- Project file export/import (.sopstudio)
- Accessible and responsive design

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Project Structure

```
SOPStudio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── styles/          # Global and component styles
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # Application entry point
│   └── types/           # TypeScript type definitions
├── docs/                # Documentation
├── public/              # Static assets
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Privacy

All document processing and storage happens entirely in your browser. No documents are uploaded to any server.

## License

MIT
