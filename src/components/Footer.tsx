import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      textAlign="center"
      fontSize="xl"
      borderTop="1px solid"
      h="50px"
    >
      <Text color="dark">Rendev</Text>
    </Box>
  );
};

export default Footer;
