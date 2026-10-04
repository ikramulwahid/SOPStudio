type SaveStatus = 'saving' | 'saved' | 'unsaved'

interface StatusAreaProps {
  saveStatus?: SaveStatus
  statusMessage?: string
}

function StatusArea({ saveStatus = 'saved', statusMessage }: StatusAreaProps) {
  const getStatusConfig = () => {
    switch (saveStatus) {
      case 'saving':
        return {
          icon: '⟳',
          color: 'var(--warning)',
          text: 'Saving...'
        }
      case 'saved':
        return {
          icon: '✓',
          color: 'var(--success)',
          text: 'Saved'
        }
      case 'unsaved':
        return {
          icon: '•',
          color: 'var(--text-secondary)',
          text: 'Unsaved changes'
        }
    }
  }

  const config = getStatusConfig()

  return (
    <div className="status-area" role="status" aria-live="polite">
      <span className="status-icon" style={{ color: config.color }}>
        {config.icon}
      </span>
      <span className="status-message">{config.text}</span>
      {statusMessage && <span className="status-submessage">{statusMessage}</span>}
    </div>
  )
}

export default StatusArea

