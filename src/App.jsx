import { useEffect, useState } from 'react'
import { personal, profiles, education, testimonials } from './data/profiles.js'
import useRoute from './hooks/useRoute.js'
import Landing from './components/Landing.jsx'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import LangToggle from './components/LangToggle.jsx'
import './App.css'

export default function App() {
  const route = useRoute() // 'tester' | 'devops' | null
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
    const label = route ? profiles[route].label : 'Portfolio'
    document.title = `${personal.name} — ${label}`
  }, [route])

  // Vào '/' (route = null) -> hiện trang home chọn hồ sơ
  if (!route) return <Landing />

  const profile = profiles[route]

  return (
    <div
      className="layout"
      style={{
        '--accent': profile.accent,
        '--accent-soft': profile.accentSoft,
        '--accent-hover': profile.accentHover,
      }}
    >
      <Sidebar
        personal={personal}
        profile={profile}
        route={route}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <header className="topbar">
        <button
          className="topbar__burger"
          aria-label="Mở menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <span className="topbar__name">{personal.name}</span>
        <LangToggle className="topbar__lang" />
      </header>

      <main className="content" id="top">
        <div className="content__inner" key={route}>
          <Hero personal={personal} profile={profile} />
          <About profile={profile} />
          <Education education={education} />
          <Skills profile={profile} />
          <Experience profile={profile} />
          <Projects profile={profile} />
          <Certificates certificates={profile.certificates} />
          <Testimonials testimonials={testimonials} />
          <Contact personal={personal} />
          <Footer personal={personal} />
        </div>
      </main>
    </div>
  )
}
