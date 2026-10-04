interface HeaderProps {
  appName: string
}

function Header({ appName }: HeaderProps) {
  return (
    <header className="app-header" role="banner">
      <div className="app-header-content">
        <div className="app-header-left">
          <div className="app-logo">
            <svg className="app-logo-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="app-logo-text">{appName}</span>
          </div>
        </div>
        <div className="app-header-right">
          <nav className="app-nav" role="navigation" aria-label="Main navigation">
            <a href="/" className="app-nav-link" aria-current="page">
              Home
            </a>
            <a href="/new" className="app-nav-link">
              New SOP
            </a>
            <a href="/templates" className="app-nav-link">
              Templates
            </a>
            <a href="/settings" className="app-nav-link">
              Settings
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

