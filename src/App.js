import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiKey = "https://reqres.in/api/login/QpwL5tke4Pnpja7X4";

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    if (email.length === 0 || password.length === 0) {
      alert("Try again");
    } else {
      axios.post(apiKey, formData).then((res) => {
        alert("Succes");
      });
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center my-2 mx-10">
        <div className="font-['Inter', sans-serif] font-black text-[#003049] text-xl">
          ATools
          <span className="text-red-800">.</span>
        </div>
        <div className="flex gap-2">
          <button className="px-8 py-2 bg-[#003049] text-white font-['Inter', sans-serif] font-semibold text-sm rounded-sm">
            Start Free Trial
          </button>
          <button className="px-16 py-2 bg-[#e85d04] text-white font-['Inter', sans-serif] font-semibold text-sm rounded-sm">
            Login
          </button>
        </div>
      </div>
      <div className="grid grid-cols-8 ">
        <div className="col-start-1 col-end-4 shadow-inner">
          <div className=" flex flex-col justify-center items-center min-h-[93.2vh] mx-[100px]">
            <div className="flex flex-col items-center font-['Inter', sans-serif] text-[#003049] ">
              <h1 className="font-black text-[30px]">Welcome Back</h1>
              <span className="text-[14px] font-medium opacity-80">
                Login to procced
              </span>

              <input
                className="text-black rounded-sm py-2 px-2 border-2 w-[150%] placeholder:text-[12px] font-normal opacity-80 mt-4"
                type="email"
                placeholder="Email Address*"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                className="text-black rounded-sm py-2 px-2 border-2 w-[150%] placeholder:text-[12px] font-normal opacity-80 mt-4"
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button
                onClick={handleSubmit}
                className="w-[150%] bg-[#003049] text-white mt-4 py-2 px-2 font-semibold rounded-sm"
              >
                Login
              </button>
            </div>

            <div className="flex flex-row justify-between items-center gap-24 text-[12px] font-medium opacity-80 mt-2">
              <div className="flex items-center">
                <input
                  className="checked:bg-red-600"
                  type="checkbox"
                  id="check"
                />
                <label htmlFor="check">Remember Password</label>
              </div>

              <a href="/">Forgot Password?</a>
            </div>
          </div>
        </div>

        <div className="col-start-4 col-end-9 bg-[#003049] min-h-[93.2vh] flex justify-center items-center">
          <img className="w-[90vh] " src="/img.png" alt="lognin" />
        </div>
      </div>
    </div>
  );
};

export default App;
