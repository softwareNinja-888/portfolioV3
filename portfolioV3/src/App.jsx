import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { About } from './components/About'
import { Xp } from './components/Xp'
// import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
// import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Stack/>
      <About/>
      <Xp/>
      <Footer/>
    </>
  )
}

export default App
