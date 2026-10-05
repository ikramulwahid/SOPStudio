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

## Technology Requirements

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

## Architecture

### Component-Driven Architecture

- Separate document state from UI state
- Separate editor state from document state
- Separate persistence state from application state
- Use reusable components

### State Boundaries

- Document state: Contains the canonical document model
- Editor state: Contains editor-specific state (selection, focus, history)
- UI state: Contains navigation, modal visibility, loading states
- Persistence state: Contains IndexedDB operations, save status
- Export state: Contains export configuration and progress

### Canonical Document Model

The document content is stored in a structured model separate from presentation.

DOCUMENT CONTENT = what the SOP contains

TEMPLATE / STYLE = how the SOP looks

This separation enables:
- Template switching without rebuilding document
- Reusable rendering logic
- Export to different formats from same content

## Technology Stack

### Core

- **React 18** - UI library with hooks
- **TypeScript** - Type safety and documentation
- **Vite** - Build tool and dev server (fast HMR)
- **React Router** - Client-side routing

### Editor

- **Tiptap/ProseMirror** - Rich text editing (future)
- **KaTeX** - Mathematical equations (future)

### Storage

- **IndexedDB** - Document persistence (future)
- **LocalStorage** - Lightweight preferences (future)

### Export

- **docx** - DOCX generation (future)
- **pdf-lib** or **jspdf** - PDF generation (future)

### Utilities

- **JSZip** - Project file packaging (future)
- **Mammoth.js** - DOCX import (future)
- **DOMPurify** - HTML sanitization

## Application Structure

### Directory Structure

```
SOPStudio/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Editor/     # Editor-specific components (future)
│   │   ├── Templates/  # Template components (future)
│   │   └── Common/     # Shared components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── styles/          # CSS modules and global styles
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # Application entry point
│   └── types/           # TypeScript type definitions
├── docs/                # Documentation
├── public/              # Static assets
├── tests/               # Tests (future)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

### Route Structure

```
/
 /new
 /templates
 /settings
 /preview
 /export
