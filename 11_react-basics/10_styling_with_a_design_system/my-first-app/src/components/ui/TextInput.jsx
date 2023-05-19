import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant="outline"
      focusBorderColor="purple.500"
      type="text"
      placeholder="Type the name of the drink..."
      onChange={changeFn}
      {...props}
    />
  );
};
