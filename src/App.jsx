import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Login from './page/Login/Login'


const App = () => {
  return (
    <div className='max-[1500px] w-[1500px] mx-auto'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
