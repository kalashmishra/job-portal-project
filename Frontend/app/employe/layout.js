"use client";
import {
  asynccurrentemploye,
  asyncsignoutemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    dispatch(asynccurrentemploye());
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutemploye());
  };

  return (
    <>
        <nav className="container mt-1 ">

<Link  href={isAuthenticated ? "/employe/auth" : "/"}><p><span>Job</span>Creater</p></Link>{" "}


<br />
{isAuthenticated ? (
  <>
    <Link className="btn register" href="/employe/auth/profile">Profile</Link>
    <br />
    <Link className="btn register" href="/employe/auth/applied">My Applications</Link>
    <br />
    <Link className="btn register" onClick={SignoutHandler} href="">
      Signout
    </Link>
  </>
) : (
  <> <li className="big-screens">
    <Link className="btn register" href="/employe/signup">Signup</Link> <br />
    <Link className="btn register" href="/employe/signin"> Signin</Link>
</li>
  </>
  

)}
</nav> 

      {children}
    </>
  );
};

export default employeLayout;