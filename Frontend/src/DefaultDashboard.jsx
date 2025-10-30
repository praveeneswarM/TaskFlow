import React, { useEffect, useState } from "react";
import Task from "./Task";

function DefaultDashboard() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("");
  const userId = localStorage.getItem("userId");
  const [counts, setCounts] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    fetch(`http://localhost:8080/tasks/${userId}?cat=${active}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err.message));
  }, [active]);

  useEffect(() => {
    fetch(`http://localhost:8080/tasks/status/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setCounts(data);
      })
      .catch((err) => console.log(err.message));
  }, [data]);

  const handleTabOnClick = (tab) => {
    setActive(tab)
  }

  return (
    <>
      <div className="min-w-[1200] min-h-screen px-5 py-10">
        {/* heading */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="py-2 text-[16px] text-gray-500">
            Manage and organize all your tasks
          </p>
        </div>
        {/* counts */}
        <div className="flex flex-row gap-5 py-6">
          <div className="w-[350px] rounded-xl border-gray-300 border px-5 py-4  bg-white">
            <h1 className="text-[16px] text-gray-500">Total Task</h1>
            <p className="text-3xl py-2 font-bold">{counts.total}</p>
          </div>
          <div className="w-[350px] rounded-xl border-gray-300 border px-5 py-4 bg-white">
            <h1 className="text-[16px] text-gray-500">Completed</h1>
            <p className="text-3xl py-2 text-green-500 font-bold">{counts.completed}</p>
          </div>
          <div className="w-[350px] rounded-xl border-gray-300 border px-5 py-4 bg-white">
            <h1 className="text-[16px] text-gray-500">Pending</h1>
            <p className="text-3xl py-2 text-[hsl(240,60%,60%)] font-bold">
              {counts.pending}
            </p>
          </div>
        </div>
        {/* task cat */}
        <div className="w-fit bg-gray-100 rounded-xl">
          <ul className="flex flex-row gap-2 h-10 items-center px-1  text-sm font-semibold text-gray-500 list-cat">
            <li
              onClick={() => handleTabOnClick("")}
              className={`${
                active === ""
                  ? "rounded-xl transition-transform ease-in-out duration-100 p-2 text-sm bg-white text-black"
                  : ""
              }`}
            >
              All
            </li>
            <li
              onClick={() => handleTabOnClick("work")}
              className={`${
                active === "work"
                  ? "rounded-xl transition-transform ease-in-out duration-100 p-2 text-sm bg-white text-black"
                  : ""
              }`}
            >
              Work
            </li>
            <li
              onClick={() => handleTabOnClick("home")}
              className={`${
                active === "home"
                  ? "rounded-xl transition-transform ease-in-out duration-100 p-2 text-sm bg-white text-black"
                  : ""
              }`}
            >
              Home
            </li>
            <li
              onClick={() => handleTabOnClick("casuals")}
              className={`${
                active === "casuals"
                  ? "rounded-xl transition-transform ease-in-out duration-100 p-2 text-sm bg-white text-black"
                  : ""
              }`}
            >
              Casuals
            </li>
          </ul>
        </div>

        {/* Task List */}
        <div className="grid grid-cols-3 py-5 justify-start gap-5">
          {data.map((dta, index) => (
            <Task
              key={dta.id}
              id={dta.id}
              title={dta.title}
              cat={dta.cat}
              desc={dta.description}
              date={dta.date}
              completed={dta.completed}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DefaultDashboard;
