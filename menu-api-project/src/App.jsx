import React from 'react';
import MenuItemCard from './MenuItemCard';
import menuData from "./Data/Data"

function App() {

  return (
    <div >
      <h1>Restaurant Menu</h1>
      {menuData.map((menuData) => <MenuItemCard menuData={menuData}/>)}
    </div>
  );
}

export default App;
