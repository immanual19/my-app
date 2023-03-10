import { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Signup from './Pages/Authentication/Signup/Signup';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (document.cookie.token) {
      navigate('/dashboard');
    }
  }, [document.cookie.token, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
