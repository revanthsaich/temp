import React from 'react'
import Header from './components/Header'
import BottomDock from './components/BottomDock'
import Home from './components/Home'
export default function App() {
  return (
    <div>
      <Header />
       <Home/>
      <BottomDock />
    </div>
  )
}