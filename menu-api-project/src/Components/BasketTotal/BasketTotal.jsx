import React from 'react'
import styles from './BasketTotal.module.scss'

const BasketTotal = () => {
  return (
    <div className={styles.totalContainer}>
        <h3 className={styles.totalText}>Total Items</h3>
        <h3 className={styles.totalText}>Total Cost</h3>
        <button className={styles.totalButton}>Checkout</button>
    </div>
  )
}

export default BasketTotal