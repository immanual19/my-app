import { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Signup from './Pages/Authentication/Signup/Signup';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const navigate = useNavigate();
  let token = document.cookie;
  let index = token.indexOf('token=');
  if (index !== -1) {
    token = token.substring(0, index) + token.substring(index + 6);
  }
  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

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
