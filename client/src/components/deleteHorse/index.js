import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_HORSE } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";

///this this copied from add horse, change everything
//need to let _id
const Deletehorse = () => {
  let horseName, ownerName, ownerPhone, feed, vaccineDate, shoeDate, barnName;

  const navigate = useNavigate();
  const [deleteHorse] = useMutation(DELETE_HORSE);

  console.log(deleteHorse);

  //its not a form submit so needs to be a button...?
  const handleOnClick = async (event) => {
    event.preventDefault();

    deleteHorse({
        variables: {
            _id: _id.value,
     },
    })
    //dont think i need the below bc its not techincally routing to another page?
      .then((response) => {
        console.log(response);
        const promptResponse = prompt(
          "Do you want add another horse, enter yes or any thing to go back to horses"
        );
        if (promptResponse !== "yes") {
          navigate("/horses");
        }
      })
      .catch((error) =>
        alert("Bummer: something unholy occured, pray and try again")
      );
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}></form>
      <div
        class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700"
      >
        <form
          className="p-10 bg-gray rounded-xl drop-shadow-lg space-y-5"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-center text-3xl text-white">New Horse</h1>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-light">
              Please enter new horse's infomation below:
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Horse Name"
              ref={(value) => (horseName = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Owner Name"
              ref={(value) => (ownerName = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Owner Telephone"
              ref={(value) => (ownerPhone = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Feed"
              ref={(value) => (feed = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Latest Vaccine Date"
              ref={(value) => (vaccineDate = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Latest Shoe Date"
              ref={(value) => (shoeDate = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Barn Name"
              ref={(value) => (barnName = value)}
            />
          </div>

          <button
            className="w-full px-10 py-2 bg-slate-500 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Add Horse
          </button>
        </form>
      </div>
    </>
  );
};

export default Deletehorse;
