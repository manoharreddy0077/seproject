
import './App.css';
import MenuList from './Components/Menu/MenuList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './Components/Auth/AuthContainer';
function App() {
  return (
    <div className="App">
    <div className='menu'>
      <Routes>
        <Route path='/' element={<AuthContainer/>}/>
      <Route path="/Canteens" element={<MenuList/>} />
      </Routes>
    </div>

      
    </div>
  );
}

export default App;
