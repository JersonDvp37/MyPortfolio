import Card from "./Card"
import styles from "./LanguagesCard.module.css"

export default function LanguagesCard() {
  return (
    <Card>
      <h2 className={styles.title}>Languages</h2>
      <div className={styles.languagesList}>
        <div className={styles.language}>
          <p className={styles.languageName}>Portuguese</p>
          <p className={styles.languageLevel}>Fluent</p>
        </div>
        <div className={styles.language}>
          <p className={styles.languageName}>English</p>
          <p className={styles.languageLevel}>Intermediate</p>
        </div>
      </div>
    </Card>
  )
}
