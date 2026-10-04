import React from 'react'
import Header from './Header'
import StatusArea from './StatusArea'

interface MainLayoutProps {
  children: React.ReactNode
  saveStatus?: 'saving' | 'saved' | 'unsaved'
  statusMessage?: string
}

function MainLayout({
  children,
  saveStatus = 'saved',
  statusMessage
}: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Header appName="SOPStudio" />
      <main className="main-content">
        {children}
      </main>
      <StatusArea saveStatus={saveStatus} statusMessage={statusMessage} />
    </div>
  )
}

export default MainLayout

