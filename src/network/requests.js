import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://47.93.123.132",
    timeout: 5000
  });

  return instance(config);
}
