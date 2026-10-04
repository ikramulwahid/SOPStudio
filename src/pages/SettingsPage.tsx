import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

function SettingsPage() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="page page-settings">
        <div className="page-header">
          <button className="btn btn-link" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>Settings</h1>
        </div>
        <div className="page-content">
          <div className="settings-section">
            <h2>Privacy</h2>
            <div className="settings-item">
              <p className="settings-item-description">
                Documents are processed and stored locally in your browser. SOPStudio does not require
                an account or upload your documents to a server.
              </p>
            </div>
          </div>
          <div className="settings-section">
            <h2>Document Defaults</h2>
            <p className="settings-hint">
              Default settings will be implemented in STAGE-20
            </p>
          </div>
          <div className="settings-section">
            <h2>Editor</h2>
            <p className="settings-hint">
              Editor settings will be implemented in STAGE-20
            </p>
          </div>
          <div className="settings-section">
            <h2>Appearance</h2>
            <p className="settings-hint">
              Theme settings will be implemented in STAGE-20
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default SettingsPage

