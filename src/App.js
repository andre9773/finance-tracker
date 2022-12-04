import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './pages/Hame/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="login" element={ <Login/> } />
      <Route path="signup" element={ <Signup/> } />
    </Routes>
  </div>
  );
}

export default App;
