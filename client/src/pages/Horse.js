import React from 'react'
import './horses.css'
import Navbar from '../../components/Navbar'


function Horses() {
  return (
    <div className='body'> 
    
    <header className= "header20">
     
    
        <div className= "header19">
      <h1>Stable Tech</h1>
      </div> 
     
     
      <div>
 
      <ul >
        
        <li className="position20" a href="url">Home</li>
        <li className="position22" a href="url">Logout</li>
      </ul>
      </div>
     
  </header>
  <div className="manage4">
    <button id="My" type="my horses">My Horses</button>
    </div>

    <div className='manage5'>
    <button id="Add" type="edit">Add New</button>
    </div>

    <div className='manage6'>
    <button id="Edit" type="edit">Edit</button>
    </div>

    <div className='manage7' >
    <button id="Remove" type="remove">Remove</button>
    </div>
  
  <table id="table1">
    <tbody><tr>
        <th>Ownername</th>
        <th>Ownerphone</th>
        <th>Horse Id</th>
        <th>vaccination date</th>
        <th>Feed</th>
        <th>barnname</th>
        <th> <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" /></th>
      </tr>
      <tr className="row1">
        <th />
        <th />
        <th />
        <th />
        <th />
        <th />
        
        <th> <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" /></th>
      </tr>
      <tr className="row2">
        <th />
        <th />
        <th />
        <th />
        <th />
        <th />
        <th> <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" /></th>
      </tr>
    </tbody></table>
  <button type="manage schedule" id="Schedule4">Manage Schedule</button>
</div>


  )
}

export default Horses