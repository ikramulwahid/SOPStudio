import {
  Document,
  DocumentMetadata,
  DocumentStyle,
  Section,
  ContentBlock,
  Revision,
  Approval,
  ImageAsset,
  SectionType,
  ContentBlockType,
  CalloutType,
  ValidationError,
  ValidationErrorType,
  DocumentValidationResult,
  TextFormat,
  ListItem,
  TableDefinition,
  DOCUMENT_STRUCTURE_KEYS,
  DEFAULT_DOCUMENT_SETTINGS,
  DEFAULT_DOCUMENT_STYLES,
  DOCUMENT_SCHEMA_VERSION,
} from '../types';

export function generateId(): string {
  return 'doc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function generateSectionId(): string {
  return 'sec_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function generateAssetId(): string {
  return 'asset_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function generateRevisionId(): string {
  return 'rev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function generateApprovalId(): string {
  return 'app_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function generateBlockId(): string {
  return 'blk_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function getTodayISOString(): string {
  return new Date().toISOString().split('T')[0];
}

export function createDefaultMetadata(): DocumentMetadata {
  const now = getTodayISOString();
  return {
    id: generateId(),
    title: 'New Standard Operating Procedure',
    type: 'SOP',
    version: '1.0',
    effectiveDate: now,
    reviewDate: now,
    department: 'Operations',
    processOwner: 'Unknown',
    author: 'Unknown',
    approver: 'Pending',
    confidentiality: 'Internal',
    status: 'Draft',
    company: '',
    location: '',
    category: '',
    documentOwner: '',
    preparedBy: '',
    reviewedBy: '',
    approvedBy: '',
    revisionSummary: '',
    tags: [],
    references: [],
  };
}

export function createDefaultSection(type: SectionType, title: string, enabled: boolean = true): Section {
  return {
    id: generateSectionId(),
    type,
    title,
    contentBlocks: [],
    enabled,
    order: 0,
    customContent: undefined,
  };
}

export function createParagraphBlock(text: string, sectionId: string, format?: TextFormat): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'Paragraph',
    sectionId,
    content: { text },
    format,
    order: 0,
    visible: true,
  };
}

export function createHeadingBlock(level: 1 | 2 | 3 | 4, text: string, sectionId: string, format?: TextFormat): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'Heading' + level as ContentBlockType,
    sectionId,
    content: { text, level },
    format,
    order: 0,
    visible: true,
  };
}

export function createListBlock(items: ListItem[], sectionId: string, format?: TextFormat): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'List',
    sectionId,
    content: { items },
    format,
    order: 0,
    visible: true,
  };
}

export function createNumberedListBlock(items: ListItem[], sectionId: string, format?: TextFormat): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'NumberedList',
    sectionId,
    content: { items },
    format,
    order: 0,
    visible: true,
  };
}

export function createCalloutBlock(calloutType: CalloutType, title: string, content: string, sectionId: string): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'Callout',
    sectionId,
    content: { calloutType, title, content },
    order: 0,
    visible: true,
  };
}

export function createImageBlock(assetId: string, sectionId: string, caption?: string): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'Image',
    sectionId,
    content: { assetId, caption },
    order: 0,
    visible: true,
  };
}

export function createTableBlock(table: TableDefinition, sectionId: string): ContentBlock {
  return {
    id: generateBlockId(),
    type: 'Table',
    sectionId,
    content: table,
    order: 0,
    visible: true,
  };
}

export function createRevision(version: string, description: string, preparedBy: string, reviewedBy?: string, approvedBy?: string): Revision {
  return {
    id: generateRevisionId(),
    version,
    date: getTodayISOString(),
    description,
    preparedBy,
    reviewedBy,
    approvedBy,
  };
}

export function createApproval(role: string, name: string, signatureType: 'Text' | 'Image' | 'Blank' = 'Blank'): Approval {
  return {
    id: generateApprovalId(),
    role,
    name,
    signatureType,
    textSignature: undefined,
    imageSignature: undefined,
    approvedDate: undefined,
    signedBy: undefined,
  };
}

export function createDefaultStyle(templateName: string = 'Quality / Compliance'): DocumentStyle {
  const style = DEFAULT_DOCUMENT_STYLES[templateName] || DEFAULT_DOCUMENT_STYLES['Quality / Compliance'];
  return {
    ...style,
    templateName,
  };
}

export function createDefaultDocument(templateName: string = 'Quality / Compliance'): Document {
  const now = getTodayISOString();
  const metadata = createDefaultMetadata();
  const style = createDefaultStyle(templateName);
  const sections: Section[] = [];
  const assets: ImageAsset[] = [];
  const revisions: Revision[] = [];
  const approval: Approval[] = [];
  const settings = { ...DEFAULT_DOCUMENT_SETTINGS };

  for (let i = 0; i < DOCUMENT_STRUCTURE_KEYS.length; i++) {
    const key = DOCUMENT_STRUCTURE_KEYS[i];
    let enabled = true;

    if (key === 'DocumentInformation') {
      enabled = false;
    }

    sections.push({
      id: generateSectionId(),
      type: key as SectionType,
      title: key,
      contentBlocks: [],
      enabled,
      order: i,
      customContent: undefined,
    });
  }

  return {
    id: generateId(),
    metadata,
    style,
    sections,
    assets,
    revisions,
    approval,
    settings,
    schemaVersion: DOCUMENT_SCHEMA_VERSION,
    createdAt: now,
    lastModified: now,
  };
}

