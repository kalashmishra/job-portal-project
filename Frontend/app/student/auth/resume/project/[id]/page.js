"use client";

import { asynceditprojectstudent } from "@/store/Actions/studentActions";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = ({params}) => {
const router = useRouter();
  const dispatch = useDispatch();
  
  const { student } = useSelector((state) => state.studentReducer);
//   console.log(student.resume.internship  )
    const int=student.resume.projects[0]

  const [data ,setdata] = useState({Description:" ",link:" ",startyear:" ", endyear:" ", title:" "})
  useEffect(() => {
    const fetchedData = {
        title: int.title,
        link : int.link,
        
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
 

  const EditProjectHandler = (e) => {
    e.preventDefault();
    const internship = {
      Description:data.Description,
      startyear: data.startyear,
      endyear: data.endyear,
    
      link: data.link,
      title: data.title,
      
    };

    dispatch(asynceditprojectstudent(params.id, internship));
    router.push("/student/auth/resume");
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Edit Project</h2>
    </div>
    <form onSubmit={EditProjectHandler} >
    <div className="form-input">
            <label  className="label">Title</label>
            <input type="text" value={data.title} onChange={handleinputChange} name="title" />
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
            <input type="text" value={data.Description} onChange={handleinputChange} name="Description"/>
        </div>
        <div className="form-input">
            <label  className="label">If you have multiple project links or an offline <br /> project,  upload and provide link to google drive</label>
            <input type="text" value={data.link} onChange={handleinputChange} name="link" />
        </div>
      
           <div>
            <button  type="submit"> Edit Project</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;