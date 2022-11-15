import React from 'react'
import MenuItemCard from '../../Components/MenuItemCard'
import menuData from '../../Data/Data'

const Dashboard = () => {
    const getStarterItems = menuData.filter((key) => key.menuSection === "Starter");
    const getPizzaItems = menuData.filter((key) => key.menuSection === "Pizza");
    const getPastaItems = menuData.filter((key) => key.menuSection === "Pasta");
    const getDessertItems = menuData.filter((key) => key.menuSection === "Dessert");
    const getDrinksItems = menuData.filter((key) => key.menuSection === "Drinks");

  return (
    <div>
        <h3>Starters</h3>
        {getStarterItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3>Pizza</h3>
        {getPizzaItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3>Pasta</h3>
        {getPastaItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3>Dessert</h3>
        {getDessertItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
        <h3>Drinks</h3>
        {getDrinksItems.map((menuData) => <MenuItemCard menuData={menuData}/>)}
    </div>
  )
}

export default Dashboard