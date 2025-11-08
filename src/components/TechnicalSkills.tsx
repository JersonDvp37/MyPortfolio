import Card from "./Card"
import SectionTitle from "./SectionTitle"
import styles from "./TechnicalSkills.module.css"

export default function TechnicalSkills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "PHP", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    },
    { category: "Frameworks & Libraries", items: ["ReactJS", "Bootstrap", "Node.js", "Express"] },
    { category: "Databases", items: ["MySQL", "SQL Server"] },
    { category: "APIs", items: ["RESTful", "GraphQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Figma", "Vercel", "VS Code"] },
    { category: "Others", items: ["Photoshop", "Illustrator", "Microsoft Office", "Zapier"] },
  ]

  return (
    <section className={styles.section}>
      <SectionTitle>Technical Skills</SectionTitle>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <Card key={skill.category}>
            <h3 className={styles.categoryTitle}>{skill.category}</h3>
            <div className={styles.skillsList}>
              {skill.items.map((item) => (
                <span key={item} className={styles.skill}>
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
