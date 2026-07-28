import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-50 selection:bg-brand-500/30 selection:text-white">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

