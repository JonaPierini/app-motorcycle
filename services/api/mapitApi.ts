import axios from "axios";

export const mapitApi = axios.create({
  baseURL: "https://fake.prod.mapit.me",
});
