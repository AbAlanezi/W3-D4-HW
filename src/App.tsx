import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './Component/Nav'
import './App.css'
import Footer from './Component/Footer'
import Slides from './Component/Slides'
import Destinations from './Component/Destinations'
import Destinations2 from './Component/Destinations2'
import Cardnav from './Component/Cardnav'
import Card2 from './Component/Card2'
import Need from './Component/Need'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Slides/>
      <Cardnav/>
      <Destinations2/>
      <Card2/>
       <Need/>
      <Footer/>
    </div>
  )
}

export default App
