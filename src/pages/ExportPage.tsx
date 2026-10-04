import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

function ExportPage() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="page page-export">
        <div className="page-header">
          <button className="btn btn-link" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>Export Document</h1>
        </div>
        <div className="page-content">
          <div className="export-container">
            <p className="export-hint">
              Document export will be implemented in STAGE-16 (DOCX) and STAGE-17 (PDF)
            </p>
            <div className="export-placeholder">
              <div className="export-placeholder-content">
                <div className="placeholder-icon">📤</div>
                <div className="placeholder-text">Export options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ExportPage
