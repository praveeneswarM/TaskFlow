import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  console.log(localStorage.getItem("userId"));
  return (
    <>
    <div className="flex gap-10 w-full h-fit bg-gray-50">
      <div className="w-[255px]"><Sidebar/></div>
      <div className="w-fit flex px-10"><Outlet/></div>
    </div>
        
    </>
  );
}

export default Dashboard;
