import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useFindPlatform from "../hooks/uselatform";
import useGameQueryStore from "../store/gameQueryStore";

const PlatformSelector = () => {
  const [selectedPlatformId, setSelectedPlatformId] = useGameQueryStore((s) => [
    s.gameQuery.platformId,
    s.setPlatformId,
  ]);

  const { data, error } = usePlatforms();
  const selectedPlatform = useFindPlatform(selectedPlatformId);

  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
