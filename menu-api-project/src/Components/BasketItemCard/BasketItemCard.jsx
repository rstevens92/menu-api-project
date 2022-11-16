import React from 'react'
import styles from './BasketItemCard.module.scss'

const BasketItemCard = (props) => {
  const {
    menuName,
    menuPrice,
} = props.menuData;

  return (
    <div className={styles.BasketItemCardContainer}>
      <h3 className={styles.BasketItemCardName}>{menuName}</h3>
      <h3 className={styles.BasketItemCardPrice}>{menuPrice}</h3>
      <h3 className={styles.BasketItemCardQty}>QTY</h3>
    </div>
  )
}

export default BasketItemCard