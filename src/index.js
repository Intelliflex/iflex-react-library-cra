// IFLEX-REACT-LIBRARY index.js (in /src folder)
// THIS IS THE ENTRY POINT FOR THE LIBRARY DEMO / TEST (IT IS NOT EXPORTED ON BUILD)
// Note: You must also have an index.js in the library folder which exports all library components
import React from 'react'
import ReactDOM from 'react-dom'
import App from './demo/App'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
