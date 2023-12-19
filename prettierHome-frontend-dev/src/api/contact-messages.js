import axios from "axios";

// TODO J02 SEND MESSAGE
export const sendMessage = async (payload) => {
  const resp = await axios.post(`${baseURL}/contact-messages`, payload, {
    headers: getAuthHeader(),
  });
  const data = await resp.data;
  return data;
};
