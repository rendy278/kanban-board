import { Badge, Box, Heading, IconButton, Stack } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import type { TaskModel } from "../utils/models";
import Task from "./Task";

enum ColumnType {
  TO_DO = "Todo",
  IN_PROGRESS = "In Progress",
  BLOCKED = "Blocked",
  COMPLETED = "Completed",
}

enum ItemType {
  TASK = "Task",
}

// Gunakan hanya nama warna Chakra, bukan dengan `.100`
const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "blue",
  "In Progress": "yellow",
  Blocked: "red",
  Completed: "green",
};

// Contoh dummy task
const mockTasks: TaskModel[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description for Task 1",
    status: ColumnType.TO_DO,
    color: "red.200",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description for Task 2",
    status: ColumnType.IN_PROGRESS,
    color: "yellow.200",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description for Task 3",
    status: ColumnType.BLOCKED,
    color: "blue.200",
  },
  {
    id: "4",
    title: "Task 4",
    description: "Description for Task 4",
    status: ColumnType.COMPLETED,
    color: "green.200",
  },
];

const Column = ({ column }: { column: ColumnType }) => {
  const columnTasks = mockTasks.map((task, index) => (
    <Task key={task.id} index={index} task={task} />
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
        children={<LuPlus />}
      />

      <Stack
        direction={{ base: "column" }}
        mt={4}
        gap={4}
        rounded="lg"
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
