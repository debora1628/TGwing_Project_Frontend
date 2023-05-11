import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login,register/Login';
import Register from './login,register/Register';
import React from 'react';
import Mainpage from './components/pages/Mainpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="/Mainpage" element={<Mainpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
