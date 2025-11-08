import Card from "./Card"
import SectionTitle from "./SectionTitle"
import styles from "./Education.module.css"

export default function Education() {
  return (
    <section className={styles.section}>
      <SectionTitle>Education</SectionTitle>
      <div className={styles.education}>
        <Card>
          <div className={styles.header}>
            <h3 className={styles.title}>Bachelor's Degree in Software Development</h3>
            <span className={styles.date}>2022 – 2025</span>
          </div>
          <p className={styles.institution}>São Tomás University of Mozambique (USTM)</p>
          <p className={styles.note}>Expected Graduation: 2026</p>
        </Card> 

        <Card>
          <h3 className={styles.title}>Complementary Courses</h3>
          <ul className={styles.courseList}>
            <li className={styles.courseItem}>
              <span className={styles.bullet}>▸</span>
              <div>
                <p className={styles.courseName}>ReactJS: From Zero to Mastery</p>
                <p className={styles.courseSource}>Udemy (2025)</p>
              </div>
            </li>
            <li className={styles.courseItem}>
              <span className={styles.bullet}>▸</span>
              <div>
                <p className={styles.courseName}>GraphQL</p>
                <p className={styles.courseSource}>In progress (Beginner level)</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
