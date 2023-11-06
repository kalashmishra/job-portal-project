"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  return (
     <div className="container ">
      
      {/* <Link className="me-4 btn btn-danger" href="/student/signin">
        Signin
      </Link>
      <Link className="btn btn-success" href="/student/signup">
      Signup
      </Link> */}
     </div> 
  );
};

export default page;