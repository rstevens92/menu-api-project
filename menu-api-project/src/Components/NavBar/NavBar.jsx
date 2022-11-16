import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
        <a className={styles.header} href="/">House of Carbs</a>
        <div className={styles.linkContainer}>
          <a className={styles.pageLink} href="/menu">Menu</a>
          <a className={styles.pageLink} href="/basket">Basket</a>
          <a className={styles.pageLink} href="/booking">Bookings</a>
          <a className={styles.pageLink} href="/contact">Contact Us</a>
        </div>
    </div>
  )
}

export default NavBar