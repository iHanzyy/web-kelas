import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axiosInstance";

export default function useCreateMenfess({ onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      try {
        const res = await axiosInstance.post("/menfess", body, {
          params: { api_key: import.meta.env.VITE_API_KEY },
        });
        return res;
      } catch (err) {
        const error = err;
        throw {
          status: error.response?.status,
          message:
            error.response?.error || "Something went wrong. Please try again.",
        };
      }
    },
    onSuccess,
    onError,
  });
}
