import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "./auth-header";

const baseURL = config.api.baseUrl;

export const saveCagetory = async (payload) => {
      const resp = await axios.post(`${baseURL}/categories`, payload, {
            headers: getAuthHeader(),
      });
      
      const data = resp.data;
      return data;
} 

export const getAdminCategory = async (page=0, size=10, sort="id", type="asc", query="") => {
    const resp = await axios.get(`${baseURL}/categories/admin?page=${page}&size=${size}&sort=${sort}&type=${type}&query=${query}`, {
          headers: getAuthHeader(),
    });
    const data = await resp.data;
    return data;
};

export const deleteCategory = async (id) => {
  const resp= await axios.delete(`${baseURL}/categories/${id}`, {
    headers: getAuthHeader()
  });

  const data = resp.data;
  return data;
};