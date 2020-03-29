import axios from "axios";

const baseUrl = "http://localhost:4000";

export const sendSignup = signupData => async dispatch => {
  const response = await axios.post(`${baseUrl}/signup`, signupData);
  // console.log("the signup data ", response.data);
  dispatch(usersignedup(response.data));
};
const usersignedup = data => {
  return {
    type: "USER_SIGNEDUP",
    payload: data
  };
};

export const sendLogin = loginData => async dispatch => {
  const response = await axios.post(`${baseUrl}/login`, loginData);
  // console.log("the login response*** ", response.data);
  dispatch(userloggedin(response.data));
};
const userloggedin = data => {
  return {
    type: "USER_LOGGED_IN",
    payload: data
  };
};
