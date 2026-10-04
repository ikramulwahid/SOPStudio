# SOPStudio

A browser-based document editor for creating, editing, and exporting Standard Operating Procedure (SOP) documents. Runs entirely client-side with no server upload required.

## Current Implementation Status (STAGE-00 Complete)

### Implemented
- React + TypeScript project structure
- Vite build system and development server
- Application entry point with routing
- 6 routes: /, /new, /templates, /settings, /preview, /export
- Global CSS design token system
- Application shell (Header, MainLayout, StatusArea)
- Basic responsive layout foundation
- Error boundary and fallback UI
- Reusable UI primitives (Button, EmptyState, ConfirmDialog)
- 5 template cards displayed in template gallery
- Production build successful

### Planned / Roadmap
- Rich-text editor with formatting controls
- Document model and state management
- IndexedDB persistence for documents
- Template engine with content switching
- Metadata form
- Document editing capabilities
- Import (Markdown, DOCX)
- Export (DOCX, PDF)
- Preview with pagination
- Validation engine
- Settings and preferences

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

