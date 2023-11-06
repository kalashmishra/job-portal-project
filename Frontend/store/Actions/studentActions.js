import axios from "@/utils/axios";
import {
  addstudent,
  addjobs,
  addinternships,
  removestudent,
  iserror,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";


export const asynccurrentstudent = () => async (dispatch, getState) => {

  try {
    const { data } = await axios.post("/student");
  //  console.log(data)
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
  console.log(student)
  try {
    const { data } = await axios.post("/student/signup", student);
    console.log(data)
    asynccurrentstudent(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin", student);
    console.log(data)
    asynccurrentstudent(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
    dispatch(removestudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdatestudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(asynccurrentstudent(data));
    toast.success(' Update profile successfully!', {
      position: "top-center",
      });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/" + _id, avatar);
    dispatch(asynccurrentstudent(data));
    toast.success(' Update profile successfully!', {
      position: "top-center",
      });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};


export const asyncresetpasswordstudent = (password) => async (
  dispatch,
  getState
) => {

  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post(
      "/student/reset-password/" + _id,
      password
    );
    dispatch(asynccurrentstudent(data));
    toast.success(' Password reset successfully!', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncforgetpasswordstudent = (mail) => async ( dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/send-mail/", mail);
  
    dispatch(asynccurrentstudent(data));
    toast.success(' mail-send successfully! Check your mail inbox', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
export const asyncotppasswordstudent = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/forget-link/", pwd);
    dispatch(asynccurrentemploye(data));
    toast.success(' Password Changed!', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};



export const asyncalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/alljobs/");
    dispatch(addjobs(data.jobs));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncallinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/allinternships");
    dispatch(addinternships(data.internships));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/job/" + id);
    dispatch(asynccurrentstudent(data));
    dispatch(asyncalljobs(data));
    toast.success(' Applied successfully!', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyinternshipstudent = (id) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.post("/student/apply/internship/" + id);
    dispatch(asynccurrentstudent(data));
    dispatch(asyncallinternships(data));
    toast.success(' Aplied successfully!', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncaddedustudent = (edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-edu", edu);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteedustudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-edu/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditedustudent = (id, edu) => async (dispatch, getState) => {
  
  try {
    const { data } = await axios.post("/resume/edit-edu/" + id, edu);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
export const asyncaddjobstudent = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-job", job);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeletejobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-job/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditjobstudent = (id, job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-job/" + id, job);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncaddinternshipstudent = (internship) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-intern", internship);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteinternshipstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-intern/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditinternshipstudent = (id, internship) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-intern/" + id, internship);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncaddrespostudent = (respo) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-resp", respo);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleterespostudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-resp/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditrespostudent = (id, respo) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-resp/" + id, respo);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};


export const asyncaddcoursesstudent = (courses) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-cours", courses);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeletecoursesstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-cours/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditcoursesstudent = (id, courses) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-cours/" + id, courses);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};



export const asyncaddprojectstudent = (project) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-proj", project);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteprojectstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-proj/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditprojectstudent = (id, project) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-proj/" + id, project);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};





export const asyncaddskillstudent = (skill) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-skil", skill);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteskillstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-skil/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditskillstudent = (id, skill) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-skil/" + id, skill);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};



export const asyncaddaccompstudent = (accomp) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-acomp", accomp);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteaccompstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-acomp/" + id);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditaccompstudent = (id, accomp) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-acomp/" + id, accomp);
    dispatch(asynccurrentstudent(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};


