import { Box, IconButton, Textarea } from "@chakra-ui/react";
import type { TaskModel } from "../utils/models";
import { LuDelete } from "react-icons/lu";

type TaskProps = {
  index: number;
  task: TaskModel;
};

const Task = ({ index, task }: TaskProps) => {
  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w="200"
      pl="3"
      pr="7"
      pt="3"
      cursor="grab"
      bgColor={task.color}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        z-index={100}
        aria-label="Delete Task"
        children={<LuDelete />}
        opacity={0}
        _groupHover={{ opacity: 1 }}
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
        _focus={{ outline: "none" }}
      />
    </Box>
  );
};

export default Task;
