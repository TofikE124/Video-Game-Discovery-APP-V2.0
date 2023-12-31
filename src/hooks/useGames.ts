import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchDataResponse } from "../services/api-client";
import useGameQueryStore from "../store/gameQueryStore";
import Game from "./entities/Game";

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
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
    staleTime: ms("24h"),
  });
};

export default useGames;
