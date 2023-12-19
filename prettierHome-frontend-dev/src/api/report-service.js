import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "./auth-header";

const baseURL = config.api.baseUrl;

// G01 -- admin manager
export const getStatistics = async () => {
    const resp = await axios.get(`${baseURL}/report`, {
        headers:  getAuthHeader()
        
    });
    const data =  resp.data;
    return data;
};