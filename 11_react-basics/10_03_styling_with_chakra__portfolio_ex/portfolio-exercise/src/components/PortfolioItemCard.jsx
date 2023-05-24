import {
  Flex,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Tag,
} from "@chakra-ui/react";

export const PortfolioItemCard = ({ item, handleSelection }) => {
  return (
    <Card
      w={200}
      h={300}
      _hover={{ cursor: "pointer" }}
      onClick={() => handleSelection(item)}
    >
      <CardBody>
        <Image src={item.imageUrl} />
        <Heading fontSize={"md"}>{item.title}</Heading>
      </CardBody>
    </Card>
  );
};
