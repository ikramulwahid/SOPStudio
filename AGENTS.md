# SOPStudio — AI Development Agent Instructions

## 1. Project Identity

Project: SOPStudio

Repository:

https://github.com/ikramulwahid/SOPStudio.git

Primary branch:

`main`

SOPStudio is a browser-based, privacy-first SOP authoring and document-generation application.

The application is frontend-only.

It must not introduce:

* backend services
* authentication
* server-side document processing
* server-side document storage
* document uploads
* remote document APIs
* analytics that transmit document content

All document processing and persistence must remain client-side.

---

# 2. Authoritative Project Documents

Before making implementation decisions, read these files:

1. `docs/SOPStudio_MASTER_SPEC.md`
2. `docs/SOPStudio_PROGRESS.md`
3. `docs/SOPStudio_DECISIONS.md`
4. `docs/SOPStudio_ACCEPTANCE_MATRIX.md` if present
5. `README.md`

The master specification defines what the product must do.

The progress file defines the actual verified implementation state.

The decisions file records architectural/product decisions that must remain consistent.

The acceptance matrix tracks whether requirements are actually satisfied.

The repository source code and tests are the ultimate implementation truth.

Never assume a feature is complete simply because documentation says it is complete.

---

# 3. Incremental Development Rule

SOPStudio must be developed incrementally.

The project is divided into implementation stages:

* STAGE-00 Foundation
* STAGE-01 Document Model
* STAGE-02 Application Shell/Home
* STAGE-03 Template Engine
* STAGE-04 New SOP/Metadata
* STAGE-05 Rich Text Editor
* STAGE-06 Lists/Outline/Section Management/Numbering
* STAGE-07 Tables
* STAGE-08 Images/Assets
* STAGE-09 Callouts/Equations/Procedure Steps
* STAGE-10 TOC/Revision/Approval
* STAGE-11 IndexedDB/Autosave/Recovery
* STAGE-12 Import
* STAGE-13 Document Rendering/Preview
* STAGE-14 Branding/Header/Footer/Page Setup
* STAGE-15 Validation
* STAGE-16 DOCX Export
* STAGE-17 PDF Export
* STAGE-18 `.sopstudio` Project Files
* STAGE-19 Search/Replace/Editor Completion
* STAGE-20 Settings
* STAGE-21 Accessibility/Responsive/Error Handling
* STAGE-22 Performance/Security Hardening
* STAGE-23 Testing/Acceptance
* STAGE-24 Final MVP Hardening

Only implement the stage explicitly assigned by the project owner.

Do not begin later stages simply because they appear useful.

Do not bundle multiple stages together unless the project owner explicitly authorizes it.

---

# 4. Stage Recovery Rule

At the beginning of every new Cline session:

1. Inspect the repository.
2. Run `git status`.
3. Check the current branch.
4. Check recent commits.
5. Read project control documents.
6. Inspect relevant source code and tests.
7. Determine the earliest incomplete stage.

The correct stage must be determined from the actual repository state.

Do not restart the project merely because the current chat is new.

Do not assume previous chat context is available.

Do not rebuild working functionality unnecessarily.

If a previous stage is documented as COMPLETE but verification shows that it is actually incomplete, treat that stage as incomplete.

---

# 5. Scope Control

For every assigned stage:

* Implement only that stage.
* Fix prerequisite defects only when necessary for that stage.
* Do not redesign unrelated working functionality.
* Do not introduce speculative features.
* Do not create placeholders presented as completed functionality.

Every visible major UI control must either:

1. perform a real function, or
2. clearly indicate that the function is unavailable/not yet implemented.

Never create fake functionality merely to make the UI look complete.

---

# 6. Architecture Principles

Maintain a component-driven React + TypeScript architecture.

Separate:

* document state
* editor state
* UI state
* persistence state
* export state
* settings state

Do not place the entire application into one uncontrolled object.

Use reusable components.

Avoid monolithic components.

Organize source files by feature/domain where practical.

---

# 7. Canonical Document Model

The canonical document model is the central architectural contract.

Document content represents:

> WHAT the SOP contains.

Template/style represents:

> HOW the SOP looks.

These must remain separate.

Users must be able to switch templates without rebuilding or losing document content.

Do not make the editor HTML the only canonical representation if doing so would prevent reliable future import/export/rendering.

Structured content should remain structured wherever practical.

---

# 8. Client-Side Architecture

All document operations must remain in the browser.

Preferred technologies include:

* React
* TypeScript
* Vite
* Tiptap/ProseMirror
* Mammoth.js
* `docx`
* KaTeX
* IndexedDB
* LocalStorage
* JSZip
* browser-compatible PDF tooling

Libraries may be substituted when technically justified.

Do not add a backend to solve a library limitation.

When browser limitations exist, implement the most reliable client-side alternative and communicate the limitation.

---

# 9. Privacy and Security

Never:

* upload document contents
* upload images
* transmit document data to external services
* create fake server APIs
* introduce analytics that expose document contents
* execute imported scripts
* trust imported HTML

Treat imported documents, pasted HTML, project files, and images as untrusted input.

