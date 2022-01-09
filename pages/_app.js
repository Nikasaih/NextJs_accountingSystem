import Link from "next/link"
import { ContextWrapper } from "../components/ContextWrapper.js"
import styles from "../styles/earnOrLoose.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.link}>Dashboard</a>
        </Link>
        <Link href="/count/add-count">
          <a className={styles.link}>Add count</a>
        </Link>
      </header>
      <Component {...pageProps} />
    </ContextWrapper>
  )
}

export default MyApp
