
import './App.css';
import MenuList from './Components/Menu/MenuList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './Components/Auth/AuthContainer';
import Payment from './Components/payment/Payment';
import Waitingtime from './Components/payment/Waitingtime';
import Orderready from './Components/payment/Orderready';
function App() {
  return (
    <div className="App">
    <div className='menu'>
      <Routes>
        <Route path='/' element={<AuthContainer/>}/>
      <Route path="/Canteens" element={<MenuList/>} />
       <Route path='/Payment' element={<Payment/>}/>
       <Route path='/Payment/Waitingtime' element={<Waitingtime/>}/>
       <Route path='/Payment/Waitingtime/Orderready' element={<Orderready/>}/>
      </Routes>
    </div>

      
    </div>
  );
}

export default App;
