import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container  mx-auto">
      <div className="flex justify-between items-center gap-10 px-5 ">
        {/* Logo Border */}
        <figure className="">
          <img src="/Logo/Logo.png" alt="Logo" />
        </figure>
        {/* Search Border */}
        <div className="grow-1 relative flex justify-center items-center ">
          <input
            type="text"
            placeholder="Search Films"
            name=""
            id=""
            className="border border-[#C6C6C6] rounded-[8px] w-full pl-12 pr-3 py-4 placeholder:text-[#C6C6C6] placeholder:text-5 "
          />
          <CiSearch className="text-[#C6C6C6] absolute left-3" size={24} />
        </div>
        {/* Auth Border */}
        <div className="flex justify-center items-center gap-5 ">
          <Link>
            <button className="text-2xl font-normal px-6 py-3 rounded-[8px] text-white bg-[#00A1FF]">
              Sign In
            </button>
          </Link>
          <Link>
            <button className="text-2xl font-normal px-6 py-3 rounded-[8px] border-1 border-[#00A1FF] text-[#00A1FF] bg-transparent">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
