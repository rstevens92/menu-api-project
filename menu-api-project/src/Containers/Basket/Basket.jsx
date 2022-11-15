import React from 'react'
import BasketItemCard from '../../Components/BasketItemCard'
import menuData from '../../Data/Data'

const Basket = (props) => {


  return (

    <div>
        <h2>Basket</h2>
        <BasketItemCard menuData={menuData[0]}/>
    </div>
  )
}

export default Basket