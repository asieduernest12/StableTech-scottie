import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_SCHEDULE } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";

const Deleteschedule = () => {
 let _id;

 const navigate = useNavigate();
 const [deleteSchedule] = useMutation(DELETE_SCHEDULE);

 console.log(deleteSchedule);

 //don't think i need this bc it's not handling a form submit
 //const handleFormSubmit = async (event) => {
   // event.preventDefault();

   //where do i get these variables?
   deleteSchedule({
      variables: {
            _id: _id.value,
     },
  })
   .then((response) => {
      console.log(response);
        const promptResponse = prompt(
          "Do you want to delete another appointment, enter no to go back to your schedule page."
       );
        if (promptResponse !== "no") {
          navigate("/schedule");
     }
    })
    .catch((error) =>
    alert("Bummer: something happened, try again")
    );
  };
  export default Deleteschedule;