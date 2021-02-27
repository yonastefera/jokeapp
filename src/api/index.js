import axios from "axios";

// API configs
const API_URL = "https://icanhazdadjoke.com";
const apiClient = axios.create({
  baseURL: API_URL,
  headers: { accept: "application/json" },
});

apiClient.interceptors.request.use(
  (config) => ({ ...config }),
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error.response.data)
);

const { get } = apiClient;

// API services
export const JokeAPI = {
  index: (page) => get(`/search?page=${page}`), // get all items
};
