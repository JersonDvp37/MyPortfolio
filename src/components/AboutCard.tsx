import Card from "./Card"
import styles from "./AboutCard.module.css"

export default function AboutCard() {
  return (
    <Card>
      <h2 className={styles.title}>About</h2>
      <p className={styles.description}>
        21-year-old final-year student pursuing a Bachelor's degree in Software Development at São Tomás University of
        Mozambique, with a strong interest in innovative technologies and social impact.
      </p>
    </Card>
  )
}
