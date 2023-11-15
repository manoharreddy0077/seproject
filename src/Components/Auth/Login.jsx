import React from 'react'
import { useState } from 'react'
import MenuList from '../Menu/MenuList';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'



const Login = () => {
  const navigate = useNavigate();


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error,setError]=useState('')
    const [FormData,setFormData]=useState({
        username:'',
        password:''
    })
const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
        ...FormData,
        [name]:value
    })  
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:3001/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(FormData),
    });

    if (response.ok) {
      setIsLoggedIn(true);
      // alert('You are now on the canteen page');
      navigate(`/Canteens?username=${FormData.username}&email=username@gmail.com`);
    }else{
      alert("incorrect crenditials")
        setError('wrong username or password .please try again')
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit} className='loginform'>
        <h2>Already a User ? Login !!</h2>
        <div className='username'>
            <label>Username :</label>
            <input type="text" name='username' value={FormData.username} onChange={handleChange}/>
        </div>
        <div className='password'>
            <label>Password :</label>
            <input type="password" name='password' value={FormData.password} onChange={handleChange}/>
        </div>
        <div className='loginbutton'>
            <button type='submit' >Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
