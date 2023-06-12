import React, { useState } from "react";
import { forgotPassword } from "../ApiCalls/RatApi";
import { http } from "../components/AuthUser";
const VerifyOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notMatchedPassword, setNotMatchedPassword] = useState(true);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  

  //forgot password api call :
  const submitHandler = () => {
    console.log(newPassword);
    console.log(email);
    console.log(otp);
    console.log(confirmPassword);
    if (newPassword !== confirmPassword) {
        alert("Passwords don't match with Confirm password");
    } else {
        // make API call
        forgotPassword(otp,email,newPassword)
        .then((response) => {
          return response.data;
        }).catch((error) => {
            console.log("password not changed");
        })
    }

       
    
    
  };
  return (
    <div>
      <div className="row justify-content-left pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <h1 className="text-center mb-3">Forgot-password</h1>

            <div className="form-group">
              <label>Enter OTP </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                id="otp"
              />
            </div>
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

            <div className="form-group">
              <label>Enter New Password </label>

              <span>
                {" "}
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  id="newPassword"
                />
              </span>
            </div>

            <div className="form-group">
              <label>Enter New Password </label>

              <span>
                {" "}
                <input
                  className="form-control"
                  placeholder="confirmPassword "
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmPassword"
                />
              
                <i
                  style={{ fontSize: "12px", color: "green" }}
                  onClick={togglePassword}
                >
                  showPassword
                </i>
              </span>
            </div>

            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={submitHandler}
            >
              Submitt Otp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
