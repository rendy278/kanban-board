import { Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import type { TextareaProps } from "@chakra-ui/react";
import React from "react";

type AutoResizeTextareaProps = TextareaProps;

const AutoResizeTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>((props, ref) => {
  return <Textarea as={ResizeTextarea} ref={ref} minH="unset" {...props} />;
});

export default AutoResizeTextarea;
