import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store/gameQueryStore";

const GenreList = () => {
  const [selectedGenreId, setSelectedGenreId] = useGameQueryStore((s) => [
    s.gameQuery.genreId,
    s.setGenreId,
  ]);

  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.results?.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                fontWeight={
                  selectedGenreId === selectedGenreId ? "bold" : "normal"
                }
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
