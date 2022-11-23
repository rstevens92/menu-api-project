import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './BasketTotal.module.scss'

const BasketTotal = (props) => {


  return (
    <div className={styles.totalContainer}>
        <h3 className={styles.totalText}>Total Items</h3>
        <h3 className={styles.totalText}>0</h3>
        <h3 className={styles.totalText}>Total Cost</h3>
        <h3 className={styles.totalText}>£0.00</h3>
        <Popup className={styles.totalPopup} trigger={<button className={styles.totalButton}>Checkout</button>}>
          <div>Your Food is coming!<br></br> Buon appetito!</div>
        </Popup>
    </div>
  )
}

export default BasketTotal