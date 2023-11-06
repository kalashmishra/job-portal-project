"use client";

import { asynceditjobstudent } from "@/store/Actions/studentActions";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = ({params}) => {
const router = useRouter();
  const dispatch = useDispatch();
  
  const { student } = useSelector((state) => state.studentReducer);
//   console.log(student.resume.internship  )
    const int=student.resume.jobs[0]

  const [data ,setdata] = useState({Description:" ",location:" ", organization:" ",startyear:" ", endyear:" ", profile:" "})
  useEffect(() => {
    const fetchedData = {
        profile: int.profile,
        organization : int.organization,
        location: int.location,
        startyear: int.startyear,
        endyear: int.endyear,
        Description: int.Description,
      };
     
    setdata(fetchedData);
}, [])

  const handleinputChange = (e)=>{

  const {name, value} =e.target;
  setdata((data)=>({...data, [name]:value,}))
  }
 

  const EditInternshipHandler = (e) => {
    e.preventDefault();
    const job = {
      Description:data.Description,
      startyear: data.startyear,
      endyear: data.endyear,
      location: data.location,
      organization: data.organization,
      profile: data.profile,
      
    };

    dispatch(asynceditjobstudent(params.id, job));
    router.push("/student/auth/resume");
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Edit Job</h2>
    </div>
    <form onSubmit={EditInternshipHandler} >
    <div className="form-input">
            <label  className="label">Profile</label>
            <input type="text" value={data.profile} name="profile" onChange={handleinputChange} />
        </div>
      
        <div className="form-input">
            <label  className="label">Organization</label>
            <input type="text" value={data.organization} name="organization" onChange={handleinputChange} />
        </div>
   
        <div className="form-input">
            <label  className="label">Location</label>
            <input type="text" value={data.location} name="location" onChange={handleinputChange} />
        </div>
        <div className="form-input">
            <label className="label">Start Year</label>
            <input type="text" value={data.startyear} name="startyear" onChange={handleinputChange} />
        </div>
        <div className="form-input">
            <label className="label">End Year</label>
            <input type="text" value={data.endyear} name="endyear" onChange={handleinputChange} />
        </div>
        <div className="form-input">
            <label className="label">Work description</label>
            <input type="text" value={data.Description} name="Description" onChange={handleinputChange} />
        </div>
       
           <div>
            <button  type="submit"> Edit Job</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;