import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

function PreviewPage() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="page page-preview">
        <div className="page-header">
          <button className="btn btn-link" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>Document Preview</h1>
        </div>
        <div className="page-content">
          <div className="preview-container">
            <p className="preview-hint">
              Document preview will be implemented in STAGE-13
            </p>
            <div className="preview-placeholder">
              <div className="preview-placeholder-content">
                <div className="placeholder-icon">👁️</div>
                <div className="placeholder-text">Document preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PreviewPage

