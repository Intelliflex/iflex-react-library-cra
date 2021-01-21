import React from 'react'
import PropTypes from 'prop-types'

const DefaultComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: '10px',
        height: '100vw',
        position: 'relative',
        backgroundColor: 'aliceblue'
      }}
    >
      <h1 style={{ color: 'green' }}>IFLEX-REACT-LIBRARY</h1>
      <h3 style={{ color: 'darkorange' }}>
        This text is from the default Component
      </h3>
      {children}
    </div>
  )
}

DefaultComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultComponent
