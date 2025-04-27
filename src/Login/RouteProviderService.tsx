
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './login';
import Navbar from './navbar';
import Signup from './signup';
import Profile from './profiles';
import Callback from './callback';


const RouteProviderService: React.FC<{children:React.ReactNode}> = ({ children: ReactNode }) => {
  
  return (
    
      <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />}/> 
      <Route path="/profile" element={<Profile />}/> 
      <Route path="/callback" element={<Callback/>}/>
      </Routes>
    

  );
};

export default RouteProviderService;
