import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
        <h1 className={styles.header}>House of Carbs</h1>
        <div className={styles.linkContainer}>
          <a className={styles.menuLink} href="/">Menu</a>
          <a className={styles.basketLink} href="/basket">Basket</a>
          <a className={styles.basketLink} href="/booking">Bookings</a>
          <a className={styles.basketLink} href="/contact">Contact Us</a>
        </div>
    </div>
  )
}

export default NavBar