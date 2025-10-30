import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FiFilter,FiCalendar  } from "react-icons/fi";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <>
    <Nav/>
      <div className="home felx flex-col">
        <div className="home-context">
          <h1 className="hometext">
            Stay Organized and Manage Your Day Efficiently
          </h1>
          <p className="homepara">
            The smart task manager that helps you organize work, home, and
            personal tasks all in one place.
          </p>
          <ul className="flex gap-5 justify-center items-center py-5">
           <Link to="/signup"><li className="signup-home">Get Started Free</li></Link>
           <Link to='/login'><li className="login-home">Login</li></Link> 
          </ul>
        
        </div>
          <div className="w-full justify-center gap-20 flex flex-row py-34 "> 
            <div className="w-[280px] text-center flex flex-col justify-center items-center ">
              <ul className="flex flex-col items-center justify-center">
                <li className="bg-[hsl(240,60%,95%)] shadow text-[hsl(240,60%,60%)] w-fit p-4 rounded-xl text-center">
                  <IoMdCheckboxOutline size={32} />
                </li>
                <li className="text-lg font-semibold py-2">
                  Simple Task Management
                </li>
                <li className="text-gray-500">
                  Create, organize, and track your tasks with an intuitive
                  interface
                </li>
              </ul>
            </div>
            <div className="w-[280px] text-center flex flex-col justify-center items-center ">
              <ul className="flex flex-col items-center justify-center">
                <li className="bg-blue-50 shadow text-blue-500 font-bold w-fit p-4 rounded-xl text-center">
                  <FiFilter size={32} />
                </li>
                <li className="text-lg font-semibold py-2">
                  Smart Categories
                </li>
                <li className="text-gray-500">
                  Organize tasks into Work, Home, and Casuals for better focus
                </li>
              </ul>
            </div>
            <div className="w-[250px] text-center flex flex-col justify-center items-center ">
              <ul className="flex flex-col items-center justify-center">
                <li className="bg-green-50 shadow text-green-500 w-fit p-4 rounded-xl text-center ">
                  <FiCalendar  size={32} />
                </li>
                <li className="text-lg font-semibold py-2">
                  Due Date Tracking
                </li>
                <li className="text-gray-500">
                  Never miss a deadline with built-in due date reminders
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-fit bg-gray-100 ">
            <div className="flex flex-col justify-center items-center py-20">
                <h1 className="text-3xl font-bold">Ready to Get Organized?</h1>
                <p className="py-4 text-gray-600">Join thousands of users who are managing their tasks more effectively</p>
                <span className="py-5">
                <Link to='/signup'><p className="signup-home">Start Managing Task Now </p></Link>
                </span>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
