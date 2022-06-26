import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Container/Home/Home';
import Register from './Container/Register/Register';
import Header from './Components/Header/Header';
import Login from './Container/Login/Login';
import Super_detallado from './Container/Super_detallado/Super_detallado';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/super_detallado"} element={<Super_detallado/>} />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
