import axios from "axios";
import { Image } from "./components/App/App.types";

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "MeYcFbmpyNFNJ_RA0Et-5hHlOqciK_hw3ePBhHPwjFo";

interface ApiResponse {
  total_pages: number;
  results: Image[];
}

export const fetchData = async (
  query: string,
  page = 1,
  perPage = 12
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });

  return response.data;
};
