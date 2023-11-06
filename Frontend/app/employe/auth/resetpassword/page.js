"use client";
import {

  asyncresetpasswordemploye,
  
} from "@/store/Actions/employeActions";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.studentReducer);
 const [newpassword, setnewPassword] = useState("")
  
  

  
  const ResetPasswordHandler = () => {
    const password= {
      password: newpassword,
    };
    dispatch(asyncresetpasswordemploye(password));
  };

  return (
    <div className="container mt-3 flex p-5">
       

     
       <div className="signinform ">
        <div className="item-container">
            <h2 className="log-in">Reset Password</h2>
        </div>
     
   <form className="reset"> 
    <div className="form-input">
                <label className="label">New Password</label>
                <input type="password" value={newpassword} onChange={(e)=>setnewPassword(e.target.value)} />
            </div> 
          
      <button className="btn btn-danger" onClick={ResetPasswordHandler}>
        Reset Password
      </button>
  
      </form>  
 </div>
</div>  
  

    
     
  );
};

export default page;