import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-r from-gray-700 to-gray-300"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-around h-full">
        <div id="content">
          <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#4ea5e7]">
              StableTech
            </h1>
            <h2 className="text-3xl sm:text-6xl font-bold text-[#2986cc]">
              Modern Barn Management
            </h2>
            <p className="text-gray-300 py-4 max-w-[700px]">
              StableTech will help you manage your horseback-riding business. It
              is the only web-based software solution developed specifically for
              scheduling horse care, horse shows, and managing the unique
              aspects of a horseback riding lesson business. Get organized, out
              of the office, and spend more time in the saddle!{" "}
            </p>
            <div>
              <Link to="/login" smooth={'true'} duration={700}>
                <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
                  Get organized!
                  <span className="group-hover: duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
