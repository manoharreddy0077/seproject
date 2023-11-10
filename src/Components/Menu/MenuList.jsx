// its not being displayed in cartbox when props are passed using these jsx file 
import React from 'react'
import './MenuList.css'
import { useState } from 'react'
import Cart from './Cart'

const MenuList = () => {

  // const [quan,setQuan]=useState(0);
  const [Canteen,setCanteen]=useState('');
  const[menuData,setMenuData]=useState([]);
  const [cartItems,setcartItems]=useState([]);

  const [quantities,setQuantities]=useState({});

const handleQuantityChange =(itemId,action,Item,Price)=>{
    if(action==='+')
    {
          if(quantities[itemId]>=0 && quantities[itemId]<20)
          {
              setQuantities((prevQuantities)=>({
                ...prevQuantities,
                [itemId]:(prevQuantities[itemId] || 0)+1,
              }))
              alert(`item added to cart : ${Item}, Price Rs.${Price}`);
              setcartItems((prevItems)=>[...prevItems,{Item: Item,Price:Price}])
          }
    }
    else if(action==='-')
      {
        //1st version will remove all the items cuz we have filtered out using Item name
        // if(quantities[itemId]>0)
        // {
        //   setQuantities((prevQuantities)=>({
        //     ...prevQuantities,
        //     [itemId]:prevQuantities[itemId]-1,
        //   }))

        //   const existingCartItem=cartItems.find((cartItem)=>cartItem.Item===Item);
        //   // console.log("existing ",existingCartItem);

        //   if(existingCartItem && existingCartItem.quantity >1){
        //     setcartItems((prevItems)=>
        //         prevItems.map((cartItem)=>
        //                   cartItem.Item===Item ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem              
        //           )
        //     );
        //   }
        //   else {
        //     // If the quantity is 1 or the item doesn't exist in the cart, remove it
        //     setcartItems((prevItems) =>
        //       prevItems.filter((cartItem) => cartItem.Item !== Item)
        //     );
        if (quantities[itemId] > 0) {
          setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: prevQuantities[itemId] - 1,
          }));
    
          // Update quantity in the cart
          setcartItems((prevItems) =>
            prevItems.map((cartItem) =>
              cartItem.Item === Item
                ? { ...cartItem, quantity: quantities[itemId] }
                : cartItem
            )
          );
    
          // If the quantity is 1, remove the item from the cart
          if (quantities[itemId] === 1) {
            setcartItems((prevItems) =>
              prevItems.filter((cartItem) => cartItem.Item !== Item)
            );

        
        }
      }
    }
  }
  const handleClick=async(e)=>{
    try{
    setCanteen(e);
    const  response= await fetch('http://localhost:3001/api/menu',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },body:JSON.stringify({canteen_name:e})
    })
    if(response.ok){
      const data=await response.json();
      setMenuData(data);


      //initialse quantities state for each menu item

      const initialQuantities={};
      data.forEach(item => {
          initialQuantities[item._id]=0;
      });

      setQuantities(initialQuantities);
    }else{
      // console.log(menuData);
      console.log('request failed with status ',response.status);
      // console.log(response)
    }
  }catch(error){
    console.log('An error Occured',error);
  }
};

//render menu items
const renderMenuItems=()=>{
  return( 
   <table>
    <thead className='heading'>
      <tr>
      <th>Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>price&nbsp;&nbsp;&nbsp;</th>
      {/* <th>Quantity Left&nbsp;&nbsp;</th> */}
      <th>Select Your Food</th>
    </tr>
    </thead>
    <tbody className='ipq'>


    <div className="menuitems">
      {menuData.map((item)=>(
        <tr key={item._id} className='eachitem'>
          <td>{item.Item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>Rs.{item.Price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          {/* <td>{item.Quantity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> */}

          <button  className='orderbtn' onClick={()=>handleQuantityChange(item._id,'+',item.Item,item.Price)}>+</button>
                  {/* <p className='orderquan'>{quantities[item._id]}</p> */}
          <button className='orderbtn' onClick={()=>handleQuantityChange(item._id,'-',item.Item,item.Price)}>-</button>
        </tr> 
      ))}
    </div>
    </tbody>
    </table>
    )
}
  return (
    <div className='allcanteens'>
      <div className="canteensdisplay">
            <div className="c1 menu">
                <h2>Canteen-1</h2>
                <h3>South Indian Canteen</h3>
                <img src='' alt='one image'></img>
                <button onClick={() => handleClick("C1")}>Order Now!!!</button>
            </div>
            <div className="c2 menu">
                <h2>Canteen-2</h2>
                <h3>North Indian Canteen</h3>
                <img src='' alt='one image'></img>
                <button onClick={() => handleClick("C2")}>Order Now!!!</button>
            </div>
            <div className="c3 menu">
                <h2>Canteen-3</h2>
                <h3>Chinese</h3>
                <img src='' alt='one image'></img>
                <button onClick={() => handleClick("C3")}>Order Now!!!</button>
            </div>
        </div>
      {/* display new data i.e menudata if available */}
    <div className="menuandcart">
      <div className="menu-items">
        {menuData.length>0 ? renderMenuItems() : <p>No Menu Items</p>}
      </div>
      <div className="cart">
        <Cart cartItems={cartItems}/>
      </div>
      </div>
    </div>
  );
};

export default MenuList;


