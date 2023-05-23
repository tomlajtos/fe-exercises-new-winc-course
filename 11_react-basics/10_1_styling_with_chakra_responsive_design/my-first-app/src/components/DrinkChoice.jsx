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
        h={"100vh"}
        gap={8}
        py={[8, null, null, 16]}
      >
        <Heading fontSize="3xl">Your choice: {drink.name}</Heading>
        <Spacer />
        <Image
          w={[175, 200, 250]}
          h={[175, 200, 250]}
          src={drink.imgUrl}
          alt={drink.alt}
        />
        <Text fontSize="xl" align="center">
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
              gap={[8, 4]}
              p={4}
              w={"full"}
            >
              <Image
                w={[150, 50]}
                h={[150, 50]}
                src={drink.imgUrl}
                alt={drink.alt}
              />
              <Text fontSize={["2xl", "lg"]} fontWeight={[600, 500]}>
                {drink.name}
              </Text>
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
