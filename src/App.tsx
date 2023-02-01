import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './Component/Nav'
import './App.css'
import Footer from './Component/Footer'
import Topic from './Component/Topic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Topic></Topic>
      <Footer/>
    </div>
  )
}

export default App
