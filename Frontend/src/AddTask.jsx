import React, { createContext, useState } from "react";
import {
  FiPlus,
  FiBriefcase,
  FiHome,
  FiCoffee,
  FiLogOut,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function AddTask() {
  const [formData, setFormData] = useState();

    function handleCreate(e) {
      e.preventDefault();
      const data = new FormData(e.target);
      const form = Object.fromEntries(data.entries());
      form.userId=Number(localStorage.getItem("userId"));
      const formData = JSON.stringify(form);
      setFormData(formData);
      console.log(formData);
      fetch("http://localhost:8080/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }).then((res) => {
        if (res.ok) {
          console.log("task created");
          window.location.href = "/dashboard";
        }
      });
    }

  return (
    <>
      <div className="flex flex-col w-full h-full px-60 items-center">
        {/* Add task Heading */}
        <div className="items-start w-[500px] py-5">
          <h1 className="text-3xl font-bold">Add New Task</h1>
          <p className="text-sm text-gray-500 py-1">
            Create a task and stay organized
          </p>
        </div>
        <div className="Add-page">
          <div className=" bg-white w-full shadow-sm border-gray-200 border-1 flex flex-col py-5 px-6 rounded-lg ">
            <div className="justify-center flex">
              {/* <IoMdCheckboxOutline className='text-[hsl(240,60%,55%)]'  size={50}/> */}
            </div>
            <p className="py-2 text-2xl font-semibold">Task Details</p>
            <p className="text-sm text-gray-500">
              Fill in the information below to create a new task
            </p>
            <form
              onSubmit={handleCreate}
              className="py-5 flex flex-col"
              action=""
            >
              <label htmlFor="title">Task Title</label>
              <input
                placeholder="e.g., Complete project report"
                type="text"
                name="title"
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Enter your Password"
                type="textarea"
                maxLength={200}
                rows={4}
                cols={50}
                required
                name="description"
              />
              <div className=" pt-3">
                <label htmlFor="cat">Category</label>
                <div className="flex flex-row  gap-7 ">
                  {/* Option 1 */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="flex items-center gap-1 text-gray-700 text-sm font-medium">
                      <FiBriefcase className="text-blue-400" size={16} />
                      Work
                    </span>
                    <input
                      type="radio"
                      value="work"
                      name="cat"
                      className="accent-blue-500"
                    />
                  </label>
                  <label required className="flex items-center gap-2 cursor-pointer">
                    <span className="flex items-center gap-1 text-gray-700 text-sm font-medium">
                      <FiHome className="text-green-400" size={16} />
                      Home
                    </span>
                    <input
                      type="radio"
                      value="home"
                      name="cat"
                      className="accent-blue-500"
                    />
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="flex items-center gap-1 text-gray-700 text-sm font-medium">
                      <FiCoffee className="text-yellow-400" size={16} />
                      Casuals
                    </span>
                    <input
                      type="radio"
                      value="casuals"
                      name="cat"
                      className="accent-blue-500"
                    />
                  </label>
                </div>
              </div>
              <label htmlFor="date">Date</label>
              <input
              required
                type="datetime-local"
                min={new Date().toISOString().slice(0, 16)}
                name="date"
              />
              <div className="flex w-full pt-5 flex-row gap-5">
                <Link className="w-full" to="..">
                  <button className="w-full bg-gray-100 border border-gray-300 py-2 rounded-xl text-black font-semibold hover:bg-[hsl(240,60%,95%)] hover:text-[hsl(240,60%,60%)]">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-full bg-[hsl(240,60%,55%)] py-2 rounded-xl text-white font-semibold hover:bg-[hsl(240,60%,60%)]"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
