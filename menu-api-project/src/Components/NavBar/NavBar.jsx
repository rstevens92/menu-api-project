import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
        <h1 className={styles.header}>Restaurant Menu</h1>
        <div className={styles.linkContainer}>
          <a className={styles.menuLink} href="/">Menu</a>
          <a className={styles.basketLink} href="/basket">Basket</a>
        </div>
    </div>
  )
}

export default NavBar