import {
  Flex,
  Spacer,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const DrinkChoice = ({ drink, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyItems={"center"}
        height={"full"}
        gap={8}
      >
        <Spacer />
        <Heading fontSize="3xl">Your choice: {drink.name}</Heading>
        <Image w={250} h={250} src={drink.imgUrl} alt={drink.alt} />
        <Text fontSize="xl">
          If this is the drink you want, please go ahead with your order.
        </Text>
        <Spacer />
        <Flex alignSelf="end" gap={2}>
          <Button text={"Order drink"} clickFn={onOpen} variant={"solid"} />
          <Button
            text={"Change selection"}
            clickFn={() => clickFn()}
            variant={"outline"}
          />
        </Flex>
        <Spacer />
      </Flex>
      <Modal
        size={{ base: "full", sm: "sm", md: "md" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={[12, 2]} textAlign={["center", "left"]}>
            Please confirm your order
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justify="center">
            <Flex
              direction={["column", "row"]}
              alignItems={"center"}
              justify={"center"}
              gap={4}
              p={4}
              w={"full"}
            >
              <Image
                w={[150, 50]}
                h={[150, 50]}
                src={drink.imgUrl}
                alt={drink.alt}
              />
              <Text fontSize={["2xl", "lg"]}>{drink.name}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter mb={[4, 2]}>
            <Button variant="solid" mr={2} text="Confirm" />
            <Button text={"Cancel"} onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
