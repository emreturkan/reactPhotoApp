import React from 'react'

import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Random from './pages/Random';



const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/random' element={<Random/>}/>
      </Routes>
    </BrowserRouter>
  )
}
  


export default App