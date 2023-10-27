import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Game } from "./entities/Game";

const useGameDetails = (slug: string) => {
  const apiClient = new APIClient<Game>(`/games/${slug}`);
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getSingle(),
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
