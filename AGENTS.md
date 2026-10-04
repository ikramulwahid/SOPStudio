# SOPStudio — AI Development Agent Instructions\n
## 1. Project Identity\n
Project: SOPStudio\n
Repository:\nhttps://github.com/ikramulwahid/SOPStudio.git\n
Primary branch:\n`main`\n
SOPStudio is a browser-based, privacy-first SOP authoring and document-generation application.\n
The application is frontend-only.\n
It must not introduce:\n- backend services\n- authentication\n- server-side document processing\n- server-side document storage\n- document uploads\n- remote document APIs\n- analytics that transmit document content\n
All document processing and persistence must remain client-side.\n
---\n
## 2. Authoritative Project Documents\n
Before making implementation decisions, read these files:\n
1. `docs/SOPStudio_MASTER_SPEC.md` — The COMPLETE master specification supplied by the project owner. This is the authoritative product specification. Do not omit requirements. Do not summarize requirements. Do not reinterpret requirements.\n
2. `docs/SOPStudio_PROGRESS.md` — The machine-readable implementation state. Never mark functionality COMPLETE without verification.\n
3. `docs/SOPStudio_DECISIONS.md` — Records architectural and product decisions that must remain consistent. Do not silently change an established architectural decision.\n
4. `docs/SOPStudio_ACCEPTANCE_MATRIX.md` — Tracks whether requirements are actually satisfied. This is a REQUIRED project-control file.\n
5. `README.md` — The user-facing documentation.\n
The repository source code and tests are the ultimate implementation truth.\nNever assume a feature is complete simply because documentation says it is complete.\n
---\n
## 3. Incremental Development Rule\n
SOPStudio must be developed incrementally.\n
The project is divided into implementation stages:\n
- STAGE-00 Foundation\n- STAGE-01 Document Model\n- STAGE-02 Application Shell/Home\n- STAGE-03 Template Engine\n- STAGE-04 New SOP/Metadata\n- STAGE-05 Rich Text Editor\n- STAGE-06 Lists/Outline/Section Management/Numbering\n- STAGE-07 Tables\n- STAGE-08 Images/Assets\n- STAGE-09 Callouts/Equations/Procedure Steps\n- STAGE-10 TOC/Revision/Approval\n- STAGE-11 IndexedDB/Autosave/Recovery\n- STAGE-12 Import\n- STAGE-13 Document Rendering/Preview\n- STAGE-14 Branding/Header/Footer/Page Setup\n- STAGE-15 Validation\n- STAGE-16 DOCX Export\n- STAGE-17 PDF Export\n- STAGE-18 .sopstudio Project Files\n- STAGE-19 Search/Replace/Editor Completion\n- STAGE-20 Settings\n- STAGE-21 Accessibility/Responsive/Error Handling\n- STAGE-22 Performance/Security Hardening\n- STAGE-23 Testing/Acceptance\n- STAGE-24 Final MVP Hardening\n
Only implement the stage explicitly assigned by the project owner.\n
Do not begin later stages simply because they appear useful.\n
Do not bundle multiple stages together unless the project owner explicitly authorizes it.\n
---\n
## 4. Stage Recovery Rule\n
At the beginning of every new Cline session:\n
1. Inspect the repository.\n2. Run `git status`.\n3. Check the current branch.\n4. Check recent commits.\n5. Read project control documents.\n6. Inspect relevant source code and tests.\n7. Determine the earliest incomplete stage.\n
The correct stage must be determined from the actual repository state.\n
Do not restart the project merely because the current chat is new.\n
Do not assume previous chat context is available.\n
Do not rebuild working functionality unnecessarily.\n
If a previous stage is documented as COMPLETE but verification shows that it is actually incomplete, treat that stage as incomplete.\n
---\n
## 5. Scope Control\n
For every assigned stage:\n
- Implement only that stage.\n- Fix prerequisite defects only when necessary for that stage to function.\n- Do not redesign unrelated working functionality.\n- Do not introduce speculative features.\n- Do not create placeholders presented as completed functionality.\n
Every visible major UI control must either:

