import { Link } from 'react-router-dom'
import '../styles/button.css'

/**
 * Global Button
 *
 * Props
 * ─────
 * to          string          React-Router link (renders <Link>)
 * href        string          External link (renders <a>)
 * onClick     function        Click handler (renders <button>)
 * type        string          "button" | "submit" | "reset"  (default "button")
 *
 * variant     string          "primary" | "ghost" | "outline-white" | "dark"
 * size        string          "sm" | "md" | "lg"  (default "md")
 * full        bool            Stretch to 100% width
 *
 * icon        ReactNode       Icon element rendered beside the label
 * iconPosition string         "left" | "right"  (default "right")
 *
 * className   string          Extra classes
 * children    ReactNode       Button label
 * disabled    bool
 */
export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  full = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  disabled = false,
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    full ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const iconEl = icon
    ? <span className={`btn-icon-${iconPosition}`}>{icon}</span>
    : null

  const content = (
    <>
      {iconPosition === 'left'  && iconEl}
      {children}
      {iconPosition === 'right' && iconEl}
    </>
  )

  // React-Router internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  // External / anchor link
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  // Plain button (form submit, onclick action, etc.)
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  )
}
