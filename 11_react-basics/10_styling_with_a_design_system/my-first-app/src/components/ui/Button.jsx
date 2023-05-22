import { Button as UiButton } from "@chakra-ui/react";

export const Button = ({ text, clickFn, ...props }) => {
  return (
    <UiButton
      variant="outline"
      colorScheme="purple"
      type="button"
      onClick={clickFn}
      {...props}
    >
      {text}
    </UiButton>
  );
};
