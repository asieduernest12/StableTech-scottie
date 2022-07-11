import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_HORSE} from '../../utils/mutations'


const Addhorse = () => {
let horseName, ownerName, ownerPhone, feed, vaccineDate, shoeDate, barnName

    const [addHorse] = useMutation(ADD_HORSE)


// const handleChange = event => {
//   if (event.target.value.length <= 100) {
//     setHorseName(event.target.value);
//     setOwnerName(event.target.value)
    
//   }
// };

 const handleFormSubmit =   async event => {
  event.preventDefault();
  addHorse( {variables: {horseName: horseName.value, ownerName: ownerName.value, ownerPhone: ownerPhone.value, feed: feed.value, vaccineDate: vaccineDate.value, shoeDate: shoeDate.value, barnName: barnName.value}})
};

  return (
   <form  onSubmit={handleFormSubmit} >
        <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700">
        <form className="p-10 bg-gray rounded-xl drop-shadow-lg space-y-5" onSubmit={handleFormSubmit}>
            <h1 className="text-center text-3xl text-white">New Horse</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light">Please enter new horse's infomation below:</label>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Horse Name"  ref={value => horseName = value} />
            </div>
            <div>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Owner Name" ref={value => ownerName = value}  />
            </div>
            <div>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Owner Telephone" ref={value => ownerPhone = value}   />
            </div>
            <div>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Feed" ref={value => feed = value}   />
            </div>
            <div>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Latest Vaccine Date" ref={value => vaccineDate = value}  />
            </div>
            <div>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Latest Shoe Date" ref={value => shoeDate = value} />
            </div>
            <div>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Barn Name"  ref={value => barnName = value} />
            </div>

            <button className="w-full px-10 py-2 bg-slate-500 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit">
                Add Horse
            </button>

        </form>
    </div>
      </form>
  );
};


export default Addhorse;