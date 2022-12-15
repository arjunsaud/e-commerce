import axios from "axios";
import {store} from "./Store"
import { setAuthDetails } from "../Slices/authSlice";

const {dispatch}=store

export const setInstance=()=>{
  const {auth}=store.getState()
  const bearer_Token=auth.bearer_token
  const refresh_Token=auth.refresh_token
  const userEmail=auth.email
  const userRole=auth.role

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { "Content-Type": "application/json" },
  });

  instance.interceptors.request.use((config) => {
    if (bearer_Token) {
      config.headers = {
        Authorization: `Bearer ${bearer_Token}`,
        "Content-Type": "application/json",
      };
    } else {
      config.headers = {
        "Content-Type": "application/json",
      };
    }
    return config;
  });
  
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      console.log(error);
      const refreshTheToken = async (refreshToken) => {
          return instance.post('/auth/refresh_token', {refreshToken})
      }
      const response = error.response;
      console.log(response);
      if (response.status === 401) {
        // if (
        //   error.config.url !== "/auth/refresh_token" &&
        //   error.config.url !== "/auth/login" &&
        //   error.config.url !== "/auth/register"
        // ) {
          const response = await refreshTheToken(refresh_Token);
          const {refreshToken, token} = response.data
          const user={
            email:userEmail,
            bearer_token:token,
            refresh_token:refreshToken,
            role:userRole
          }
          dispatch(setAuthDetails(user))
          error.config.headers['Authorization'] = 'Bearer ' + token;
          return instance.request(error.config);
       // }
      }
      return Promise.reject(error);
      //Navigate to login
    }
  );

  return instance;
}

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: { "Content-Type": "application/json" },
// });

// instance.interceptors.request.use((config) => {
//   const access_token = localStorage.getItem("access_token");
//   if (access_token) {
//     config.headers = {
//       Authorization: `Bearer ${access_token}`,
//       "Content-Type": "application/json",
//     };
//   } else {
//     config.headers = {
//       "Content-Type": "application/json",
//     };
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const refreshTheToken = async (refreshToken) => {
//         return instance.post('/auth/refresh_token', {refreshToken})
//     }
//     const response = error.response;
//     if (response.status === 401) {
//       if (
//         error.config.url !== "/auth/refresh_token" &&
//         error.config.url !== "/auth/login" &&
//         error.config.url !== "/auth/register"
//       ) {
//         const refresh_token = localStorage.getItem('refresh_token');
//         const response = await refreshTheToken(refresh_token);
//         const {refreshToken, token} = response.data
//         const user={
//           email:response.data.user.email,
//           bearer_token:token,
//           refresh_token:refreshToken,
//           role:response.data.user.role
//         }
//         dispatch(setAuthDetails(user))
//         error.config.headers['Authorization'] = 'Bearer ' + token;
//         return instance.request(error.config);
//       }
//     }
//     return Promise.reject(error);
//     //Navigate to login
//   }
// );


// export default instance;
