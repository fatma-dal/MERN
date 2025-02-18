
import './App.css'
import Params from './components/Params';
import Style from './components/Style'
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,useParams
} from "react-router-dom";
import { useState , useEffect } from 'react'



function App() {




  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:param" element={<Params/>}/>
      <Route path="/hello/:color1/:color2" element={<Style/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
