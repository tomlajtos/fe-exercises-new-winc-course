import { Button as UiButton } from "@chakra-ui/react";

export const Button = ({ text, clickFn }) => {
  return (
    <UiButton
      variant="outline"
      colorScheme="purple"
      type="button"
      onClick={clickFn}
    >
      {text}
    </UiButton>
  );
};
