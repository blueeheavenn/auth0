
import {Routes, Route } from 'react-router-dom';
import Login from './Login/login';
import Signup from './Login/signup';
import Profile from './Login/profiles';
import Navbar from './Login/navbar';

export default function App() {
  return (
   
  <>
       <Navbar/>
      <Routes>
         <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
       </> 
    
  );
}
