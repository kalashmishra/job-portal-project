"use client";

import { asyncaddinternshipstudent } from "@/store/Actions/studentActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [profile, setprofile] = useState("")
  const [organization, setorganization] = useState("")
  const [location, setlocation] = useState("")
  const [Description, setdescription] = useState("")
  const [startyear, setstartyear] = useState("")
  const [endyear, setendyear] = useState("")
  
  

  const AddInternshipHandler = () => {
    const internship = {
      Description: Description,
      startyear: startyear,
      endyear: endyear,
      location: location,
    
      organization: organization,
      profile: profile,
      
    };

    dispatch(asyncaddinternshipstudent(internship));
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Internship</h2>
    </div>
    <form onSubmit={AddInternshipHandler} >
    <div className="form-input">
            <label  className="label">Profile</label>
            <input type="text" value={profile} onChange={(e)=>setprofile(e.target.value)} />
        </div>
      
        <div className="form-input">
            <label  className="label">Organization</label>
            <input type="text" value={organization} onChange={(e)=>setorganization(e.target.value)} />
        </div>
   
        <div className="form-input">
            <label  className="label">Location</label>
            <input type="text" value={location} onChange={(e)=>setlocation(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">Start Year</label>
            <input type="text" value={startyear} onChange={(e)=>setstartyear(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">End Year</label>
            <input type="text" value={endyear} onChange={(e)=>setendyear(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">Work description</label>
            <input type="text" value={Description} onChange={(e)=>setdescription(e.target.value)} />
        </div>
       
           <div>
            <button  type="submit"> Add Internship</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;