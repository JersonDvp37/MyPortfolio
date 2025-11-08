import Card from "./Card"
import SectionTitle from "./SectionTitle"
import styles from "./Experience.module.css"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer – Web App Project",
      company: "Task Management Application",
      date: "August 2024",
      responsibilities: [
        "Developed the user interface for a corporate task management web application",
        "Implemented UI components",
        "Collaborated with both frontend and backend teams",
      ],
    },
    {
      title: "Freelance Graphic Designer",
      date: "November 2022 – Present",
      responsibilities: [
        "Created visual identities and branding materials",
        "Designed UI/UX prototypes",
        "Developed creative concepts for digital and print media",
      ],
    },
  ]

  return (
    <section className={styles.section}>
      <SectionTitle>Experience</SectionTitle>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <Card key={index}>
            <div className={styles.header}>
              <h3 className={styles.title}>{exp.title}</h3>
              <span className={styles.date}>{exp.date}</span>
            </div>
            {exp.company && <p className={styles.company}>{exp.company}</p>}
            <ul className={styles.responsibilities}>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className={styles.responsibility}>
                  <span className={styles.bullet}>•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
