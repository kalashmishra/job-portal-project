"use client";

import { asyncaddprojectstudent } from "@/store/Actions/studentActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState("")
  
  const [link, setlink] = useState("")
  const [Description, setdescription] = useState("")
  const [startyear, setstartyear] = useState("")
  const [endyear, setendyear] = useState("")
  
  

  const AddProjectHandler = () => {
    const project = {
      Description: Description,
      startyear: startyear,
      endyear: endyear,
      link: link,
      title: title,
      
    };

    dispatch(asyncaddprojectstudent(project));
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Add Project</h2>
    </div>
    <form onSubmit={AddProjectHandler} >
    <div className="form-input">
            <label  className="label">Title</label>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
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
        <div className="form-input">
            <label  className="label">If you have multiple project links or an offline <br /> project,  upload and provide link to google drive</label>
            <input type="text" value={link} onChange={(e)=>setlink(e.target.value)} />
        </div>
      
           <div>
            <button  type="submit"> Add Project</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;