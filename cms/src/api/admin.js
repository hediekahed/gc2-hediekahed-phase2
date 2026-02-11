import axios from "axios";

const BASE_URL = "http://localhost:3000";

const getToken = () => localStorage.getItem("access_token");

export const fetchAdminLodgings = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/admin/lodgings`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return data;
};
