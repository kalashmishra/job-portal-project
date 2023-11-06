"use client";
import { asynccreatejobemploye } from "@/store/Actions/employeActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState('')
  const [skill, setskill] = useState('')
  const [jobtype, setjobtype] = useState('In office')
  const [openings, setopenings] = useState('')
  const [description, setdescription] = useState('')

  const [preferences, setpreferences] = useState('')

  const [perks, setperks] = useState('')
  const [assesments, setassesments] = useState('')
  const [salary, setsalary] = useState('')

  const CreateJobHandler = () => {
    const job = {
      title: title,
      skill: skill,
      jobtype: jobtype,
      openings: openings,
      description: description,
       preferences: preferences,
      salary: salary,
      perks: perks,
      assesments: assesments,

    };

    dispatch(asynccreatejobemploye(job));

  };
  return (
    <div className="container mt-5">
      <div className="baody">

        <div className="signinform m-0">
          <div className="item-container">
            <h2 className="log-in">Create Internship</h2>
          </div>
          <form onSubmit={CreateJobHandler} >
            <div className="form-input">
              <label className="label">Title</label>
              <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
            </div>
            <div className="form-input">
              <label className="label">Skill</label>
              <input type="text" value={skill} onChange={(e) => setskill(e.target.value)} />
            </div>

            <div className="form-input">
              <label className="label">jobtype</label>
              <select
                onChange={(e) => setjobtype(e.target.value)}
                className="form-control mb-3"
                value={jobtype}
              >
                <option value="In-office">In office</option>
                <option value="Remote">Remote</option>

              </select>

            </div>

            <div className="form-input">
              <label className="label">openings</label>
              <input type="number" value={openings} onChange={(e) => setopenings(e.target.value)} />
            </div>
            <div className="form-input">
              <label className="label">salary</label>
              <input type="number" value={salary} onChange={(e) => setsalary(e.target.value)} />
            </div>

            <div className="form-input">
              <label className="label">description</label>
              <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div className="form-input">
              <label className="label">preferences</label>
              <input type="text" value={preferences} onChange={(e) => setpreferences(e.target.value)} />
            </div>
            <div className="form-input">
              <label className="label">perks</label>
              <input type="text" value={perks} onChange={(e) => setperks(e.target.value)} />
            </div>
            <div className="form-input">
              <label className="label">assesments</label>
              <input type="text" value={assesments} onChange={(e) => setassesments(e.target.value)} />
            </div>

            <div>
              <button  type="submit">
                Create Job
              </button>

            </div>
          </form>
        </div>
      </div>

    </div>

    
  );
};

export default page;