import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { About } from './components/About'
import { Xp } from './components/Xp'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/helper/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Hero/>
      <Stack/>
      <About/>
      <Xp/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
