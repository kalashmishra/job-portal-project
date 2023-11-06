"use client";
import {
  asynccurrentstudent,
  asyncsignoutstudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const StudentLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    dispatch(asynccurrentstudent());
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutstudent());
  };

  return (
    <>
    


       <nav className="container mt-1 ">

        <Link  href={isAuthenticated ? "/student/auth" : "/"}><p><span>Job</span>Finder</p></Link>{" "}
        
       
        <br />
        {isAuthenticated ? (
          <>
            <Link className="btn register" href="/student/auth/profile">Profile</Link>
            <br />
            <Link className="btn register" href="/student/auth/resume">Resume</Link>
            <br />
            <Link className="btn register" href="/student/auth/applied">My Applications</Link>
            <br />
            <Link className="btn register" onClick={SignoutHandler} href="">
              Signout
            </Link>
          </>
        ) : (
          <> <li className="big-screens">
            <Link className="btn register" href="/student/signup">Signup</Link> <br />
            <Link className="btn register" href="/student/signin"> Signin</Link>
        </li>
          </>
          
       
        )}
      </nav> 

      {children}
      
    </>
  );
};

export default StudentLayout;