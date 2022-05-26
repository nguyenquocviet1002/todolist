import axios from "axios";

const instance = axios.create({
  baseURL: "https://61a1fe86014e1900176de816.mockapi.io/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
