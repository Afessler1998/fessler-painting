import Head from 'next/head'
import Home from "./home"

export default function Index() {
  return (
    <>
      <Head>
        <title>Fessler Painting</title>
        <link rel="shortcut icon" href="/fessler-painting-logo.svg" />
      </Head>
      <Home />
    </>
  )
}
