import './App.css'
import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Barn from './components/main/Barn'
import Kvinnor from './components/main/Kvinnor'
import Man from './components/main/Man'
import Rea from './components/main/Rea'
import Home from './components/main/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>


         <Route  path="/" element={<Home />} />
         <Route  path="barn" element={<Barn />} />
         <Route  path="kvinnor" element={<Kvinnor />} />
         <Route  path="man" element={<Man />} />
         <Route  path="rea" element={<Rea />} />
         
         
           


       
         


       </Routes>
    </BrowserRouter>
  )
}

export default App
