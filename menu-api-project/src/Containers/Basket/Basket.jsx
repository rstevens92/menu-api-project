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
        <BasketItemCard menuData={menuData[3]}/>
        <BasketItemCard menuData={menuData[7]}/>
        <BasketItemCard menuData={menuData[13]}/>
        <BasketTotal />
    </div>
  )
}

export default Basket