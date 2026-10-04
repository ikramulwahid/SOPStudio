import MainLayout from '../components/MainLayout'

function HomePage() {
  return (
    <MainLayout>
      <div className="page page-home">
        <div className="page-header">
          <h1>Welcome to SOPStudio</h1>
          <p className="page-subtitle">
            Your documents remain on this device. No account or server upload is required.
          </p>
        </div>
        <div className="page-actions">
          <a href="/new" className="btn btn-primary">
            Create New SOP
          </a>
          <a href="/templates" className="btn btn-secondary">
            Browse Templates
          </a>
        </div>
        <div className="page-info">
          <h2>Getting Started</h2>
          <ul className="info-list">
            <li>
              <strong>Create a new SOP:</strong> Select a template and provide document metadata
            </li>
            <li>
              <strong>Edit your document:</strong> Use the rich-text editor to add content
            </li>
            <li>
              <strong>Preview and export:</strong> Review your document and export as DOCX or PDF
            </li>
            <li>
              <strong>Save locally:</strong> Documents are automatically saved to your browser's
              IndexedDB storage
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage

