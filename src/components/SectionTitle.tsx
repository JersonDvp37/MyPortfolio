import type React from "react"
import styles from "./SectionTitle.module.css"

interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className={styles.title}>
      <div className={styles.bar}></div>
      {children}
    </h2>
  )
}
