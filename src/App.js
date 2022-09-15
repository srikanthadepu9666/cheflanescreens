import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/loginPage/Login';
import Guest from './components/guestPage/Guest';
import Dashboard from './components/dashboardPage/Dashboard';

function App() {
  return (
   
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    // </div>
  );
}

export default App;
