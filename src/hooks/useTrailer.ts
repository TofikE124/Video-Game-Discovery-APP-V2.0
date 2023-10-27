import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Trailer } from "./entities/Trailer";

const useTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["games", slug, "movies"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });
};

export default useTrailer;
