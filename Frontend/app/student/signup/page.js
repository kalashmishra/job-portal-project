"use client";
import { asyncsignupstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [password, setPassword] = useState("")
  const [city, setcity] = useState("")
  const [email, setemail] = useState("")
  const [contact, setcontact] = useState("")
  

  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SignupHandler = () => {
  
    const student = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      city: city,
      
      email: email,
      password: password,
    };
    dispatch(asyncsignupstudent(student));
  };

  return (
    <div className="container mt-3">
    <div className="baody">
    <div className="l-img">
    <img src="../image 1.png" alt="" />
    </div>
<div className="signinform m-0">
        <div className="item-container">
            <h2 className="log-in">Sign up</h2>
        </div>
        <form onSubmit={SignupHandler} >
        <div className="form-input">
                <label  className="label">First name</label>
                <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
            </div>
            <div className="form-input">
                <label  className="label">Last name</label>
                <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} />
            </div>
       
            <div className="form-input">
                <label  className="label">City</label>
                <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} />
            </div>
            <div className="form-input">
                <label  className="label">Contact</label>
                <input type="text" value={contact} onChange={(e)=>setcontact(e.target.value)}/>
            </div>
           
            <div className="form-input">
                <label  className="label">Email</label>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="form-input">
                <label  className="label">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
               <div>
                <button  type="submit">Sign up</button>
            </div>
        </form>
         </div>
    </div>

  
    </div>

  );
};

export default page;