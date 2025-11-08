import ContactCard from "./ContactCard"
import LanguagesCard from "./LanguagesCard"
import AboutCard from "./AboutCard"
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <ContactCard />
        <LanguagesCard />
        <AboutCard />
      </div>
    </section>
  )
}
