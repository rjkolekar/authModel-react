import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-500  h-screen text-center items-center justify-center ">
        <div className="">
          <span className="text-white"></span>
        </div>
        <div className="">
          <ul
            className="flex text-center items-center justify-center
        "
          >
            <li className=" mt-52">
              <Link to="/login">
                {" "}
                <button className="bg-teal-500 px-3 m-2 rounded-md py-2">
                  Login
                </button>
              </Link>
            </li>
            <li className="ml-16 mt-52">
              <Link to="/register">
                {" "}
                <button className="bg-teal-500 px-3 m-2 rounded-md py-2">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
