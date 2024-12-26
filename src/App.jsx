import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Counter from './components/Counter';
import ProtectedRoute from './components/ProtectedRoute';   

function App() {
  return (
    <div>
      <header className='bg-gray-400 p-4 text-white flex justify-between '>

        <Link to="/">Counter</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

      </header>
      <Routes>
      <Route path="/" element={<ProtectedRoute><Counter  /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
