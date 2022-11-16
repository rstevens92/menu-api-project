import React from 'react'
import BasketItemCard from '../../Components/BasketItemCard'
import BasketTotal from '../../Components/BasketTotal'
import menuData from '../../Data/Data'

import styles from './Basket.module.scss'

const Basket = (props) => {


  return (

    <div className={styles.basketContainer}>
        <h2 className={styles.basketHeader}>Basket</h2>
        <BasketItemCard menuData={menuData[0]}/>
        <BasketTotal />
    </div>
  )
}

export default Basket