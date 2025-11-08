import { Mail, Phone } from "lucide-react"
import Card from "./Card"
import styles from "./ContactCard.module.css"

export default function ContactCard() {
  return (
    <Card>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.contactList}>
        <a href="tel:+258842340266" className={styles.contactItem}>
          <Phone size={18} />
          <span>+258 842 340 266</span>
        </a>
        <a href="mailto:gersonthomas37@gmail.com" className={styles.contactItem}>
          <Mail size={18} />
          <span className={styles.email}>gersonthomas37@gmail.com</span>
        </a>
      </div>
    </Card>
  )
}
