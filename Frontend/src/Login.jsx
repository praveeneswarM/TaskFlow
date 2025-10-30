import React, { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError(true);
        }
      }).then((data) => {
        localStorage.setItem("token", "true");
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("userEmail", data.userEmail);
        // console.log(data.userId);
        window.location.href = "/dashboard";
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
          <p className="py-2 text-2xl font-semibold">Welcome Back</p>
          <p className="text-sm text-gray-500">Login to manage your tasks</p>
          {error && <h1 className="p-2 bg-red-50 text-red-500 text-center my-2">Invalid Credentials</h1>}
          <form className="py-5" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              name="password"
            />
            <button
              type="submit"
              className="w-full bg-[hsl(240,60%,55%)] py-2 mt-7 rounded-xl text-white font-semibold hover:bg-[hsl(240,60%,60%)]"
            >
              Login
            </button>
          </form>
          <p className="py-3 text-sm text-gray-500">
            Don't have an account?{" "}
            <span className="text-[hsl(240,60%,55%)] cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
