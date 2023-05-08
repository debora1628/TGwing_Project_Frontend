import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Startpage from './login,register/Startpage';
import Register from './login,register/Register';
import React from 'react';
import Mainpage from './components/pages/Mainpage';
import Loginpage from './login,register/Loginpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="Mainpage" element={<Mainpage />}></Route>
          <Route path="Loginpage" element={<Loginpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
