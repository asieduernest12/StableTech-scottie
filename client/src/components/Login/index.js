import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SCHEDULE } from "../../utils/queries";
const Login = () => {
  const { data } = useQuery(QUERY_SCHEDULE);
  const schedules = data?.Schedule || [];
  console.log(schedules);

  return (
    <form id="form">
      <div
        className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700"
      >
        <form
          className="p-10 bg-gray rounded-xl drop-shadow-lg space-y-5"
          action=""
        >
          <h1 className="text-center text-3xl text-white">Login</h1>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-light" for="email">
              Email
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-light" for="password">
              Password
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
            />
          </div>

          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label className="text-sm font-light" for="remember">
              Remember me
            </label>
          </div>

          <button
            className="w-full px-10 py-2 bg-slate-500 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Sign In
          </button>

          <p className="text-right">
            <a
              className="text-blue-600 text-sm font-light hover:underline"
              href="mailto:sscotthompson@gmail.com"
            >
              Forget Password?
            </a>
          </p>
        </form>
      </div>
    </form>
  );
};

export default Login;
