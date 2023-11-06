"use client";
import {
 asyncupdateemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducer);
  
  const [data ,setdata] = useState({firstname:" ",lastname:" ", contact:" ",email:" "})
  useEffect(() => {
    const fetchedData = {
      firstname: employe.firstname,
      lastname: employe.lastname,
      email: employe.email,
      contact: employe.contact,
    };
    setdata(fetchedData);
  }, [employe]);

const handleinputChange = (e)=>{
  e.preventDefault()
const {name, value} =e.target;
setdata((data)=>({...data, [name]:value,}))
}

  const employeUpdateHandler = (e) => {
  e.preventDefault();
    // console.log(data);
 
    const newemploye = {
     firstname:data.firstname,
     lastname:data.lastname,
     contact:data.contact,
     email:data.email
    
    };
    dispatch(asyncupdateemploye(newemploye));
    router.push("/employe/auth/profile");
  };
 
 
  return (
      <div className="container  m-0 ">
        
      <div className="baody">

       <div className="signinform ">
        <div className="item-container">
            <h2 className="log-in">Edit Profile</h2>
        </div>
        <form >
        <div className="form-input">
                <label  className="label">First name</label>
                <input type="text" value={data.firstname} name="firstname" onChange={handleinputChange} />
            </div>
            <div className="form-input">
                <label  className="label">Last name</label>
                <input type="text" value={data.lastname} name="lastname" onChange={handleinputChange} />
            </div>
       
            
            <div className="form-input">
                <label  className="label">Contact</label>
                <input type="text" value={data.contact} name="contact" onChange={handleinputChange} />
            </div>
           
            <div className="form-input">
                <label  className="label">Email</label>
                <input type="text" value={data.email} name="email" onChange={handleinputChange} />
            </div>
            <div> <Link href="/employe/auth/resetpassword">Reset Password </Link></div>
               <div>
               <button className="btn btn-warning me-5" onClick={employeUpdateHandler}>
        Update employe
      </button>
   
            </div>
        </form>
         </div>

  
</div>
     
     
</div>  
  
     
  );
};

export default page;