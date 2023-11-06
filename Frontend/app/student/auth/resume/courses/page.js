"use client";

import { asyncaddcoursesstudent } from "@/store/Actions/studentActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [training, settraining] = useState("")
  const [organization, setorganization] = useState("")
  const [location, setlocation] = useState("")
  const [Description, setdescription] = useState("")
  const [startyear, setstartyear] = useState("")
  const [endyear, setendyear] = useState("")
  
  

  const AddCoursesHandler = () => {
    const courses = {
      Description: Description,
      startyear: startyear,
      endyear: endyear,
      location: location,
    
      organization: organization,
      training: training,
      
    };

    dispatch(asyncaddcoursesstudent(courses));
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Courses</h2>
    </div>
    <form onSubmit={AddCoursesHandler} >
    <div className="form-input">
            <label  className="label">Training Program</label>
            <input type="text" value={training} onChange={(e)=>settraining(e.target.value)} />
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
            <button  type="submit"> Add Courses</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;