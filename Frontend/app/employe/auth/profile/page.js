"use client";
import {
  asyncavataremploye,


} from "@/store/Actions/employeActions";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducer);

 
  const AvatarHandler = (e) => {
    e.preventDefault();
    console.log();
    const formdata = new FormData(e.target);
    formdata.set("organizationlogo", e.target.organizationlogo.files[0]);
    dispatch(asyncavataremploye(formdata));
  };


  return (
    // <div className="container mt-3">
    //   <img height={100} src={employe && employe.organizationlogo.url} alt="" />
    //   <form onSubmit={AvatarHandler} encType="multipart/form-data">
    //     <input type="file" name="organizationlogo" />
    //     <button>Submit</button>
    //   </form>
    //   <br />
    //   <br />
    //   <button className="btn btn-warning me-5" onClick={employeUpdateHandler}>
    //     Update employe
    //   </button>

    //   <button className="btn btn-danger" onClick={ResetPasswordHandler}>
    //     Reset employe Password
    //   </button>
    // </div>
    <div className="container mt-5 ">
    
    <div className="img-div ">
    <img className="p-img " src={employe && employe.organizationlogo.url} alt="" />
    <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="organizationlogo" />
        <button>Submit</button>
      </form>
        
    </div>

<div className="Show-profile  mt-3 " >

    <h1 className="category-name">  {employe && employe.firstname} {employe && employe.lastname}</h1>
    
    <h1 className="category-name">  {employe && employe.city}</h1>
    <h1 className="category-name">{employe && employe.contact}</h1>
    <h1 className="category-name"> {employe && employe.email}</h1>
    <h1 className="category-name"> </h1>
    <Link
                 className=" btn btn-sm btn-primary edit-pro" 
                 href="/employe/auth/profile/editprofile"
               >
                 Edit Profile
               </Link>
 
  
 
</div>


     </div>

  );
};

export default page;