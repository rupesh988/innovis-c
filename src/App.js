import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'; // Make sure the case matches your file
import Login from './components/Login';
import ALogin from './components/Alogin';
import Signup from './components/signup';
import Asignup from './components/Asignup';
import Password from "./components/ResetPassword";
import Userpg from "./components/UserPage";
import Explore from "./components/Explore";
import Chat from "./components/chat";
import Fillapplication from "./components/FillApplication";
import Paper from './components/exp/publish-paper';
import StartR from './components/exp/startresearch';
import Data from './components/exp/data'
import Admin from "./components/Admin";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/data" element={<Data />} />
        <Route path="/startr" element={<StartR />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alogin" element={<ALogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/reset" element={<Password/>} />
        <Route path="/userpage" element={<Userpg/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/workflow" element={<Chat/>} />
        <Route path="/fillapplication" element={<Fillapplication />}/>
        <Route path="/papers"  element={<Paper/>}/>

        
      </Routes>
    </Router>
  );
};

export default App;
