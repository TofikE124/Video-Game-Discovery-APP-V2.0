import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchDataResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

export default () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { results: genres, count: genres.length },
  });
