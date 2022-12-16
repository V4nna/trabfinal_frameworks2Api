import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Navbar (){
  return <div className={styles.navigation}>
    
    <div> <Link href='/'><image scr="../../img/logo.jpg" className={styles.logo}/></Link></div>
    <nav className={styles.navtag}>
      <ul className={styles.linklist}>
        <li><Link href='/'>HOME</Link></li>
        <li><Link href='/listaProdutos' as='/produtos'>PRODUTOS</Link></li>
      </ul>
    </nav>

  </div>
}