import React, { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {console.log(data)
        window.location.href="/login"
      });
  }

  return (
    <>
      <div className="login-page">
        <div className=" bg-white w-[450px] shadow-sm border-gray-200 border-1 flex flex-col text-center py-5 px-6 rounded-lg ">
          <div className="justify-center flex">
            <IoMdCheckboxOutline
              className="text-[hsl(240,60%,55%)]"
              size={50}
            />
          </div>
          <p className="py-2 text-2xl font-semibold">Create Your Account</p>
          <p className="text-sm text-gray-500">
            Start managing your tasks today
          </p>
          <form className="py-5" onSubmit={handleSubmit}>
            <label htmlFor="email">Name</label>
            <input
              placeholder="John Doe"
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="you@example.com"
              type="email"
              name="email"
              onChange={e=>setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Enter your Password"
              type="password"
              name="password"
              onChange={e=>setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full mt-7 bg-[hsl(240,60%,55%)] py-2 rounded-xl text-white font-semibold hover:bg-[hsl(240,60%,60%)]"
            >
              Sign Up
            </button>
          </form>
          <p className="py-3 text-sm text-gray-500">
            Already have an account?{" "}
            <span className="text-[hsl(240,60%,55%)] cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
