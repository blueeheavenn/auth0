import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/login';
function App() {


    return (
      <>
              
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* Add Protected Routes or other routes here */}
          </Routes>
  
        </>
    );
}

export default App;
