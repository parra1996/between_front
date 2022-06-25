import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Container/Home/Home';
import Register from './Container/Register/Register';
import Header from './Components/Header/Header';
import Login from './Container/Login/Login';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/login"} element={<Login/>} />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
