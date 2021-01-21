import React from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

/**
 * This is Documentation for Layout Component. You will document your own component here.
 */
const Layout = ({ header, sidebar, content, footer }) => {
  return (
    <div className='wrapper'>
      {header ? <div className='box header'>{header}</div> : <></>}
      {sidebar ? <div className='box sidebar'>{sidebar}</div> : <></>}
      {content ? <div className='box content'>{content}</div> : <></>}
      {footer ? <div className='box footer'>{footer}</div> : <></>}
    </div>
  )
}

Layout.propTypes = {
  /** header */
  header: PropTypes.string,
  /** body (always required) */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** footer */
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** sidebar */
  sidebar: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

Layout.defaultProps = {
  header: 'HEADER',
  content: 'Please provide body prop to Layout',
  sidebar: 'SIDEBAR',
  footer: 'FOOTER'
}

export default Layout
