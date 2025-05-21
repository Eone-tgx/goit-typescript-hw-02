import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "MeYcFbmpyNFNJ_RA0Et-5hHlOqciK_hw3ePBhHPwjFo";

export const fetchData = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });

  return response.data;
};
