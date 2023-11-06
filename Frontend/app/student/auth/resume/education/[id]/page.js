"use client";

import { asynceditedustudent } from "@/store/Actions/studentActions";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = ({params}) => {
const router = useRouter();
  const dispatch = useDispatch();
  
  const { student } = useSelector((state) => state.studentReducer);
//   console.log(student.resume.internship  )
    const int=student.resume.education[0]

  const [data ,setdata] = useState({degree:" ",status:" ", university:" ",startyear:" ", endyear:" ", institute:" ",grade:" ", stream:""})
  useEffect(() => {
    const fetchedData = {
        degree: int.degree,
        institute : int.institute,
        grade: int.grade,
        startyear: int.startyear,
        endyear: int.endyear,
        university: int.university,
        stream:int.stream,
        status:int.status
      };
     
    setdata(fetchedData);
}, [])

  const handleinputChange = (e)=>{

  const {name, value} =e.target;
  setdata((data)=>({...data, [name]:value,}))
  }
 

  const EditEduHandler = (e) => {
    e.preventDefault();
    const edu = {
      university:data.university,
      startyear: data.startyear,
      endyear: data.endyear,
      grade: data.grade,
      institute: data.organization,
      degree: data.degree,
      stream: data.stream,
      status:data.status
    };

    dispatch(asynceditedustudent(params.id, edu));
    router.push("/student/auth/resume");
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Edit Education</h2>
    </div>
    <form onSubmit={EditEduHandler} >
    <div className="form-input">
            <label  className="label">Name of Degree</label>
            <input type="text" value={data.degree} onChange={handleinputChange} name="degree" />
        </div>
        <div className="form-input">
            <label  className="label">stream</label>
            <input type="text" value={data.stream} onChange={handleinputChange} name="stream" />
        </div>
   
        <div className="form-input">
            <label  className="label">Name of Institute</label>
            <input type="text" value={data.institute} onChange={handleinputChange} name="institute" />
        </div>
   
        <div className="form-input">
            <label  className="label">Name of University</label>
            <input type="text" value={data.university} onChange={handleinputChange} name="university" />
        </div>
        <div className="form-input">
            <label  className="label">Status</label>
            <input type="text" value={data.status} onChange={handleinputChange} name="status"/>
        </div>
       
        <div className="form-input">
            <label  className="label">Grade</label>
            <input type="text" value={data.grade} onChange={handleinputChange} name="grade"/>
        </div>
        <div className="form-input">
            <label className="label">Start Year</label>
            <input type="text" value={data.startyear} onChange={handleinputChange} name="startyear" />
        </div>
        <div className="form-input">
            <label className="label">End Year</label>
            <input type="text" value={data.endyear} onChange={handleinputChange} name="endyear" />
        </div>
       
           <div>
            <button  type="submit"> Edit Education</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;