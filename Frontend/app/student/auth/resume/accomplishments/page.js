"use client";

import { asyncaddaccompstudent } from "@/store/Actions/studentActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [Description, setDescription] = useState("")
  
  

  const AddAccompHandler = () => {
    const accomp = {
      Description: Description,
      
    };

    dispatch(asyncaddaccompstudent(accomp));
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Accomplishment</h2>
    </div>
    <form onSubmit={AddAccompHandler} >
    <div className="form-input">
            <label  className="label mb-4 mt-5">Example: Secured 1st rank among 500 entries in national level <br /> story writing competition organised by internshala</label>
            <textarea  value={Description} placeholder="Work Details" onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
      
           <div>
            <button  type="submit"> Add Accomplishment</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;