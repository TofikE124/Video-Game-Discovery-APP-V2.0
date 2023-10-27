import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ScallableText from "../components/ExpandableText";
import useGameDetails from "../hooks/useGameDetails";
import GameAttributes from "../components/GameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <Heading>{game.name}</Heading>
      <ScallableText maxChars={300}>{game.description_raw}</ScallableText>
      <GameAttributes game={game} />
    </div>
  );
};

export default GameDetailsPage;
