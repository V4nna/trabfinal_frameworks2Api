import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from './components/Navbar.component'
import Footer from './components/Footer.component'
import Link from 'next/link'

export default function Home (){
  return <div className={styles.wview}>
    <Head>
      <title>Scara -Inicio-</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={styles.ctasection}>
    <Navbar />
    <image className={styles.topimg} src="https://img.freepik.com/premium-photo/bill-shopping-cart-floating-purple-background-with-smartphone-shop-store-online-concept-cartoon-minimal-discount-promotion-sale-banner-website-3d-render-illustration_598821-1257.jpg?w=2000" alt="representação abstrata de loja online" />
      <div className={styles.ctabox}>
        <h1 className={styles.title}>NÃO CONFIE EM ALHEIOS CONFIE NA SCARA</h1>
        <p className={styles.tinydesc}>
          Não erre na hora da compra!<br/>
          Em nossa loja não traimos a confiança!<br/>
          Clique e confira
        </p>
        <Link href='/listaProdutos' as='/listaDeProdutos' className={styles.ctabtn}>PRODUTOS</Link>
      </div>
    </main>
    <Footer />
  </div>
}