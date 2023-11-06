"use client";

import { asynceditskillstudent } from "@/store/Actions/studentActions";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = ({params}) => {
const router = useRouter();
  const dispatch = useDispatch();
  
  const { student } = useSelector((state) => state.studentReducer);
//   console.log(student.resume.skill  )
    const int=student.resume.skills[0]

  const [data ,setdata] = useState({skillname:" ",rating:" "})
  useEffect(() => {
    const fetchedData = {
        skillname: int.skillname,
        rating : int.rating,
      };
     
    setdata(fetchedData);
}, [])

  const handleinputChange = (e)=>{

  const {name, value} =e.target;
  setdata((data)=>({...data, [name]:value,}))
  }
 

  const AddSkillHandler = (e) => {
    e.preventDefault();
    const skill = {
      rating: data.rating,
      skillname: data.skillname,
      
    };

    dispatch(asynceditskillstudent(params.id, skill));
    router.push("/student/auth/resume");
  };

  return (
    <div className="container mt-5">
    <div className="baody">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Edit Skills</h2>
    </div>
    <form onSubmit={AddSkillHandler} >
        <div className="form-input">
            <label  className="label">Skill</label>
            <input type="text" value={data.skillname} onChange={handleinputChange} name="skillname" />
        </div>
   
        <div className="form-input">
            <label  className="label">How would you rate your skill in {" "}<strong className="name">{data.skillname}</strong>?
</label>
            <select
                onChange={handleinputChange}
                className="form-control mb-3"
                value={data.rating}
                name="rating"
            >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                
            </select>

        </div>

           <div>
            <button type="submit" >Edit Skills </button>
        </div>
    </form>
     </div>
</div>

</div>
  

  );
};

export default page;