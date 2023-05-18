import { Button } from "@chakra-ui/react";

export const UiButton = ({ text, clickFn }) => {
  return (
    <Button
      variant="outline"
      colorScheme="purple"
      type="button"
      onClick={clickFn}
    >
      {text}
    </Button>
  );
};
