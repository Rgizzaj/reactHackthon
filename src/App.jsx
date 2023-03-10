import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Homepage from './Homepage'
import Router from './Router'
import { RouterProvider } from 'react-router-dom';

function App() {
  

  return (
    
    <div className="App">
    
    <RouterProvider router={ Router } />

    </div>
  )
}

export default App
