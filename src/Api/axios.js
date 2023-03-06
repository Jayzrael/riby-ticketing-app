import axios from "axios";

export const BaseUrl = "https://dev-apis.riby.ng/cus/api/v1/";

// import axios from "axios";

export const PlainReq = axios.create({
  baseURL: "https://dev-apis.riby.ng/cus/api/v1/",
});

const AuthReq = axios.create({
  baseURL: "https://dev-apis.riby.ng/cus/api/v1/",
});

AuthReq.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = JSON.parse(localStorage.getItem("token"));
  config.headers["Authorization"] = "Bearer " + token;
  console.log("axios token", token);
  return config;
});

export default AuthReq;
