"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);

  return (
    // <div><h1>
    //     Applied Jobs & Internships by{" "}
    //     <strong>{student && student.firstname}</strong>
    //   </h1>
    //   <ul className="list-group">
    //     {student &&
    //       student.jobs.map((j) => (
    //         <div className="list-group-item mb-3" key={j._id}>
    //           {JSON.stringify(j)}
    //         </div>
    //       ))}

    //     {student &&
    //       student.internships.map((intern) => (
    //         <div className="list-group-item mb-3" key={intern._id}>
    //           {JSON.stringify(intern)}
    //         </div>
    //       ))}
    //   </ul> </div>
         
      <div className="container mt-5">
 
         <h1 className="category-name"> Applied Jobs & Internships by{" "}
        <strong className="name">{student && student.firstname}</strong>
       </h1>
         <div className="card-category-1 ">
        {student && student.jobs.map((j) => (
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
        {student && student.internships.map((i) => (
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
                        <h1 className="card-text">amount :{i.amount}</h1>
                        <h1 className="card-text">Perks : {i.perks}</h1>
                      
            </div>
            </div>

          ))}
      
      </div>
     
    </div>
  );
};

export default page;