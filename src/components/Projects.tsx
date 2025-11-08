import { ExternalLink } from "lucide-react"
import Card from "./Card"
import SectionTitle from "./SectionTitle"
import styles from "./Projects.module.css"

export default function Projects() {
  const projects = [
    { 
      title: "AnotAction",
      category: "UI/UX - Computer - 2025",
      description: "Notes management web application with task management features",
      href: "https://annot-actions.vercel.app/",
    },
    {
      title: "Design Services Mozart",
      category: "UI/UX - Computer - 2024",
      description: "Personal project",
      href: "https://designservicesmozart.vercel.app/",
    },
    {
      title: "Moz Arts",
      category: "Graphic Design - Responsive - 2025",
      description: "Creative portfolio showcasing graphic design and digital art projects",
      href: "https://moz-arts-abi-1-0.vercel.app/",
    },
  ]

  return (
    <section className={styles.section}>
      <SectionTitle>Projects</SectionTitle>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a key={index} href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <Card>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <ExternalLink size={20} className={styles.icon} />
              </div>
              <span className={styles.badge}>{project.category}</span>
              <p className={styles.description}>{project.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
