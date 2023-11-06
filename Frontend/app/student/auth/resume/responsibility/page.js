"use client";

import { asyncaddrespostudent } from "@/store/Actions/studentActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("")
  
  

  const AddRespoHandler = () => {
    const respo = {
      description: description,
      
    };

    dispatch(asyncaddrespostudent(respo));
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Responsibility</h2>
    </div>
    <form onSubmit={AddRespoHandler} >
    <div className="form-input">
            <label  className="label mb-4 mt-5">If you have been/are an active part of societies,<br /> conducted any events or led a team, add details here</label>
            <textarea  value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
      
           <div>
            <button  type="submit"> Add Responsibility</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;