1. Perform a real function, or
2. Clearly indicate that the function is unavailable/not yet implemented.\n
Never create fake functionality merely to make the UI look complete.\n
---\n
## 6. Architecture Principles\n
Maintain a component-driven React + TypeScript architecture.\n
Separate:\n- document state\n- editor state\n- UI state\n- persistence state\n- export state\n- application settings\n
Do not place the entire application into one uncontrolled object.\n
Use reusable components.\n
Avoid monolithic components.\n
Organize source files by feature/domain where practical.\n
---\n
## 7. Canonical Document Model\n
The canonical document model is the central architectural contract.\n
Document content represents:\n> WHAT the SOP contains.\n
Template/style represents:\n> HOW the SOP looks.\n
These must remain separate.\n
Users must be able to switch templates without rebuilding or losing document content.\n
Do not make the editor HTML the only canonical representation if doing so would prevent reliable future import/export/rendering.\n
Structured content should remain structured wherever practical.\n
---\n
## 8. Client-Side Architecture\n
All document operations must remain in the browser.\n
Preferred technologies include:\n
- React\n- TypeScript\n- Vite\n- Tiptap/ProseMirror\n- Mammoth.js\n- `docx`\n- KaTeX\n- IndexedDB\n- LocalStorage\n- JSZip\n- browser-compatible PDF tooling\n
Libraries may be substituted when technically justified.\n
Do not add a backend to solve a library limitation.\n
When browser limitations exist, implement the most reliable client-side alternative and communicate the limitation.\n
---\n
## 9. Privacy and Security\n
Never:\n- upload document contents\n- upload images\n- transmit document data to external services\n- create fake server APIs\n- introduce analytics that expose document contents\n- execute imported scripts\n- trust imported HTML\n
Treat imported documents, pasted HTML, project files, and images as untrusted input.\n
Sanitize imported/pasted HTML.\n
Validate file types and MIME types.\n
Never expose local document contents through external services.\n
---\n
## 10. Functional-First Rule\n
Prioritize real functionality over visual polish.\n
A control labelled:\n- Save\n- Export\n- Import\n- Undo\n- Redo\n- Add Table\n- Add Image\n- Validate\n- Preview\n
must perform the corresponding real operation.\n
Do not create fake API calls.\n
Do not create fake export buttons.\n
Do not simulate IndexedDB using ordinary in-memory state.\n
---\n
## 11. UX Rules\n
Every major operation must provide visible feedback.\n
Examples:\n
Saving:\n`Saving...`\n
Success:\n`Saved locally`\n
Import:\n`Importing document...`\n
Export:`Preparing DOCX...`\n
Failure:`Export failed. Your document remains safely stored locally.`\n
Users must never be left uncertain about whether an operation succeeded.\n
Use confirmation dialogs for destructive actions.\n
Detect unsaved changes where appropriate.\n
---\n
## 12. Accessibility\n
Follow WCAG-oriented practices.\n
Use:\n
- semantic HTML\n- proper labels\n- keyboard navigation\n- focus management\n- visible focus indicators\n- accessible dialogs\n- accessible tables\n- meaningful ARIA where required\n- image alt text\n- keyboard-accessible alternatives to drag/drop\n
Do not communicate important information only through color.\n
---\n
## 13. Testing\n
Add meaningful tests for important logic introduced by each stage.\n
At minimum, where applicable:\n
- unit tests\n- integration tests\n- UI tests\n
Do not claim functionality is complete without verification.\n
---\n
## 14. Verification Requirement\n
At the end of every assigned stage, run the appropriate checks.\n
At minimum, where available:\n
- tests\n- TypeScript/type checking\n- lint\n- production build\n
Also perform stage-specific manual verification when practical.\n
Fix straightforward defects before declaring the stage complete.\n
---\n
## 15. Progress Tracking\n
After every stage, update:

