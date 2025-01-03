import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBox from './MainBox.jsx'

function App() {

  return (
    <>
      <div className="container">
        <h1>The Nationality Checker</h1>
        <MainBox></MainBox>
      </div>
    </>
  )
}

export default App
