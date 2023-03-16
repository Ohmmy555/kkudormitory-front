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
  
  const getZoneByID = async (id) => {
    return await api
      .get(`/api/zone/${id}`)
      .then((res) => res.data)
      .catch((err) => checkError(err));
  };
  const getNew = async () => {
    return await api
      .get(`api/dorm/new`)
      .then((res) => res.data[0].data)
      .catch((err) => checkError(err));
  };

  const getAdminMainp1 = async () => {
    return await api
      .get(`/api/crud/admin/dorm`)
      .then((res) => res.data)
      .catch((err) => checkError(err));
  };

  const getAdminMainp2 = async () => {
    return await api
      .get(`/api/crud/admin/dorm?page=1`)
      .then((res) => res.data[0])
      .catch((err) => checkError(err));
  };

  const getAdminMainp3 = async () => {
    return await api
      .get(`/api/crud/admin/dorm?page=2`)
      .then((res) => res.data[0])
      .catch((err) => checkError(err));
  };

  const getSearch = async (text) => {
    return await api
      .get(`/api/search?dorm=${text}`)
      .then((res) => res.data)
      .catch((err) => checkError(err));
  };

  inject("kkudormAPI", { getAll, getDormByID, getAdminMainp1, getAdminMainp2, getAdminMainp3, getSearch, getZoneByID,getNew });

  
};
