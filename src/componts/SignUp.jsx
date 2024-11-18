import React, { useState } from "react";
import { isValidEmail } from "./utilities";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import Loader from "./Loader";

const SignUp = () => {
  const [loader, setLoader] = useState(false);

  const [signData, setSignData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    gender: "",
    address: "",
    city: "",
    password: "",
    confirm_password: "",
  })

  const navigate = useNavigate();
 
  const handlerCreateAccount = () => {
    if (isValidEmail(signData.email)) {
      setLoader(true)
      authService.createAccount(signData.full_name, signData.email, signData.password).then((res) => {
        console.log("res", res);
        setLoader(false)
        if (res.status) {
          navigate('/login');
        }
      })
    } else {
      alert("The email is invalid.");
    }
  };
  
  return (
    <div className=" w-full min-h-screen">
      <div className=" flex flex-col h-3/4 justify-center items-center mx-3">
        <div className="flex  justify-center items-center flex-col md:w-1/3 w-[320px]">
          <div className="my-5">
            <div className=" font-bold uppercase  md:text-2xl text-xl tracking-widest ">
              Gokhlana
              <span className="font-normal text-base lowercase">.in</span>
            </div>
          </div>
          <div className=" flex flex-col font-black p-5 border border-cyan-500 rounded-lg w-full ">
            <div>
              <span className="font-semibold my-2 text-2xl">Create Account</span>
            </div>
            <div className="grid md:grid-cols-2">
            <div>
              <div className=" font-medium my-2 ">
                Full Name 
              </div>
              <input
                type="text"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.full_name}
                onChange={(e) => setSignData({...signData, full_name :e.target.value})}
              />
            </div>
            <div>
              <div className=" font-medium my-2 ">
                Email 
              </div>
              <input
                type="text"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.email}
                onChange={(e) => setSignData({...signData, email :e.target.value.trim()})}
              />

            </div>
            {/* <div>
              <div className=" font-medium my-2 ">
                Phone No
              </div>
              <input
                type="number"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.phone_number}
                onChange={(e) => setSignData({...signData, phone_number :e.target.value.trim()})}
              />

            </div>
            <div>
              <div className=" font-medium my-2 ">
                Gender
              </div>
              <input
                type="text"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.gender}
                onChange={(e) => setSignData({...signData, gender :e.target.value.trim()})}
              />

            </div>
            <div>
              <div className=" font-medium my-2 ">
                Address
              </div>
              <input
                type="text"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.address}
                onChange={(e) => setSignData({...signData, address :e.target.value})}
              />

            </div>
            <div>
              <div className=" font-medium my-2 ">
                City
              </div>
              <input
                type="text"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.city}
                onChange={(e) => setSignData({...signData, city :e.target.value})}
              />

            </div> */}
            <div>
              <div className=" font-medium my-2 ">
                Password
              </div>
              <input
                type="password"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.password}
                onChange={(e) => setSignData({...signData, password :e.target.value.trim()})}
              />

            </div>
            <div>
              <div className=" font-medium my-2 ">
              Re-Password
              </div>
              <input
                type="password"
                className=" h-10 rounded-lg  border-cyan-500 border font-medium px-2 "
                value={signData.confirm_password}
                onChange={(e) => setSignData({...signData, confirm_password :e.target.value.trim()})}
              />

            </div>
            {(signData.password == '' || signData.confirm_password == '' || signData.confirm_password == signData.password) ?
            <div className=" text-[#ff0000] text-base font-normal h-6">
            </div> :
            <div className=" text-[#ff0000] text-base font-normal ">
              password not matched
            </div>  }
            </div>
            <div className={`${(signData.password == '' || signData.confirm_password == '' || signData.confirm_password !== signData.password) ? 'cursor-not-allowed' : 'hover:cursor-pointer'}
             flex justify-center py-1 hover:bg-yellow-300  bg-yellow-400 rounded-xl mt-5 font-semibold text-xl`}
             onClick={() => {
              if (signData.password !== '' && signData.confirm_password !== '' && signData.confirm_password == signData.password) {
                handlerCreateAccount();
              }
             }}
            >
              {loader ? <Loader hieght={25} width={25}/> : <></>}
              {loader ? 'Please wailt' :  "Create Account"}
              
            </div>
            <div className=" font-medium text-xs w-full my-2 ">
              <p>
                By continuing, you agree to Amazon's{" "}
                <a className=" text-blue-700 underline hover:cursor-pointer hover:text-yellow-600 ">
                  Conditions of Use{" "}
                </a>{" "}
                and{" "}
                <a className=" text-blue-700 underline hover:cursor-pointer hover:text-yellow-600 ">
                  {" "}
                  Privacy Notice
                </a>
              </p>
            </div>
            <div className=" font-medium text-xs w-full my-2  text-blue-700 hover:underline hover:cursor-pointer hover:text-yellow-600">
              Need hepl
            </div>
            <div className=" my-3 border-b-[1px]"></div>
            <div className="font-semibold hover:text-blue-700 hover:cursor-pointer ">
              Shoping here
            </div>
          </div>
          <div className=" text-slate-400 mt-6 flex w-full">
            <p className="flex font-normal text-xs w-full text-center ">
              <span className="w-1/3 border-b-2 align-middle h-0 mt-2 me-1	"></span>
              Already have an account ?
              <span className="w-1/3 border-b-2 align-middle h-0 mt-2 ms-1"></span>
            </p>
          </div>
          <div className="mt-5 shadow flex border rounded-lg hover:bg-slate-100 hover:cursor-pointer w-full justify-center items-center"
            onClick={() => {
              navigate('/login')
            }}
          >
            <span className="my-[1px]">Sine In</span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-8 bg-slate-50 w-full h-1/4 min-h-40 items-center justify-center shadow-inner ">
        <div className="flex font-normal text-xs text-blue-600 gap-10">
          <span className="hover:underline hover:text-yellow-600 hover:cursor-pointer ">
            Conditions of Use
          </span>
          <span className="hover:underline hover:text-yellow-600 hover:cursor-pointer ">
            Privacy Notice
          </span>
          <span className="hover:underline hover:text-yellow-600 hover:cursor-pointer ">
            {" "}
            Help{" "}
          </span>
        </div>
        <div className="font-normal text-xs mt-3">
          © 1996-2024, Gokhlana.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default SignUp;
