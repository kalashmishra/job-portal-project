"use client";
import {
  asyncapplyinternshipstudent,
  asyncapplyjobstudent,
} from "@/store/Actions/studentActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { jobs, internships, student } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobstudent(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };

  useEffect(() => {}, [student]);

  return (
    <div className="container mt-5 ">
       <h1 className="category-name"> Available jobs for <strong className="name">{student && student.firstname}</strong></h1>
       <div className="card-category-1 ">
        {jobs && jobs.map((j) => (
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
                      
              {!j.students.includes(student && student._id) ? (
                
                <button className="apply" onClick={() => ApplyJobHandler(j._id)}>
                  Apply Job
                </button>
                            ) : (
                <h3 className="apply">Already Applied</h3>
              )}
            </div>
            </div>

          ))}
      
      </div>
      

      <h1 className="category-name"> Available internships for <strong className="name">{student && student.firstname}</strong></h1>
       <div className="card-category-1">
        {internships && internships.map((i) => (
           <div className="basic-card basic-card-aqua">

            <div className="card-content" key={i._id}>
              <span className="card-title">{i.title}</span>
                        <h1 className="card-text">Internshiptype : {i.internshiptype}</h1>
                        <h1 className="card-text">Openings : {i.openings}</h1>
                        <h1 className="card-text">Duration : {i.duration}</h1>
                        <h1 className="card-text">Skill : {i.skill}</h1>
                        <h1 className="card-text">Responsibility : {i.responsibility}</h1>
                        <h1 className="card-text">Preference : {i.preferences}</h1>
                        <h1 className="card-text">Stipend :</h1>
                        <h1 className="card-text">Perks : {i.perks}</h1>
                      
              {!i.students.includes(student && student._id) ? (
                  <button className="apply" onClick={() => ApplyInternshipHandler(i._id)}>
                  Apply Internship
                </button>
              
                            ) : (
                <h3 className="apply">Already Applied</h3>
              )}
            </div>
            </div>

          ))}
      
      </div>
      



      {/* <h1>
        Available internships for{" "}
        <strong>{student && student.firstname}</strong>
      </h1>
      <ul className="list-group">
        {internships &&
          internships.map((intern) => (
            <div className="list-group-item mb-3" key={intern._id}>
              {JSON.stringify(intern)} <br />
            
            
            
           
              <br />
              {!intern.students.includes(student && student._id) ? (
                <button onClick={() => ApplyInternshipHandler(intern._id)}>
                  Apply Internship
                </button>
              ) : (
                <h3>Already Applied</h3>
              )}
            </div>
          ))}
      </ul> 
 */}


        {/* <div className="card-category-1 ">
                <h1 className="category-name"> Available jobs for <strong className="name">{student && student.firstname}</strong></h1>
                <div className="basic-card basic-card-aqua">
                    <div className="card-content">
                        <span className="card-title">Card Title</span>
                        <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
    
                    <div className="card-link">
                        <a href="#" title="Read Full"><span>Read Full</span></a>
                    </div>
                </div>
    
                
            </div>
           */}
    </div>
  );
};

export default page;