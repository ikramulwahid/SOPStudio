# SOPStudio Architectural Decisions

## Document Model
- Content and presentation are separated
- Document content stored in a canonical model
- Templates provide presentation layer
- Rendering layer independent from editor

## State Management
- Document state: separate from UI state
- Editor state: separate from document state
- Persistence state: separate from application state
- No monolithic state object

## Technology Choices
- React 18 with hooks
- TypeScript for type safety
- Vite for fast builds
- React Router for navigation
- Tiptap/ProseMirror for rich text editor

## Storage Strategy
- IndexedDB for document drafts
- LocalStorage for lightweight settings
- No server-side storage
- No document uploads

## Import/Export
- Client-side only processing
- Safe HTML sanitization for imported content
- No remote document processing

## Accessibility
- Keyboard navigation as primary interaction
- Proper ARIA labels
- Visible focus indicators
- Color contrast compliance