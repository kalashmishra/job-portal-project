
import Link from "next/link";
import React from "react";



const page = () => {
  return (
    <div className="container mainpage ">
      <div className='navbar'>
<nav >
  <p><span>Job</span>Finder|Creater</p>
  <ul>
    <li className="big-screens">
      <Link href="/student/signup" className="btn register" >Student</Link>
      <Link href="/employe/signup"  className="btn login">Employe</Link>
    </li>
    <li className="small-screens">
      <i className="fa-solid fa-bars"></i>
    </li>
  </ul>
</nav>
</div>
<div className="display">
  <h1>Welcome to job portal</h1>
  <h2>Find your dream job here</h2>
</div>
    </div>
  );
};

export default page;