// SOPStudio - Document Model Types
// STAGE-01: Architecture and Canonical Document Model

export const DOCUMENT_SCHEMA_VERSION = "1.0";

export type DocumentType = "SOP";

export type DocumentStatus = "Draft" | "Under Review" | "Approved" | "Obsolete";

export interface DocumentMetadata {
  id: string;
  title: string;
  type: DocumentType;
  version: string;
  effectiveDate: string;
  reviewDate: string;
  department: string;
  processOwner: string;
  author: string;
  approver: string;
  confidentiality: "Public" | "Internal" | "Confidential" | "Restricted";
  status: DocumentStatus;
  company?: string;
  location?: string;
  category?: string;
  documentOwner?: string;
  preparedBy?: string;
  reviewedBy?: string;
  approvedBy?: string;
  revisionSummary?: string;
  tags?: string[];
  references?: string[];
}

export interface PageSettings {
  pageSize: "A4" | "Letter" | "Legal";
  orientation: "Portrait" | "Landscape";
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export interface Branding {
  logoUrl?: string;
  companyName: string;
  logoText?: string;
  primaryColor: string;
  secondaryColor: string;
}

export type SectionType =
  | "DocumentInformation"
  | "Purpose"
  | "Scope"
  | "Responsibilities"
  | "Definitions"
  | "Prerequisites"
  | "RequiredMaterials"
  | "SafetyPrecautions"
  | "Procedure"
  | "ProcessFlow"
  | "Troubleshooting"
  | "QualityChecks"
  | "References"
  | "RecordsDocumentation"
  | "RevisionHistory"
  | "Approval";

export type ContentBlockType =
  | "Paragraph"
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "List"
  | "NumberedList"
  | "Table"
  | "Image"
  | "Equation"
  | "Callout"
  | "ProcedureStep"
  | "CodeBlock";

export type CalloutType = "Information" | "Note" | "Warning" | "Danger" | "Tip";

export interface TextFormat {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  highlight?: string;
  align?: "left" | "center" | "right" | "justify";
  superscript?: boolean;
  subscript?: boolean;
}

export interface ListItem {
  text: string;
  format?: TextFormat;
  children?: ListItem[];
}

export interface TableCell {
  text: string;
  format?: TextFormat;
  align?: "left" | "center" | "right";
}

export interface TableDefinition {
  caption?: string;
  tableNumber?: number;
  rowCount: number;
  columnCount: number;
  cells: TableCell[][];
  headerRowIndex?: number;
}

export interface ImageAsset {
  id: string;
  name: string;
  mimeType: string;
  dataUrl?: string;
  altText: string;
  caption?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  createdAt: string;
}

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  sectionId: string;
  content: string | { text: string; level?: number } | ListItem[] | { items: ListItem[] } | TableDefinition | { assetId: string; caption?: string } | { calloutType: CalloutType; title: string; content: string };
  format?: TextFormat;
  order: number;
  visible: boolean;
}

export interface Section {
  id: string;
  type: SectionType;
  title: string;
  contentBlocks: ContentBlock[];
  enabled: boolean;
  order: number;
  customContent?: string;
}

export interface Revision {
  id: string;
  version: string;
  date: string;
  description: string;
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
}

export interface Approval {
  id: string;
  role: string;
  name: string;
  signatureType: "Text" | "Image" | "Blank";
  textSignature?: string;
  imageSignature?: string;
  approvedDate?: string;
  signedBy?: string;
}

export interface ValidationResult {
  id: string;
  severity: "ERROR" | "WARNING" | "INFO";
  location: string;
  message: string;
  remediation?: string;
}

export interface DocumentSettings {
  defaultTemplate?: string;
  defaultFontFamily?: string;
  defaultFontSize?: number;
  defaultPageSize?: "A4" | "Letter" | "Legal";
  defaultMargins?: { top?: number; bottom?: number; left?: number; right?: number };
  defaultOrientation?: "Portrait" | "Landscape";
  spellcheck?: boolean;
  showFormattingMarks?: boolean;
  autosaveEnabled?: boolean;
  autosaveInterval?: number;
}

