import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers = {
      Authorization: `Bearer ${access_token}`,
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
    const refreshTheToken = async (refreshToken) => {
        return instance.post('/auth/refresh_token', {refreshToken})
    }
    const response = error.response;
    if (response.status === 401) {
      if (
        error.config.url !== "/auth/refresh_token" &&
        error.config.url !== "/auth/login" &&
        error.config.url !== "/auth/register"
      ) {
        const refresh_token = localStorage.getItem('refresh_token');
        const response = await refreshTheToken(refresh_token);
        const {refreshToken, token} = response.data
        localStorage.setItem('access_token', token);
        localStorage.setItem('refresh_token', refreshToken);
        error.config.headers['Authorization'] = 'Bearer ' + token;
        return instance.request(error.config);
      }
    }
    return Promise.reject(error);
    //Navigate to login
  }
);



export default instance;
