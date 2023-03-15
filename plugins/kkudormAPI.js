import axios from "axios";
export default async (context, inject) => {
  const baseURL = process.env.BASE_URL || "http://localhost:8880";
  const api = axios.create({
    baseURL,
    headers: {
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Expose-Headers": "*",
    },
  });

  const getAll = async () => {
    return await api
      .get(`/api/dorm/main`)
      .then((res) => res.data)
      .catch((err) => checkError(err));
  };

  const getDormByID = async (id) => {
    return await api
      .get(`/api/crud/detail/${id}`)
      .then((res) => res.data[0])
      .catch((err) => checkError(err));
  };

  inject("kkudormAPI", { getAll, getDormByID });
};
