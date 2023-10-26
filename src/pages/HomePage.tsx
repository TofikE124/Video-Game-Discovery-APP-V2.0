import { Flex, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => (
  <>
    <Show above="lg">
      <GridItem area="aside" paddingX={2}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <GameHeading></GameHeading>
      <Flex gap={5} marginBottom={5}>
        <PlatformSelector />
        <SortSelector />
      </Flex>
      <GameGrid />
    </GridItem>
  </>
);

export default HomePage;
