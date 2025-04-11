import React from 'react'
import Banner from './components/banners/Banner'
import Banner2 from './components/banners/Banner2'
import Fotter from './components/Footer/Fotter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Subscribe from './components/Subscriber/Subscriber'

function App() {
  return (
    
   <main className='overflow-x-hidden bg-white text-dark'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <Subscribe/>
    <Banner2/>
    <Fotter/>
   </main>
    
  )
}

export default App
