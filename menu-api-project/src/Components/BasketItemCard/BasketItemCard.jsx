import React, { useState } from 'react'
import styles from './BasketItemCard.module.scss'

const BasketItemCard = (props) => {
  const {
    menuName,
    menuPrice,
} = props.menuData;

const [count, setCount] = useState(0);

  return (
    <div className={styles.BasketItemCardContainer}>
      <h3 className={styles.BasketItemCardName}>{menuName}</h3>
      <h3 className={styles.BasketItemCardPrice}>{menuPrice}</h3>
      <div className={styles.buttons}>
            <button onClick={() => setCount(count-1)}>-</button>
                 <h3 className={styles.BasketItemCardQty}>{count}</h3>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    </div>
  )
}

export default BasketItemCard