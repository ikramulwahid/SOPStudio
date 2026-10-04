import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

function TemplatesPage() {
  const navigate = useNavigate()

  const templates = [
    { id: 'corporate', name: 'Corporate Professional', description: 'Clean, professional layout for corporate documents' },
    { id: 'industrial', name: 'Industrial', description: 'Structured layout for industrial procedures' },
    { id: 'minimal', name: 'Modern Minimal', description: 'Simple, modern design with focus on content' },
    { id: 'quality', name: 'Quality / Compliance', description: 'Comprehensive layout for quality management systems' },
    { id: 'technical', name: 'Technical', description: 'Technical documentation format' }
  ]

  return (
    <MainLayout>
      <div className="page page-templates">
        <div className="page-header">
          <button className="btn btn-link" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>Document Templates</h1>
        </div>
        <div className="page-content">
          <p className="page-description">
            Choose a template to apply to your SOP document. Templates control the visual
            appearance while preserving document content.
          </p>
          <div className="template-grid">
            {templates.map((template) => (
              <div key={template.id} className="template-card">
                <div className="template-card-header">
                  <h3 className="template-card-title">{template.name}</h3>
                </div>
                <p className="template-card-description">{template.description}</p>
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => navigate('/new')}
                >
                  Select Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default TemplatesPage

