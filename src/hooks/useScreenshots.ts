import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Screenshot from "./entities/Screenshot";

const useScreenshots = (slug: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${slug}/screenshots`);
  return useQuery({
    queryKey: ["games", slug, "screenshots"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
