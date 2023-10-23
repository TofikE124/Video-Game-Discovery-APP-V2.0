import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, loading } = useGames(selectedGenre);
  const skeltons = new Array(20).fill(0).map((val, index) => index);

  return (
    <>
      {error ? <p>{error}</p> : ""}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
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
    </>
  );
};

export default GameGrid;
