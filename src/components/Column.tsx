import { useEffect, useRef } from "react";
import { Badge, Box, Heading, IconButton, Stack } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import Task from "./Task";
import useColumnTasks from "../hooks/useColumnTask";
import { ColumnType } from "../utils/enums";
import useColumnDrop from "../hooks/useColumnDrop";

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "blue",
  "In Progress": "yellow",
  Blocked: "red",
  Completed: "green",
};

const Column = ({ column }: { column: ColumnType }) => {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    updateTask,
    dropTaskFrom,
    swapTasks,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  // Gunakan useRef untuk Chakra UI ref
  const stackRef = useRef<HTMLDivElement | null>(null);

  // Pasang dropRef ke ref-nya Chakra
  useEffect(() => {
    if (stackRef.current) {
      dropRef(stackRef.current);
    }
  }, [dropRef]);

  const columnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      index={index}
      task={task}
      onUpdate={updateTask}
      onDelete={deleteTask}
      onDropHover={swapTasks}
    />
  ));

  return (
    <Box>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge px={2} py={1} colorScheme={ColumnColorScheme[column]}>
          {column}
        </Badge>
      </Heading>

      <IconButton
        size="xs"
        w="full"
        color="dark"
        bgColor="dark"
        py={2}
        variant="solid"
        colorScheme="light"
        aria-label="add-task"
        children={<LuPlus />} // ✅ Ganti children -> icon
        onClick={addEmptyTask}
      />

      <Stack
        ref={stackRef} // ✅ ref dari useRef
        direction={{ base: "row", md: "column" }}
        mt={4}
        gap={4}
        rounded="lg"
        opacity={isOver ? 0.85 : 1}
        overflow="auto"
      >
        {columnTasks.length > 0 ? (
          columnTasks
        ) : (
          <Box
            w="full"
            h="20"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.500"
          >
            No tasks available
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Column;
