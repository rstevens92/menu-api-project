import React , { useState } from 'react';
import styles from "./MenuItemCard.module.scss";

const MenuItemCard = (props) => {
    const {
        menuName,
        menuImg,
        menuDescription,
        menuPrice,
        menuCalories,
    } = props.menuData;

    const {
        isVegetarian,
        isVegan,
        isGlutenFree,
    } = props.menuData.menuDietryInformation;

    const [count, setCount] = useState(0);

  return (
    <div className={styles.menuCard}>
        <h1 className={styles.menuName}>{menuName}</h1>
        <img src={menuImg} alt="menu item picture" />
        <div className={styles.description}>
            <p>{menuDescription}</p>
            <p>{menuPrice}</p>
            <p>{menuCalories} calories</p>
        </div>
        <div className={styles.dietaryInformation}>
            <p>Dietary information</p>
            {isVegetarian ? <p>Vegetarian</p> : <p></p>}
            {isVegan ? <p>Vegan</p> : <p></p>}
            {isGlutenFree ? <p>Gluten Free</p> : <p></p>}
        </div>
        <div className={styles.buttons}>
            <button disabled={count ? false : true} onClick={() => setCount(count-1)}>-</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    </div>
  )
}

export default MenuItemCard