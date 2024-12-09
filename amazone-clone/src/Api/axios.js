import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-ed596/us-central1/api",

  // deployed version of amazon server on render.com
  baseUrl: "https://amazon-api-deploy-yv42.onrender.com"
});
export { axiosInstance };