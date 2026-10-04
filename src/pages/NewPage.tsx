import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

function NewPage() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="page page-new">
        <div className="page-header">
          <button className="btn btn-link" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>Create New SOP</h1>
        </div>
        <div className="page-content">
          <p className="page-description">
            Select a template to get started with your SOP document.
          </p>
          <div className="template-selection">
            <p className="template-selection-hint">
              Template selection will be implemented in STAGE-03
            </p>
            <div className="template-placeholder">
              <div className="template-placeholder-content">
                <div className="placeholder-icon">📄</div>
                <div className="placeholder-text">Select a template</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default NewPage

