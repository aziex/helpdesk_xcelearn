import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HideAppBar from './Containers/appbar'
import Dashboard from './Dashboard'

function App() {
  return (
    <>
      <div>
        {/* <HideAppBar> */}
          <Dashboard />
        {/* </HideAppBar> */}
      </div>
    </>
  )
}

export default App
