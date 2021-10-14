import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Header(props){
  return(
    <Head>
      <title>{props.title}</title>
      <link rel ="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      crossOrigin="nonymous"></link>
    </Head>
  )
}