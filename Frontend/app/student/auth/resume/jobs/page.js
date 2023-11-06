"use client";

import { asyncaddjobstudent } from "@/store/Actions/studentActions";
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
  
  

  const AddJobHandler = () => {
    const job = {
      Description: Description,
      startyear: startyear,
      endyear: endyear,
      location: location,
    
      organization: organization,
      profile: profile,
      
    };

    dispatch(asyncaddjobstudent(job));
  };

  return (
    // <div className="container mt-5">
    //   <button onClick={AddEduHandler} className="btn btn-primary">
    //     Add Education
    //   </button>
    // </div>
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Jobs</h2>
    </div>
    <form onSubmit={AddJobHandler} >
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
            <button  type="submit"> Add Jobs</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;