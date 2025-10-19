import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axiosInstance";

function useFetchMenfess() {
  return useQuery({
    queryKey: ["fetch.menfess"],

    queryFn: async () => {
      const response = await axiosInstance.get("/menfess", {
        params: { api_key: import.meta.env.VITE_API_KEY },
      });
      return response.data;
    },
    onError: (error) => {
      console.error("Error fetching menfess:", error);
    },
  });
}

export default useFetchMenfess;
