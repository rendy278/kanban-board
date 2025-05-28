import { Container, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Column from "./components/Column.tsx";
import { ColumnType } from "./utils/enums.ts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="container.lg" px={4} py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} />
          <Column column={ColumnType.COMPLETED} />
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default App;
