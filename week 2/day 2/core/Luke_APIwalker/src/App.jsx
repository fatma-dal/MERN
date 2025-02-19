
import './App.css'
import Planets from './views/Planets'
import Home from './views/Home'
import People from './views/People';
import Error from './views/Error';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Form
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/people/:id' element={<People/>} />
      <Route path='/planets/:idp' element={<Planets/>} />
      <Route path='*' element={<Error/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
