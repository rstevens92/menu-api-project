import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.linkContainer}>
          <a className={styles.pageLink} href="/">Home</a>
          <a className={styles.pageLink} href="/menu">Menu</a>
          <a className={styles.pageLink} href="/basket">Basket</a>
          <a className={styles.pageLink} href="/booking">Bookings</a>
          <a className={styles.pageLink} href="/contact">Contact Us</a>
        </div>
        <p className={styles.footerText}>Designed by Rachael Stevens 2022</p>
    </div>
  )
}

export default Footer