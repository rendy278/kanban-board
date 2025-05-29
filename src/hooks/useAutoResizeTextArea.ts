// useAutoSizeTextArea.ts
import { useEffect } from "react";

export const useAutoSizeTextArea = (
  textAreaRef: React.RefObject<HTMLTextAreaElement | null>,
  value: string
) => {
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [value]);
};
