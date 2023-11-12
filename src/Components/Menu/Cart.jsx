import React, { useEffect, useState } from 'react'
import './Cart.css'
import '../payment/Payment'
import { useNavigate } from 'react-router-dom';

const Cart = ({cartItems}) => {
  const navigate=useNavigate();
  const [totalPrice,setTotalPrice]=useState(0);
  // var totalprice;
    // since i removed calc total price cuz of too many re renders and return problem, we use
    // use effect to calculate total price when canteen Items change

    useEffect(()=>{
        const total=cartItems.reduce((total,item)=>total+item.Price,0);
        // navigate(`/Payment?totalPrice=${totalPrice}`);
        // navigate to added to check functionality of useEffect 
        setTotalPrice(total);
    },[cartItems])

  const handleClick=()=>{
    if(totalPrice>0)
    {
      console.log(totalPrice)
      navigate(`/Payment?totalPrice=${totalPrice}`);
    }
    else
    {
      console.log(totalPrice);
      alert('add food to cart')
    } 
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
          <h3>Total Price : {totalPrice}</h3>
          <button onClick={()=>handleClick()}>Proceed to Pay</button>
    </div>
  )
}

export default Cart




// import React, { useState, useEffect } from 'react';
// import './Cart.css';
// import '../payment/Payment';
// import { useNavigate } from 'react-router-dom';

// const Cart = ({ cartItems }) => {
//   const navigate = useNavigate();
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     // Calculate total price when cartItems change
//     const total = cartItems.reduce((total, item) => total + item.Price, 0);
//     setTotalPrice(total);
//   }, [cartItems]);

//   const handleClick = () => {
//     if (totalPrice > 0) {
//       console.log(totalPrice);
//       navigate(`/Payment?totalPrice=${totalPrice}`);
//     } else {
//       console.log(totalPrice);
//       alert('add food to cart');
//     }
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <div className="cartbox">
//         {cartItems.map((item, index) => (
//           <div key={index} className="cart-item">
//             <p>Item : {item.Item}</p>
//             <p>Price : {item.Price}</p>
//           </div>
//         ))}
//       </div>
//       <h3>Total Price : {totalPrice}</h3>
//       <button onClick={() => handleClick()}>Proceed to Pay</button>
//     </div>
//   );
// };

// export default Cart;

