import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/Fc";
import { AiFillGithub } from "react-icons/Ai";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, SetPassword] = useState();

  const navigate = useNavigate();
  const  signin = async () => {
    console.log("email",email);
    console.log("password",password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/welcomepage");
    } else {
      alert("Please Enter Correct Details");
    }
    
  };
  return (
    <>
      <div className="mt-8 px-4 h-full ">
        <div className="flex content-center items-center justify-center h-full ">
          <div className="w-full lg:w-4/12 px-4">
            <div className=" bg-gray-200 text-black relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-black text-sm font-bold">Sign in with</h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white  active:bg-blue-50 text-blueGray-700 font-semibold px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <AiFillGithub className="text-xl mr-1" />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blue-50 text-blueGray-700 font-semibold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <FcGoogle className="text-xl mr-1" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-zinc-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-black text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="border-0 px-3 py-3  text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => SetPassword(e.target.value)}
                      type="password"
                      className="border-0 px-3 py-3  text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blue-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blue-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      onClick={signin}
                      className="bg-teal-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
