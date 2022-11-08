import React from 'react';
import MenuItemCard from './MenuItemCard';
import menuData from "./Data/Data"

function App() {

  // const sectionedMenuItems = menuData.reduce((acc, it) => {return acc[it.menuSection] = acc[it.menuSection].add(it)});
  const getStarterItems = menuData.filter((key) => key.menuSection === "Starter");
  const getPizzaItems = menuData.filter((key) => key.menuSection === "Pizza");
  const getPastaItems = menuData.filter((key) => key.menuSection === "Pasta");
  const getDessertItems = menuData.filter((key) => key.menuSection === "Dessert");
  const getDrinksItems = menuData.filter((key) => key.menuSection === "Drinks");

  return (
    
    <div >
      <h1>Restaurant Menu</h1>
      <h2>Basket</h2>
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
      {/* {sectionedMenuItems.forEach((key, value) => {
        <h3>${key}</h3>
        value.map(menuDataItem => <MenuItemCard menuData={menuDataItem}/>)
        })
      } */}
    </div>
  );
}

export default App;
