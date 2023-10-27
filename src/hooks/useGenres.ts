import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import data from "../data/genres";
import APIClient, { FetchDataResponse } from "../services/api-client";
import Genre from "./entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

export default () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: { count: data.length, results: data, next: null },
  });
