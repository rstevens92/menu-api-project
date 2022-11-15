import React from 'react'

const BasketItemCard = (props) => {
  const {
    menuName,
    menuPrice,
} = props.menuData;

  return (
    <div>
      <h3>{menuName}</h3>
      <h3>{menuPrice}</h3>
      <h3>QTY</h3>
    </div>
  )
}

export default BasketItemCard