```

## Design System

### Color Palette

- **Primary**: #2563eb (blue)
- **Secondary**: #64748b (slate)
- **Success**: #22c55e (green)
- **Warning**: #f59e0b (amber)
- **Error**: #ef4444 (red)
- **Background**: #ffffff / #f8f9fa
- **Surface**: #ffffff / #f8f9fa
- **Text**: #212529 / #6c757d

### Typography

- **Font**: System sans-serif stack
- **Sizes**: xs, sm, base, lg, xl, 2xl, 3xl
- **Weights**: normal, medium, semibold, bold

### Spacing

- **Scale**: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

### Radius

- **Scale**: 0.25rem, 0.375rem, 0.5rem, 0.75rem, full

### Shadows

- **Scale**: sm, md, lg, xl

### Components

- **Buttons**: Primary, secondary, danger, ghost, link
- **Inputs**: Text, number, date, select, checkbox
- **Dialogs**: Modal, alert, confirm
- **Toasts**: Success, error, warning, info
- **Empty States**: Placeholder with optional action
- **Progress**: Linear, circular

## Home Page

### Purpose

- Display application overview
- Provide quick navigation
- Communicate privacy (no server upload)

### Features

- Welcome message
- Quick actions (Create New SOP, Browse Templates)
- Recent documents list (architecturally ready)
- Status area showing save state

### Content

- Title and subtitle
- Your documents remain on this device. No account or server upload is required.
- Template selection entry point
- Import SOP entry point

## Templates

### Five Templates

1. Corporate Professional: Clean, professional layout
2. Industrial: Structured layout for industrial procedures
3. Modern Minimal: Simple, modern design
4. Quality / Compliance: Comprehensive layout for QMS
5. Technical: Technical documentation format

### Template System

- Template configuration object
- Visual preview
- Selection mechanism
- Switching without content loss

## New Document Flow

### Flow

Home
- Create New SOP
- Select Template
- Metadata
- Create Document
- Editor shell

### Template Selection

- Display 5 template cards
- Show template preview
- Click to select

### Metadata Form

Required fields:

- Title
- Document ID / SOP Number
- Version
- Effective Date
- Review Date
- Department
- Process Owner
- Author
- Approver
- Confidentiality
- Status

Status:

- Draft
- Under Review
- Approved
- Obsolete

Optional fields:

- Company/Organization
- Location
- Category
- Document Owner
- Prepared By
- Reviewed By
- Approved By
- Revision Summary
- Keywords/Tags
- Reference Documents

### Validation

- Required field validation
- Date validation
- Automatic creation date
- Duplicate document-ID validation architecture

## Document Model

### Core Types

- Document
- DocumentMetadata
- DocumentStyle
- PageSettings
- Branding
- Section
- ContentBlock
- ImageAsset
- Revision
- Approval
- ValidationResult
- DocumentSettings

### Separation

DOCUMENT CONTENT = what the SOP contains

TEMPLATE / STYLE = how the SOP looks

### Serialization

- JSON serialization/deserialization
- Versioning support

## Editor

### Features

- Rich text editing
- Formatting controls
- Keyboard shortcuts
- Undo/redo
- Selection handling

### Supported Formatting

- Bold, italic, underline, strikethrough
- Font family
- Font size
- Text color
- Highlight
- Alignment
- Justification
- Line spacing
- Paragraph spacing
- Indentation
- Superscript, subscript

### Heading Levels

- Title
- H1
- H2
- H3
- H4
- Normal

### Keyboard Shortcuts

- Ctrl/Cmd+Z: Undo
- Ctrl/Cmd+Y: Redo
- Ctrl/Cmd+S: Save
- Ctrl/Cmd+B: Bold
- Ctrl/Cmd+I: Italic
- Ctrl/Cmd+U: Underline

## Lists

### Features

- Bulleted lists

- Numbered lists

- Nested lists

- Custom numbering architecture where practical

### Outline Panel

- Live outline from headings

- Hierarchy display

- Collapsible sections

- Section selection

- Rename sections

- Add subsections

- Duplicate sections

- Delete sections

- Reorder sections

### Drag and Drop Reordering

- Drag table rows

- Drag procedure steps

- Drag outline sections

- Keyboard alternative for accessibility

## Tables

### Features

- Insert table
- Add/delete rows/columns
- Merge/split cells
- Cell alignment
- Cell background
- Borders
- Header row
- Column resizing
- Table width
- Caption
- Table numbering

### Predefined Structures

- Revision History

- Responsibilities

- Materials

- Equipment

- Approval

- Troubleshooting

- Document Control

## Images

### Features

- File upload
- Paste
- Drag/drop
- Resize
- Alignment
- Border
- Caption
- Automatic figure numbering
- Alt text
- Delete
- Move

### Asset Model

- Separate from editor UI state
- MIME type validation
- Client-side only processing

## Equations

### Features

- Symbol insertion

- Superscripts

- Subscripts

- Common mathematical expressions

- Equation insertion UI

- KaTeX rendering


## Procedure Steps

### Features

- Step with action

- Expected result

- Warning

- Note

- Image attachment

- Add step

- Delete step

- Duplicate step

- Reorder steps

- Automatic numbering


## Callouts

### Types

- Information

- Note

- Warning

- Danger

- Tip


### Features

- Reusable component

- Inherit template styling

- Consistent appearance


## Automatic Numbering

### Features

- Section numbering

- Subsection numbering

- Procedure step numbering

- Table numbering

- Figure numbering

- Recalculate after reordering


## Table of Contents

### Features

- Live TOC from headings

- Respond to heading changes

- Separate structural TOC and final TOC


## Revision History

### Features

- Version tracking

- Date tracking

- Description

- Prepared By

- Reviewed By

- Approved By

- Add revision

- Edit revision

- Delete revision

- Reorder revisions



## Approval

### Features

- Prepared By

- Reviewed By

- Approved By

- Role column

- Name column

- Signature column

- Date column

- Text signature

- Uploaded signature image

- Blank signature area



## Import

### Markdown Import

- Headings

- Paragraphs

- Lists

- Tables where supported

- Basic formatting

- Code blocks where relevant


### DOCX Import

- Use Mammoth.js

- Preserve text

- Preserve headings

- Preserve lists

- Preserve tables

- Preserve images

- Preserve basic formatting


### Safety

- HTML sanitization for pasted/imported HTML

- No execution of imported scripts

- Validate file types

- Warn about unsupported content


### Import Report

Show summary:

- Number of headings detected

- Number of tables imported

- Number of images imported

- Number of paragraphs imported

- Number of formatting elements simplified



## Drag and Drop

### Features

- Drag table rows

- Drag procedure steps

- Drag outline sections

- Keyboard alternative for accessibility



## Copy and Paste

### Features

- Word/Google Docs/browser rich-text paste

- Paste as plain text option

- Paste as HTML option

- HTML sanitization

- Safe handling of pasted tables/images



## Search and Replace

### Features

- Search text

- Replace text

- Replace all

- Case-sensitive matching

- Whole-word matching

- Match count

- Highlighted matches



## Validation

### Severity Levels

- ERROR

- WARNING

- INFO


### Validations

- Required metadata

- Required title

- Required document ID where configured

- Version validation

- Required SOP sections

- Empty headings

- Images without alt text

- Images without captions

- Missing approval information

- Broken/empty tables

- Missing revision history where applicable

- Invalid dates

- Duplicate document IDs among local drafts where practical



### Display

- Finding

- Severity

- Affected location

- Explanation

- Remediation suggestion



### Readiness Summary

- Overall document status

- Number of errors/warnings



## Preview

### Features

- Document rendering

- Page boundaries

- Margins

- Typography

- Tables

- Images

- Callouts

- TOC

- Headers/footers

- Page numbers


### Controls

- Zoom in/out

- Page navigation

- Fit to width

- Fit to page


### Page Breaking

- Keep headings with following content where practical

- Avoid awkward callout splits

- Avoid unnecessary procedure-step splits

- Avoid unnecessary table-row splits



## DOCX Export

### Features

- DOCX file generation

- Browser-compatible library


### Content

- Document metadata

- Headings

- Lists

- Tables

- Images

- Captions

- Numbering

- Headers

- Footers

- Page settings

- Template styling

- Revision history

- Approval section

- Equations where technically possible


### Export Dialog

- Document name

- Format (DOCX only)

- Editable filename

- Cancel

- Export


### Filename

- Format: DocumentID_Title_vVersion

- Sanitize invalid filesystem characters


### Feedback

- Preparing DOCX...

- Success/failure message


### Limitations

- Report fidelity limitations honestly

- Never claim perfect Word compatibility



## PDF Export

### Features

- PDF file generation

- Browser-compatible library


### Content

- Page dimensions

- Margins

- Typography

- Headings

- Tables

- Images

- Callouts

- Headers

- Footers

- Page numbers

- Colors

- Document structure


### Export Dialog

- Document name

- Format (PDF only)

- Editable filename

- Cancel

- Export


### Feedback

- Progress feedback

- Success/failure message


### Limitations

- Report unavoidable browser/library limitations honestly



## Local Persistence

### Features

- Create draft

- Save

- Autosave

- Load

- Recover

- Delete

- Recent documents

- Modified timestamps

- Save status



### Save States

- Saving...

- Saved just now

- Unsaved changes



### Autosave

- Debounced

- Configurable interval



### IndexedDB

- Document data

- Assets



### LocalStorage

- Lightweight settings



### Error Handling

- Storage unavailable

- Storage quota exceeded

- Corrupted stored data

- Failed save

- Failed load



### Unsaved Changes

- Protection for destructive navigation where appropriate

- Confirmation dialogs where appropriate



## Project Files (.sopstudio)

### Features

- Project package containing:

  - project.json

  - document.json

  - settings.json

  - assets/

- Save Project

- Download .sopstudio

- Open Project

- Validate package

- Load document

- Load assets

- Continue editing



### Preservation

- SOP content

- Metadata

- Template

- Branding

- Page settings

- Revision history

- Approval

- Images/assets

- Formatting configuration



### Validation

- Validate imported project files

- Reject malformed packages

- Never execute package content as code



### Serialization

- JSZip for packaging

- JSON for project data



## Undo/Redo

### Features

- Full edit history

- Ctrl/Cmd+Z

- Ctrl/Cmd+Y

- History management



## Accessibility

### Features

- Keyboard navigation

- Proper labels

- ARIA where appropriate

- Focus management

- Visible focus indicators

- Color contrast compliance

- Accessible dialogs

- Accessible tables

- Alt text for images

- Keyboard alternatives to drag/drop

- Status communication without relying only on color



## Responsive Design

### Desktop

- Three-panel editor layout


### Tablet/Smaller

- Convert side panels to tabs/drawers

- Retain editing capability

- Avoid forcing desktop layout onto small screens



## Settings

### Document Defaults

- Default template

- Default font

- Default page size

- Default margins

- Default orientation


### Editor

- Autosave

- Spellcheck

- Formatting marks if implemented


### Appearance

- Light theme

- Dark theme

- System theme


### Privacy

- Documents are processed and stored locally in your browser. SOPStudio does not require an account or upload your documents to a server.



## Error Handling

### Features

- Error boundaries

- Clear error messages

- User-friendly error UI

- Recovery options



### Error Types

- Import failure

- Export failure

- Storage failure

- Malformed project file

- Invalid image

- Unsupported content

- Corrupted document state



### Feedback

- Clear error messages

- Actionable suggestions

- Recovery options



## Security

### Features

- No document uploads

- No hidden remote calls

- HTML sanitization

- Validate file types

- Validate MIME types

- Reject executable content

- Treat imported files as untrusted

- No analytics exposing document content



### Input Validation

- File type validation

- MIME type validation

- Size limits

- Content validation



## Performance

### Features

- Efficient editor rendering

- Lazy loading where useful

- Optimized autosave

- Optimized preview generation

- Optimized export performance



### Optimization Targets

- Editor rerenders

- Large documents

- Large tables

- Image processing

- Autosave frequency

- Preview generation

- Export performance



## Component Architecture

### Component Organization

- Feature-based organization

- Shared components

- Presentation vs container components



### State Management

- Local state within components

- Context for global state

- No global state management library



## Document Rendering

### Features

- Separate rendering from editing

- Reusable rendering rules

- Support for different formats



### Rendering Components

- DocumentCanvas

- DocumentPage

- Rendered content blocks




## Page Breaks

### Features

- Smart page breaking

- Keep content together where practical

- Avoid awkward splits




## Import/Export Limitations

### Honest Reporting

- Report what cannot be imported/exported

- Report fidelity limitations

- Provide workarounds where possible




## MVP Priorities

### Priority Order


1. Document model
2. Editor
3. Persistence
4. Preview
5. Export


### Minimal Viable Product

- Core document editing

- Basic templates

- Local persistence

- Preview

- DOCX export




## Testing

### Types

- Unit tests

- Integration tests

- UI tests



### Coverage

- Important logic

- Edge cases

- Error paths




## Development Approach

### Incremental

- One stage at a time

- Verify before proceeding

- Do not skip stages

- Do not combine stages

- Do not rebuild working functionality

- Preserve existing functionality

- Fix prerequisite defects only when needed



### Quality

- Tests for important logic

- Build verification

- Manual verification

- Inspect git diff

- Update progress file

- Record incomplete work

- State exactly what is complete

- State next recommended prompt



### Documentation

- Progress tracking

- Decision recording

- Acceptance criteria



### Verification

- Run tests

- Run type checking

- Run lint

- Run production build

- Manual verification

- Inspect git diff

- Update progress file

- Record incomplete work

- State exactly what is complete

- State next recommended prompt



### Stop After Each Stage

- Do not implement the next stage

- The progress file must always describe the actual repository state, not the intended state.



## UX Rules

### Feedback

- Every major operation shows feedback

- Clear success/error messages

- Loading states



### Confirmation

- Destructive actions require confirmation

- Unsaved change warnings



### Empty States

- Clear messaging

- Helpful suggestions

- Actionable next steps




## Confirmation Dialogs

### Features

- Destructive action confirmation

- Unsaved changes warning

- Customizable content



### UI

- Modal dialog

- Clear message

- Confirm/Cancel buttons




## Unsaved Changes

### Features

- Detect unsaved changes

- Warn before navigation

- Option to save or discard



### Protection

- Block navigation without confirmation

- Offer save option




## Privacy

### Messaging

- Your documents remain on this device. No account or server upload is required.

- Documents are processed and stored locally in your browser.



### Guarantees

- No document uploads

- No analytics exposing document content

- Client-side only processing




## Final Quality Bar

### Requirements

- Reliable editing

- Professional UX

- Document fidelity

- Preview/export consistency

- Persistence reliability

- Validation correctness

- Accessibility

- Responsive behavior

- Error handling

- Maintainability




### Final Deliverables

- Complete application

- Working templates

- Working editor

- Working import

- Working export

- Working preview

- Working persistence

- Complete acceptance criteria

- Comprehensive tests




## README Requirements

### Content

- Product overview

- Architecture

- Technology choices

- Installation

- Development commands

- Production build

- Document model

- Template system

- Persistence

- Import limitations

- Export limitations

- Browser compatibility

- Privacy model

- Known limitations

- Future extension points




## Final Coding-Agent Instructions

### Agent Behavior

- Read control files first

- Inspect current implementation

- Determine earliest incomplete stage

- Follow incremental development

- Verify before proceeding

- Record state before stopping



### Control Files

- SOPStudio_MASTER_SPEC.md (authoritative)

- SOPStudio_PROGRESS.md (implementation state)

- SOPStudio_DECISIONS.md (architectural decisions)

- SOPStudio_ACCEPTANCE_MATRIX.md (acceptance criteria)



### Development Rules

- Implement only assigned stage

- Do not skip stages

- Do not combine stages

- Do not rebuild working functionality

- Preserve existing functionality

- Fix prerequisite defects only when needed



### Verification

- Run tests

- Run type checking

- Run lint

- Run production build

- Manual verification

- Inspect git diff

- Update progress file

- Record incomplete work

- State exactly what is complete

- State next recommended prompt



### Stop After Each Stage

- Do not implement the next stage

- The progress file must always describe the actual repository state, not the intended state.



## Stage Dependency Map

The intended dependency order is:

STAGE-00
  ↓
STAGE-01
  ↓
STAGE-02
  ↓
STAGE-03
  ↓
STAGE-04
  ↓
STAGE-05
  ↓
STAGE-06
  ↓
STAGE-07
  ↓
STAGE-08
  ↓
STAGE-09
  ↓
STAGE-10
  ↓
STAGE-11
  ↓
STAGE-12
  ↓
STAGE-13
  ↓
STAGE-14
  ↓
STAGE-15
  ↓
STAGE-16
  ↓
STAGE-17
  ↓
STAGE-18
  ↓
STAGE-19
  ↓
STAGE-20
  ↓
STAGE-21
  ↓
STAGE-22
  ↓
STAGE-23
  ↓
STAGE-24

The particularly important architectural sequence is:

Document Model
  ↓
Editor
  ↓
Structured Content
  ↓
Persistence
  ↓
Import
  ↓
Rendering
  ↓
DOCX/PDF Export
  ↓
Validation
  ↓
Hardening

This prevents the common AI-agent failure mode of building the export UI before there is a stable canonical document model.