`docs/SOPStudio_PROGRESS.md`\n
It must describe the actual state of the repository.\n
Include:\n
- current stage\n- last completed stage\n- overall status\n- completed capabilities\n- current implementation\n- not implemented\n- known limitations\n- known defects\n- tests\n- build/type/lint results\n- acceptance criteria status\n- important files\n- architectural decisions\n- deviations from master specification\n- next recommended stage\n
Never mark functionality COMPLETE without verification.\n
---\n
## 16. Decision Tracking\n
When an architectural or product decision is made that affects future implementation, record it in:

`docs/SOPStudio_DECISIONS.md`\n
Include:\n
- date\n- decision\n- reason\n- alternatives considered when relevant\n- affected components/stages\n
Do not silently change an established architectural decision.\n
---\n
## 17. Acceptance Criteria Tracking\n
Maintain:

`docs/SOPStudio_ACCEPTANCE_MATRIX.md`\n
Track each requirement as:\n
- NOT STARTED\n- PARTIAL\n- COMPLETE\n- BLOCKED\n
Only mark COMPLETE when the repository contains the functionality and it has been verified.\n
---\n
## 18. Git Discipline\n
The official shared checkpoint is:

https://github.com/ikramulwahid/SOPStudio.git\n
Use branch:

`main`\n
Before changes:\n
- inspect `git status`\n- preserve existing work\n- never discard uncommitted user work\n
After completing the assigned stage:\n
1. Run verification.\n2. Update project documentation.\n3. Review the entire diff.\n4. Ensure secrets and unrelated files are not included.\n5. Commit the stage.\n6. Push to `origin main`.\n7. Verify that the push succeeded.\n8. Report the resulting commit SHA.\n9. STOP.\n
Never force-push.\n
---\n
## 19. Commit Convention\n
Use:\n
`feat(stage-XX): <description>`\n
Examples:\n
`feat(stage-00): establish application foundation`\n
`feat(stage-05): implement rich text editor`\n
`feat(stage-13): implement document preview`\n
Bug-fix commits required before stage completion may use:

`fix(stage-XX): <description>`\n
Prefer one coherent stage commit when practical.\n
---\n
## 20. Mandatory Stage Completion Report\n
After each assigned stage, provide:\n
STAGE:
`STAGE-XX`\n
STATUS:
`COMPLETE / PARTIAL / BLOCKED`\n
COMMIT:
`<full SHA>`\n
BRANCH:
`main`\n
REMOTE:
`https://github.com/ikramulwahid/SOPStudio.git`\n
VERIFICATION:

- Tests: PASS/FAIL\n- TypeScript: PASS/FAIL\n- Lint: PASS/FAIL\n- Production build: PASS/FAIL\n- Manual verification: PASS/FAIL\n
IMPLEMENTED:

- ...\n
KNOWN DEFECTS:

- ...\n
KNOWN LIMITATIONS:

- ...\n
FILES/AREAS CHANGED:

- ...\n
ACCEPTANCE CRITERIA UPDATED:

- ...\n
NEXT STAGE:
`STAGE-XX`\n
Then STOP.\n
Do not implement the next stage in the same session unless explicitly instructed.\n
---\n
## 21. Repository Integrity\n
Never:\n
- force-push\n- reset to an old commit without authorization\n- delete project history\n- overwrite unrelated work\n- remove files merely to simplify implementation\n- change the architecture solely for convenience without recording the decision\n
Before destructive repository operations, obtain explicit project-owner authorization.\n
---\n
## 22. Final Principle\n
When uncertain, choose:

1. the simplest robust browser-only implementation\n2. maintainable architecture\n3. real functionality\n4. document fidelity\n5. data preservation\n6. future extensibility\n
Do not optimize for visual completeness at the expense of functional correctness.\n
The project owner will review each pushed stage before authorizing the next stage.