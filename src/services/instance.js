import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  params: {
    apikey: process.env.REACT_APP_TOKEN,
    limit: 10,
  },
  responseType: "json",
});
