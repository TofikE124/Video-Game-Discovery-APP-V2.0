import { useState } from "react";
import { GridItem, Grid, Show, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  pageSize: number;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    pageSize: 10,
  } as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" paddingX={2}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={2}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelecteGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex gap={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform: Platform) => {
                setGameQuery({ ...gameQuery, platformId: platform.id });
              }}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}
