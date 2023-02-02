import React from 'react'
import Footer from './Footer'
import Slides from './Slides'
import Destinations2 from './Destinations2'
import Cardnav from './Cardnav'
import Card2 from './Card2'
import Need from './Need'
import About from './About'

function HomePage() {
  return (
    <div>
        <Slides/>
      <Cardnav/>
      <Destinations2/>
      <Card2/>
       <Need/>
      <Footer/>
    </div>
  )
}

export default HomePage
