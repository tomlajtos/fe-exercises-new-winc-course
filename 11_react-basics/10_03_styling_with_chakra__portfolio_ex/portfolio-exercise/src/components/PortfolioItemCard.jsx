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
  const skills = item.skills;
  console.log(skills, item);
  return (
    <Card
      align={"center"}
      direction={"column"}
      minW={300}
      maxW={[340, 350, 400]}
      h={500}
      pt={4}
      px={2}
      border={"1px"}
      borderColor={"transparent"}
      boxShadow={"md"}
      _hover={{
        cursor: "pointer",
        boxShadow: "lg",
        border: "1px",
        borderColor: "blue.100",
      }}
      onClick={() => handleSelection(item)}
    >
      <CardHeader maxH={250} overflow={"hidden"} p={"10px 20px 20px 20px"}>
        <Image src={item.imageUrl} />
      </CardHeader>
      <CardBody>
        <Heading fontSize={"md"}>{item.title}</Heading>
        <Text>{item.summary}</Text>
      </CardBody>
      <CardFooter w={"90%"} display="flex" flexDir="column" gap={2} pt={0}>
        {skills.map((skill, index) => {
          return (
            <Tag
              key={index}
              variant="subtle"
              colorScheme="telegram"
              size="md"
              borderRadius={"full"}
              w={"100%"}
              py={2}
              px={4}
              justifyContent="center"
              letterSpacing={"wide"}
            >
              <Text fontWeight={600}>
                {"< "}
                {skill}
                {" >"}
              </Text>
            </Tag>
          );
        })}
      </CardFooter>
    </Card>
  );
};
