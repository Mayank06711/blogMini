import axios from "axios"
const BASE_URL = "http://localhost:9000/api/v1"


export const axiosPrivate =  axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Set config defaults when creating the instance
export default axios.create({
  baseURL: BASE_URL
});



