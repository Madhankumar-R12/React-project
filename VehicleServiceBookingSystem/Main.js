import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Register from './Register'
import Header from './Header'


function App () {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/Register' element={<Register/>} />
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>

      </Routes>
      </BrowserRouter>
   </>
  )
}

export default App;