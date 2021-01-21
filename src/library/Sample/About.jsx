import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import bootflex from './bootflex110.png'
import PropTypes from 'prop-types'
import './About.scss'

/**
 * Button Component
 */
const About = ({ showCounter, showReactLogo, showBootflexLogo }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  return (
    <div className='test-component'>
      <div data-testid='test-component' className={`test-component-primary`}>
        {showReactLogo ? (
          <img src={logo} className='test-component-logo' alt='logo' />
        ) : (
          <></>
        )}
        <h1 className='test-component-heading'>iflex-react-library</h1>
        {showCounter ? (
          <h3 className='test-component-counter'>
            Page has been open for <code>{count}</code> seconds.
          </h3>
        ) : (
          <></>
        )}
        <p className='test-component-text'>
          This component demonstrates a library component using Hooks, Images
          and scss inside a library module file. If you install this library
          into an external app via npm these images and hooks will not created
          an error. Try modifying any of the sample components and see how state
          is preserved (time counter is not reset to zero) when changes are
          made.
        </p>
        {showBootflexLogo ? <img src={bootflex} alt='bootflexlogo' /> : <></>}
      </div>
    </div>
  )
}

About.propTypes = {
  /**
   * Show the Counter
   */
  showCounter: PropTypes.bool,
  /**
   * Show React Logo
   */
  showReactLogo: PropTypes.bool,
  /**
   * Show Bootflex Logo
   */
  showBootflexLogo: PropTypes.bool
}

About.defaultProps = {
  showCounter: true,
  showReactLogo: true,
  showBootflexLogo: true
}

export default About
