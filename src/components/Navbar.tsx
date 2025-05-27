import { HStack, Link, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  return (
    <HStack w="100%" p={4} justifyContent="space-between" bg="bg.muted">
      <Link href="/" style={{ textDecoration: "none" }}>
        <Text fontSize="xl" fontWeight="bold">
          KanbanBoard
        </Text>
      </Link>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
