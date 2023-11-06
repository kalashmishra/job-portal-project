"use client";
import { asyncaddskillstudent } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
const [skillname, setskillname] = useState('')
const [rating, setrating] = useState('Beginner')

const AddSkillHandler = () => {
    const skill = {
      skillname:skillname,
      rating, rating,
    };

    dispatch(asyncaddskillstudent(skill));
  };


  return (
    <div className="container mt-5">
    <div className="baody">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Skills</h2>
    </div>
    <form onSubmit={AddSkillHandler} >
        <div className="form-input">
            <label  className="label">Skill</label>
            <input type="text" value={skillname} onChange={(e)=>setskillname(e.target.value)} />
        </div>
   
        <div className="form-input">
            <label  className="label">How would you rate your skill in {" "}<strong className="name">{skillname}</strong>?
</label>
            <select
                onChange={(e) => setrating(e.target.value)}
                className="form-control mb-3"
                value={rating}
            >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                
            </select>

        </div>

           <div>
            <button type="submit" >Add Skills </button>
        </div>
    </form>
     </div>
</div>

</div>
  );
};

export default page;