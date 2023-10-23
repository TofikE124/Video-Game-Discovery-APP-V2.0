import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" marginBottom={3}>
      <Image boxSize="40px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
