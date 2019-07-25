import axios from "axios";
import setAuthToken from '../Utils/setAuthToken'
import {BASE_URL, SET_CURRENT_USER } from "./Types";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function login(data) {
    return dispatch => {
      return axios.post(BASE_URL, data).then(res => {
        const token = res.data.user.auth_token;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        dispatch(setCurrentUser(token));
      });
    };
}
  
export function logout() {
    return dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        dispatch(setCurrentUser({}));
    };
}