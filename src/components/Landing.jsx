import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Landing() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-96 w-1/2 border rounded-lg shadow-2xl hover:scale-105 transition-all duration-700 green-pink-gradient flex justify-center items-center gap-10">
        <Link to="/admin" className="flex flex-col items-center justify-center gap-5">
        <FaUserCircle className="text-9xl" />
          <h1 className="text-3xl bg-red-500 px-8 py-2 rounded-md text-white hover:bg-white hover:text-red-500 hover:shadow-2xl transition-all hover:duration-700">Admin</h1>
        </Link>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <Link to="/user " className="flex flex-col items-center justify-center gap-5">
          <FaUserAlt className="text-9xl" />
          <h1 className="text-3xl bg-green-500 px-8 py-2 rounded-md text-white hover:bg-white hover:text-green-500 hover:shadow-2xl transition-all hover:duration-700">User</h1>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
