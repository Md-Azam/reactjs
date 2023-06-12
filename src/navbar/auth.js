import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard";
import AuthUser from "../components/AuthUser";
import Building from "../components/building";
import SendOtp from "../forgot-password/sendOtp";
import Loading from "../ApiCalls/loading";
function Auth() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  const { http } = AuthUser();
  const [loading,setLoading] = useState(false)
 
 
  return (
    <>
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addBuilding">
              Building
            </Link>
          </li>
          <li className="nav-item">
            <span role="button" className="nav-link" onClick={logoutUser}>
              Logout
            </span>
          </li>
        </ul>
      </nav>
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addBuilding" element={<Building />} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
