import { useState } from 'react'
import Nav from './Component/Nav'
import './App.css'
// import Footer from './Component/Footer'
// import Slides from './Component/Slides'
// import Destinations2 from './Component/Destinations2'
// import Cardnav from './Component/Cardnav'
// import Card2 from './Component/Card2'
// import Need from './Component/Need'
import About from './Component/About'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Component/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
