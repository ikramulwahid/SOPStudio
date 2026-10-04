import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewPage from './pages/NewPage'
import TemplatesPage from './pages/TemplatesPage'
import SettingsPage from './pages/SettingsPage'
import PreviewPage from './pages/PreviewPage'
import ExportPage from './pages/ExportPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/export" element={<ExportPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
