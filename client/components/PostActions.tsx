import {
  Button,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";

const PostActions = () => {
  return (
    <Flex h={"10"} pl={4} gap={4} align={"center"}>
      <Button bg={""} py={4} gap={2} size={"xs"}>
        <AiOutlineHeart
          size={"22"}
          fill={useColorModeValue("#718096", "#CBD5E0")}
        />
        <Text fontSize={"md"}>0</Text>
      </Button>
      <Button bg={""} py={4} gap={2} size={"xs"}>
        <AiOutlineComment
          size={"22"}
          fill={useColorModeValue("#718096", "#CBD5E0")}
        />
        <Text fontSize={"md"}>0</Text>
      </Button>
    </Flex>
  );
};

export default PostActions;
