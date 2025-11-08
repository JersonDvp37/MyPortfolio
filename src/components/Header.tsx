import { Github, Linkedin, ExternalLink } from "lucide-react"
import styles from "./Header.module.css"

export default function Header() {
  const socialLinks = [
    { icon: Github, 
      label: "GitHub", 
      href: "https://github.com/JersonDvp37", 
      color: "github" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jerson-tomás-8a07b9364",
      color: "linkedin",
    },
    { icon: ExternalLink, label: "Portfolio", href: "#", color: "portfolio" },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.titleSection}>
          <h1 className={styles.name}>Jerson Tomás</h1>
          <p className={styles.subtitle}>Software Developer & Graphic Designer</p>
        </div>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles[link.color]}`}
                title={link.label}
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
