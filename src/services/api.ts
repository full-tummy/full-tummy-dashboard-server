import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.HASURA_ENDPOINT_URL,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_SECRET,
  },
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.data.query) {
    console.log(`GRAPHQL QUERY:`);
    console.log(config.data.query);
    console.log("----------------------------\n");
  }

  return config;
});

export default api;
