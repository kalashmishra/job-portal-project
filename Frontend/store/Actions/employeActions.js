import axios from "@/utils/axios";
import {
  addemploye,
  addjobs,
  addinternships,
  removeemploye,
  iserror,
} from "../Reducers/employeReducer";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    dispatch(addemploye(data.employe));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signup", employe);
    asynccurrentemploye(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signin", employe);
    asynccurrentemploye(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/employe/signout");
    dispatch(removeemploye(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdateemploye = (employe) => async (dispatch, getState) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/update/" + _id, employe);
    dispatch(asynccurrentemploye(data));
    toast.success(' Update profile successfully!', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavataremploye = (avatar) => async (dispatch, getState) => {
  console.log(avatar)
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/avatar/" + _id, avatar);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetpasswordemploye = (password) => async (
  dispatch,
  getState
) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post(
      "/employe/reset-password/" + _id,
      password
    );
    dispatch(asynccurrentemploye(data));
    toast.success(' Password reset successfully!', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncforgetpasswordemploye = (mail) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.post("/employe/send-mail/", mail);
    dispatch(asynccurrentemploye(data));
    toast.success(' Mail send successfully! Check your mail inbox', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncotppasswordemploye = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/forget-link/", pwd);
    dispatch(asynccurrentemploye(data));
    toast.success(' Password Changed !', {
      position: "top-center",
      });
  
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/job/create/", job);
    dispatch(asynccurrentemploye(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynccreateinternshipemploye = (internship) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.post(
      "/employe/internship/create/",
      internship
    );
    dispatch(asynccurrentemploye(data));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};