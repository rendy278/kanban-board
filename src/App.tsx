import { Container, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Column from "./components/Column.tsx";
import { ColumnType } from "./utils/enums.ts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="container.lg" px={4} py={10}>
        <DndProvider backend={HTML5Backend}>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </DndProvider>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
