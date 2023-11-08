import React from 'react'
import './MenuList.css'
import { useState } from 'react'

const MenuList = () => {
  const [Canteen,setCanteen]=useState('');
  const handleClick=async(e)=>{
    // e.preventDefault();
    console.log(e);
    setCanteen(e);
    const  response=fetch('http://localhost:3001/api/MenuList',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },body:JSON.stringify()
    })
    // alert("displayed");
    

  }
  return (
    <div className='allcanteens'>
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
  )
}

export default MenuList