Sanitize imported/pasted HTML.

Validate file types and MIME types.

Never expose local document contents through external services.

---

# 10. Functional-First Rule

Prioritize real functionality over visual polish.

A control labelled:

* Save
* Export
* Import
* Undo
* Redo
* Add Table
* Add Image
* Validate
* Preview

must perform the corresponding real operation.

Do not create fake API calls.

Do not create fake export buttons.

Do not simulate IndexedDB using ordinary in-memory state.

---

# 11. UX Rules

Every major operation must provide visible feedback.

Examples:

Saving:
`Saving...`

Success:
`Saved locally`

Import:
`Importing document...`

Export:
`Preparing DOCX...`

Failure:
`Export failed. Your document remains safely stored locally.`

Users must never be left uncertain about whether an operation succeeded.

Use confirmation dialogs for destructive actions.

Detect unsaved changes where appropriate.

---

# 12. Accessibility

Follow WCAG-oriented practices.

Use:

* semantic HTML
* proper labels
* keyboard navigation
* focus management
* visible focus indicators
* accessible dialogs
* accessible tables
* meaningful ARIA where required
* image alt text
* keyboard-accessible alternatives to drag/drop

Do not communicate important information only through color.

---

# 13. Testing

Add meaningful tests for important logic introduced by each stage.

At minimum, where applicable:

* unit tests
* integration tests
* UI tests

Do not claim functionality is complete without verification.

---

# 14. Verification Requirement

At the end of every assigned stage, run the appropriate checks.

At minimum, where available:

* tests
* TypeScript/type checking
* lint
* production build

Also perform stage-specific manual verification when practical.

Fix straightforward defects before declaring the stage complete.

---

# 15. Progress Tracking

After every stage, update:

`docs/SOPStudio_PROGRESS.md`

It must describe the actual state of the repository.

Include:

* current stage
* last completed stage
* overall status
* completed capabilities
* current implementation
* not implemented
* known limitations
* known defects
* tests
* build/type/lint results
* acceptance criteria status
* important files
* architectural decisions
* next recommended stage

Never mark functionality COMPLETE without verification.

---

# 16. Decision Tracking

When an architectural or product decision is made that affects future implementation, record it in:

`docs/SOPStudio_DECISIONS.md`

Include:

* date
* decision
* reason
* alternatives considered when relevant
* affected components/stages

Do not silently change an established architectural decision.

---

# 17. Acceptance Criteria

Maintain:

`docs/SOPStudio_ACCEPTANCE_MATRIX.md`

Track each requirement as:

* NOT STARTED
* PARTIAL
* COMPLETE
* BLOCKED

Only mark COMPLETE when the repository contains the functionality and it has been verified.

---

# 18. Git Discipline

The official shared checkpoint is:

https://github.com/ikramulwahid/SOPStudio.git

Use branch:

`main`

Before changes:

* inspect `git status`
* preserve existing work
* never discard uncommitted user work

After completing the assigned stage:

1. Run verification.
2. Update project documentation.
3. Review the entire diff.
4. Ensure secrets and unrelated files are not included.
5. Commit the stage.
6. Push to `origin main`.
7. Verify that the push succeeded.
8. Report the resulting commit SHA.
9. STOP.

Never force-push.

---

# 19. Commit Convention

Use:

`feat(stage-XX): <description>`

Examples:

`feat(stage-00): establish application foundation`

`feat(stage-05): implement rich text editor`

`feat(stage-13): implement document preview`

Bug-fix commits required before stage completion may use:

`fix(stage-XX): <description>`

Prefer one coherent stage commit when practical.

---

# 20. Mandatory Stage Completion Report

After each assigned stage, provide:

STAGE:
`STAGE-XX`

STATUS:
`COMPLETE / PARTIAL / BLOCKED`

COMMIT:
`<full SHA>`

BRANCH:
`main`

REMOTE:
`https://github.com/ikramulwahid/SOPStudio.git`

VERIFICATION:

* Tests: PASS/FAIL
* TypeScript: PASS/FAIL
* Lint: PASS/FAIL
* Production build: PASS/FAIL
* Manual verification: PASS/FAIL

IMPLEMENTED:

* ...

KNOWN DEFECTS:

* ...

KNOWN LIMITATIONS:

* ...

FILES/AREAS CHANGED:

* ...

ACCEPTANCE CRITERIA UPDATED:

* ...

NEXT STAGE:
`STAGE-XX`

Then stop.

Do not implement the next stage in the same session unless explicitly instructed.

---

# 21. Repository Integrity

Never:

* force-push
* reset to an old commit without authorization
* delete project history
* overwrite unrelated work
* remove files merely to simplify implementation
* change the architecture solely for convenience without recording the decision

Before destructive repository operations, obtain explicit project-owner authorization.

---

# 22. Final Principle

When uncertain, choose:

1. the simplest robust browser-only implementation
2. maintainable architecture
3. real functionality
4. document fidelity
5. data preservation
6. future extensibility

Do not optimize for visual completeness at the expense of functional correctness.

The project owner will review each pushed stage before authorizing the next stage.
