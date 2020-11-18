import { axiosInstance } from "../instance";

export const getCharacters = ({ limit, offset }) =>
  axiosInstance.get("/characters", { params: { limit, offset } });
