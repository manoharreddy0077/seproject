import React from 'react'
import './MenuList.css'
import { useState } from 'react'
import Cart from './Cart'

const MenuList = () => {
  const [quan,setQuan]=useState(0);
  const [Canteen,setCanteen]=useState('');
  const[menuData,setMenuData]=useState([]);
  const handleIncrement=()=>{
    if(quan>=0 && quan<=20)
    {
      setQuan(quan+1)
    }else{
      alert('Cant Perform the Operation')
    }
    
  }
  const handleDecrement=()=>{
    if(quan>0)
    setQuan(quan-1)
  }
  const handleClick=async(e)=>{
    try{
    // e.preventDefault();
    // console.log(e);
    setCanteen(e);
    const  response= await fetch('http://localhost:3001/api/menu',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },body:JSON.stringify({canteen_name:e})
    })
    // alert("displayed");
    if(response.ok){
      const data=await response.json();
      setMenuData(data);
      // console.log(menuData);
    }else{
      console.log(menuData);
      console.log('request failed with status ',response.status);
      console.log(response)
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
      <th>Item&nbsp;&nbsp;</th>
      <th>price&nbsp;&nbsp;&nbsp;</th>
      <th>Quantity Left&nbsp;&nbsp;</th>
      <th>Select Your Food</th>
    </tr>
    </thead>
    <tbody className='ipq'>


    <div className="menuitems">
      {menuData.map((item)=>(
        <tr key={item._id} className='eachitem'>
          <td>{item.Item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>Rs.{item.Price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>{item.Quantity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <button onClick={() => handleIncrement()} className='orderbtn'>+</button>
                  <p className='orderquan'>{quan}</p>
          <button onClick={() => handleDecrement()} className='orderbtn'>-</button>
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
        <Cart/>
      </div>
      </div>
    </div>
  );
};

export default MenuList
