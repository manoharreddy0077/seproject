import React from 'react'
import { useLocation } from 'react-router-dom'


const Payment = () => {

    const handleClick=()=>{
      alert('displayed payment method');
      
    }

    const location=useLocation();
    const totalPrice=new URLSearchParams(location.search).get('totalPrice')
  return (
    <div>
      {/* <h1>this is payment page</h1> */}
      <p>Total Price : {totalPrice}</p>
      <h3>CHoose Your Payment Methods</h3>
    <div className="btns">
      <button onClick={()=>handleClick("UPI")}>UPI</button>
      <button onClick={()=>handleClick("DC")}>Debit Card</button>
      <button onClick={()=>handleClick("CC")}>Credit Card</button>
      <button onClick={()=>handleClick("NB")}>Net Banking</button>
    </div>
    <div className="paymentdisplay">
            <div className="upi">
              <h2>UPI &gt;&gt;&gt;</h2>
                    <h3>Enter your UPI Id  </h3>
                    <input type="text" />
                    <button>pay</button>
            </div>
            <div className="creditcard">
              <h3>enter card number:</h3>
              <input type="number" />
              <h3>expiry date:</h3>
              <input type="number" />
              <h3>Name as on Card:</h3>
              <input type="text" />
              <h3>enter cvv:</h3>
              <input type="number" />
            </div>
            <div className="debitcard">
              <h3>enter card number:</h3>
              <input type="number" />
              <h3>expiry date:</h3>
              <input type="number" />
              <h3>Name as on Card:</h3>
              <input type="text" />
              <h3>enter cvv:</h3>
              <input type="number" />
            </div>
            
    </div>
    </div>
  )
}

export default Payment;
