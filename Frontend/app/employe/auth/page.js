"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { employe } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();

  useEffect(() => {}, [employe]);

  return (
    <div className="container mt-5 ">
      <h1 >Welcome to login </h1>
      <Link  href="/employe/auth/create/job">Create Job</Link>
      <br /> <br />
      <Link href="/employe/auth/create/internship">Create Internship</Link>
    </div>
  );
};

export default page;