export interface DocumentStyle {
  templateName: string;
  pageSettings: PageSettings;
  branding: Branding;
  fonts: { heading1?: string; heading2?: string; heading3?: string; heading4?: string; body?: string; code?: string };
  colors: { primary?: string; secondary?: string; accent?: string };
  spacing: { lineHeight?: number; paragraphSpacing?: number; sectionSpacing?: number };
  borders: { tableBorder?: string; sectionDivider?: string; calloutBorder?: string };
}

export interface Document {
  id: string;
  metadata: DocumentMetadata;
  style: DocumentStyle;
  sections: Section[];
  assets: ImageAsset[];
  revisions: Revision[];
  approval: Approval[];
  settings: DocumentSettings;
  schemaVersion: string;
  createdAt: string;
  lastModified: string;
}

export interface DeserializationOptions {
  allowPartial?: boolean;
  targetVersion?: string;
}

export interface SerializationOptions {
  includeSchemaVersion?: boolean;
  compact?: boolean;
}

export const DOCUMENT_STRUCTURE_KEYS = [
  "DocumentInformation",
  "Purpose",
  "Scope",
  "Responsibilities",
  "Definitions",
  "Prerequisites",
  "RequiredMaterials",
  "SafetyPrecautions",
  "Procedure",
  "ProcessFlow",
  "Troubleshooting",
  "QualityChecks",
  "References",
  "RecordsDocumentation",
  "RevisionHistory",
  "Approval",
] as const;

export const DEFAULT_PAGE_SETTINGS: PageSettings = {
  pageSize: "A4",
  orientation: "Portrait",
  marginTop: 2.54,
  marginBottom: 2.54,
  marginLeft: 3.17,
  marginRight: 3.17,
};

export const DEFAULT_DOCUMENT_SETTINGS: DocumentSettings = {
  defaultTemplate: "Quality / Compliance",
  defaultFontFamily: "Arial",
  defaultFontSize: 11,
  defaultPageSize: "A4",
  defaultMargins: { top: 2.54, bottom: 2.54, left: 3.17, right: 3.17 },
  defaultOrientation: "Portrait",
  spellcheck: true,
  showFormattingMarks: false,
  autosaveEnabled: true,
  autosaveInterval: 30000,
};

export const DEFAULT_BRANDING: Record<string, Branding> = {
  "Corporate Professional": { logoUrl: undefined, companyName: "Acme Corporation", logoText: "Acme", primaryColor: "#2563eb", secondaryColor: "#1e40af" },
  "Industrial": { logoUrl: undefined, companyName: "Industrial Solutions Inc", logoText: "ISI", primaryColor: "#059669", secondaryColor: "#047857" },
  "Modern Minimal": { logoUrl: undefined, companyName: "Modern Works", logoText: "MW", primaryColor: "#7c3aed", secondaryColor: "#6d28d9" },
  "Quality / Compliance": { logoUrl: undefined, companyName: "Quality Systems Ltd", logoText: "QS", primaryColor: "#d97706", secondaryColor: "#b45309" },
  "Technical": { logoUrl: undefined, companyName: "Technical Systems", logoText: "TS", primaryColor: "#dc2626", secondaryColor: "#b91c1c" },
};

