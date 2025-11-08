import Card from "./Card"
import SectionTitle from "./SectionTitle"
import styles from "./InterpersonalSkills.module.css"

export default function InterpersonalSkills() {
  const skills = ["Adaptability", "Communication", "Teamwork", "Critical Thinking"]

  return (
    <section className={styles.section}>
      <SectionTitle>Interpersonal Skills</SectionTitle>
      <Card>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill} className={styles.skillItem}>
              <span className={styles.check}>✓</span>
              {skill}
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
