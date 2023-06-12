import { useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import SendOtp from "../forgot-password/sendOtp";
import Loading from "../ApiCalls/loading";
export default function Login() {
  const { http, setToken } = AuthUser();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/forgotpassword`;
    navigate(path);
  };

  const submitForm = () => {
    // api call
    try {
      http
      .post("/api/v1/auth/login", { username: username, password: password })
      .then((res) => {
        setToken(res.data.user, res.data.token);
      });
    }
    catch(error) {
      console.log("errpr occured");
    window.alert("invalid login credential")
    }
    finally {
      console.log("Finally block")
      
    }
   
   
  };


  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <h1 className="text-center mb-3">Login </h1>
        
          <div className="form-group">
            <label>Email address:</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
            />
          </div>
          <button
            type="button"
            onClick={submitForm}
            className="btn btn-primary mt-4"
          >
            Login
          </button>
          <li className="nav-item">
            <Link className="nav-link" to="/forgotpassword">
              forgot Password?
            </Link>
          </li>
        </div>
        <div className="container">
          <Routes>
            <Route path="/forgotpassword" element={<SendOtp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
