"use client";
import { asyncsigninstudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")


  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SigninHandler = () => {
    
    const student = {
      email: email,
      password: password,
    };
    dispatch(asyncsigninstudent(student));
  };

  return (
    <div className="container mt-5">
<div className="baody">
<div className="s-img">
    <img src="../image 1.png" alt="" />
    </div>
<div className="signinform ">
        <div className="item-container">
            <h2 className="log-in">Sign in</h2>
        </div>
        <div className="item-container">
            <p> login using email</p>
        </div>
        <form onSubmit={SigninHandler}>
            <div className="form-input">
                <label className="label">Email</label>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="form-input">
                <label  className="label">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </div>
                <div>
                <Link href="/student/forget">Forget Password ?</Link>
              
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
         </div>
    </div>
    </div>
  );
};

export default page;