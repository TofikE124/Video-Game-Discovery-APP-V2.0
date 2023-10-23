import { useState } from "react";
import { GridItem, Grid, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={2}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelecteGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}
