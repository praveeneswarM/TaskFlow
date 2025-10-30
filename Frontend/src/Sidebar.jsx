import React, { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import {
  FiPlus,
  FiBriefcase,
  FiHome,
  FiCoffee,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  function handleLogOut() {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        localStorage.clear();
        window.location.href = "/";
      })
      .catch((err) => console.error("Logout failed:", err));
  }
  return (
    <>
      <div className="fixed side-bar bg-white ">
        {/* Logo div */}
        <div className="px-5 py-6 border-b-1 border-gray-300">
          <h1 className="logo">
            <span className="font-normal text-[hsl(240,60%,55%)] ">
              <IoMdCheckboxOutline size={28} />
            </span>
            TaskFlow
          </h1>
        </div>
        {/* Dashbord div */}
        <div className="dash">
          <NavLink to="/dashboard" end>
            <h1>
              <span>
                <MdOutlineDashboard size={16} />
              </span>
              Dashboard
            </h1>
          </NavLink>
          <NavLink to="/dashboard/addtask">
            <h1>
              <span>
                <FiPlus size={16} />
              </span>
              Add Task
            </h1>
          </NavLink>
        </div>
        {/* Catogory div */}
        <div className="cat px-5 ">
          <h1 className="px-2 text-sm text-gray-500">Categories</h1>
          <div className="dash-cat">
            <NavLink to="cat/work">
              <h1>
                <span>
                  <FiBriefcase className="text-blue-400" size={16} />
                </span>
                Work
              </h1>
            </NavLink>
            <NavLink to="cat/home">
              <h1>
                <span>
                  <FiHome className="text-green-400" size={16} />
                </span>
                Home
              </h1>
            </NavLink>
            <NavLink to="cat/casuals">
              <h1>
                <span>
                  <FiCoffee className="text-yellow-400" size={16} />
                </span>
                Casuals
              </h1>
            </NavLink>
          </div>
        </div>

        {/* Profile and logout */}
        <div className="prof">
          <h1 className="font-semibold px-3">{localStorage.getItem("userName")}</h1>
          <h1 className="text-gray-500 px-3">{localStorage.getItem("userEmail")}</h1>
          <button onClick={handleLogOut}>
            <h1 className="logout">
              <span>
                <FiLogOut size={16} />
              </span>
              Logout
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
