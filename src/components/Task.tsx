import { Box, IconButton } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/transition";
import type { TaskModel } from "../utils/models";
import { LuDelete } from "react-icons/lu";
import AutoResizeTextarea from "./AutoResizeTextArea";
import { useRef } from "react";
import { useAutoSizeTextArea } from "../hooks/useAutoResizeTextArea";
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDrop";

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
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({
    task,
    index,
  });
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };
  const handleDeleteClick = () => {
    handleDelete(task.id);
  };
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoSizeTextArea(textAreaRef, task.title);
  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        ref={ref}
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
        opacity={isDragging ? 0.5 : 1}
        transition="opacity 0.2s ease-in-out"
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
        <AutoResizeTextarea
          value={task.title}
          ref={textAreaRef}
          fontSize="lg"
          cursor="inherit"
          p={2}
          fontWeight="semibold"
          border="none"
          color="gray.800"
          onChange={handleTitleChange}
          _focus={{ outline: "none", boxShadow: "none" }}
          _hover={{ border: "none" }}
        />
      </Box>
    </ScaleFade>
  );
};

export default Task;
