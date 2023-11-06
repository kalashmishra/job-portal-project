"use client";

import { asyncaddedustudent } from "@/store/Actions/studentActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [degree, setdegree] = useState("")
  const [institute, setinstitute] = useState("")
  const [university, setuniversity] = useState("")
  const [status, setstatus] = useState("")
  const [grade, setgrade] = useState("")
  const [startyear, setstartyear] = useState("")
  const [endyear, setendyear] = useState("")
  const [stream, setstream] = useState("")
  

  const AddEduHandler = () => {
    const edu = {
      status: status,
      startyear: startyear,
      endyear: endyear,
      university: university,
      grade: grade,
      institute: institute,
      degree: degree,
      stream :stream
    };

    dispatch(asyncaddedustudent(edu));
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
        <h2 className="log-in">Add Education</h2>
    </div>
    <form onSubmit={AddEduHandler} >
    <div className="form-input">
            <label  className="label">Name of Degree</label>
            <input type="text" value={degree} onChange={(e)=>setdegree(e.target.value)} />
        </div>
        <div className="form-input">
            <label  className="label">stream</label>
            <input type="text" value={stream} onChange={(e)=>setstream(e.target.value)} />
        </div>
   
        <div className="form-input">
            <label  className="label">Name of Institute</label>
            <input type="text" value={institute} onChange={(e)=>setinstitute(e.target.value)} />
        </div>
   
        <div className="form-input">
            <label  className="label">Name of University</label>
            <input type="text" value={university} onChange={(e)=>setuniversity(e.target.value)} />
        </div>
        <div className="form-input">
            <label  className="label">Status</label>
            <input type="text" value={status} onChange={(e)=>setstatus(e.target.value)}/>
        </div>
       
        <div className="form-input">
            <label  className="label">Grade</label>
            <input type="text" value={grade} onChange={(e)=>setgrade(e.target.value)}/>
        </div>
        <div className="form-input">
            <label className="label">Start Year</label>
            <input type="text" value={startyear} onChange={(e)=>setstartyear(e.target.value)} />
        </div>
        <div className="form-input">
            <label className="label">End Year</label>
            <input type="text" value={endyear} onChange={(e)=>setendyear(e.target.value)} />
        </div>
       
           <div>
            <button  type="submit"> Add Education</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;