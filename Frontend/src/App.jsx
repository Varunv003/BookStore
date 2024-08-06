import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Store from './store/Store'
import Signup from './components/Signup'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
