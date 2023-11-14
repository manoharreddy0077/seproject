import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import './Payment.css'
import { useNavigate } from 'react-router-dom'
// import Waitingtime from './Waitingtime'


const Payment = () => {
  const navigate=useNavigate();
    const handleClick=()=>{
      alert('displayed payment method');
      
      
    }
    const handleSubmit=()=>{
      alert('paid so  naviageting to order waiting page')
      navigate('./Waitingtime');
    }
    const location=useLocation();
    const totalPrice=new URLSearchParams(location.search).get('totalPrice')
  return (
    <div className='pay'>
      <p className='totalprice'>Total Price : {totalPrice}</p>
      <p className='paymentmode'>Choose Your Payment Methods</p>
    <div className="btns">
      <button onClick={()=>handleClick("UPI")}>UPI</button>
      <button onClick={()=>handleClick("DC")}>Debit Card</button>
      <button onClick={()=>handleClick("CC")}>Credit Card</button>
      <button onClick={()=>handleClick("NB")}>Net Banking</button>
    </div>
    <div className="paymentdisplay">
            <form className="upi" onSubmit={()=>handleSubmit()}>
                    <h2>UPI &gt;&gt;&gt;</h2>
                    <h3>Enter your UPI Id  </h3>
                    <input type="text" /> <br />
                    <button type='submit'>pay</button>
            </form>
            <form className="creditcard" onSubmit={()=>handleSubmit()}>
              <h3>enter card number:</h3>
              <input type="number" />
              <h3>expiry date:</h3>
              <input type="date" />
              <h3>Name as on Card:</h3>
              <input type="text" />
              <h3>enter cvv:</h3>
              <input type="number" /> <br />
              <button type='submit'>pay</button>
            </form>
            <form className="debitcard" onSubmit={()=>handleSubmit()}>
              <h3>enter card number:</h3>
              <input type="number" />
              <h3>expiry date:</h3>
              <input type="date" />
              <h3>Name as on Card:</h3>
              <input type="text" />
              <h3>enter cvv:</h3>
              <input type="number" /><br />
              <button type='submit'>pay</button>
            </form>

    </div>
    </div>
  )
}

export default Payment;
