import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'; // Make sure the case matches your file
import Login from './components/Login';
import Signup from './components/signup';
import Password from "./components/ResetPassword";
import Userpg from "./components/UserPage";
import Explore from "./components/Explore";
import Chat from "./components/chat"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Password/>} />
        <Route path="/userpage" element={<Userpg/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/chat" element={<Chat/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
