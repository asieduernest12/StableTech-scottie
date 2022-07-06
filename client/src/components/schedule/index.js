import React from "react";
import clockImage from "../../assets/images/clock.png"

const Schedule =(visitDay, visitMonth, visitYear, visitReason, horseName, ownerName, createdAt )=>{
    return(

   
<div className="cards">
<header
    className="card-header">
        <h3 className="card-header--title">Created At</h3>
</header>

  <img src={clockImage} className=""></img>

<div>
  <h5>Owner </h5>
 <h5> Horse Name: </h5>
 <h5> Reason: </h5>
 <h5>Visit Day: </h5>
 <h5>Created At: </h5>
    
</div>



</div>

 
 )


}

export default Schedule;