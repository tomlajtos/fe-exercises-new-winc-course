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
      <Flex direction="column" align="center" gap={8}>
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
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please confirm your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align={"center"} justify={"center"} gap={4} p={4}>
              <Image w={50} h={50} src={drink.imgUrl} alt={drink.alt} />
              <Text fontSize={"lg"}>{drink.name}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="solid" mr={2} text="Confirm" />
            <Button text={"Cancel"} onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
