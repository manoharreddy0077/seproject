
import './App.css';
import MenuList from './Components/Menu/MenuList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './Components/Auth/AuthContainer';
import Payment from './Components/payment/Payment';

function App() {
  return (
    <div className="App">
    <div className='menu'>
      <Routes>
        <Route path='/' element={<AuthContainer/>}/>
      <Route path="/Canteens" element={<MenuList/>} />
       <Route path='/Payment' element={<Payment/>}/>
      </Routes>
    </div>

      
    </div>
  );
}

export default App;
