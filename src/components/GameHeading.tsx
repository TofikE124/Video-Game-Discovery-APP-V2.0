import { Heading } from "@chakra-ui/react";
import useFindPlatforms from "../hooks/uselatform";
import useFindGenre from "../hooks/useGenre";
import useGameQueryStore from "../store/gameQueryStore";

const GameHeading = () => {
  const [genreId, platformId] = useGameQueryStore((s) => [
    s.gameQuery.genreId,
    s.gameQuery.platformId,
  ]);
  const genre = useFindGenre(genreId);
  const platform = useFindPlatforms(platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
