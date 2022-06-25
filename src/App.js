import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Container/Home/Home';
import Register from './Container/Register/Register';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/register"} element={<Register/>} />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
