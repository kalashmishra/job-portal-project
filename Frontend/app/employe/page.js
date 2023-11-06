"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  return (
    <div className="container mt-5">
       {/* <Link className="me-4 btn btn-danger" href="/employe/signin">
        Signin
      </Link>
      <Link className="btn btn-success" href="/employe/signup">
        Signup
      </Link>  */}
    </div>
  );
};

export default page;