import React, { useState } from 'react'
import './Cart.css'
const Cart = ({cartItems}) => {
  const calculateTotalPrice=()=>{
      return cartItems.reduce((total,item)=>total+item.Price,0);
  }
  
  console.log(cartItems)
  return (
    <div>
      <h2>Your Cart</h2>
      
      <div className="cartbox">
        {cartItems.map((item,index)=>(
            <div  key={index} className="cart-item">
              <p>Item : {item.Item}</p>
              <p>Price : {item.Price}</p>
            </div>
        ))}
      </div>
          <h3>Total Price : {calculateTotalPrice()}</h3>
          <button>Proceed to Pay</button>
    </div>
  )
}

export default Cart
