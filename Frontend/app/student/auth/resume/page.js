"use client";
import { asyncdeleteedustudent, asyncdeletejobstudent, asyncdeleteinternshipstudent, asyncdeleterespostudent, asyncdeletecoursesstudent, asyncdeleteprojectstudent,asyncdeleteskillstudent, asyncdeleteaccompstudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteedustudent(id));
    dispatch(asyncdeletejobstudent(id));
    dispatch(asyncdeleteinternshipstudent(id));
    dispatch(asyncdeleterespostudent(id));
    dispatch(asyncdeletecoursesstudent(id));
    dispatch(asyncdeleteprojectstudent(id));
    dispatch(asyncdeleteskillstudent(id));
    dispatch(asyncdeleteaccompstudent(id));
  };

  return (
    <div className="container mt-3 ">
    <div className="resume ">
    <h1 >Resume</h1>
      
    </div>
       
            <div  className="cards w-1/2 ml-10">
            
       <div className="card   " >
       <h2 className="card-title text-xl p-3 text-teal-500">Education </h2>

  
                   {student &&
          student.resume.education.map((e) => (
            
            <div className="card-body  text-lg " key={e.id}>
             
            <h1 className="card-title mb-2"> {e.degree},{e.stream} ({e.startyear}-{e.endyear}) </h1>
            <h2 className="card-title mb-2 text-gray-500"> {e.institute} , {e.grade} </h2>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/education/${e.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(e.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
          <h2 className="text-xl p-3 text-sky-500">
        Education <Link href="/student/auth/resume/education" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
          </div>
          </div>
          <div  className="cards w-1/2 mt-3 ml-10">
         
       <div className="card   " >
         <h2 className="card-title text-xl p-3 text-teal-500">Jobs </h2>
         {student &&
          student.resume.jobs.map((j) => (
            <div className="card-body  text-lg " key={j.id}>
            <h1 className="card-title mb-2 "> {j.profile} </h1>
            <h1 className="card-title mb-2 text-gray-500"> {j.organization} </h1>
            <h1 className="card-title mb-2 text-gray-500"> ({j.startyear}-{j.endyear}) </h1>
            <h2 className="card-title mb-2 text-gray-500"> {j.Description} </h2>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/jobs/${j.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(j.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
             <h2 className="text-xl text-sky-500 p-3">
        Jobs <Link href="/student/auth/resume/jobs" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
          </div>
          </div>
          
          <div  className="cards w-1/2 mt-3 ml-10">
         
       <div className="card   " >
         <h2 className="card-title text-xl p-3 text-teal-500">Internships </h2>
         {student &&
          student.resume.internships.map((e) => (
            <div className="card-body  text-lg " key={e.id}>
            <h1 className="card-title mb-2 "> {e.profile} </h1>
            <h1 className="card-title mb-2 text-gray-500"> {e.organization} </h1>
            <h1 className="card-title mb-2 text-gray-500"> ({e.startyear}-{e.endyear}) </h1>
            <h2 className="card-title mb-2 text-gray-500"> {e.Description} </h2>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/internship/${e.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(e.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
             <h2 className="text-xl text-sky-500 p-3">
        Internship <Link href="/student/auth/resume/internship" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
          </div>
          </div>
          <div  className="cards w-1/2 mt-3 ml-10">
        
       <div className="card   " >
         <h2 className="card-title text-xl p-3 text-teal-500">Responsibility </h2>
         {student &&
          student.resume.responsibilities.map((r) => (
            <div className="card-body  text-lg " key={r.id}>
            <h2 className="card-title mb-2 text-gray-500"> {r.description} </h2>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/responsibility/${r.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(r.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
              <h2 className="text-xl text-sky-500 p-3">
        Responsibility <Link href="/student/auth/resume/responsibility" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
          </div>
          </div>
          <div  className="cards w-1/2 mt-3 ml-10">
          <div className="card   " >
         <h2 className="card-title text-xl p-3 text-teal-500">Training/Coureses </h2>
         {student &&
          student.resume.courses.map((e) => (
            <div className="card-body  text-lg " key={e.id}>
            <h1 className="card-title mb-2 "> {e.training} </h1>
            <h1 className="card-title mb-2 text-gray-500 "> {e.organization} </h1>
            <h1 className="card-title mb-2 text-gray-500"> ({e.startyear}-{e.endyear}) </h1>
            <h2 className="card-title mb-2 text-gray-500"> {e.Description} </h2>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/courses/${e.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(e.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
            <h2 className="text-xl text-sky-500 p-3">
        Training/Courses <Link href="/student/auth/resume/courses" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
       
          </div>
          </div>
          <div  className="cards w-1/2 mt-3 ml-10">
            <div className="card   " >
        
  
         <h2 className="card-title text-xl p-3 text-teal-500">Projects </h2>
                   {student &&
          student.resume.projects.map((e) => (
            <div className="card-body  text-lg " key={e.id}>
            <h1 className="card-title mb-2 "> {e.title} </h1>
            <h1 className="card-title mb-2 text-gray-500"> ({e.startyear}-{e.endyear}) </h1>
             <h1 className="card-title mb-2 text-gray-500"> {e.link} </h1>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/project/${e.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(e.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
           <h2 className="text-xl text-sky-500 p-3">
        Project <Link href="/student/auth/resume/project" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
      
          </div>
          </div>
       
          <div  className="cards w-1/2 mt-3 ml-10">
         <div className="card   " >
        
  
         <h2 className="card-title text-xl p-3 text-teal-500">Skills </h2>
                   {student &&
          student.resume.skills.map((e) => (
            <div className="card-body  text-lg " key={e.id}>
            <h1 className="card-title mb-2 "> {e.skillname} </h1>
           <h1 className="card-title mb-2 text-gray-500"> {e.rating} </h1>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/skill/${e.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(e.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
              <h2 className="text-xl text-sky-500 p-3">
            skills <Link href="/student/auth/resume/skill" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
      
          </div>
          </div>
          <div  className="cards w-1/2 mt-3 ml-10">
         <div className="card   " >
         <h2 className="card-title text-xl p-3 text-teal-500">Accomplishments </h2>
         {student &&
          student.resume.accomplishments.map((e) => (
            <div className="card-body  text-lg " key={e.id}>
            <h2 className="card-title mb-2 text-gray-500"> {e.Description} </h2>
                <Link
                    className="mx-4 btn btn-sm btn-primary" 
                    href={`/student/auth/resume/accomplishments/${e.id}`}
                  >
                    Edit
                  </Link>
    
                  <button
                    onClick={() => DeleteHandler(e.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
      
          ))}
              <h2 className="text-xl text-sky-500 p-3">
        Accomplishments <Link href="/student/auth/resume/accomplishments" className="text-xl text-sky-500">+</Link>{" "}
       </h2 >
      
          </div>
          </div>
         
</div>

  );
  }

  


export default page;