import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeltons = new Array(20).fill(0).map((val, index) => index);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {loading
        ? skeltons.map((skelton) => (
            <GameCardContainer key={skelton}>
              <GameCardSkelton />
            </GameCardContainer>
          ))
        : ""}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
