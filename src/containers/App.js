import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/login,register/Login.js';
import Register from '../components/login,register/Register.js';
import React, {Component} from 'react';
import Mainpage from '../components/mainpage/Mainpage.js';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="/mainpage" element={<Mainpage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

/*function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="/mainpage" element={<Mainpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
*/
export default App;
