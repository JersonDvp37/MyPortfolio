import Header from "./components/Header"
import About from "./components/About"
import Education from "./components/Education"
import TechnicalSkills from "./components/TechnicalSkills"
import InterpersonalSkills from "./components/InterpersonalSkills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Education />
        <TechnicalSkills />
        <InterpersonalSkills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div> 
  )
}
