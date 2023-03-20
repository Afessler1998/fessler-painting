import Head from 'next/head'
import styles from "../styles/heading.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Fessler Painting</title>
        <link rel="shortcut icon" href="/fessler-painting-logo.svg" />
      </Head>
      <div className={styles.heading_box}>
        <img className={styles.logo} src="/fessler-painting-logo.svg" />
        <h1 className={styles.business_name}>Fessler Painting</h1>
      </div>
    </>
  )
}
