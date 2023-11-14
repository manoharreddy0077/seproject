// import React from 'react'
// import { useState } from 'react'
// import './Register.css'
// const Register = () => {
// const [FormData,setFormData] = useState({
//      email:'',
//     username:'',
//     password:'',
// })
// const handleChange=(e)=>{
//     const{name,value}=e.target;
//     if(name==='username'){
//       const usernameRegex=/^PES120210\d{4}$/;

//       if(!usernameRegex.test(value)){
//         alert('Username shoudl start with PES120210 and end with 4-digit number 1000 and 3000');
//         return;
//       }
//     }
//     setFormData({
//         ...FormData,
//         [name]:value,
//     })
// }
// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   try {
//     const response=await fetch('http://localhost:3001/api/register',{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(FormData),
//     });
//     if (response.ok) {
//       alert("Success");
//     } else {
//       // Use the response status to check the HTTP status code
//       if (response.status === 400) {
//         alert("Email already registered");
//       } else {
//         alert("Server error");
//       }
//     }
//   }
//   catch(error)
//   {
//     alert(error);
//   }
// }

//   return (
//     <div>
        
        
//       <form onSubmit={handleSubmit} className='registerform'>
//       <h2>New User ? Register !!</h2>
//         <div>
//         <div className='regemail'>
//             <label>E mail : </label>
//             <input type='email' name='email' value={FormData.email} onChange={handleChange} />
//         </div>
//         <div className='regusername'>
//         <label> User Name : </label>
//         <input type='text' name='username' value={FormData.username} onChange={handleChange}/>
//         </div>
//         <div className='regpassword'>
//             <label> Password : </label>
//             <input type="password" name='password'  value={FormData.password} onChange={handleChange}/>
//         </div>
//          <div className='regbutton'>
//             <button type='submit'>Register</button>
//             </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Register;


import React from 'react';
import { useState } from 'react';
import './Register.css';

const Register = () => {
  const [FormData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [usernameError, setUsernameError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      const usernameRegex = /^PES120210\d{4}$/;

      if (!usernameRegex.test(value)) {
        setUsernameError('Username should start with PES120210 and end with a 4-digit number between 1000 and 3000');
      } else {
        setUsernameError('');
      }
    }

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usernameError) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
      if (response.ok) {
        alert('Success');
      } else {
        // Use the response status to check the HTTP status code
        if (response.status === 400) {
          alert('Email already registered');
        } else {
          alert('Server error');
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='registerform'>
        <h2>New User? Register!!</h2>
        <div>
          <div className='regemail'>
            <label>Email: </label>
            <input type='email' name='email' value={FormData.email} onChange={handleChange} />
          </div>
          <div className='regusername'>
            <label>User Name: </label>
            <input type='text' name='username' value={FormData.username} onChange={handleChange} />
            {usernameError && <p className='error'>{usernameError}</p>}
          </div>
          <div className='regpassword'>
            <label>Password: </label>
            <input type='password' name='password' value={FormData.password} onChange={handleChange} />
          </div>
          <div className='regbutton'>
            <button type='submit'>Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
