import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Store from './store/Store'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
    </Routes>
    </>
  )
}

export default App
