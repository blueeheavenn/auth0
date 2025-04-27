// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './Login/navbar';
import Login from './Login/login';
import Signup from './Login/signup';
import Profile from './Login/profiles';
import Callback from './Login/callback';
import Home from './Home'; // Add this component

function App() {
  return (
    <>
      <Navbar /> {/* Navbar appears on all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </>
  );
}

export default App;