import React from "react";
export const getFavoriteAdvertIdList = async () => {
  const resp = await axios.get(`${baseURL}/users/fav`, {
    headers: getAuthHeader(),
  });
  const data = await resp.data;
  return data;
};
