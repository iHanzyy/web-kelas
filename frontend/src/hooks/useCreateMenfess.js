import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axiosInstance";

export default function useCreateMenfess({ onSuccess }) {
  return useMutation({
    mutationFn: async (body) => {
      const menfessResponse = await axiosInstance.post("/menfess", body, {
        params: { api_key: import.meta.env.VITE_API_KEY },
      });
      return menfessResponse;
    },
    onSuccess,
  });
}
