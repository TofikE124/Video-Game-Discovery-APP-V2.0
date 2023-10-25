import usePlatforms from "./usePlatforms";
const useFindPlatforms = (selectedPlatformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find((p) => p.id === selectedPlatformId);
};

export default useFindPlatforms;
