import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../hooks/entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      gridTemplateColumns={`1fr 1fr`}
      rowGap={5}
      marginTop={5}
      as="dl"
    >
      {" "}
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Meta Score">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
