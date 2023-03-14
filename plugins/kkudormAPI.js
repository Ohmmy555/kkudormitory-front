import axios from "axios";
export default async (context, inject) => {
  const baseURL = process.env.BASE_URL || "http://localhost:8880";
  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const getAll = async () => {
    return await api
      .get(`/test`)
      // .then((res) => res.data.data)
      // .catch((err) => checkError(err));
  };

  inject("kkudormAPI", { getAll });
};
