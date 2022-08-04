import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ADD_SCHEDULE } from "../../utils/mutations";

const Addvet = () => {
 let horseName, ownerName, visitDay, visitMonth, visitYear, visitReason;

 const navigate = useNavigate();
 const [addVet] = useMutation(ADD_SCHEDULE);

 console.log(addVet);

 const handleFormSubmit = async (event) => {
    event.preventDefault();

   addVet({
      variables: {
       horseName: horseName.value,
       ownerName: ownerName.value,
       visitDay: visitDay.value,
       visitMonth: visitMonth.value,
       visitYear: visitYear.value,
       visitReason: visitReason.value,
     },
  })
   .then((response) => {
      console.log(response);
        const promptResponse = prompt(
          "Do you want add another appointment, enter yes or any thing to go back to your schedule."
       );
        if (promptResponse !== "yes") {
          navigate("/schedule");
     }
    })
    .catch((error) =>
    alert("Bummer: something happened, try again")
    );
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}></form>
      <div
        className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700"
      >
        <form
          className="p-10 bg-gray rounded-xl drop-shadow-lg space-y-5"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-center text-3xl text-white">New Vet Appointment</h1>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-light">
              Please enter appointment details below:
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
              placeholder="Reason for visit"
              ref={(value) => (visitReason = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Visit Day"
              ref={(value) => (visitDay = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Visit Month"
              ref={(value) => (visitMonth = value)}
            />
          </div>
          <div>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Visit Year"
              ref={(value) => (visitYear = value)}
            />
          </div>
            <button
            className="w-full px-10 py-2 bg-slate-500 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default Addvet;
