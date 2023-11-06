"use client";
import {
  asyncavatarstudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";


import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);
  
  const AvatarHandler = (e) => {
    e.preventDefault();
    console.log();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncavatarstudent(formdata));
  };

 
  return (
    <div className="container mt-5 ">
    
       <div className="img-div ">
       <img className="p-img " src={student && student.avatar.url} alt="" />
       <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="avatar" />
        <button>Submit</button>
      </form>
     
       </div>
  
<div className="Show-profile  mt-3 " >

       <h1 className="category-name">  {student && student.firstname} {student && student.lastname}</h1>
       
       <h1 className="category-name">  {student && student.city}</h1>
       <h1 className="category-name">{student && student.contact}</h1>
       <h1 className="category-name"> {student && student.email}</h1>
       <h1 className="category-name"> </h1>
       <Link
                    className=" btn btn-sm btn-primary edit-pro" 
                    href="/student/auth/profile/editprofile"
                  >
                    Edit Profile
                  </Link>
    
     
    
</div>


        </div>
  
  
     
  );
};

export default page;