export function validateDocument(document: Document): DocumentValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!document || typeof document !== 'object') {
    errors.push({ type: ValidationErrorType.CORRUPTED_DATA, field: undefined, message: 'Document is not an object' });
    return { valid: false, errors, warnings };
  }

  if (!document.id || typeof document.id !== 'string') {
    errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'id', message: 'Document ID is required' });
  }
  if (!document.metadata) {
    errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata', message: 'Document metadata is required' });
  }
  if (!document.style) {
    errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'style', message: 'Document style is required' });
  }
  if (!document.sections || !Array.isArray(document.sections)) {
    errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'sections', message: 'Sections array is required' });
  }
  if (!document.schemaVersion || typeof document.schemaVersion !== 'string') {
    errors.push({ type: ValidationErrorType.INVALID_SCHEMA_VERSION, field: 'schemaVersion', message: 'Invalid schema version' });
  }

  if (document.metadata) {
    if (!document.metadata.id) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.id', message: 'Metadata ID is required' });
    if (!document.metadata.title) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.title', message: 'Title is required' });
    if (!document.metadata.type) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.type', message: 'Type is required' });
    if (!document.metadata.version) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.version', message: 'Version is required' });
    if (!document.metadata.effectiveDate) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.effectiveDate', message: 'Effective date is required' });
    if (!document.metadata.department) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.department', message: 'Department is required' });
    if (!document.metadata.processOwner) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.processOwner', message: 'Process owner is required' });
    if (!document.metadata.author) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.author', message: 'Author is required' });
    if (!document.metadata.approver) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.approver', message: 'Approver is required' });
    if (!document.metadata.confidentiality) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.confidentiality', message: 'Confidentiality level is required' });
    if (!document.metadata.status) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'metadata.status', message: 'Status is required' });
  }

  if (document.style) {
    if (!document.style.templateName) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'style.templateName', message: 'Template name is required' });
    if (!document.style.pageSettings) {
      errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'style.pageSettings', message: 'Page settings are required' });
    } else {
      if (!document.style.pageSettings.pageSize) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'style.pageSettings.pageSize', message: 'Page size is required' });
      if (!document.style.pageSettings.orientation) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'style.pageSettings.orientation', message: 'Orientation is required' });
    }
  }

  if (document.sections) {
    for (let i = 0; i < document.sections.length; i++) {
      const sec = document.sections[i];
      if (!sec.id) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'sections[' + i + '].id', message: 'Section ID is required' });
      if (!sec.type) errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'sections[' + i + '].type', message: 'Section type is required' });
      if (!sec.contentBlocks || !Array.isArray(sec.contentBlocks)) {
        errors.push({ type: ValidationErrorType.REQUIRED_FIELD, field: 'sections[' + i + '].contentBlocks', message: 'Content blocks are required' });
      }
    }
  }

  return { valid: errors.length === 0, errors, warnings };
}

export function deserializeDocument(json: string): Document {
  const deserialized = JSON.parse(json);
  const validation = validateDocument(deserialized);
  if (!validation.valid) {
    throw new Error('Document validation failed:' + validation.errors.map(e => ' - ' + e.message).join('\n'));
  }
  return deserialized;
}

export function serializeDocument(document: Document): string {
  return JSON.stringify(document, null, 2);
}

export function serializeDocumentCompact(document: Document): string {
  return JSON.stringify(document, null, 0);
}

export function isDocumentSafe(_document: Document): boolean {
  return true;
}

export function safeDeserializeDocument(json: string): Document | null {
  try {
    return deserializeDocument(json);
  } catch (e) {
    return null;
  }
}

export function getDocumentAgeInDays(document: Document): number {
  return Math.floor((Date.now() - new Date(document.createdAt).getTime()) / (1000 * 60 * 60 * 24));
}

export function getDocumentSummary(document: Document) {
  let blocksCount = 0;
  for (const section of document.sections) {
    blocksCount += section.contentBlocks.length;
  }
  return {
    id: document.id,
    title: document.metadata.title,
    version: document.metadata.version,
    sectionsCount: document.sections.length,
    blocksCount,
    assetsCount: document.assets.length,
    status: document.metadata.status,
    ageInDays: getDocumentAgeInDays(document),
    lastModified: document.lastModified,
  };
}

export function updateDocumentLastModified(document: Document): Document {
  return { ...document, lastModified: getTodayISOString() };
}

export function copyDocument(document: Document, newTitle?: string): Document {
  const newDoc: Document = {
    ...document,
    id: generateId(),
    metadata: { ...document.metadata, id: generateId(), title: newTitle || document.metadata.title + ' (Copy)', version: '1.0', status: 'Draft' as const },
    sections: document.sections.map(s => ({ ...s, id: generateSectionId(), contentBlocks: s.contentBlocks.map(b => ({ ...b, id: generateBlockId() })) })),
    revisions: document.revisions.map(r => ({ ...r, id: generateRevisionId() })),
    approval: document.approval.map(a => ({ ...a, id: generateApprovalId() })),
    createdAt: getTodayISOString(),
    lastModified: getTodayISOString(),
    schemaVersion: DOCUMENT_SCHEMA_VERSION,
  };
  return newDoc;
}

export function hasDocumentChanges(document: Document, original: Document): boolean {
  if (document.id !== original.id) return true;
  if (document.metadata.id !== original.metadata.id) return true;
  if (document.sections.length !== original.sections.length) return true;
  for (let i = 0; i < document.sections.length; i++) {
    const s1 = document.sections[i];
    const s2 = original.sections[i];
    if (s1.type !== s2.type || s1.title !== s2.title || s1.enabled !== s2.enabled) return true;
    if (s1.contentBlocks.length !== s2.contentBlocks.length) return true;
    for (let j = 0; j < s1.contentBlocks.length; j++) {
      const b1 = s1.contentBlocks[j];
      const b2 = s2.contentBlocks[j];
      if (b1.type !== b2.type || b1.content !== b2.content) return true;
    }
  }
  return false;
}

