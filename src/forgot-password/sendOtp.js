import React from "react";
import { useState } from "react";
import AuthUser from "../components/AuthUser";
import { Routes, Route, Link } from "react-router-dom";
import VerifyOtp from "./verifyOtp";
import { http } from "../components/AuthUser";
const SendOtp = () => {
  const { http } = AuthUser();
  const { user } = AuthUser();
  const [email, setEmail] = useState("");

  const createPost = (bd) => {
    http.post(`/api/v1/auth/sendOtp?email=${email}`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="row justify-content-left pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <h1 className="text-center mb-3">Forgot-password</h1>
          <div className="form-group">
            <label>Enter Registered mail</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mail"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <button
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              display: "inline-block",
              fontSize: "12px",
            }}
            type="button"
            onClick={createPost}
            className="btn btn-primary mt-4"
          >
            Send Otp
          </button>

         
          <li className="nav-item">
            <Link className="nav-link" to="/validate">
               EnterOtp
            </Link>
          </li>
        </div>
        <div>
        <Routes>
                    <Route path="/validate" element={<VerifyOtp />} />
                </Routes>
        </div>
      </div>
    </div>
  );
};

export default SendOtp;
