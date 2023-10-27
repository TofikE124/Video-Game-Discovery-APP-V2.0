import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, error, isLoading } = useScreenshots(slug);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      gap={2}
      marginTop={8}
    >
      {data?.results.map((screenshot) => (
        <GridItem key={screenshot.id}>
          <Image src={screenshot.image} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
