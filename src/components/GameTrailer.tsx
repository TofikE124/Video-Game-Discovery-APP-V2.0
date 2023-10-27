import { Box, Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: trailers, error, isLoading } = useTrailer(slug!);
  const first = trailers?.results[0];
  if (!first) return null;

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <Box marginTop={10} display="flex" justifyContent="center">
      <video
        width="100%"
        controls
        src={first.data[480]}
        poster={first?.preview}
      />
    </Box>
  );
};

export default GameTrailer;
