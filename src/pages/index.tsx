import Head from 'next/head'
import Container from '../components/layout/Container'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recompiled — Isaac Rodríguez Dev Journey</title>
          </Head>
          <Container>
              <h1>Hi from the content</h1>
          </Container>
    </div>
  )
}
