# SOPStudio Master Specification

## Product Overview

SOPStudio is a browser-based document editor for creating, editing, and exporting Standard Operating Procedure (SOP) documents. The application runs entirely client-side with no server upload required.

## Core Capabilities

### Document Management
- Create new SOP documents
- Edit documents using a rich-text editor
- Switch between multiple document templates
- Apply document branding and styling
- Validate document quality

### Templates
Five predefined templates:
1. Corporate Professional
2. Industrial
3. Modern Minimal
4. Quality / Compliance
5. Technical

### Document Structure
Standard SOP structure:
1. Document Information
2. Purpose
3. Scope
4. Responsibilities
5. Definitions
6. Prerequisites
7. Required Materials / Tools
8. Safety / Precautions
9. Procedure
10. Process Flow
11. Troubleshooting
12. Quality Checks
13. References
14. Records / Documentation
15. Revision History
16. Approval

### Content Features
- Rich text editing (bold, italic, underline, etc.)
- Structured lists (bulleted, numbered, nested)
- Editable tables
- Images with captions and numbering
- Callout blocks (Information, Note, Warning, Danger, Tip)
- Equations (symbols, superscripts, subscripts)
- Procedure steps
- Table of Contents
- Headers and footers

### Export
- DOCX export
- PDF export

### Import
- Markdown import
- DOCX import (browser-compatible)

### Persistence
- Local storage for settings
- IndexedDB for document drafts
- Project file export/import (.sopstudio)

### Accessibility
- Keyboard navigation
- Proper labels and ARIA
- Focus management
- Color contrast compliance
- Screen reader support

## Technical Requirements

### Frontend Stack
- React 18
- TypeScript
- Vite build system
- React Router

### Editor
- Tiptap/ProseMirror (rich text)
- Client-side only

### Storage
- IndexedDB for documents
- LocalStorage for preferences

### Export
- DOCX: Browser-compatible library
- PDF: Browser-compatible library

## Design Principles
- Client-side only processing
- No document uploads
- Privacy-first architecture
- Accessible and responsive
- Professional document fidelity