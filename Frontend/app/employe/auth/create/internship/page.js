"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
const [title, settitle] = useState('')
const [skill, setskill] = useState('')
const [internshiptype, setinternshiptype] = useState('In office')
const [openings, setopenings] = useState('')
const [duration, setduration] = useState('')
const [responsibility, setresponsibility] = useState('')
const [preferences, setpreferences] = useState('')
const [stipend, setstipend] = useState('')
const [perks, setperks] = useState('')
const [assesments, setassesments] = useState('')
const [amount, setamount] = useState('')
  const CreateInternshipHandler = () => {
    const internship = {
      title: title,
      skill: skill,
      internshiptype: internshiptype,
      openings: openings,
      duration: duration,
      responsibility: responsibility,
      preferences: preferences,
      stipend: {
        status: stipend,
         },
         amount: amount,
      perks: perks,
      assesments: assesments,
    };

    dispatch(asynccreateinternshipemploye(internship));
  };
  return (
    // <div className="container mt-5">
    //   <button onClick={CreateInternshipHandler} className="btn btn-danger">
    //     Create Internship
    //   </button>
    // </div>
    <div className="container mt-5">
    <div className="baody">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Create Internship</h2>
    </div>
    <form onSubmit={CreateInternshipHandler} >
    <div className="form-input">
            <label  className="label">Title</label>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
        </div>
        <div className="form-input">
            <label  className="label">Skill</label>
            <input type="text" value={skill} onChange={(e)=>setskill(e.target.value)} />
        </div>
   
        <div className="form-input">
            <label  className="label">internshiptype</label>
            <select
                onChange={(e) => setinternshiptype(e.target.value)}
                className="form-control mb-3"
                value={internshiptype}
            >
                <option value="In-office">In office</option>
                <option value="Remote">Remote</option>
                
            </select>

        </div>

        <div className="form-input">
            <label  className="label">openings</label>
            <input type="number" value={openings} onChange={(e)=>setopenings(e.target.value)}/>
        </div>
        <div className="form-input">
            <label className="label">stipend</label>
            <select
                onChange={(e) => setstipend(e.target.value)}
                className="form-control mb-3"
                value={stipend}
            >
                <option value="Fixed">Fixed</option>
                <option value="Negotiable">Negotiable</option>
                <option value="Performance based">Performance based</option>
                <option value="Unpaid">Unpaid</option>
            </select>

          
        </div>
        <div className="form-input">
            <label  className="label">amount</label>
            <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)}/>
        </div>
       
        <div className="form-input">
            <label  className="label">duration</label>
            <input type="text" value={duration} onChange={(e)=>setduration(e.target.value)}/>
        </div>
        <div className="form-input">
            <label className="label">responsibility</label>
            <input type="text" value={responsibility} onChange={(e)=>setresponsibility(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">preferences</label>
            <input type="text" value={preferences} onChange={(e)=>setpreferences(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">perks</label>
            <input type="text" value={perks} onChange={(e)=>setperks(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">assesments</label>
            <input type="text" value={assesments} onChange={(e)=>setassesments(e.target.value)} />
        </div>
       
           <div>
            <button type="submit" >Create Internship</button>
        </div>
    </form>
     </div>
</div>

</div>
  );
};

export default page;