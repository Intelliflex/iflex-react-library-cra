import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

/**
 * Here you can document your component. A preview of the component is shown below. The properties table is automatically populated based on React.propTypes.
 */
export const Button = ({ color, size, label, onClick, ...props }) => {
  let style = { color: 'white' }
  if (color) style.backgroundColor = color
  return (
    <button
      type='button'
      className={`storybook-button storybook-button-${size}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  /** The color for the button */
  color: PropTypes.oneOf(['blue', 'red', 'green', 'purple']),
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Label */
  label: PropTypes.string.isRequired,
  /** Optional click handler*/
  onClick: PropTypes.func
}

Button.defaultProps = {
  label: 'Button',
  color: 'blue',
  size: 'medium',
  onClick: undefined
}

export default Button
