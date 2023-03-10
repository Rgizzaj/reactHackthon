import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ArtistDetail from './ArtistDetail'
import { BrowserRouter, Router, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">

<Routes>
       <Route path="/artist/:id/releases" element={ <ArtistDetail />} />
       <Route path="/" element={}/>
</Routes>
    
     

    </div>
  )
}

export default App
