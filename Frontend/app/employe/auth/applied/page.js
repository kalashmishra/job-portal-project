"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { employe } = useSelector((state) => state.employeReducer);

  return (
    <div className="container mt-5">
 
    <h1 className="category-name"> Created Jobs & Internships by{" "}
   <strong className="name">{employe && employe.firstname}</strong>
  </h1>
    <div className="card-category-1 ">
   {employe && employe.jobs.map((j) => (
      <div className="basic-card basic-card-aqua">

       <div className="card-content" key={j._id}>
         <span className="card-title">{j.title}</span>
                   <h1 className="card-text">Jobtype : {j.jobtype}</h1>
                   <h1 className="card-text">Openings : {j.openings}</h1>
                   <h1 className="card-text">Description : {j.description}</h1>
                   <h1 className="card-text">Skill : {j.skill}</h1>
                   <h1 className="card-text">Preference : {j.preferences}</h1>
                   <h1 className="card-text">Salary : {j.salary}</h1>
                   <h1 className="card-text">Perks : {j.perks}</h1>
                   <h1 className="card-text">created At: {j.createdAt}</h1>

                   
                 
       </div>
       </div>

     ))}
 
 </div>
 <div className="card-category-1">
   {employe && employe.internships.map((i) => (
      <div className="basic-card basic-card-aqua">

       <div className="card-content" key={i._id}>
         <span className="card-title">{i.title}</span>
                   <h1 className="card-text">Internshiptype : {i.internshiptype}</h1>
                   <h1 className="card-text">Openings : {i.openings}</h1>
                   <h1 className="card-text">Duration : {i.duration}</h1>
                   <h1 className="card-text">Skill : {i.skill}</h1>
                   <h1 className="card-text">Responsibility : {i.responsibility}</h1>
                   <h1 className="card-text">Preference : {i.preferences}</h1>
                   <h1 className="card-text">Stipend :{i.stipend.status}</h1>
                   <h1 className="card-text">amount:{i.amount}</h1>
                   <h1 className="card-text">Perks : {i.perks}</h1>
                   <h1 className="card-text">created At: {i.createdAt}</h1>
                   
                   
                 
       </div>
       </div>

     ))}
 
 </div>

</div>

  );
};

export default page;