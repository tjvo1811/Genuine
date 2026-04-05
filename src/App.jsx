import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutConference from './components/AboutConference'
import TheorySection from './components/TheorySection'
import AutoethnographySection from './components/AutoethnographySection'
import PositionPaperAnalysis from './components/PositionPaperAnalysis'
import ReconnectionSection from './components/ReconnectionSection'
import Gallery from './components/Gallery'
import LeadershipFramework from './components/LeadershipFramework'
import KeyTakeaways from './components/KeyTakeaways'
import Acknowledgments from './components/Acknowledgments'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)
  const systemReducedMotion = useReducedMotion()

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  const reducedMotion = Boolean(systemReducedMotion)

  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main className="relative z-10">
        <Hero reducedMotion={reducedMotion} />
        <AboutConference reducedMotion={reducedMotion} />
        <TheorySection reducedMotion={reducedMotion} />
        <AutoethnographySection reducedMotion={reducedMotion} />
        <PositionPaperAnalysis reducedMotion={reducedMotion} />
        <ReconnectionSection reducedMotion={reducedMotion} />
        <Gallery reducedMotion={reducedMotion} />
        <LeadershipFramework reducedMotion={reducedMotion} />
        <KeyTakeaways reducedMotion={reducedMotion} />
        <Acknowledgments reducedMotion={reducedMotion} />
      </main>
      <Footer />
    </>
  )
}
