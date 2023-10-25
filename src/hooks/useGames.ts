import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import APIClient, { FetchDataResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("/games");
  return useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: gameQuery.pageSize,
        },
      }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
