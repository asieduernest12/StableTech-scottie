import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import horseImage from "../../assets/images/Horse.jpg";
import { DELETE_HORSE } from "../../utils/mutations";
import { QUERY_ALL_HORSES } from "../../utils/queries";

const Horses = () => {
  const [horses, setHorses] = useState([]);
  const navigate = useNavigate();

  const { loading, data } = useQuery(QUERY_ALL_HORSES);
  const [deleteHorseFunction] = useMutation(DELETE_HORSE, {
    refetchQueries: [
      { query: QUERY_ALL_HORSES }, // DocumentNode object parsed with gql
      // 'QUERY_ALL_HORSES' // Query name
    ],
  });

  useEffect(() => {
    setHorses(data?.allHorses ?? horses);
    console.log(horses);
  }, [data]);

  const Deletehorse = (horse_id) => {
    deleteHorseFunction({ variables: { id: horse_id } }).then(() =>
      navigate("/horses")
    );
  };

  return (
    <div
      class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700 p-6"
    >
      <div class="flex flex-col justify-center gap-8 pt-4">
        <div className="flex justify-center pt-6">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">Horses</h1>
        </div>
        <div class="flex flex-row justify-center gap-4">
          <Link to="/addhorse" smooth={true} duration={700}>
            <button className="text-white rounded-lg group border-2 px-6 py-4 flex items-center flex-1 hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
              New horse
              <span className="group-hover: duration-300"></span>
            </button>
          </Link>
        </div>

        <div class="flex flex-wrap justify-center horses-list">
          {horses.map((horse) => (
            <>
              <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                <img src={horseImage} alt="horse-img"></img>

                <h2 class="text-center px-2 pd-5">Name : {horse.horseName}</h2>

                <h5 class="p-3 text-center">Info:</h5>
                <a
                  href="#"
                  className="bg-blue-500 rounded-lg text-white text-decoration-none text-center border border-slate-300 p-2 hover:bg-slate-700 transition-all duration-500"
                >
                  Edit
                </a>
                <button
                  onClick={() => Deletehorse(horse._id)}
                  className="bg-blue-500 rounded-lg text-white text-decoration-none text-center border border-slate-300 p-2 hover:bg-slate-700 transition-all duration-500"
                >
                  Delete
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horses;
