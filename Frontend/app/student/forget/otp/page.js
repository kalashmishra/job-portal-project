"use client";
import { asyncotppasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.employeReducer);
const [otp , setotp] = useState('')
const [email , setemail] = useState('')
const [password , setPassword] = useState('')
  const sentotpHandler = async () => {

    const newpwd = {
      email: email,
      otp: otp,
      password: password,
    };
    await dispatch(asyncotppasswordstudent(newpwd));
    if (errors.length === 1) {
      router.push("/student/signin");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    // <div className="container mt-5">
    //   <form >
    //     <input type="text" value={otp} onChange={(e) => setotp(e.target.value)}/>
    //     <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
    //     <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
    //   <button onClick={sentotpHandler} className="btn btn-success">
    //     Change Password
    //   </button>
    //   </form>
    // </div>
    <div className="container mt-5">
     <div className="baody">
    
<div className="signinform ">
        <div className="item-container">
            <h2 className="log-in mb-3">Reset Password</h2>
        </div>
        <form onSubmit={sentotpHandler}>
        <div className="form-input">
                <label className="label">Enter OTP</label>
                <input type="text" value={otp} onChange={(e)=>setotp(e.target.value)}/>
            </div>
           
            <div className="form-input">
                <label className="label">Email</label>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="form-input">
                <label  className="label">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </div>
                            <div>
                <button type="submit">Change Password</button>
            </div>
        </form>
         </div>
    </div>

    </div>

  );
};

export default page;