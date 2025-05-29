import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/transition";
import type { TaskModel } from "../utils/models";
import { LuDelete } from "react-icons/lu";

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel["id"]) => void;
};

const Task = ({
  index,
  task,
  onUpdate: handleUpdate,
  onDelete: handleDelete,
}: TaskProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };
  const handleDeleteClick = () => {
    handleDelete(task.id);
  };
  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        as="div"
        position="relative"
        rounded="lg"
        pl={3}
        pr={7}
        pt={3}
        pb={1}
        boxShadow="xl"
        cursor="grab"
        fontWeight="bold"
        userSelect="none"
        bgColor={task.color}
        _hover={{
          "& .delete-btn": { opacity: 1 },
        }}
      >
        <IconButton
          position="absolute"
          top={0}
          right={0}
          bg="transparent"
          zIndex={100}
          aria-label="delete-task"
          colorScheme="solid"
          children={<LuDelete />}
          opacity={0}
          className="delete-btn"
          onClick={handleDeleteClick}
          color="gray.600"
        />
        <Textarea
          value={task.title}
          fontSize="lg"
          cursor="inherit"
          p={0}
          fontWeight="semibold"
          resize="none"
          border="none"
          color="gray.800"
          onChange={handleTitleChange}
          _focus={{ outline: "none" }}
        />
      </Box>
    </ScaleFade>
  );
};

export default Task;
