import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Signup from './Pages/Authentication/Signup/Signup';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route
    path='/' element={<Home/>}
    >
    </Route>
    <Route
    path='signup' element={<Signup/>}
    >
    </Route>
    <Route
    path='dashboard' element={
      <RequireAuth>
      <Dashboard></Dashboard>
      </RequireAuth>
    }
    >
    
    </Route>
    </Routes>
  
    </div>
  );
}

export default App;
