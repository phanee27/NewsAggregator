// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  )
}

export default App
