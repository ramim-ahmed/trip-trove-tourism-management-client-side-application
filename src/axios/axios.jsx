import axios from "axios";

const instance = axios.create({
  baseURL: "https://trip-trove-server-side.vercel.app/api/v1",
});

export default instance;
