import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export default function Navbar (){
  return <div className={styles.bottom}>
  
    <p>Para mais produtos visite <span><a href="https://www.lolja.com.br/" target={"_blank"} rel="noreferrer">Lolja</a></span></p>

  </div>
}