// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Payment.css';

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const totalPrice = new URLSearchParams(location.search).get('totalPrice');

//   const [selectedMethod, setSelectedMethod] = useState('');

//   const handleClick = (method) => {
//     setSelectedMethod(method);
//   };

//   const handleSubmit = () => {
//     alert('Paid, navigating to order waiting page');
//     navigate('./Waitingtime');
//   };

//   return (
//     <div className='pay'>
//       <p className='totalprice'>Total Price: {totalPrice}</p>
//       <p className='paymentmode'>Choose Your Payment Methods</p>
//       <div className="btns">
//         <button
//           className={selectedMethod === 'UPI' ? 'selected' : ''}
//           onClick={() => handleClick('UPI')}
//         >
//           UPI
//         </button>
//         <button
//           className={selectedMethod === 'Debit Card' ? 'selected' : ''}
//           onClick={() => handleClick('Debit Card')}
//         >
//           Debit Card
//         </button>
//         <button
//           className={selectedMethod === 'Credit Card' ? 'selected' : ''}
//           onClick={() => handleClick('Credit Card')}
//         >
//           Credit Card
//         </button>
//       </div>
//       <div className="paymentdisplay">
//         <form className={`upi ${selectedMethod === 'UPI' ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
//           <h2>UPI</h2>
//           <h3>Enter your UPI Id </h3>
//           <input type="text" /> <br />
//           <button type='submit'>Pay</button>
//         </form>
//         <form className={`creditcard ${selectedMethod === 'Credit Card' ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
//         <h2>Debit card</h2>
//           <h3>Enter card number:</h3>
//           <input type="number" />
//           <h3>Expiry date:</h3>
//           <input type="date" />
//           <h3>Name as on Card:</h3>
//           <input type="text" />
//           <h3>Enter CVV:</h3>
//           <input type="number" /> <br />
//           <button type='submit'>Pay</button>
//         </form>
//         <form className={`debitcard ${selectedMethod === 'Debit Card' ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
//         <h2>Credit card</h2>
//           <h3>Enter card number:</h3>
//           <input type="number" />
//           <h3>Expiry date:</h3>
//           <input type="date" />
//           <h3>Name as on Card:</h3>
//           <input type="text" />
//           <h3>Enter CVV:</h3>
//           <input type="number" /><br />
//           <button type='submit'>Pay</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = new URLSearchParams(location.search).get('totalPrice');

  const [selectedMethod, setSelectedMethod] = useState('');

  const handleClick = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the selectedMethod is UPI and the UPI form fields are filled
    if (selectedMethod === 'UPI' && event.target.querySelector('input[type="text"]').value.trim() !== '') {
      alert('Paid, navigating to order waiting page');
      navigate('./Waitingtime');
    }
    // Check if the selectedMethod is Credit Card and the Credit Card form fields are filled
    else if (selectedMethod === 'Credit Card') {
      const inputs = event.target.querySelectorAll('input');
      if (inputs[0].value.trim() !== '' && inputs[1].value.trim() !== '' && inputs[2].value.trim() !== '' && inputs[3].value.trim() !== '') {
        alert('Paid, navigating to order waiting page');
        navigate('./Waitingtime');
      }
    }
    // Check if the selectedMethod is Debit Card and the Debit Card form fields are filled
    else if (selectedMethod === 'Debit Card') {
      const inputs = event.target.querySelectorAll('input');
      if (inputs[0].value.trim() !== '' && inputs[1].value.trim() !== '' && inputs[2].value.trim() !== '' && inputs[3].value.trim() !== '') {
        alert('Paid, navigating to order waiting page');
        navigate('./Waitingtime');
      }
    } else {
      alert('Please fill out the required fields');
    }
  };

  return (
    <div className='pay'>
      <p className='totalprice'>Total Price: {totalPrice}</p>
      <p className='paymentmode'>Choose Your Payment Methods</p>
      <div className="btns">
        <button
          className={selectedMethod === 'UPI' ? 'selected' : ''}
          onClick={() => handleClick('UPI')}
        >
          UPI
        </button>
        <button
          className={selectedMethod === 'Debit Card' ? 'selected' : ''}
          onClick={() => handleClick('Debit Card')}
        >
          Debit Card
        </button>
        <button
          className={selectedMethod === 'Credit Card' ? 'selected' : ''}
          onClick={() => handleClick('Credit Card')}
        >
          Credit Card
        </button>
      </div>
      <div className="paymentdisplay">
        <form className={`upi ${selectedMethod === 'UPI' ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
          <h2>UPI</h2>
          <h3>Enter your UPI Id </h3>
          <input type="text" /> <br />
          <button type='submit'>Pay</button>
        </form>
        <form className={`creditcard ${selectedMethod === 'Credit Card' ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
          <h2>Credit card</h2>
          <h3>Enter card number:</h3>
          <input type="number" />
          <h3>Expiry date:</h3>
          <input type="date" />
          <h3>Name as on Card:</h3>
          <input type="text" />
          <h3>Enter CVV:</h3>
          <input type="number" /> <br />
          <button type='submit'>Pay</button>
        </form>
        <form className={`debitcard ${selectedMethod === 'Debit Card' ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
          <h2>Debit card</h2>
          <h3>Enter card number:</h3>
          <input type="number" />
          <h3>Expiry date:</h3>
          <input type="date" />
          <h3>Name as on Card:</h3>
          <input type="text" />
          <h3>Enter CVV:</h3>
          <input type="number" /><br />
          <button type='submit'>Pay</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
