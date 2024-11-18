import React, { useState, useRef, useEffect } from "react";
import { isValidEmail } from "./utilities"; // Assume this is your email validation function
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import Loader from "./Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordTab, setShowPasswordTab] = useState(false);
  const [loader, setLoader] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  // Focus the password input field once showPasswordTab is true
  useEffect(() => {
    if (showPasswordTab) {
      passwordRef.current.focus();
    }
  }, [showPasswordTab]);

  const handlerLogin = () => {
    
    if (!showPasswordTab) {
      if (isValidEmail(email)) {
        setShowPasswordTab(true);
      } else {
        alert("The email is invalid.");
        setShowPasswordTab(false);
        emailRef.current.focus(); // Focus back on the email input if invalid
      }
    } else {
      setLoader(true);
      authService.login(email, password)
        .then((res) => {
          if (res.status) {
            localStorage.setItem("authToken", res.token);
            localStorage.setItem("userId", res.user_id);
              navigate("/");
          }
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
            console.error("Login failed:", err.response ? err.response.data : err.message); // Handle the error
        });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlerLogin();
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col h-3/4 justify-center items-center mx-3">
        <div className="flex justify-center items-center flex-col md:w-[330px] w-[320px]">
          <div className="my-5">
            <div className="font-bold uppercase md:text-2xl text-xl tracking-widest">
              Gokhlana
              <span className="font-normal text-base lowercase">.in</span>
            </div>
          </div>
          <div className="flex flex-col font-black p-5 border border-cyan-500 rounded-lg w-full">
            <span className="font-semibold my-2 text-2xl">Sign in</span>
            <div className="font-medium my-2">Email or mobile phone number</div>
            <input
              ref={emailRef} // Reference for focusing the email input
              type="text"
              className="h-10 rounded-lg border-cyan-500 border font-medium px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown} // Call handlerLogin when Enter is pressed
            />
            <div className={`${showPasswordTab ? 'flex flex-col w-full' : 'hidden '}`}>
              <div className="font-medium my-2">Password</div>
              <input
                ref={passwordRef} // Reference for focusing the password input
                type="password"
                className="h-10 rounded-lg border-cyan-500 border font-medium px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown} // Call handlerLogin when Enter is pressed
              />
            </div>
            <div
              className="flex justify-center py-1 hover:bg-yellow-300 hover:cursor-pointer bg-yellow-400 rounded-xl mt-5 font-semibold text-xl"
              onClick={handlerLogin}
            >
              {loader ? <Loader hieght={25} width={25}/> : <></>}
              {showPasswordTab ? loader ? 'Please wailt' :  "Login" : "Continue"}
            </div>
            <div className="font-medium text-xs w-full my-2">
              <p>
                By continuing, you agree to Amazon's{" "}
                <a className="text-blue-700 underline hover:cursor-pointer hover:text-yellow-600">
                  Conditions of Use{" "}
                </a>{" "}
                and{" "}
                <a className="text-blue-700 underline hover:cursor-pointer hover:text-yellow-600">
                  Privacy Notice
                </a>
              </p>
            </div>
            <div className="font-medium text-xs w-full my-2 text-blue-700 hover:underline hover:cursor-pointer hover:text-yellow-600">
              Need help
            </div>
            <div className="my-3 border-b-[1px]"></div>
            <div className="font-semibold hover:text-blue-700 hover:cursor-pointer">
              Shopping here
            </div>
          </div>
          <div className="text-slate-400 mt-6 flex w-full">
            <p className="flex font-normal text-xs w-full text-center">
              <span className="w-1/3 border-b-2 align-middle h-0 mt-2 me-1"></span>
              New To Account?
              <span className="w-1/3 border-b-2 align-middle h-0 mt-2 ms-1"></span>
            </p>
          </div>
          <div
            className="mt-5 shadow flex border rounded-lg hover:bg-slate-100 hover:cursor-pointer w-full justify-center items-center"
            onClick={() => {
              navigate("/signup");
            }}
          >
            <span className="my-[1px]">Create your Account</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 bg-slate-50 w-full h-1/4 min-h-40 items-center justify-center shadow-inner">
        <div className="flex font-normal text-xs text-blue-600 gap-10">
          <span className="hover:underline hover:text-yellow-600 hover:cursor-pointer">
            Conditions of Use
          </span>
          <span className="hover:underline hover:text-yellow-600 hover:cursor-pointer">
            Privacy Notice
          </span>
          <span className="hover:underline hover:text-yellow-600 hover:cursor-pointer">
            Help
          </span>
        </div>
        <div className="font-normal text-xs mt-3">
          © 1996-2024, Gokhlana.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default Login;
