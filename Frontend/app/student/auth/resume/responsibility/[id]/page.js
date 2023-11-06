"use client";

import { asynceditrespostudent } from "@/store/Actions/studentActions";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = ({params}) => {
const router = useRouter();
  const dispatch = useDispatch();
  
  const { student } = useSelector((state) => state.studentReducer);
//   console.log(student.resume.accomp  )
    const int=student.resume.responsibilities[0]

  const [data ,setdata] = useState({Description:" "})
  useEffect(() => {
    const fetchedData = {
        Description: int.Description,
      };
     
    setdata(fetchedData);
}, [])

  const handleinputChange = (e)=>{

  const {name, value} =e.target;
  setdata((data)=>({...data, [name]:value,}))
  }
 

  const EditAccompHandler = (e) => {
    e.preventDefault();
    const respo = {
      Description:data.Description,
      
    };

    dispatch(asynceditrespostudent(params.id, respo));
    router.push("/student/auth/resume");
  };

  return (
    <div className="container mt-5">
    <div className="baody ">
   
<div className="signinform m-0">
    <div className="item-container">
        <h2 className="log-in">Edit Responsibility</h2>
    </div>
    <form onSubmit={EditAccompHandler} >
    <div className="form-input">
            <label  className="label mb-4 mt-5">Example: Secured 1st rank among 500 entries in national level <br /> story writing competition organised by internshala</label>
            <textarea  value={data.Description} placeholder="Work Details" name="Description" onChange={handleinputChange}></textarea>
        </div>
      
           <div>
            <button  type="submit"> Edit Responsibility</button>
        </div>
    </form>
     </div>
</div>
</div>


  );
};

export default page;