// Create axios api instance
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 10000,
  headers: {},
});

export { API };