export const DEFAULT_DOCUMENT_STYLES: Record<string, DocumentStyle> = {
  "Corporate Professional": { templateName: "Corporate Professional", pageSettings: DEFAULT_PAGE_SETTINGS, branding: DEFAULT_BRANDING["Corporate Professional"], fonts: { heading1: "Times New Roman Bold 24pt", heading2: "Times New Roman Bold 18pt", heading3: "Times New Roman Bold 14pt", heading4: "Times New Roman Bold 12pt", body: "Times New Roman 12pt", code: "Courier New 10pt" }, colors: { primary: "#2563eb", secondary: "#1e40af", accent: "#3b82f6" }, spacing: { lineHeight: 1.5, paragraphSpacing: 12, sectionSpacing: 24 }, borders: { tableBorder: "1px solid #e5e7eb", sectionDivider: "1px solid #d1d5db", calloutBorder: "1px solid #9ca3af" } },
  "Industrial": { templateName: "Industrial", pageSettings: DEFAULT_PAGE_SETTINGS, branding: DEFAULT_BRANDING["Industrial"], fonts: { heading1: "Arial Black 24pt", heading2: "Arial Bold 18pt", heading3: "Arial Bold 14pt" }, colors: { primary: "#059669", secondary: "#047857", accent: "#10b981" }, spacing: { lineHeight: 1.4, paragraphSpacing: 10, sectionSpacing: 20 }, borders: { tableBorder: "1px solid #d1fae5", sectionDivider: "1px solid #a7f3d0", calloutBorder: "1px solid #6ee7b7" } },
  "Modern Minimal": { templateName: "Modern Minimal", pageSettings: DEFAULT_PAGE_SETTINGS, branding: DEFAULT_BRANDING["Modern Minimal"], fonts: { heading1: "Helvetica Bold 24pt", heading2: "Helvetica Bold 18pt", heading3: "Helvetica Bold 14pt" }, colors: { primary: "#7c3aed", secondary: "#6d28d9", accent: "#8b5cf6" }, spacing: { lineHeight: 1.6, paragraphSpacing: 8, sectionSpacing: 16 }, borders: { tableBorder: "1px solid #e5e7eb", sectionDivider: "none", calloutBorder: "1px solid #a78bfa" } },
  "Quality / Compliance": { templateName: "Quality / Compliance", pageSettings: DEFAULT_PAGE_SETTINGS, branding: DEFAULT_BRANDING["Quality / Compliance"], fonts: { heading1: "Georgia Bold 24pt", heading2: "Georgia Bold 18pt", heading3: "Georgia Bold 14pt" }, colors: { primary: "#d97706", secondary: "#b45309", accent: "#f59e0b" }, spacing: { lineHeight: 1.5, paragraphSpacing: 12, sectionSpacing: 24 }, borders: { tableBorder: "1px solid #fef3c7", sectionDivider: "1px solid #fde68a", calloutBorder: "1px solid #fcd34d" } },
  "Technical": { templateName: "Technical", pageSettings: DEFAULT_PAGE_SETTINGS, branding: DEFAULT_BRANDING["Technical"], fonts: { heading1: "Courier New Bold 24pt", heading2: "Courier New Bold 18pt", heading3: "Courier New Bold 14pt" }, colors: { primary: "#dc2626", secondary: "#b91c1c", accent: "#ef4444" }, spacing: { lineHeight: 1.3, paragraphSpacing: 8, sectionSpacing: 16 }, borders: { tableBorder: "1px solid #fee2e2", sectionDivider: "1px solid #fecaca", calloutBorder: "1px solid #fca5a5" } },
};

export enum ValidationErrorType {
  REQUIRED_FIELD = "REQUIRED_FIELD",
  INVALID_FORMAT = "INVALID_FORMAT",
  INVALID_DATE = "INVALID_DATE",
  MISSING_REQUIRED_SECTION = "MISSING_REQUIRED_SECTION",
  INVALID_SCHEMA_VERSION = "INVALID_SCHEMA_VERSION",
  CORRUPTED_DATA = "CORRUPTED_DATA",
  MISSING_REQUIRED_FIELD = "MISSING_REQUIRED_FIELD",
}

export interface ValidationError {
  type: ValidationErrorType;
  field?: string;
  message: string;
}

export interface DocumentValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
}

export interface ValidatedDocument extends Document {
  validation: DocumentValidationResult;
}
