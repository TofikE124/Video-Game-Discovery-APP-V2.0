import useGenres from "./useGenres";

const useFindGenre = (genreId?: number) => {
  const genres = useGenres();
  return genres.data.results.find((g) => g.id === genreId);
};

export default useFindGenre;
