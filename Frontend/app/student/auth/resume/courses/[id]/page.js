"use client";

import { asynceditcoursesstudent } from "@/store/Actions/studentActions";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = ({params}) => {
const router = useRouter();
  const dispatch = useDispatch();
  
  const { student } = useSelector((state) => state.studentReducer);
//   console.log(student.resume.courses  )
    const int=student.resume.courses[0]

  const [data ,setdata] = useState({Description:" ",location:" ", organization:" ",startyear:" ", endyear:" ", training:" "})
  useEffect(() => {
    const fetchedData = {
        training: int.training,
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
 

  const EditCoursesHandler = (e) => {
    e.preventDefault();
    const courses = {
      Description:data.Description,
      startyear: data.startyear,
      endyear: data.endyear,
      location: data.location,
      organization: data.organization,
      training: data.training,
      
    };

    dispatch(asynceditcoursesstudent(params.id, courses));
    router.push("/student/auth/resume");
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Edit Courses</h2>
    </div>
    <form onSubmit={EditCoursesHandler} >
    <div className="form-input">
            <label  className="label">Training Program</label>
            <input type="text" value={data.training} onChange={handleinputChange} name="training"/>
        </div>
      
        <div className="form-input">
            <label  className="label">Organization</label>
            <input type="text" value={data.organization} onChange={handleinputChange} name="organization"/>
        </div>
   
        <div className="form-input">
            <label  className="label">Location</label>
            <input type="text" value={data.location} onChange={handleinputChange} name="location" />
        </div>
        <div className="form-input">
            <label className="label">Start Year</label>
            <input type="text" value={data.startyear} onChange={handleinputChange} name="startyear" />
        </div>
        <div className="form-input">
            <label className="label">End Year</label>
            <input type="text" value={data.endyear} onChange={handleinputChange} name="endyear"/>
        </div>
        <div className="form-input">
            <label className="label">Work description</label>
            <input type="text" value={Description} onChange={handleinputChange} name="Description" />
        </div>
       
           <div>
            <button  type="submit"> Edit Courses</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;