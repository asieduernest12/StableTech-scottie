import React from "react";
import barnlogo from "../../assets/images/barnlogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#5b5b5b] opacity-75 text-gray-300">
      <div>
        <img
          className="rounded-full"
          src={barnlogo}
          alt="logo"
          style={{ width: "75px" }}
        />
      </div>

      <ul className="md:flex flex space-x-4 text-white">
        <li className="hover:text-[#3faec1] hover:scale-105">
          <Link to='/horses' className="text-white">Horses</Link>
        </li>
        <li className="hover:text-[#3faec1] hover:scale-105">
          <Link to="/home" smooth={'true'} duration={500} className="text-white">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
