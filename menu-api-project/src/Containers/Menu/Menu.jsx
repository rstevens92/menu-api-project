import React from 'react'
import MenuItemCard from '../../Components/MenuItemCard'
import menuData from '../../Data/Data'
import Styles from './Menu.module.scss'

const Menu = () => {
    const getStarterItems = menuData.filter((key) => key.menuSection === "Starter");
    const getPizzaItems = menuData.filter((key) => key.menuSection === "Pizza");
    const getPastaItems = menuData.filter((key) => key.menuSection === "Pasta");
    const getDessertItems = menuData.filter((key) => key.menuSection === "Dessert");
    const getDrinksItems = menuData.filter((key) => key.menuSection === "Drinks");

  return (
    <div className={Styles.menuContainer}>
        <h1 className={Styles.header}>Menu</h1>
        <h3 className={Styles.sectionHeader}>Starters</h3>
        {getStarterItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3 className={Styles.sectionHeader}>Pizza</h3>
        {getPizzaItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3 className={Styles.sectionHeader}>Pasta</h3>
        {getPastaItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3 className={Styles.sectionHeader}>Dessert</h3>
        {getDessertItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3 className={Styles.sectionHeader}>Drinks</h3>
        {getDrinksItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
    </div>
  )
}

export default Menu