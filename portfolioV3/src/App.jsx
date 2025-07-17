import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { About } from './components/About'
import { Xp } from './components/Xp'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/helper/ScrollToTop'
import { Socials } from './components/helper/Socials'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Socials/>
      <Header/>
      <Hero/>
      <Stack/>
      <About/>
      <TechStack/>
      <Xp/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
