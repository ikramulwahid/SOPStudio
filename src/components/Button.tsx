import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'link' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonFullWidth = boolean

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: ButtonFullWidth
  children: React.ReactNode
  isLoading?: boolean
}

function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn'
  const variantClasses = `btn-${variant}`
  const sizeClasses = `btn-${size}`
  const widthClasses = fullWidth ? 'btn-full' : ''
  const loadingClasses = isLoading ? 'btn-loading' : ''

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${loadingClasses}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="btn-spinner" aria-hidden="true">
          ⟳
        </span>
      )}
      {children}
    </button>
  )
}

export default Button

