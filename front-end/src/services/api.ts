import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;

export const apiDogs = axios.create({
  baseURL: "https://random.dog",
});
