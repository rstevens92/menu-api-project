import React from 'react';
import MenuItemCard from './MenuItemCard';
import menuData from "./Data/Data"

function App() {

  return (
    <div >
      <h1>Restaurant Menu</h1>
      <h3>Starters</h3>
      {menuData.map((menuData) => <MenuItemCard menuData={menuData}/>)}
      <h3>Pizza</h3>
      <h3>Pasta</h3>
      <h3>Dessert</h3>
      <h3>Drinks</h3>
    </div>
  );
}

export default App;
