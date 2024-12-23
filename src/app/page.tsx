import Hero from '@/components/Hero'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Contact />
      <Projects />
      <Footer />
    </main>
  )
}
