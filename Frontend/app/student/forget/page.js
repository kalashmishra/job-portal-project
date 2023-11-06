"use client";
import { asyncforgetpasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.studentReducer);
   const [email, setemail] = useState("");
  const sendemailHandler = async (e) => {
    e.preventDefault();

    const mail = {
      email: email,
    };
   dispatch(asyncforgetpasswordstudent(mail));

      router.push("/student/forget/otp");
  
     
  };

  return (
    // <div className="container mt-5">
    //   <button onClick={sendemailHandler} className="btn btn-danger">
    //     Send Mail
    //   </button>
    //    </div>
    <div className="container mt-5">
    <div className="baody">
    
      
    <div className="signinform ">
            <div className="item-container mb-3">
                <h2 className="log-in">Forgot Password?</h2>
            </div>
            <div className="item-container mb-3">
                <p> You can reset your password here.</p>
            </div>
            <form onSubmit={sendemailHandler}>
                <div className="form-input">
                    <label className="label">Email</label>
                    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Send mail</button>
                </div>
            </form>
             </div>
        </div>
        </div>
      
  );
};

export default page;